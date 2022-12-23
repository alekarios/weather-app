import React from 'react';
import './index.scss';

const Loader = ({ enable }) => {
	return (
		enable && (
			<div className='loader-container'>
				<p className='loader-container__text'>Loading</p>
				<div className='loader-container__loader' />
			</div>
		)
	);
};

export default Loader;
