import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar1/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
