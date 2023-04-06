import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import "./SingleProduct.scss";
import img from "../../assets/products/earbuds-prod-3.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={img} alt="product" />
          </div>
          <div className="right">
            <span className="name">product.title</span>
            <span className="price">product.price</span>
            <span className="desc">product.description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>10</span>
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
                <span>product.categories</span>
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
  );
};

export default SingleProduct;
