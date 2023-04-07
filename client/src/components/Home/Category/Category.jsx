import "./Category.scss";
import { ColorRing } from "react-loader-spinner";

const Category = ({ catagories }) => {
  const { data } = catagories;
  return (
    <div className="shop-by-category">
      <div className="categories">
        {data ? (
          data.map((item) => (
            <div className="category" key={item.id}>
              <img
                src={
                  process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
                alt={item.attributes.title}
              />
            </div>
          ))
        ) : (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
