import React from "react";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";

//React Redux
import { useDispatch } from "react-redux";
import {
  setAccountAddress,
  setAccountEnsName,
  setAccountProvider,
  setAccountBalance,
  disconnectAccount,
} from "./redux/reducers/account";

//Wagmi
import { useAccount, useProvider } from "wagmi";
import { fetchBalance, fetchEnsName } from "@wagmi/core";

function App() {
  const dispatch = useDispatch();
  const routing = useRoutes(Router);

  useAccount({
    // async onConnect(account) {
    onConnect: async (account) => {
      //Set Redux State
      //Account Address
      dispatch(setAccountAddress(account.address));
      //Account Balance ETH
      dispatch(
        setAccountBalance(
          account.address
            ? await fetchBalance({
                address: account.address,
              })
            : 0
        )
      );
      //Account Ens Name
      dispatch(
        setAccountEnsName(
          account.address
            ? await fetchEnsName({
                address: account.address,
              })
            : null
        )
      );
    },
    onDisconnect: () => {
      dispatch(disconnectAccount());
    },
  });

  dispatch(setAccountProvider(useProvider().chains?.[0]));

  return <>{routing}</>;
}

export default App;
