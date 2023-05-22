import { useState, useRef } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const emailref = useRef("");
  const passref = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passref.current.value
    )
      .then((e) => {
        console.log(e);
        console.log(auth.currentUser);
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
              placeholder="Email@xyz.com"
              ref={emailref}
            ></input>
          </label>

          <label>
            Password :
            <input type="password" placeholder="Password" ref={passref}></input>
          </label>
          <button type="submit" className="button5">
            {" "}
            Sign up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
