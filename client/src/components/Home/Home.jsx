import { useEffect } from "react";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import "./Home.scss";
import { fetchData } from "../../utils/api";

const Home = () => {
  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = () => {
    fetchData("/api/catagories?populate=*").then((res) =>
      console.log(res.data)
    );
  };

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
