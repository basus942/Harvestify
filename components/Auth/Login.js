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
        <form className="form" onSubmit={handleSubmit}>
          <div className="centerContainer">
            <br />
            <label>
              Email :
              <input
                type="email"
                name="email"
                placeholder="Email@xyz.com"
                ref={emailref}
              ></input>
            </label>
            <label>
              Password :
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={passref}
              ></input>
            </label>
            <button type="submit" className="button5">
              Log in
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
