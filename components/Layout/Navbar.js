import Link from "next/link";
import Image from "next/image";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

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

  return (
    // <>
    //   <nav className="bg-[#038242] text-[#d3eaf2]  mx-auto flex justify-between items-center px-8 ">
    //     <Image
    //       src="/default.png"
    //       width="150"
    //       height="60"
    //       className="p-3 bg-blend-multiply cursor-pointer"
    //       onClick={() => router.push("/Home")}
    //     />
    //     <ul className="flex font-bold text-[#d3eaf2] ">
    //       <li className="px-8">
    //         <Link href="/About">About Us</Link>
    //       </li>
    //       <li className="px-8">Blog</li>
    //     </ul>

    //     <div className="dropdown ">
    //       <label tabIndex={0} className="m-1">
    //         <img
    //           src="https://img.icons8.com/?size=512&id=103336&format=png"
    //           className="h-10 px-2 mx-5 cursor-pointer flex-col font-bold"
    //         />
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a>
    //             <Link href={"/Cart"}>My Cart</Link>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             onClick={() => {
    //               router.push("/UserAuth");
    //             }}
    //           >
    //             Login
    //           </a>
    //         </li>
    //         <li>
    //           <a onClick={signOutHandler}>Signout</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Image
          src="/default.png"
          width="150"
          height="60"
          className="p-3 bg-blend-multiply cursor-pointer"
          onClick={() => router.push("/Home")}
        />
      </div>

      <div className="btn btn-ghost mx-5">
        <Link href="/About">About Us</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost  btn-circle">
            <div className="indicator">
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
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost mx-5 btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://gifdb.com/images/high/evil-eye-ghost-dark-cartoon-7kmwr51ewzn7d0tl.gif" />
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
              <a onClick={signOutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
