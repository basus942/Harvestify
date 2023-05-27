import { useRef, useState } from "react";

import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailref = useRef("");
  const passref = useRef("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passref.current.value
      );
    } catch {
      (err) => {
        console.log(err);
      };
    } finally {
      setLoading(false);
      router.push("/Home");
    }
  };
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="max-w-sm mx-auto bg-[#609966] text-black shadow-md rounded-xl px-8 py-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block font-bold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                name="password"
                placeholder="Password"
                ref={passref}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <button type="submit" className="btn">
              Log in
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
