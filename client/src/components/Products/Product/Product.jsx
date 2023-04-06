import "./Product.scss";

import product from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={product} alt="product img" />
      </div>
      <div className="prod-details">
        <span className="name">Rockerz 550 Over Ear Bluetooth Headphone</span>
        <span className="price">1790</span>
      </div>
    </div>
  );
};

export default Product;
