import './index.scss';
import React from 'react';
import tryGet from 'src/utils/tryGet';
import TempCard from 'src/components/tempCard';
import Carousel from 'src/components/carousel';

const TodayDashboard = ({ data }) => {
	const hourData = tryGet(() => {
		return data.forecastday[0].hour;
	}, []);

	const tempCards = hourData.map(({ condition, time, temp_c }, index) => (
		<TempCard
			key={index}
			primaryTxt={`${temp_c} °C`}
			img={condition.icon}
			subTxt={new Date(time).toLocaleTimeString()}
		/>
	));

	return (
		<div className='todayDashboard-container'>
			<Carousel data={tempCards} />
		</div>
	);
};

export default TodayDashboard;
