import { MdClose } from "react-icons/md";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle, BsCartX } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(process.env.VITE_REACT_APP_PAYMENT_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
            <BsArrowRightCircle />
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button
              className="return-cta"
              onClick={() => {
                navigate("/");
              }}
            >
              RETURN TO SHOP
            </button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">
                  <span>&#2547;</span>
                  {cartSubTotal}
                </span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
