import { MdClose } from "react-icons/md";
import { BsArrowRightCircle, BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
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

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart.</span>
          <button className="return-cta" onClick={() => {}}>
            RETURN TO SHOP
          </button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">
                Subtotal:<span>&#2547;</span>
              </span>
              <span className="text total">377</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
