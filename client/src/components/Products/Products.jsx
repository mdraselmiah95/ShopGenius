import { Oval } from "react-loader-spinner";
import Product from "./Product/Product";
import "./Products.scss";
const Products = ({ products }) => {
  const { data } = products;
  return (
    <>
      {!data ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
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
