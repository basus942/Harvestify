import { cartContext } from "@/context/Context";
import React from "react";

const Card = ({ title, image, price }) => {
  const { dispatch } = cartContext();
  const add2cartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <>
      <div className="card w-96 ] shadow-xl">
        <img
          className="w-max max-h-80 p-1  rounded-xl"
          loading="lazy"
          src={image}
        />
        <div className="flex justify-between items-center b-0 pb-2">
          <div className="flex-col ">
            <h2 className="font-bold text-2xl text-white l-0 p-1">{title}</h2>
            <p className="font-extrabold text-3xl text-[#e03737]  p-1">
              ${price}
            </p>
          </div>
          <button className="btn btn-sm " onClick={add2cartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
