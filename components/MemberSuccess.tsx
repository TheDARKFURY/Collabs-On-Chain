import Image from 'next/image'
import React from 'react'

export const MemberSuccess = () => {
	return (
		<div className='z-40 fixed  transition-opacity w-full'>
			<div className='w-full flex justify-center items-center'>
				<div className='fixed inset-0 bg-light-black backdrop-blur-sm'>
					<div className='flex justify-center items-center min-h-screen'>
						<div className='h-[31rem] w-[28rem]  bg-[#0A1837] opacity-80 rounded-2xl px-10 border border-white  '>
							<h1 className='flex justify-center text-5xl font-light text-white mt-10 font-Outfit '>
								Successfull!
							</h1>
							<div className='flex justify-center'>
								<Image
									src='/succes.svg'
									alt='success'
									width={300}
									height={300}
								/>
							</div>
							<button className='w-full rounded-3xl text-xl h-10 text-white font-Outfit font-normal bg-[#5436D2]'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}