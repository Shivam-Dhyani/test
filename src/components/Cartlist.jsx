import { useSelector } from "react-redux";

const CartList = () => {
  const { productList } = useSelector((state) => state.products.products);
  console.log("productList==>", productList);
  return (
    <div className="h-[93vh]">
      {productList.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
};

export default CartList;
