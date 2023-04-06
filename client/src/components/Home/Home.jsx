import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import "./Home.scss";
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
