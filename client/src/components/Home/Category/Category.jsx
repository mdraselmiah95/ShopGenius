import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = () => {
  return (
    <div className="category-main-content">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="electronic item" />
        </div>
        <div className="category">
          <img src={cat1} alt="electronic item" />
        </div>
        <div className="category">
          <img src={cat1} alt="electronic item" />
        </div>
        <div className="category">
          <img src={cat1} alt="electronic item" />
        </div>
      </div>
    </div>
  );
};

export default Category;
