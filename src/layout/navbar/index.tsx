/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import "./navbar.css";

import logo from "../../assets/image/logo.png";

export default function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href="/">
        <img src={logo} className="Logo" alt="logo" />
      </a>
      <nav className={`Nav ${isNavVisible ? "ActiveNav" : "DeactiveNav"}`}>
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
        <button>Connect Wallet</button>
      </nav>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
