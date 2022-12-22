import './index.scss';
import React from 'react';
import SideForecast from 'src/components/sideForecast';

const Layout = ({ children }) => {
	return (
		<div className='layout-container'>
			<div className='layout-container__children'>{children}</div>
			<SideForecast/>
		</div>
	);
};

export default Layout;
