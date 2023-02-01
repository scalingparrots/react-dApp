import React from "react";
import { Outlet } from "react-router-dom";

// Layout component is the root of the application.
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          minHeight: "80vh",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
