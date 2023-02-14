import styles from '../styles/ConnectBtn.module.css'
import React, { useEffect } from 'react'
import Connectwallet from './Connectwallet'


export const Landing = () => {
	return (
		<>
			<div className='bgLanding md:grid  '>
				<div></div>
				<main className='  flex flex-col justify-center items-center space-y-20 min-h-screen  '>
					<h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase super font-Lexend '>
						UNITE3
					</h1>
					<div className='flex flex-col justify-center items-center text-center space-y-2'>
						<p className='text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend'>
							{'"Tokens and NFTs can be bought,'}
						</p>
						<p className=' text-xl 2xl:text-3xl xl:text-xl font-medium capitalize  font-Lexend flex flex-row gap-x-3 '>
							<span className='text-transparent bg-clip-text superdes tracking-tighter '>
								{'Contribution Power needs to be earned"'}
							</span>
							🏆
						</p>
					</div>
					<div className='flex justify-center relative '>
						{' '}
						<div>
						<Connectwallet/>
						</div>
					</div>
					{/* <div>
						<p className=' text-xl 2xl:text-3xl xl:text-xl font-medium capitalize  font-Lexend flex flex-row gap-x-3 '>
						<span className='text-transparent bg-clip-text superdes tracking-tighter '>
								{'Check your Contribution Power here '}
							</span>
						</p>
						<br />
					<input type="text" name="Unite3" className="w-full rounded-xl h-14 bg-transparent text-[#939393] outline outline-[#939393] px-4" placeholder="Enter Wallet Address here">
						</input>
						<br />
						<br />
						<div className="flex justify-center relative "> 
						<button className={styles.btn} type="button">Check CPs</button></div>
					</div> */}
				</main>
			</div>
		</>
	)
}
