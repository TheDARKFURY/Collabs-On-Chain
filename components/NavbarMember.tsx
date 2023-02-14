import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

require('@solana/wallet-adapter-react-ui/styles.css')
export const NavbarMember = () => {
	return (
		<>
			<div className='flex justify-between px-10 h-20 items-center border-b border-[#8BD1D2] '>
				<h1 className='uppercase super text-3xl font-Lexend font-extrabold tracking-tight '>
					Ally3
				</h1>
				<WalletMultiButton />
			</div>
		</>
	)
}
