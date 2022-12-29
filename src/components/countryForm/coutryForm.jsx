import './index.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Country, City } from 'country-state-city';
import { WeatherContext } from 'src/store/contexts';
import { SliderContext } from 'src/store/contexts';

const CountryForm = () => {
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);
	const { dispatch: dispatchSlider } = useContext(SliderContext);
	const { dispatch: dispatchWeather } = useContext(WeatherContext);

	useEffect(() => {
		const countriesMap = Country.getAllCountries().map(({ name, isoCode }) => ({
			name,
			value: isoCode,
		}));
		countriesMap.unshift({ name: 'Select country', value: '' });
		setCountries(countriesMap);
	}, []);

	const handleCountry = (e) => {
		const citiesMap = City.getCitiesOfCountry(e.target.value).map(
			({ name, latitude, longitude }) => ({ name, value: `${latitude},${longitude}` })
		);
		citiesMap.unshift({ name: 'Select city', value: '' });
		setCities(citiesMap);
		console.log(citiesMap)
	};

	const handleCity = (e) => {
		dispatchWeather({ type: 'update', payload: { q: e.target.value } });
		dispatchSlider({ type: 'switch', payload: { open: false } });
	};

	return (
		<div className='countryForm-container'>
			<header>Select your city</header>
			<div className='countryForm-container__item'>
				<p>Country</p>
				<select onChange={handleCountry}>
					{countries.map(({ name, value }, index) => (
						<option
							key={`${name}_${index}`}
							value={value}>
							{name}
						</option>
					))}
				</select>
			</div>
			<div className='countryForm-container__item'>
				<p>City</p>
				<select
					onChange={handleCity}
					disabled={!cities.length}>
					{cities.map(({ name, value }, index) => (
						<option
							key={`${name}_${index}`}
							value={value}>
							{name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default CountryForm;
