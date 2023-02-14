// import { useWallet } from '@solana/wallet-adapter-react'
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
// import styles from '../styles/ConnectBtn.module.css'
import Router from 'next/router'
import { useAccount } from 'wagmi';
import Connectwallet from './Connectwallet';
import { useEffect } from 'react'
require('@solana/wallet-adapter-react-ui/styles.css')
export const Navbar = () => {
	// const { disconnecting, connected } = useWallet()

	// useEffect(() => {
	// 	if (disconnecting === true || connected === false) {
	// 		Router.push('/')
	// 	}
	// }, [connected, disconnecting])
	const { address, isDisconnected, isConnected } = useAccount();
  
	// useEffect(() => {
	//   if (isDisconnected) {
	// 	Router.push('/');
	//   }
	// }, [address, isDisconnected, isConnected ]);
	return (
		<>
			<div className='flex justify-between px-10 h-20 items-center border-b border-[#8BD1D2] '>
				<h1 className='uppercase super text-3xl font-Lexend font-extrabold tracking-tight '>
				UNITE3
				</h1>
				<Connectwallet />
			</div>
		</>
	)
}
