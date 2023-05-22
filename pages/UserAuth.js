import Login from "@/components/Auth/Login";

import Signup from "@/components/Auth/Signup";

import { useState } from "react";

const UserAuth = () => {
  const [logPopUp, setLogPopUp] = useState(true);
  const [regPopUp, setRegPopUp] = useState(false);

  const handleLogPopUp = (e) => {
    setRegPopUp(false);
    if (logPopUp == false) {
      setLogPopUp(true);
    }
  };
  const handleRegPopUp = (e) => {
    setRegPopUp(true);
    setLogPopUp(false);
  };

  return (
    <>
      <div className="box">
        <div className="row">
          <ul>
            <span
              onClick={handleLogPopUp}
              className={`spanauth ${logPopUp ? "active" : ""}`}
            >
              Login
            </span>

            <span
              onClick={handleRegPopUp}
              className={`spanauth ${regPopUp ? "active" : ""}`}
            >
              Signup
            </span>
          </ul>
        </div>
        {logPopUp && <Login />}
        {regPopUp && <Signup />}
      </div>
    </>
  );
};

export default UserAuth;
