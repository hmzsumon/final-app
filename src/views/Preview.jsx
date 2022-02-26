import React from 'react';
import PreviewDemoGallery from '../components/PreviewDemoGallery';
import useDocumentTitle from '../components/useDocumentTitle';

const Preview = () => {
	useDocumentTitle('Nario - Preview || React Personal Portfolio Template');
	return (
		<>
			<section
				className='section demo-section preview-section theme-light dark-bg'
				id='demo'
			>
				<div className='container'>
					{/* End tile */}
					<div className='preview-inner'>
						<PreviewDemoGallery />
					</div>
				</div>

				<span className=' preview-sticker pos-sticker react-sticker'>
					<h6>React</h6>
					<img src='img/preview/react.svg' alt='react krozo' />
				</span>
			</section>
			{/* End Preview section */}
		</>
	);
};

export default Preview;
