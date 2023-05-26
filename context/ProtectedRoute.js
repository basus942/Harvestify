import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createContext } from "react";

export const AuthContext = createContext();

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unSubscribe();
  }, []);
  if (!user) {
    router.push("/UserAuth");
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
