import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Preview } from '../../components/Preview'
import { NavbarMember } from '../../components/NavbarMember'
import { useWallet } from '@solana/wallet-adapter-react'
import { updateFull } from '../../features/member'
import { useAppDispatch } from '../../store/hooks'
import {
	addCollabName,
	addDescription,
	addLeadName,
	addContributionPower,
} from '../../features/collabInfo'
const MemberClaim = () => {
	const [claim, setClaim] = useState<boolean>(true)
	const { connected, publicKey } = useWallet()
	const dispatch = useAppDispatch()

	return (
		<>
			<div className='bgClaim'>
				<NavbarMember />
				<div>
					<h1 className='text-white text-4xl my-5 font-Outfit flex justify-center w-full'>
						NFT Preview
					</h1>
					<div className='flex justify-center'>
						<hr className='w-2/5 border border-[#8BD1D2]' />
					</div>
					<Preview />
					{connected && (
						<div>
							{claim ? (
								<div className='flex justify-center pt-5 '>
									{/* <button className='flex justify-center  items-center bg-[#6758E5FD] rounded-2xl w-72 h-10 text-white font-medium font-Outfit '>
										Claim Your NFT
									</button> */}
								</div>
							) : (
								<div className='pt-5 flex justify-center'>
									<div className=' bg-[#FFDCDE] font-Outfit w-2/4 h-10 flex justify-center items-center rounded-xl text-md space-x-2'>
										<span>
											<Image
												src='/emg.svg'
												alt='emg'
												width={24}
												height={24}
											/>
										</span>
										<p>
											Uh oh! I guess You weren’t the part
											of the collab. If you think it’s a
											mistake try contacting your Admin.
										</p>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default MemberClaim
