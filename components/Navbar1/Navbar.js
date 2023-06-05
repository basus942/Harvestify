import { ShoppingCart } from "@mui/icons-material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { cartContext } from "@/context/Context";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { auth } from "@/Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useProtectedRoute } from "@/context/ProtectedRoute";

const Navbar = () => {
  const router = useRouter();
  const User = useProtectedRoute();
  const {
    state: { cart },
  } = cartContext();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);
  const [openhamburger, setOpenhamburger] = useState(false);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/Auth/Login");
      })
      .catch((err) => console.log(err));
  };
  const profileMenuHandler = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  const cartMenuHandler = () => {
    setCartMenuOpen(!cartMenuOpen);
  };
  const handleHamburger = () => {
    setOpenhamburger(!openhamburger);
  };
  console.log(cartMenuOpen + " cart");
  console.log(openhamburger + " Hamburger");
  return (
    <div className="bg-green-900 flex justify-between items-center px-5 ">
      <Image
        src="/default.png"
        width="120"
        height="50"
        className="p-2"
        onClick={() => router.push("/Home")}
      />
      <div className="flex mr-8">
        <Link
          href="/Blog"
          className="px-2 hidden md:block hover:ring-2 ring-inset cursor-pointer rounded-lg hover:bg-light-green-800 "
        >
          Blogs
        </Link>
        <Link
          href="/Home#AboutUs"
          className="px-2 hidden md:block hover:ring-2 ring-inset cursor-pointer rounded-lg hover:bg-light-green-800"
        >
          About
        </Link>
        <a
          className="px-2 hidden md:block hover:ring-2  ring-inset cursor-pointer rounded-3xl hover:bg-light-green-800 relative"
          onClick={cartMenuHandler}
        >
          <ShoppingCart fontSize="small" />
        </a>
        <a
          className="px-2 hover:ring-2 hidden md:block ring-inset cursor-pointer rounded-3xl hover:bg-light-green-800 relative"
          onClick={profileMenuHandler}
        >
          <label tabIndex={0} className=" avatar">
            <div className=" h-6 w-7 rounded-full">
              <Image
                width={100}
                height={100}
                src={
                  User
                    ? User.photoURL === null
                      ? "/usericon.png"
                      : User.photoURL
                    : "/usericon.png"
                }
              />
            </div>
          </label>
          {/* dropdown */}
        </a>
        {/* {hover is not working for profile menu} */}
        {profileMenuOpen && (
          <div className="absolute z-30 w-32 right-6 top-16 flex items-center justify-center bg-blue-gray-400 rounded-lg drop-shadow-xl">
            <ul>
              <li className="mx-3 my-1 px-2 hover:ring-2 cursor-pointer rounded-lg hover:bg-light-green-800">
                Profile
              </li>
              <li className="mx-3 my-1 px-2 hover:ring-2 cursor-pointer rounded-lg hover:bg-light-green-800">
                Settings
              </li>
              <li className="mx-3 my-1 px-2 hover:ring-2 cursor-pointer rounded-lg hover:bg-light-green-800">
                {User ? (
                  <a onClick={signOutHandler}>Logout</a>
                ) : (
                  <Link href="/Auth/Login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        )}
        {cartMenuOpen &&
          (User ? (
            cart.length == 0 ? (
              <div className="absolute z-30 flex-col w-32 right-6 top-16 flex items-center justify-center bg-blue-gray-400 rounded-lg drop-shadow-xl">
                <h2 className="text-lg font-bold ">
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
              <div className="absolute z-30 right-6 top-16 flex flex-col items-center justify-center scroll-smooth bg-blue-gray-400 rounded-lg drop-shadow-xl ">
                <span className="text-lg font-extrabold flex justify-center ">
                  Cart
                </span>
                {cart.map((item) => (
                  <div>
                    <table className=" w-max my-2 divide-y  font-bold">
                      <tbody>
                        {/* row 1 */}
                        <tr className="mx-8 drop-shadow-xl px-4 w-8 bg-[rgb(3,130,66)]">
                          <td className="avatar">
                            <div className="w-24 h-16 fit-cover rounded-xl m-2">
                              <img
                                src={item.image}
                                alt="product-image"
                                width={100}
                                height={100}
                                className=" rounded-xl"
                              />
                            </div>
                          </td>
                          <td className="text-lg flex-col justify-center">
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
                  <span className=" text-sm ml-2">
                    No of item:{cart.length}
                  </span>

                  <button
                    className="py-2 px-4 m-2 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-752 "
                    onClick={() => router.push("/Cart")}
                  >
                    View cart
                  </button>
                </div>
              </div>
            )
          ) : (
            <h2 className="text-3xl font-bold grid place-items-center mt-9  ">
              Login First
            </h2>
          ))}
      </div>
      {/* {mobileview} */}
      <div
        className=" md:hidden sm-block px-2 hover:ring-2 ring-inset cursor-pointer rounded-3xl hover:bg-light-green-800 relative"
        onClick={handleHamburger}
      >
        {!openhamburger ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
      </div>
      {openhamburger && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute w-screen h-screen  z-20 top-[3.2rem] flex items-center left-0 justify-center bg-[#023020]"
        >
          <ul>
            <li
              className=" p-2 my-1 hover:ring-2 ring-inset cursor-pointer rounded-lg hover:bg-light-green-800"
              onClick={handleHamburger}
            >
              Profile
            </li>
            <li
              className=" p-2 my-1 hover:ring-2 ring-inset cursor-pointer rounded-lg hover:bg-light-green-800"
              onClick={handleHamburger}
            >
              Settings
            </li>
            <li
              className=" p-2 my-1 hover:ring-2 ring-inset cursor-pointer rounded-lg hover:bg-light-green-800"
              onClick={handleHamburger}
            >
              {User ? (
                <a onClick={signOutHandler}>Logout</a>
              ) : (
                <Link href="/Auth/Login">Login</Link>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
