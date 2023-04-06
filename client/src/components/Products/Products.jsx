import Product from "./Product/Product";
import "./Products.scss";
const Products = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">headingText</div>
      <div className="products">
        <Product />
      </div>
    </div>
  );
};

export default Products;
