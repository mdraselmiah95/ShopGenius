import { useContext, useEffect } from "react";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import "./Home.scss";
import { fetchData } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { catagories, setCatagories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCatagories();
    getProducts();
  }, []);

  const getCatagories = () => {
    fetchData("/api/catagories?populate=*").then((res) => setCatagories(res));
  };

  const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => setProducts(res));
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category catagories={catagories} />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
