import './index.scss';
import React, { useState } from 'react';

const Search = () => {
	const [city, setCity] = useState('');

	const handleType = (e) => {
		const { value } = e.target;
		setCity(value);
	};

	const handleSearch = () => {
		//add functionality
		console.log(city);
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
