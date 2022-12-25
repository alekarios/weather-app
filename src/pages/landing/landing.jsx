import './index.scss';
import React, { useContext } from 'react';
import Current from 'src/pages/landing/current';
import TodayDashboard from 'src/pages/landing/todayDashboad';
import { DataContext } from 'src/store/context';

const Landing = () => {
	const {
		response: { data },
	} = useContext(DataContext);
	return (
		<div className='landing-container'>
			<Current
				location={data.location}
				data={data.current}
			/>
			<TodayDashboard data={data.forecast} />
		</div>
	);
};

export default Landing;
