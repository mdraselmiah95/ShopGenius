import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
  // const { data } = useFetch(
  //   `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  // );
  // console.log(data);

  const { data } = useFetch("/api/products", {
    populate: ["products"],
    where: {
      id: {
        ne: productId,
      },
      categories: {
        id: categoryId,
      },
    },
    _start: 0,
    _limit: 4,
  });

  console.log(data);
  return <div className="related-products">{/* <Products /> */}</div>;
};
export default RelatedProducts;
