import './index.scss';
import React from 'react';
import getDay from 'src/utils/getDay';

const Current = ({ location, data }) => {
	console.log(data);
	return (
		location &&
		data && (
			<div className='current-container'>
				<div className='current-container__main'>
					<p>{getDay(data.last_updated)}</p>
					<img
						src={data.condition.icon}
						alt='curr_temp_img'
					/>
					<p>{data.condition.text}</p>
				</div>
				<div className='current-container__tempInfo'></div>
			</div>
		)
	);
};

export default Current;
