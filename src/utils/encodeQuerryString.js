const encodeQueryString = (obj) => {
	const query = Object.entries(obj)
		.filter(([, value]) => value)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');
	return query ? `?${encodeURI(query)}` : '';
};

export default encodeQueryString;
