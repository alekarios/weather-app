import './index.scss';
import React, { useContext } from 'react';
import { SliderContext } from 'src/store/contexts';

const Search = () => {
	const { dispatch } = useContext(SliderContext);

	const handleClick = () => {
		dispatch({ type: 'switch', payload: { open: true } });
	};
	return (
		<div className='search-container'>
			<div className='search-container__items'>
				<p>T-shirt or hoodie</p>
				<p>{`Select your city and choose your outfit :)`}</p>
				<button onClick={handleClick}>Add City</button>
			</div>
		</div>
	);
};

export default Search;
