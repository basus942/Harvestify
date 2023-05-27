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
    <div className="grid place-items-center">
      <div className="font-bold text-4xl m-3 ">Cart</div>
      <div className=" font-semibold text-black text-xl m-6">
        <table className="">
          {cart.map((item) => (
            <tr key={item.id} className="bg-[#038242] p-2 m-2 border">
              <th>{item.id}</th>
              <td className="m-6">
                <img
                  src={item.image}
                  alt="product-image"
                  width={200}
                  height={200}
                  className="m-2"
                />
              </td>
              <td>
                {item.title}
                <br />₹ {item.price}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <button className="btn btn-primary btn-lg mb-16">Buy Now</button>
    </div>
  );
};

export default Cart;
