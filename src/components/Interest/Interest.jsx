import React from 'react';

const interestContent = [
	{
		img: 'swimming',
		name: 'Swimming',
	},
	{
		img: 'research',
		name: 'Research',
	},
	{
		img: 'acting',
		name: 'Acting',
	},
	{
		img: 'traveling',
		name: 'Traveling',
	},
];

const Interest = () => {
	return (
		<>
			<div className='row '>
				{/* <div className=''>
					<h3 className='title-interest'>Interest</h3>
				</div> */}
				{interestContent.map((val, i) => (
					<div
						className='col-lg-3 m-15px-tb '
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<div className='feature-box-02 d-flex align-items-center bg-white justify-content-center'>
							<img
								src={`img/interest/${val.img}.png`}
								alt='award'
								style={{ width: '40%' }}
							/>
						</div>
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Interest;
