/* eslint-disable default-case */
import React, { createContext, useReducer } from 'react';
import useFetch from '../hooks/useFetch';

const initialState = {
	_page: 1,
	_limit: 10,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'reset':
			return initialState;
		case 'update':
			return { ...state, ...action.payload };
	}
};

//create context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const apiResponse = useFetch(state);
	const value = { state, dispatch, apiResponse };
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
