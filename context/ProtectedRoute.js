import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { createContext } from "react";

export const AuthContext = createContext();

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  if (!user) {
    router.push("/Login");
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
