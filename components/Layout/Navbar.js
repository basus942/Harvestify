import Link from "next/link";
import Image from "next/image";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { AuthContext } from "../../context/ProtectedRoute";
import { useContext } from "react";
import { cartContext } from "@/context/Context";

const Navabar = () => {
  const User = useContext(AuthContext);
  console.log(User);

  const router = useRouter();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/Login");
      })
      .catch((err) => console.log(err));
  };
  const {
    state: { cart },
  } = cartContext();

  return (
    <div className="navbar   bg-[#038242]">
      <div className="flex-1">
        <Image
          src="/default.png"
          width="150"
          height="60"
          className="p-3 bg-blend-multiply cursor-pointer"
          onClick={() => router.push("/Home")}
        />
      </div>
      {/* {User ? ( */}
      <>
        <div className="btn btn-ghost mx-1">
          <Link href="/Blog">Blogs</Link>
        </div>
        <div className="btn btn-ghost mx-5">
          <Link href="/About">About Us</Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost  btn-circle">
              <div className="indicator">
                {/* cart icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow mx-3"
            >
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
                      <span className="text-3xl font-extrabold m-10 ">
                        Cart
                      </span>
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
                {}
              </>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost mx-5 btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    User
                      ? User.photoURL === null
                        ? "https://gifdb.com/images/high/evil-eye-ghost-dark-cartoon-7kmwr51ewzn7d0tl.gif"
                        : User.photoURL
                      : "https://gifdb.com/images/high/evil-eye-ghost-dark-cartoon-7kmwr51ewzn7d0tl.gif"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li>
                <a>Settings</a>
              </li>
              <li>
                {console.log(User)}
                {User ? (
                  <a onClick={signOutHandler}>Logout</a>
                ) : (
                  <Link href="/Login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navabar;
