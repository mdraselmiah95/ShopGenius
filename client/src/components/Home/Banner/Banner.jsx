import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Get lost in your favorite tracks with our noise-canceling
            headphones. Free shipping on all orders.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
