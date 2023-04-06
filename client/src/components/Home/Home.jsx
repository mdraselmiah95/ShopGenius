import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import "./Home.scss";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
