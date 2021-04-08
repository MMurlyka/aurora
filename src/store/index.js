import { createStore } from 'vuex';

export default createStore({
	state: {
		search: '',
		items: {},
	},
	getters: {
		entry: (state) => Object.values(state.items),
	},
	mutations: {
		search(state, payload) {
			state.search = payload;
		},
		addAll(state, payload) {
			state.items = payload;
		},
		add(state, payload) {
			state.items[payload.id] = payload;
		},
		create(state, { id, ...payload }) {
			state.items[id] = payload;
		},
		update(state, { id, ...payload }) {
			state.items[id] = payload;
		},
	},
	actions: {
		async load({ commit }) {
			const url = 'https://jqhtg290ee.execute-api.eu-west-3.amazonaws.com/';
			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					Object.keys(response).forEach((id) => {
						const item = response[id];
						if (item.discounted === undefined) item.discounted = false;
						if (item.piece === undefined) item.piece = false;
						if (item.available === undefined) item.available = false;
						if (item.button === undefined) item.button = 0;
						commit('add', { id: Number(id), ...item });
					});
				});
		},
		async create({ commit }, payload) {
			const url = new URL('https://jqhtg290ee.execute-api.eu-west-3.amazonaws.com/');

			fetch(url, {
				method: 'POST',
				cache: 'no-cache',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					commit('create', response);
				});
		},
		async update({ commit }, payload) {
			const url = new URL('https://jqhtg290ee.execute-api.eu-west-3.amazonaws.com/update');

			// url.search = new URLSearchParams(payload).toString();
			fetch(url, {
				method: 'POST',
				cache: 'no-cache',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					commit('update', response[0]);
				});
		},
	},
	modules: {},
});
