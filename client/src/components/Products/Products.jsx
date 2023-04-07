import Product from "./Product/Product";
import "./Products.scss";
import Loader from "../Loader/Loader";
const Products = ({ products }) => {
  const { data } = products;
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <div className="products-container">
          <div className="sec-heading">headingText</div>
          <div className="products">
            {data.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
