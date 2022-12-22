import './index.scss';
import React from 'react';
import Current from 'src/components/current';
import TodayDashboard from 'src/components/todayDashboad';
import CondDashboard from 'src/components/condDashboard';

const Landing = () => {
	return (
		<div className='landing-container'>
			<Current />
			<TodayDashboard />
			<CondDashboard />
		</div>
	);
};

export default Landing;
