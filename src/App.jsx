import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartPage from "./pages/CartPage";
import ShowProducts from "./pages/ShowProducts";
import { getAllProductsAction } from "./redux/reducers/products";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [!location.pathname]);
  return (
    <div className="bg-[bisque]">
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
