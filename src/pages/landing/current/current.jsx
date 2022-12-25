import './index.scss';
import React from 'react';

const Current = ({ location, data }) => {
	return (
		location &&
		data && (
			<div className='current-container'>
				<div className='current-container__info'>
					<p>{location.name}</p>
					<p>{`${data.temp_c} °C`}</p>
				</div>
				<img
					src={data.condition.icon}
					alt='curr_temp_img'
				/>
			</div>
		)
	);
};

export default Current;
