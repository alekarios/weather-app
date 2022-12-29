/* eslint-disable default-case */
import React, { useReducer, useMemo } from 'react';
import { SliderContext } from './contexts';

const initialState = {
	open: false,
	data: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'switch':
			return { ...state, ...action.payload };
	}
};

export const SliderProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const contextValue = useMemo(
		() => ({
			dispatch,
			state,
		}),
		[state]
	);

	return (
		<SliderContext.Provider value={contextValue}>
			{children}
		</SliderContext.Provider>
	);
};

export default SliderProvider;
