import './index.scss';
import tryGet from 'src/utils/tryGet';
import getDay from 'src/utils/getDay';
import days from 'src/data/days';

const WeeklyForecast = ({ data }) => {
	const forecastData = tryGet(() => data.forecastday, []);
	return (
		<div className='weeklyForecast-container'>
			<p>{`${forecastData.length}-Day Forecast `}</p>
			{forecastData.map(({ date, day }) => {
				const dayName = getDay(days, date);
				return (
					<>
						<div
							key={date}
							className='weeklyForecast-container__items'>
							<p>{dayName}</p>
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

export default WeeklyForecast;
