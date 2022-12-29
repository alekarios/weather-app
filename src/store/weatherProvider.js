/* eslint-disable default-case */
import React, { useReducer, useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'src/components/loader/loader';
import { WeatherContext } from './contexts';

const headers = {
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': '*',
};

const initialState = {
	key: 'e83ef2057e354879951114815222312',
	days: 10,
	q: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'reset':
			return initialState;
		case 'update':
			return { ...state, ...action.payload };
	}
};

const WeatherProvider = ({ children }) => {
	axios.defaults.baseURL = `https://api.weatherapi.com/v1/forecast.json`;
	const [response, setResponse] = useState({
		data: {},
		error: '',
		loading: true,
	});
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetch = async () => {
			try {
				const result = await axios.request({
					params: state,
					headers,
				});
				setResponse((prevState) => ({
					...prevState,
					data: result.data,
				}));
			} catch (error) {
				setResponse((prevState) => ({
					...prevState,
					error,
				}));
			} finally {
				setResponse((prevState) => ({
					...prevState,
					loading: false,
				}));
			}
		};
		fetch();
	}, [state]);

	const contextValue = useMemo(
		() => ({
			dispatch,
			response,
		}),
		[response]
	);

	return (
		<WeatherContext.Provider value={contextValue}>
			<Loader enable={response.loading} />
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherProvider;
