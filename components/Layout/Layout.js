import React from "react";
import Navabar from "./Navbar/Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navabar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
