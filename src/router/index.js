import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/Search.vue';
import Item from '../views/Item.vue';

const routes = [
	{
		path: '/',
		name: 'Search',
		component: Search,
	},
	{
		path: '/item/:id',
		name: 'Item',
		component: Item,
		props: true,
	},
	{
		path: '/create',
		name: 'create',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component() {
			return import(/* webpackChunkName: "Сreate" */ '../views/Create.vue');
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
