import { useDispatch } from "react-redux";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { getAllProductsAction } from "../redux/reducers/products";

const ShowProducts = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default ShowProducts;
