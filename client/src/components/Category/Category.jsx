import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const { id } = useParams();
  const data = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  console.log(data);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">category title</div>
        <Products />
      </div>
    </div>
  );
};

export default Category;
