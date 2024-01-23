import { useState } from "react";
import { setProductList } from "../redux/reducers/products";
import { useDispatch } from "react-redux";
import { round } from "lodash";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (product) => {
    // Use the functional form of setQuantity to ensure correct previous state
    setQuantity((prevQuantity) => {
      // Check if quantity is 0, then increment it
      const updatedQuantity =
        prevQuantity === 0 ? prevQuantity + 1 : prevQuantity;

      // Dispatch the action with the updated quantity
      dispatch(setProductList({ ...product, quantity: updatedQuantity }));

      // Return the updated quantity to update the state
      return updatedQuantity;
    });
  };

  return (
    <div
      key={product?.id}
      className="bg-[cadetblue] flex h-72 w-72 flex-wrap border-black border-2 m-5 p-5 jusify-center items-center rounded-lg text-center"
    >
      <span className="text-2xl text-center w-full line-clamp-3">
        {product?.title}
      </span>
      <div className="text-xl w-full">{`Price: ${round(
        product?.price,
        2
      )}`}</div>
      <div className="text-xl w-full">{`Quantity: ${quantity}`}</div>
      <div className="w-full flex items-center justify-center">
        <button
          className="bg-amber-600 text-4xl border-2 border-black rounded-full"
          onClick={() => quantity >= 1 && setQuantity(quantity - 1)}
        >
          -
        </button>
        <span
          className="bg-red-700 text-xl border-2 border-black mx-3 p-1 cursor-pointer rounded-md"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </span>
        <button
          className="bg-amber-600 text-4xl border-2 border-black rounded-full"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
