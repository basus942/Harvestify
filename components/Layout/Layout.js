import React from "react";
import Navabar from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex-col  justify-between">
      <Navabar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
