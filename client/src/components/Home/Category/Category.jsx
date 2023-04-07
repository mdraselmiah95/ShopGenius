import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import "./Category.scss";

const Category = ({ catagories }) => {
  const navigate = useNavigate();

  return (
    <>
      {!catagories.data ? (
        <Loader />
      ) : (
        <div className="shop-by-category">
          <div className="categories">
            {catagories?.data?.map((item) => (
              <div
                className="category"
                key={item.id}
                onClick={() => navigate(`/category/${item.id}`)}
              >
                <img
                  src={
                    process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt={item.attributes.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
