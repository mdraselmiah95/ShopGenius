import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import img from "../../../assets/products/earbuds-prod-2.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img src={img} alt="image" />
        </div>
        <div className="prod-details">
          <span className="name">title</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>quantity</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>quantity</span>
            <span>x</span>
            <span className="highlight">
              <span>&#8377;</span>
              price * quantity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
