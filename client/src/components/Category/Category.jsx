import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&filters[catagories][id][$eq]=${id}`
  );

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {data?.data[0].attributes.catagories.data[0].attributes.title}
        </div>
        <Products products={data} />
      </div>
    </div>
  );
};

export default Category;
