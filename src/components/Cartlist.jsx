import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const { productList } = useSelector((state) => state.products.products);
  const [tableMarginTop, setTableMarginTop] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the margin accordingly
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setTableMarginTop(scrollY > 0 ? 0 : 4);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run the effect only once on mount

  return (
    <div className={`h-[92vh] px-4 pb-4 overflow-auto`}>
      {isEmpty(productList) ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-3xl">No Product Available</span>
        </div>
      ) : (
        <table className={`mt-${tableMarginTop}`}>
          <thead className="sticky top-0 z-10 bg-[bisque]">
            <tr className="text-2xl p-10 w-screen border-b-2 border-black">
              <td className="w-[40vw]">Product Name</td>
              <td className="w-[20vw]">Price</td>
              <td className="w-[20vw]">Quantity</td>
              <td className="w-[20vw]">Total</td>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr
                key={product.id}
                className="text-xl p-10 w-screen border-b-2 border-black"
              >
                <td className="w-[40vw] line-clamp-1">{product.title}</td>
                <td className="w-[20vw]">{"$ " + product.price}</td>
                <td className="w-[20vw]">{product.quantity}</td>
                <td className="w-[20vw]">
                  {"$ " + product.price * product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartList;
