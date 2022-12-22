import './index.scss';
import React from 'react';

const SideForecast = () => {
	return (
        <div className='sideForecast-container'>
            <p>title</p>
            <div className='sideForecast-container__items'>
                <p>day</p>
                <p>icon&desc</p>
                <p>date</p>
            </div>
            <hr/>
		</div>
	);
};

export default SideForecast;
