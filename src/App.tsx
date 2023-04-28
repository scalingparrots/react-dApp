import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";

//React Redux
import { useDispatch } from "react-redux";
import {
  setAccountAddress,
  setAccountEnsName,
  setAccountBalance,
  setAccountProvider,
  setAccountSigner,
  disconnectAccount,
} from "./redux/reducers/account";

//Wagmi
import { useAccount, useProvider, useSigner } from "wagmi";
import { fetchBalance, fetchEnsName } from "@wagmi/core";

function App() {
  const dispatch = useDispatch();
  const routing = useRoutes(Router);
  const [isMounted, setIsMounted] = useState(false);

  const { address } = useAccount();

  dispatch(setAccountAddress(address));
  //Account Balance ETH
  address
    ? fetchBalance({
        address: address,
      }).then((balance) => dispatch(setAccountBalance(balance)))
    : dispatch(setAccountBalance(0));
  //Account Ens Name
  address
    ? fetchEnsName({
        address: address,
      }).then((ensName) => dispatch(setAccountEnsName(ensName)))
    : dispatch(setAccountEnsName(null));
  //Signer
  const { data: signer } = useSigner();

  dispatch(setAccountProvider(useProvider().chains?.[0]));
  dispatch(setAccountSigner(signer));

  useAccount({
    onDisconnect: () => {
      dispatch(disconnectAccount());
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{routing}</>;
}

export default App;
