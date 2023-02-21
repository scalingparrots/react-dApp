import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
//Importing Styles
import "./navbar.scss";
//Importing Assets
import logo from "../../assets/image/logo.png";

export default function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="header">
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <nav className={`nav ${isNavVisible ? "active-nav" : "deactive-nav"}`}>
        <a
          href="https://www.scalingparrots.com/en/about-us/"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a
          href="https://www.scalingparrots.com/en/services/"
          target="_blank"
          rel="noreferrer"
        >
          Services
        </a>
        <a
          href="https://www.scalingparrots.com/en/contacts/"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
        <ConnectButton />
      </nav>
      <button onClick={toggleNav} className="burger">
        🍔
      </button>
    </header>
  );
}
