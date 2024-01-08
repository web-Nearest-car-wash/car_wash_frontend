export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	}
}

const api = new Api({
	baseUrl: 'https://car-wash.site/',
	headers: {
		'content-type': 'application/json',
	},
});

export default api;
