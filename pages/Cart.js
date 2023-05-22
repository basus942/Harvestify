import React, { useState } from "react";

const Cart = () => {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="w-96 h-96 bg-[#a6a6a6]">
        <h1 className="font-bold text-3xl text-black">Cart</h1>
        <div className="flex justify-between text-m text-black">
          <ul className="flex">
            <li className="mx-3">Name</li>
            <li className="mx-3">Price</li>
            <li className="mx-3">Quantity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
