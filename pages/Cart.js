import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cartContext } from "@/context/Context";
import { Button } from "@material-tailwind/react";

const Cart = () => {
  const [total, setTotal] = useState();

  const router = useRouter();
  const {
    state: { cart },
    dispatch,
  } = cartContext();
  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0));
  }, []);
  console.log(total);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center mt-12 h-screen">
        <h2 className="text-3xl font-bold mb-5">
          Your Cart is <span className="text-red-600">Empty</span>
        </h2>
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            router.push("/Home");
          }}
        >
          Shop Now
        </button>
      </div>
    );
  }
  const removeFromCartHandler = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  console.log(cart);

  return (
    <div className="flex justify-center items-center m-10 bg-opacity-75 text-black ">
      <table class="table-auto bg-[#9DC08B] mb-10 ">
        <thead>
          <span className="text-3xl font-extrabold m-10  ">Cart</span>
        </thead>
        <tbody className="divide-y-2 my-2">
          {cart.map((item) => (
            <tr className="bg-[#038242] rounded-xl ">
              <td className="px-2">
                <img
                  src={item.image}
                  alt="product-image"
                  width={200}
                  height={200}
                  className="m-2 rounded-xl"
                />
              </td>
              <td className="px-5 font-bold text-3xl">
                {item.title}
                <br />₹ {item.price}
              </td>
              <td className="px-5 font-bold">
                <Button
                  size="sm"
                  className="text-black "
                  color="red"
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <span className="text-lg font-medium">
          Subtotal({cart.length}): ₹{total}
        </span>
        <br />
        <Button>Buy Now</Button>
      </table>
    </div>
  );
};

export default Cart;
