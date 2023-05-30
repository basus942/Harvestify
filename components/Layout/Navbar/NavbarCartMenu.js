import React from "react";
import { useContext } from "react";
import { cartContext } from "@/context/Context";
import { AuthContext } from "@/context/ProtectedRoute";
import { useRouter } from "next/router";

const NavbarCartMenu = () => {
  const router = useRouter();
  const User = useContext(AuthContext);
  const {
    state: { cart },
  } = cartContext();
  return (
    <>
      {User ? (
        cart.length == 0 ? (
          <div className="flex flex-col items-center mt-12">
            <h2 className="text-3xl font-bold ">
              Your Cart is <span className="text-red-600">Empty</span>
            </h2>
            <button
              className="btn btn-primary bottom-2 btn-block  "
              onClick={() => router.push("/Cart")}
            >
              View cart
            </button>
          </div>
        ) : (
          <div className="max-h-80 overflow-y-auto ">
            <span className="text-3xl font-extrabold m-10 ">Cart</span>
            {cart.map((item) => (
              <div>
                <table className=" w-full my-2 divide-y  font-bold">
                  <tbody>
                    {/* row 1 */}
                    <tr className="m-12 shadow-2xl  bg-[rgb(3,130,66)] ">
                      <td className="avatar">
                        <div className="w-24 rounded-xl m-2">
                          <img src={item.image} />
                        </div>
                      </td>
                      <td className="text-3xl flex-col justify-center">
                        {item.title}
                        <br />
                        <span className="text-red-600 font-bold text-right pr-4">
                          ₹ {item.price}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}

            <div className="card-actions">
              <span className="font-bold text-lg">
                No of item:{cart.length}
              </span>
              <span className=" text-black font-semibold"></span>
              <button
                className="btn btn-primary btn-block  "
                onClick={() => router.push("/Cart")}
              >
                View cart
              </button>
            </div>
          </div>
        )
      ) : (
        <h2 className="text-3xl font-bold grid place-items-center mt-9 ">
          Login First
        </h2>
      )}
    </>
  );
};

export default NavbarCartMenu;
