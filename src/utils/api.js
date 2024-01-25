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

	getListCarWash() {
		return fetch(`${this.#baseurl}/api/carwashes/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getListFilteredCarWash(querry) {
		return fetch(`${this.#baseurl}/api/carwashes/?${querry}`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getListServices() {
		return fetch(`${this.#baseurl}/api/keywords_services/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getListTypes() {
		return fetch(`${this.#baseurl}/api/types/`, {
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
