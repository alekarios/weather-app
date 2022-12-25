import './index.scss';
import React from 'react';

const TempCard = ({ primaryTxt, img, subTxt }) => (
	<div className='tempCard-container'>
		<p>{primaryTxt}</p>
		<img
			src={img}
			alt=''
		/>
		<p>{subTxt}</p>
	</div>
);

export default TempCard;
