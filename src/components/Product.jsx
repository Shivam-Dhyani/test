import React, { useState } from "react";
import {
  setProductList,
  setTotalPrice,
  setTotalQuantity,
} from "../redux/reducers/products";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { totalPrice, totalQuantity } = useSelector(
    (state) => state.products.products
  );
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = (product) => {
    setQuantity((currQuantity) => currQuantity + 1);
    const currPrice = Number(product.price) * Number(quantity);
    // console.log("123==>", totalPrice, totalQuantity);
    // dispatch(setTotalPrice(totalPrice + currPrice));
    // dispatch(setTotalQuantity(totalQuantity + quantity));
    dispatch(setProductList({ ...product, quantity }));
  };

  return (
    <div
      key={product?.id}
      className="bg-[cadetblue] flex h-72 w-72 flex-wrap border-black border-2 m-5 p-5 jusify-center items-center rounded-lg text-center"
    >
      <span className="text-2xl text-center w-full">{product?.title}</span>
      <div className="text-xl w-full">{`Price: ${product?.price}`}</div>
      <div className="text-xl w-full">{`Quantity: ${quantity}`}</div>
      <div className="w-full">
        <button
          className="bg-[bisque] text-4xl border-2 border-black rounded-full"
          onClick={() => quantity >= 1 && setQuantity(quantity - 1)}
        >
          -
        </button>
        <span
          className="text-xl border-2 border-black mx-3"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </span>
        <button
          className="bg-[bisque] text-4xl border-2 border-black rounded-full"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
