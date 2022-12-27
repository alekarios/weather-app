import './index.scss';
import React from 'react';

const Current = ({ location, data }) => {
	return (
		location &&
		data && (
			<div className='current-container'>
				<p>{location.name}</p>
				<img
					src={data.condition.icon}
					alt='curr_temp_img'
				/>
				<p>{`${data.temp_c} °C`}</p>
			</div>
		)
	);
};

export default Current;
