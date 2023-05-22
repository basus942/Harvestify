import Link from "next/link";
import Image from "next/image";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { show } from "./ProtectedRoute";
import { useState } from "react";

const Navabar = () => {
  const router = useRouter();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/UserAuth");
      })
      .catch((err) => console.log(err));
  };
  const [profile, setProfile] = useState(false);
  return (
    // <ul className="navul">
    //   <li className="navHeading">
    //     <Link href={"/"}>Harvestify</Link>
    //   </li>
    //   <li className="nav">
    //     <span className="button5" onClick={signOutHandler}>
    //       Sign Out
    //     </span>
    //   </li>
    //   <li className="nav">
    //     <Link href="/Products">Products</Link>
    //   </li>
    //   <li className="nav">
    //     <Link href="/Addproducts">Add Products</Link>
    //   </li>
    // </ul>
    <>
      <nav className="bg-[#038242] text-[#d3eaf2]  mx-auto flex justify-between items-center px-8 ">
        <Image
          src="/default.png"
          width="150"
          height="60"
          className="p-3 bg-blend-multiply cursor-pointer"
          onClick={() => router.push("/Home")}
        />
        <ul className="flex font-bold text-[#d3eaf2] ">
          <li className="px-8">
            <Link href="/About">About Us</Link>
          </li>
          <li className="px-8">Blog</li>
        </ul>
        <ul className="flex-col ">
          <div
            className="px-2 mx-5 cursor-pointer flex-col font-bold"
            onClick={(e) => {
              setProfile(!profile);
            }}
          >
            <img
              src="https://img.icons8.com/?size=512&id=103336&format=png"
              className="h-10"
            />
          </div>
          {profile && (
            <ul className="fixed bg-[#038242] p-7 ">
              <li
                className="px-2 pb-2 cursor-pointer font-medium hover:bg-slate-500 border-1"
                onClick={() => {
                  router.push("/UserAuth");
                }}
              >
                Login
              </li>
              <li className="px-2 pb-2 cursor-pointer font-medium hover:bg-slate-500 border-1">
                Bag
              </li>
              <li
                className="px-2 pb-1 cursor-pointer text-[#ffffff] font-medium hover:bg-slate-500"
                onClick={signOutHandler}
              >
                Signout
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navabar;
