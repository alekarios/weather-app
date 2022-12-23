const tryGet = (getter, fallback) => {
	try {
		const out = getter();
		return out;
	} catch (error) {
		return fallback;
	}
};

export default tryGet;
