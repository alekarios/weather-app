import './index.scss';
import React from 'react';
import tryGet from 'src/utils/tryGet';

const TodayDashboard = ({ data }) => {
	const filteredData = tryGet(
		() => data.forecastday[0].hour.filter((element, index) => Math.abs(index % 2) === 1),
		[]
	);
    return <div className='todayDashboard-container'>
        {filteredData.map(({ condition, time, temp_c }) => (
            <div key={ time } className='todayDashboard-container__hour'>
                <p>{ `${temp_c} °C` }</p>
                <img src={condition.icon} alt='hour' />
                <p>{ new Date(time).toLocaleTimeString() }</p>
            </div>
        ))}
    </div>;
};

export default TodayDashboard;
