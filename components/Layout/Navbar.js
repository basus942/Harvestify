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
  const [profile, setProfile] = useState(false);
  return (
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
          <img
            src="https://img.icons8.com/?size=512&id=103336&format=png"
            className="h-10 px-2 mx-5 cursor-pointer flex-col font-bold"
            onClick={(e) => {
              setProfile(!profile);
            }}
          />
          {profile && (
            <ul className="absolute top-16 rounded-md bg-[#23ad68e8] p-6">
              <li className="p-1 hover:bg-green-900 rounded-md cursor-pointer ">
                <Link href={"/Cart"}>My Cart</Link>
              </li>
              <li
                className="p-1 hover:bg-green-900 cursor-pointer rounded-md "
                onClick={() => {
                  router.push("/UserAuth");
                }}
              >
                Login
              </li>
              <li
                className="p-1 hover:bg-green-900 cursor-pointer rounded-md "
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
