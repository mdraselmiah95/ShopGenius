import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

import "./SingleProduct.scss";
import img from "../../assets/products/earbuds-prod-3.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  return (
    <>
      {!data?.data ? (
        <Loader />
      ) : (
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img src={img} alt="product" />
              </div>
              <div className="right">
                <span className="name">{data.data?.[0].attributes.title}</span>
                <span className="price">{data.data?.[0].attributes.price}</span>
                <span className="desc">{data.data?.[0].attributes.desc}</span>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span>-</span>
                    <span>{data.data?.[0].attributes.price}</span>
                    <span>+</span>
                  </div>
                  <button className="add-to-cart-button">
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
            <RelatedProducts />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
