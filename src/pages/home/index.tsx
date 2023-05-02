import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
//Importing Redux
import { useSelector } from "react-redux";
import { selectAccount } from "../../redux/reducers/account";
//Importing Styles
import "./home.scss";
//Importing Assets
import logo from "../../assets/image/logo.svg";

const HomePage = () => {
  const account = useSelector(selectAccount);

  React.useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <div className="app-main">
      <img src={logo} className="app-logo" alt="logo" />
      <p>Hello World !</p>
      <ConnectButton />
    </div>
  );
};

export default HomePage;
