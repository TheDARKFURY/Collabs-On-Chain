import { useWallet } from '@solana/wallet-adapter-react'
import {
	WalletMultiButton,
	WalletConnectButton,
} from '@solana/wallet-adapter-react-ui'
import React, { useEffect } from 'react'

require('@solana/wallet-adapter-react-ui/styles.css')
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addAdminWallet } from '../features/collabInfo'
import Router from 'next/router'
export const Landing = () => {
	const walletAddress = useAppSelector(
		(state) => state.collabInfo.AdminWallet
	)

	const dispatch = useAppDispatch()
	const { publicKey, connected, connect } = useWallet()

	useEffect(() => {
		dispatch(addAdminWallet(publicKey?.toString()))
		if (connected) {
			Router.push('/reward')
		}
	}, [publicKey, connected])

	return (
		<>
			<div className='bgLanding md:grid md:grid-cols-2 '>
				<div></div>
				<main className='  flex flex-col justify-center items-center space-y-20 min-h-screen  '>
					<h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase super font-Lexend '>
						Supercollabs
					</h1>
					<div className='flex flex-col justify-center items-center text-center space-y-2'>
						<p className='text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend'>
							{'"Reward Your Team With A Proof Of'}
						</p>
						<p className=' text-xl 2xl:text-3xl xl:text-xl font-medium capitalize  font-Lexend flex flex-row gap-x-3 '>
							<span className='text-transparent bg-clip-text superdes tracking-tighter '>
								{'Collaboration As An NFT"'}
							</span>
							🏆
						</p>
					</div>
					<div className='flex justify-center relative '>
						{' '}
						<WalletMultiButton />
					</div>
				</main>
			</div>
		</>
	)
}