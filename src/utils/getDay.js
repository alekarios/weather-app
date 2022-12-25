const getDay = (days, date) => {
	const dayIndex = new Date(date).getDay();
	return days.find(({ id }) => id === dayIndex).name;
};

export default getDay;
