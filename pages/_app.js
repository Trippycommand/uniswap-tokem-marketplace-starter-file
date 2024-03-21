import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ // Use alchemyProvider instead of infuraProvider
      apiKey: "7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e", // Replace with your Alchemy API key
    }),
    jsonRpcProvider({
      rpc: () => ({
        http: "https://eth-sepolia.g.alchemy.com/v2/7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e",
        priority: 1,
      }),
    })

    // infuraProvider({
    //   apiKey: "443972dc6bec43d6942b131a89244806",
    //   priority: 1
    // }),
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: "https://sepolia.infura.io/v3/443972dc6bec43d6942b131a89244806",
    //     priority: 1,
    //   }),
    // })
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})




const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
