import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { useEffect, useMemo } from 'react'
import {
	GlowWalletAdapter,
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolletExtensionWalletAdapter,
	SolletWalletAdapter,
	TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import {
	ConnectionProvider,
	useWallet,
	WalletProvider,
} from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import Router from 'next/router'
function MyApp({ Component, pageProps }: AppProps) {
	const network = WalletAdapterNetwork.Devnet

	const endpoint = useMemo(() => clusterApiUrl(network), [network])
	const wallets = useMemo(
		() => [
			new LedgerWalletAdapter(),
			new PhantomWalletAdapter(),
			new GlowWalletAdapter(),
			new SlopeWalletAdapter(),
			new SolletExtensionWalletAdapter(),
			new SolletWalletAdapter(),
			new SolflareWalletAdapter({ network }),
			new TorusWalletAdapter(),
		],
		[network]
	)
	return (
		<Provider store={store}>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={wallets}>
					<WalletModalProvider>
						<Component {...pageProps} />
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</Provider>
	)
}

export default MyApp
