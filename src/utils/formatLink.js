function formatLink(linkToFormat) {
	try {
		const url = new URL(linkToFormat);
		return url.host;
	} catch (error) {
		console.error('Ошибка в формате ссылки:', error);
		return '';
	}
}

export default formatLink;
