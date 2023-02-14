import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
// import { useEffect, useMemo } from 'react'
// import {
// 	GlowWalletAdapter,
// 	LedgerWalletAdapter,
// 	PhantomWalletAdapter,
// 	SlopeWalletAdapter,
// 	SolflareWalletAdapter,
// 	SolletExtensionWalletAdapter,
// 	SolletWalletAdapter,
// 	TorusWalletAdapter,
// } from '@solana/wallet-adapter-wallets'
// import {
// 	ConnectionProvider,
// 	useWallet,
// 	WalletProvider,
// } from '@solana/wallet-adapter-react'
// import { clusterApiUrl } from '@solana/web3.js'
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import Router from 'next/router'
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultWallets,
	RainbowKitProvider, darkTheme 
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function MyApp({ Component, pageProps }: AppProps) {

	const { chains, provider } = configureChains(
		[mainnet, polygon, optimism, arbitrum],
		[
			alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
			publicProvider()
		]
	);

	const { connectors } = getDefaultWallets({
		appName: 'My RainbowKit App',
		chains
	});

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider
	})

	// const network = WalletAdapterNetwork.Devnet

	// const endpoint = useMemo(() => clusterApiUrl(network), [network])
	// const wallets = useMemo(
	// 	() => [
	// 		new LedgerWalletAdapter(),
	// 		new PhantomWalletAdapter(),
	// 		new GlowWalletAdapter(),
	// 		new SlopeWalletAdapter(),
	// 		new SolletExtensionWalletAdapter(),
	// 		new SolletWalletAdapter(),
	// 		new SolflareWalletAdapter({ network }),
	// 		new TorusWalletAdapter(),
	// 	],
	// 	[network]
	// )
	return (
		<Provider store={store}>
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider modalSize="compact" chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
		</Provider>
	)
}

export default MyApp
