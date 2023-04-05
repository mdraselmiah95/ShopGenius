import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="left">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className="center" onClick={() => navigate("/")}>
        ShopGenius
      </div>
      <div className="right">
        <TbSearch />
        <AiOutlineHeart />
        <span className="cart-icon">
          <CgShoppingCart />
        </span>
      </div>
    </header>
  );
};

export default Header;
