import React, { useContext } from "react";
import Link from "next/link";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "@/context/ProtectedRoute";
import { useRouter } from "next/router";

const NavabarProfilrMenu = () => {
  const router = useRouter();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/Login");
      })
      .catch((err) => console.log(err));
  };
  const User = useContext(AuthContext);
  return (
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
  );
};

export default NavabarProfilrMenu;
