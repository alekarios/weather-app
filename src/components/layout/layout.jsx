import './index.scss';
import React from 'react';

const Layout = ({ children }) => {
	return (
		<div className='layout-container'>
			<div className='layout-container__children'>{children}</div>
		</div>
	);
};

export default Layout;
