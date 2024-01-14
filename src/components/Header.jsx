import { useMemo } from "react";
import { round } from "lodash";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { productList } = useSelector((state) => state.products.products);

  const calculatedTotalPrice = useMemo(
    () =>
      productList.reduce(
        (acc, curr) => (acc += Number(curr?.quantity) * Number(curr?.price)),
        0
      ),
    [productList]
  );

  const calculatedTotalQuantity = useMemo(
    () => productList.reduce((acc, curr) => (acc += Number(curr?.quantity)), 0),
    [productList]
  );

  return (
    <div className="bg-[bisque] p-2 flex border-black border-2 sticky top-0">
      <span className="text-xl w-full flex justify-center items-center gap-1">
        <FaCartArrowDown /> Cart
      </span>
      <span className="text-xl w-full text-center">{`Total Price: ${round(
        calculatedTotalPrice,
        2
      )}`}</span>
      <sapn className="text-xl w-full text-center">{`Total Quantity: ${calculatedTotalQuantity}`}</sapn>
    </div>
  );
};

export default Header;
