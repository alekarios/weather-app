import './index.scss';
import React, { useContext } from 'react';
import { SliderContext } from 'src/store/contexts';

const Slider = ({ children }) => {
	const { state, dispatch } = useContext(SliderContext);

	const handleClick = () => {
		dispatch({ type: 'switch', payload: { open: false } });
	};
	return (
		<div className={`slider-container ${state.open ? 'active' : ''}`}>
			<div
				onClick={handleClick}
				className='slider-container__close'>
				X
			</div>
			{children}
		</div>
	);
};

export default Slider;
