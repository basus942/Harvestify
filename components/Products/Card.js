import { cartContext } from "@/context/Context";
import React, { useState, useEffect } from "react";

const Card = ({ title, image, price, id }) => {
  const [alert, setAlert] = useState(false);
  const { dispatch } = cartContext();
  const add2cartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
    setAlert(true);
  };
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [alert]);
  return (
    <>
      {alert && (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{title} Added to Cart!</span>
          </div>
        </div>
      )}
      <div className="card w-96  shadow-xl">
        <img
          className="w-max max-h-80 p-1  rounded-xl"
          loading="lazy"
          src={image}
        />
        <div className="flex justify-between items-center b-0 pb-2">
          <div className="flex-col ">
            <h2 className="font-bold text-2xl text-white l-0 p-1">{title}</h2>
            <p className="font-extrabold text-3xl text-[#e03737]  p-1">
              Rs {price}
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
