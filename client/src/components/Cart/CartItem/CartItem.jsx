import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { Context } from "../../../utils/context";
import Loader from "../../Loader/Loader";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  console.log(cartItems);

  return (
    <>
      {!cartItems ? (
        <Loader />
      ) : (
        <div className="cart-products">
          {cartItems?.map((item) => (
            <div className="search-result-item" key={item.id}>
              <div className="image-container">
                <img
                  src={
                    process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
                    item.attributes.img?.data[0].attributes.url
                  }
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <MdClose
                  className="close-btn"
                  onClick={() => handleRemoveFromCart(item)}
                />
                <div className="quantity-buttons">
                  <span onClick={() => handleCartProductQuantity("dec", item)}>
                    -
                  </span>
                  <span>{item.attributes.quantity}</span>
                  <span onClick={() => handleCartProductQuantity("inc", item)}>
                    +
                  </span>
                </div>
                <div className="text">
                  <span>{item.attributes.quantity}</span>
                  <span>x</span>
                  <span className="highlight">
                    <span>&#2547;</span>
                    {item.attributes.price * item.attributes.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartItem;
