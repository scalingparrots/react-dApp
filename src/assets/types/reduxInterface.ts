import { Provider, Address } from "@wagmi/core";

export interface initialState {
  address?: Address;
  ensName?: string;
  provider?: Provider;
  balance?: number;
}
