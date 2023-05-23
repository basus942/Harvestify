import React from "react";

const Card = ({ title, image, price }) => {
  return (
    <>
      <div className="card w-96 ] shadow-xl">
        <img className="w-max max-h-80 p-1  rounded-xl" src={image} />
        <div className="flex justify-between items-center b-0 pb-2">
          <div className="flex-col ">
            <h2 className="font-bold text-2xl text-white l-0 p-1">{title}</h2>
            <p className="font-extrabold text-3xl text-[#e03737]  p-1">
              ${price}
            </p>
          </div>
          <button className="btn btn-sm ">Add to Cart</button>
        </div>
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
