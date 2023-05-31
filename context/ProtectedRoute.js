import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";

import { createContext } from "react";

export const AuthContext = createContext();

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null); // Set initial value to null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []); // Empty dependency array ensures the effect runs only once

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useProtectedRoute = () => {
  return useContext(AuthContext);
};
