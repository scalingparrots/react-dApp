import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
//Importing Assets
import logo from "../../assets/image/logo.png";

export default function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <nav>
      <div className="header">
        <a href="/" target="_self">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="hamburger-menu">
          <div
            onClick={toggleNav}
            className={`hamburger ${isNavVisible ? "open" : ""}`}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className={`menu ${isNavVisible ? "" : "hidden"}`}>
          <ul>
            <li>
              <a
                href="https://www.scalingparrots.com/en/about-us/"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.scalingparrots.com/en/services/"
                target="_blank"
                rel="noreferrer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://www.scalingparrots.com/en/contacts/"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <ConnectButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
