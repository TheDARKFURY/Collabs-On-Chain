import Image from 'next/image'

interface ButtonProps {
	setpopup: (a: boolean) => void
}

export const AdminSuccess = ({ setpopup }: ButtonProps) => {
	return (
		<>
			<div className='z-40 fixed  transition-opacity w-full'>
				<div className='w-full flex justify-center items-center'>
					<div className='fixed inset-0 bg-light-black backdrop-blur-sm'>
						<div className='relative flex justify-center items-center min-h-screen'>
							<div
								onClick={() => setpopup(false)}
								className='h-screen w-full absolute'
							></div>
							<div className='h-[31rem] w-[28rem]  bg-[#0A1837] opacity-80 rounded-2xl px-10 formborder  '>
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
								{/* <div className='flex justify-between gap-x-5'>
									<button className='w-full rounded-3xl text-xl h-10 text-white font-Outfit font-normal bg-[#5436D2]'>
										Copy link
									</button>
									<button className=' w-full  rounded-3xl text-xl h-10 text-white font-Outfit font-normal bg-[#5436D2] '>
										Get Your NFT
									</button>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
