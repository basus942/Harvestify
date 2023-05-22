import React from "react";

const Card = ({ title, image, price }) => {
  const add2cartHandler = () => {
    const cartItem = {
      title,
      image,
      price,
    };
    localStorage.setItem("add2cart", JSON.stringify(cartItem));
    console.log("Item added to cart:", cartItem);
  };
  return (
    <>
      <div className="flex items-center flex-col w-80 h-80 bg-[#038242] mx-5  rounded-xl shadow-md overflow-hidden">
        <img className="w-max h-96 p-4 rounded-xl" src={image} />
        <div className="flex justify-between items-center b-0 pb-2">
          <h2 className="font-bold text-white l-0 p-1">{title}</h2>
          <p className="font-bold text-[#e03737]  p-1">${price}</p>
          <button
            className="rounded-full bg-white px-3 mx-3  hover:bg-[#7effbe] font-medium text-black w-max"
            onClick={add2cartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
