import './index.scss';
import React, { useContext } from 'react';
import { DataContext } from 'src/store/context';
import tryGet from 'src/utils/tryGet';
import days from 'src/data/days';

const SideForecast = () => {
	const {
		response: { data },
	} = useContext(DataContext);
	const forecastData = tryGet(() => data.forecast.forecastday, []);
	return (
		<div className='sideForecast-container'>
			<p>3-Day Forecast </p>
			{forecastData.map(({ date, day }) => {
				const dayIndex = new Date(date).getDay();
				const nameDay = days.find(({ id }) => id === dayIndex).name;
				return (
					<>
						<div
							key={date}
							className='sideForecast-container__items'>
							<p>{nameDay}</p>
							<img
								src={day.condition.icon}
								alt='temp'
							/>
							<p>{date}</p>
						</div>
						<hr />
					</>
				);
			})}
		</div>
	);
};

export default SideForecast;
