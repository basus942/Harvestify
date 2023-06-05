import React from "react";
import Navabar from "./Navbar/Navbar";
import { Footer } from "./Footer";
import Navbar from "../Navbar1/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navabar /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
