import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Our curated collection of top-quality headphones is designed for
            discerning audio enthusiasts who crave unparalleled sound clarity.
            Unleash your inner audiophile and explore our range today.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Dhaka, Bangladesh</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +8801845515895</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: dev.mdraselmia@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            ShopGenius 2023 CREATED BY MD. RASEL DEV.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
