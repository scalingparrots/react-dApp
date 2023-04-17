import React from "react";
import { Outlet } from "react-router-dom";

// Layout component is the root of the application.
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
