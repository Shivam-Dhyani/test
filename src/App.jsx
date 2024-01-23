import { Route, Routes, useLocation } from "react-router-dom";
import ShowProducts from "./pages/ShowProducts";
import CartPage from "./pages/CartPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProductsAction } from "./redux/reducers/products";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log({ location });

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
