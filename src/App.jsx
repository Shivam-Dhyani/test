import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "./redux/reducers/products";
import { FaCartArrowDown } from "react-icons/fa";
import Product from "./components/Product";

const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { totalPrice, totalQuantity, productList } = useSelector(
    (state) => state.products.products
  );

  // console.log({ products });
  // useCallback(() => {
  //   productList.reduce((acc, curr) => {
  //     console.log({ curr });
  //     return (acc += Number(curr.quantity) * Number(curr.price));
  //   }, 0);
  // }, [productList]);

  const total = useMemo(() => {
    productList.reduce((acc, curr) => {
      console.log({ curr });
      return (acc += Number(curr.quantity) * Number(curr.price));
    }, 0);
  }, [productList]);

  console.log({ total, productList });

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);
  return (
    <div className="bg-[bisque]">
      <div>
        <span className="text-xl w-full">
          <FaCartArrowDown /> Cart
        </span>
        <span className="text-xl w-full">{`Total Price: ${totalPrice}`}</span>
        <sapn className="text-xl w-full">{`Total Quantity: ${totalQuantity}`}</sapn>
      </div>
      <div className="flex w-screen flex-wrap justify-center">
        {products?.productsData?.map((product) => {
          return <Product key={product?.id} product={product} />;
        })}
      </div>
      dsfdsff
    </div>
  );
};

export default App;
