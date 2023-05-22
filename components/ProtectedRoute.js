import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    router.push("/Auth/UserAuth");
  }

  return <div>{children}</div>;
};
