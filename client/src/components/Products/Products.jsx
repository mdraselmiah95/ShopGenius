import Product from "./Product/Product";
import "./Products.scss";
import Loader from "../Loader/Loader";
const Products = ({ products }) => {
  return (
    <>
      {!products?.data ? (
        <Loader />
      ) : (
        <div className="products-container">
          <div className="sec-heading">Popular Products</div>
          <div className="products">
            {products?.data?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
