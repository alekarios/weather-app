import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api-generator.retool.com/MBIl4t/hotel';

const useFetch = (params) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetch = async () => {
			try {
				setLoading(true);
				const result = await axios.request({ params });
				setData(result.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetch();
	}, [params]);
	return { data, error, loading };
};

export default useFetch;
