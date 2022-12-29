import './index.scss';
import React, { useContext } from 'react';
import Current from 'src/pages/landing/current';
import { WeatherContext } from 'src/store/contexts';

const Landing = () => {
	const {
		response: { data },
	} = useContext(WeatherContext);
	return (
		<div className='landing-container'>
			<Current
				location={data.location}
				data={data.current}
			/>
		</div>
	);
};

export default Landing;
