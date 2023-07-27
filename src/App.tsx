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
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { fetchBalance, fetchEnsName } from "@wagmi/core";

function App() {
  const dispatch = useDispatch();
  const routing = useRoutes(Router);
  const [isMounted, setIsMounted] = useState(false);

  //Account Address
  const { address } = useAccount();
  //Signer
  const { data: signer } = useWalletClient();
  //Provider
  const publicClient = usePublicClient();

  dispatch(setAccountAddress(address));
  //Account Balance ETH
  address &&
    fetchBalance({
      address: address,
    })
      .then((balance) => dispatch(setAccountBalance(balance)))
      .catch((e) => console.error("Error fetching balance", e));
  //Account Ens Name
  address && publicClient.chain.id === 1
    ? fetchEnsName({
        address: address,
      }).then((ensName) => dispatch(setAccountEnsName(ensName)))
    : dispatch(setAccountEnsName(null));

  useEffect(() => {
    publicClient && dispatch(setAccountProvider(publicClient.chains?.[0]));
    signer && dispatch(setAccountSigner(signer));
  }, [dispatch, publicClient, signer]);

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
