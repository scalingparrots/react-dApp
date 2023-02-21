import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

//Raimbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
//Wagmi
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, bsc, polygon, arbitrum, avalanche } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

//Importing Styles
import "./assets/style/index.scss";

const { chains, provider } = configureChains(
  [mainnet, bsc, polygon, arbitrum, avalanche],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Zodiak Beings",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      modalSize="compact"
      chains={chains}
      theme={lightTheme({
        accentColor: "#fff",
        accentColorForeground: "black",
        fontStack: "system",
      })}
    >
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>
);
