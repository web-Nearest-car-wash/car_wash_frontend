import { BASE_URL } from './constants';

export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	}

	#onResponse(res) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	}

	getListCarWash({ latitude, longitude }) {
		return fetch(
			`${this.#baseurl}/api/carwashes/?limit=50&latitude=${latitude}&longitude=${longitude}`,
			{
				headers: {
					...this.#headers,
				},
			}
		).then(this.#onResponse);
	}

	getCarWash(id) {
		return fetch(`${this.#baseurl}/api/carwashes/${id}/`, {
			method: 'GET',
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	searchCarWashes(searchValue) {
		return fetch(
			`${this.#baseurl}/api/carwashes/?search=${searchValue}&limit=50`,
			{
				headers: {
					...this.#headers,
				},
			}
		).then(this.#onResponse);
	}

	getCarWashCard(id) {
		return fetch(`${this.#baseurl}/api/carwashes/${id}/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}
}

const api = new Api({
	baseUrl: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
