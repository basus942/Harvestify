import { useState } from "react";
import axios from "axios";

import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredentials) => {
        router.push("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="centerContainer">
          <br />
          <label>
            Email :
            <input
              type="email"
              name="email"
              placeholder="Email@xyz.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Password :
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            ></input>
          </label>
          <button type="submit" className="button5">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
