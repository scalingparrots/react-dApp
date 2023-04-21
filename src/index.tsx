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
  getDefaultWallets,
  connectorsForWallets,
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
  mewWallet,
  omniWallet,
  safeWallet,
  tahoWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
//Wagmi
import { configureChains, createClient, WagmiConfig } from "wagmi";
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

const { chains, provider, webSocketProvider } = configureChains(
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

const { wallets } = getDefaultWallets({
  appName: "React dApp Template",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      ledgerWallet({ chains }),
      trustWallet({ chains }),
      braveWallet({ chains }),
      okxWallet({ chains }),
      argentWallet({ chains }),
      bitskiWallet({ chains }),
      dawnWallet({ chains }),
      imTokenWallet({ chains }),
      injectedWallet({ chains }),
      mewWallet({ chains }),
      omniWallet({ chains }),
      safeWallet({ chains }),
      tahoWallet({ chains }),
      zerionWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
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
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        //modalSize="compact"
        coolMode={true}
        chains={chains}
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
