import React from "react";
import { Outlet } from "react-router-dom";

// Layout component is the root of the application.
import NavBar from "./navbar";
import Footer from "./footer";
// Css for the layout component.
import "./layout.scss";

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
