import React from 'react'
import { Form } from '../../components/Form'
import { Navbar } from '../../components/Navbar'
import { Preview } from '../../components/Preview'

const Reward = () => {
	return (
		<>
			<div className='bgForm'>
				<Navbar />
				<div className='grid grid-cols-10  '>
					<div className='border-r min-h-[91vh] border-[#8BD1D2] col-span-4'>
						<Form />
					</div>
					<div className='col-span-6 '>
						<Preview />
					</div>
				</div>
			</div>
		</>
	)
}
export default Reward
