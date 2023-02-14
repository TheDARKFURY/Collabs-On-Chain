import {
	createMint,
	mintTo,
	getOrCreateAssociatedTokenAccount,
	Account,
	getAccount,
	getMint,
	transfer,
	TOKEN_PROGRAM_ID,
} from '@solana/spl-token'
import {
	clusterApiUrl,
	Connection,
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
} from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

async function createWalletAndAirdrop() {
	const wallet = Keypair.generate()
	const airdropSignature = await connection.requestAirdrop(
		wallet.publicKey,
		LAMPORTS_PER_SOL
	)
	await connection.confirmTransaction(airdropSignature)
	return wallet
}

export const mintAndTransfer = async (memberCount, AdminWallet, Members) => {
	const wallet = await createWalletAndAirdrop()
	const mint = await createMint(connection, wallet, wallet.publicKey, null, 9)
	console.log(Members);
	const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
		connection,
		wallet,
		mint,
		wallet.publicKey
	)
	const signature = await mintTo(
		connection,
		wallet,
		mint,
		associatedTokenAccount.address,
		wallet,
		memberCount
	)
	const toWallet = new PublicKey(AdminWallet)
	const toTokenAccount = await getOrCreateAssociatedTokenAccount(
		connection,
		wallet,
		mint,
		toWallet
	)
	const transferSignature = await transfer(
		connection,
		wallet,
		associatedTokenAccount.address,
		toTokenAccount.address,
		wallet.publicKey,
		1
	)
	Members.map(async ({ memberAddress }) => {
		const toWallet = new PublicKey(memberAddress)

		const toTokenAccount = await getOrCreateAssociatedTokenAccount(
			connection,
			wallet,
			mint,
			toWallet
		)
		const transferSignature = await transfer(
			connection,
			wallet,
			associatedTokenAccount.address,
			toTokenAccount.address,
			wallet.publicKey,
			1
		)
	})
	const accountInfo = await getAccount(
		connection,
		associatedTokenAccount.address
	)
	const mintInfo = await getMint(connection, mint)
}
