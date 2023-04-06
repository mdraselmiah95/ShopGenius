import { MdClose } from "react-icons/md";
import { BsArrowRightCircle, BsCartX } from "react-icons/bs";
import "./Cart.scss";

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
      </div>
    </div>
  );
};

export default Cart;
