import React from "react";
import { cartContext } from "@/context/Context";

const Cart = () => {
  const {
    state: { cart },
  } = cartContext();

  if (cart.length === 0) {
    return <h1>Empty Cart</h1>;
  }

  return (
    <div className="flex items-center justify-center  bg-opacity-75 text-black">
      <div className="bg-[#7a7a7a] rounded-lg m-6">
        <div className="font-bold text-4xl  ">Cart</div>
        <div className=" font-semibold text-xl m-6">
          <table className="">
            {cart.map((item) => (
              <tr
                key={item.id}
                className="bg-[#038242] p-2 m-2 border rounded-lg"
              >
                <th>{item.id}</th>
                <td className="m-6 ">
                  <img
                    src={item.image}
                    alt="product-image"
                    width={200}
                    height={200}
                    className="m-2 rounded-lg"
                  />
                </td>
                <td>
                  {item.title}
                  <br />₹ {item.price}
                </td>
              </tr>
            ))}
          </table>

          <button className="btn btn-primary btn-lg m-3 ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
