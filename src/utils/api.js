export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	};

	getListCarWash() {
		return fetch(`${this.#baseurl}/api/carwashes/`, {
			headers: this.#headers,
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				};
				return Promise.reject(new Error(`Ошибка: ${res.status}`));
			})
			.catch(err => err)
	};
};

const api = new Api({
	baseUrl: 'http://185.41.161.91',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
