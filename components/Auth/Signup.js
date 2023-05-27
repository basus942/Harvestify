import { useState, useRef } from "react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
const Signup = () => {
  const emailref = useRef("");
  const passref = useRef("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((e) => {
        router.push("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="  flex items-center justify-center ">
      <div className="max-w-sm mx-auto bg-[#609966] text-black shadow-md rounded-xl  px-8 py-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-bold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email@xyz.com"
              ref={emailref}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-bold mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              ref={passref}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button type="submit" className="btn ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
