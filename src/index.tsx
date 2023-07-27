import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
//React Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
//Raimbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import {
  ledgerWallet,
  trustWallet,
  braveWallet,
  okxWallet,
  argentWallet,
  bitskiWallet,
  dawnWallet,
  imTokenWallet,
  injectedWallet,
  coinbaseWallet,
  mewWallet,
  omniWallet,
  safeWallet,
  tahoWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
//Wagmi
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  goerli,
  bsc,
  polygon,
  arbitrum,
  avalanche,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
//Merge
import merge from "lodash.merge";
//Importing Styles
import "./assets/style/index.scss";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    bsc,
    polygon,
    arbitrum,
    avalanche,
    ...(process.env.ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = "86483ce01d1bd6f32b61625b1f208f46";
const { wallets } = getDefaultWallets({
  appName: "React dApp Template",
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      ledgerWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      braveWallet({ chains }),
      okxWallet({ projectId, chains }),
      argentWallet({ projectId, chains }),
      bitskiWallet({ chains }),
      dawnWallet({ chains }),
      imTokenWallet({ projectId, chains }),
      injectedWallet({ chains }),
      coinbaseWallet({ chains, appName: "React dApp Template" }), // "React dApp Template" is the name of the app
      mewWallet({ chains }),
      omniWallet({ projectId, chains }),
      safeWallet({ chains }),
      tahoWallet({ chains }),
      zerionWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const theme = merge(lightTheme(), {
  colors: {
    accentColor: "#1ac46b",
    accentColorForeground: "#fff",
    actionButtonSecondaryBackground: "#DADDD8",
    connectButtonBackground: "#fff",
    connectButtonBackgroundError: "#fff",
    connectButtonInnerBackground: "#fff",
    connectButtonText: "#000",
    connectButtonTextError: "#FF494A",
  },
} as Theme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider
        //modalSize="compact"
        coolMode={true}
        chains={chains}
        initialChain={mainnet}
        theme={theme}
      >
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
