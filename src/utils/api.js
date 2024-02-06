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

	getListFilteredCarWash(querry) {
		return fetch(`${this.#baseurl}/api/carwashes/?${querry}&limit=50`, {
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

	postRatingCarWash(score, carwashId, captcha) {
		return fetch(`${this.#baseurl}/api/rating/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({
				score,
				carwash_id: carwashId,
				captcha,
			}),
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
