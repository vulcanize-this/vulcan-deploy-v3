import { eMerlinNetwork, eMoltenNetwork, IAaveConfiguration } from "../../helpers/types";
import AaveMarket from "../aave";
import { strategyUSDC, strategyUSDT } from "../aave/reservesConfigs";

export const MerlinConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Merlin Market",
  ATokenNamePrefix: "Merlin",
  StableDebtTokenNamePrefix: "Merlin",
  VariableDebtTokenNamePrefix: "Merlin",
  SymbolPrefix: "Merlin",
  ProviderId: 100,
  ReservesConfig: {
    USDC: strategyUSDC,
    USDT: strategyUSDT
  },
  ReserveAssets: {
    [eMerlinNetwork.main]: {
      USDC: "",
      USDT: ""
    },
    [eMerlinNetwork.testnet]: {
      USDC: "0xb471644294eD4648F07f404a5d257B381b1E1e26",
      USDT: "0x18A62d93EEA653C275B0F6C34D68d92B1F9e0Ae6"
    }
  },
  ChainlinkAggregator: {
    [eMerlinNetwork.main]: {
      
    },
    [eMerlinNetwork.testnet]: {
      USDC: "0x1aD73800BD9C1d601D4b858b754D45dC45199C83",
      USDT: "0xb3cb8502dE6F2a3BebFF263a03da58e6200B08b1"
    }

  },
  EModes: {},
};

export default MerlinConfig;