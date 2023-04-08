import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          onChange={onChange}
          value={query}
        />
        <MdClose className="close-btn" onClick={handleSearchClose} />
      </div>
      <>
        {!data?.data ? (
          <div className="loader">
            <Watch
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <div className="search-result-content">
            <div className="start-msg">
              Start typing to see products you are looking for.
            </div>

            <div className="search-results">
              {data?.data.map((item) => (
                <div
                  className="search-result-item"
                  key={item.id}
                  onClick={() => {
                    navigate("/product/" + item.id);
                    setShowSearch(false);
                  }}
                >
                  <div className="image-container">
                    <img
                      src={
                        process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
                        item.attributes.img?.data[0].attributes.url
                      }
                      alt={item?.attributes.title}
                    />
                  </div>
                  <div className="prod-details">
                    <span className="name"> {item?.attributes.title}</span>
                    <span className="desc"> {item.attributes.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Search;
