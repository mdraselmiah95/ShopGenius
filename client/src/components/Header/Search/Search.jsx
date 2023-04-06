import { MdClose } from "react-icons/md";
import "./Search.scss";

import img from "../../../assets/products/earbuds-prod-2.webp";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>

        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={img} alt="image" />
            </div>
            <div className="prod-details">
              <span className="name">title</span>
              <span className="desc">description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
