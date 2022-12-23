import './index.scss';
import React, { useState, useContext } from 'react';
import { DataContext } from 'src/store/context';

const Search = () => {
	const [city, setCity] = useState('');
	const { dispatch } = useContext(DataContext);

	const handleType = (e) => {
		const { value } = e.target;
		setCity(value);
	};

	const handleSearch = () => {
		dispatch({
			type: 'update',
			payload: { q: city },
		});
	};

	return (
		<div className='search-container'>
			<input
				onChange={handleType}
				placeholder='Search for cities'
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default Search;
