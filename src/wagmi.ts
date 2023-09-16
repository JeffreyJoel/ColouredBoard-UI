import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, sepolia } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
// import 'dotenv/config';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(import.meta.env?.MODE === 'development' ? [goerli, sepolia] : [])],
  [
    alchemyProvider({ apiKey: "daLDU9ODorPwEE8CEULnyzI4UNdtYEK7" }),  // 
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
  projectId: process.env.PROJECT_ID || "7f49c7e89e54528522eef8334c58506e"
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
