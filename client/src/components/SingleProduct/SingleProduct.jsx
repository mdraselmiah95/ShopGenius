import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  return (
    <>
      {!data?.data ? (
        <Loader />
      ) : (
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img
                  src={
                    process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
                    data?.data?.[0].attributes.img.data[0].attributes.url
                  }
                  alt={data.data?.[0].attributes.title}
                />
              </div>
              <div className="right">
                <span className="name">{data.data?.[0].attributes.title}</span>
                <span className="price">{data.data?.[0].attributes.price}</span>
                <span className="desc">{data.data?.[0].attributes.desc}</span>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span onClick={decrement}>-</span>
                    <span>{quantity}</span>
                    <span onClick={increment}>+</span>
                  </div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      handleAddToCart(data.data?.[0], quantity);
                      setQuantity(1);
                    }}
                  >
                    <FaCartPlus size={20} />
                    ADD TO CART
                  </button>
                </div>

                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span>
                      {
                        data.data?.[0].attributes.catagories.data?.[0]
                          .attributes.title
                      }
                    </span>
                  </span>

                  <span className="social-icons">
                    Share:
                    <div className="icon linkedin">
                      <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon facebook">
                      <FaFacebookF size={14} />
                    </div>
                    <div className="icon twitter">
                      <FaTwitter size={14} />
                    </div>
                    <div className="icon instagram">
                      <FaInstagram size={14} />
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <RelatedProducts
            // categoryId={data?.data?.[0].attributes.catagories.data?.[0].id}
            // productId={id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
