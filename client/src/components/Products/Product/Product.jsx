import "./Product.scss";

import product1 from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({ product }) => {
  const { title, price, img } = product.attributes;

  return (
    <div className="product-card">
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
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default Product;
