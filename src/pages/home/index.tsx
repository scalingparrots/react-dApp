import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
//Importing Styles
import "./home.scss";
//Importing Assets
import logo from "../../assets/image/logo.svg";

function App() {
  return (
    <div className="app">
      <div className="app-main">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello World!</p>
      </div>
    </div>
  );
}

export default App;
