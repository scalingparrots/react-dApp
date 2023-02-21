import { createSlice } from "@reduxjs/toolkit";
import type { initialState as is } from "../../assets/types/reduxInterface";

const initialState: is = {
  address: undefined,
  ensName: undefined,
  provider: undefined,
  balance: undefined,
};

const accounSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountAddress(state, action) {
      state.address = action.payload;
    },
    setAccountEnsName(state, action) {
      state.ensName = action.payload;
    },
    setAccountProvider(state, action) {
      state.provider = action.payload;
    },
    setAccountBalance(state, action) {
      state.balance = action.payload;
    },
    disconnectAccount() {
      return initialState;
    },
  },
});

export const {
  setAccountAddress,
  setAccountEnsName,
  setAccountProvider,
  setAccountBalance,
  disconnectAccount,
} = accounSlice.actions;

//Select the account
export const selectAccount = (state: any) => state.account;
//Select the account Data
export const selectAccountAddress = (state: any) => state.account.address;
export const selectAccountEnsName = (state: any) => state.account.ensName;
//Select the balance Data
export const selectAccountBalance = (state: any) => state.account.balance;
export const selectAccountBalanceDecimals = (state: any) => state.account.balance?.decimals;
export const selectAccountBalanceFormatted = (state: any) => state.account.balance?.formatted;
export const selectAccountBalanceSymbol = (state: any) => state.account.balance?.symbol;
//Select the provider Data
export const selectChainId = (state: any) => state.account.provider?.chainId;
export const selectProviderName = (state: any) => state.account.provider?.name;
export const selectProviderNativeCurrency = (state: any) => state.account.provider?.nativeCurrency;
//Select RPC URL
export const selectRpcUrl = (state: any) => state.account.provider?.rpcUrls.default.http[0];
export const selectRpcUrlAlchemy = (state: any) => state.account.provider?.rpcUrls.alchemy.http[0];
export const selectRpcUrlInfura = (state: any) => state.account.provider?.rpcUrls.infura.http[0];
export const selectRpcUrlPublic = (state: any) => state.account.provider?.rpcUrls.public.http[0];

export default accounSlice.reducer;
