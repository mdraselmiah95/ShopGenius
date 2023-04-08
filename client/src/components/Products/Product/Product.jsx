import "./Product.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const { title, price, img } = product.attributes;
  const { id } = product;
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
            img.data[0].attributes.url
          }
          alt={title}
        />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">
          <span>&#2547;</span> {price}
        </span>
      </div>
    </div>
  );
};

export default Product;
