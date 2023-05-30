import Link from "next/link";
import Image from "next/image";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/ProtectedRoute";
import { useContext } from "react";
import { cartContext } from "@/context/Context";
import NavbarCartMenu from "./NavbarCartMenu";
import NavabarProfilrMenu from "./NavabarProfilrMenu";

const Navabar = () => {
  const User = useContext(AuthContext);
  console.log(User);

  const router = useRouter();
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
              <NavbarCartMenu />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost mx-5 btn-circle avatar"
            >
              <div className="w-10 rounded-full">
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
            <NavabarProfilrMenu />
          </div>
        </div>
      </>
    </div>
  );
};

export default Navabar;
