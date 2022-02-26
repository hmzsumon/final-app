import React from 'react';

const AwardContnet = [
	{
		img: 'Yearly-Best-Designer-3',
		awardName: 'Yearly Best Designer',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'Best-Employee-Award-1',
		awardName: 'Best employee award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
	{
		img: 'Best-Performance-Award-2',
		awardName: 'Best performance award',
		years: '2014 - 2015',
		awardFor: 'Texmart Trading Company Limited',
	},
];

const Awards = () => {
	return (
		<>
			<div className='row'>
				{AwardContnet.map((val, i) => (
					<div
						className='col-lg-4 m-15px-tb'
						key={i}
						data-aos='fade-right'
						data-aos-duration='1200'
						data-aos-delay={val.delayAnimation}
					>
						<div className='feature-box-02 d-flex align-items-center'>
							<div className='icon'>
								<img src={`img/award/${val.img}.png`} alt='award' />
							</div>
							<div className='media-body'>
								<h6>{val.awardName}</h6>
								<p>{val.awardFor}</p>
							</div>
						</div>
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Awards;
