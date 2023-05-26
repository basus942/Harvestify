import React, { useState } from "react";
import { cartContext } from "@/context/Context";

const Cart = () => {
  const {
    state: { cart },
  } = cartContext();

  if (cart.length === 0) {
    return <h1>Empty Cart</h1>;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-compact table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <th key={item.id}>{item.id}</th>
                <td>
                  <img
                    src={item.image}
                    alt="product-image"
                    width={150}
                    height={150}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary btn-lg">Buy Now</button>
      </div>
    </>
  );
};

export default Cart;
