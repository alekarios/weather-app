import days from 'src/data/days';

const getDay = (date) => {
	const dayIndex = new Date(date).getDay();
	return days.find(({ id }) => id === dayIndex).name;
};

export default getDay;
