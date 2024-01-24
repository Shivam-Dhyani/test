import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Product from "./Product";

import { isEmpty } from "lodash";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="flex w-screen flex-wrap justify-center mt-[-10px]">
      {products?.isProductsLoading ? (
        <div className="h-screen flex items-center">
          <CircularProgress size={50} />
        </div>
      ) : isEmpty(products?.productsData) ? (
        <div className="h-screen flex items-center">
          <span className="text-3xl">No Product Available</span>
        </div>
      ) : (
        products?.productsData?.map((product) => {
          return <Product key={product?.id} product={product} />;
        })
      )}
    </div>
  );
};

export default ProductList;
