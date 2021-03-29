<template lang="pug">
.Page
	header.Page__Header
		field-input(:value="search" type="search" @input="$store.commit('search', $event.target.value)")
	main.Page__Main
		router-view
	footer.Page__Foo
		nav.Nav
			ul.Nav__List
				//li.Nav__Item
					router-link.Nav__Link(to="/settings")
						icon-cogs.Nav__Icon(width="20" height="20")
				li.Nav__Item
					router-link.Nav__Link(to="/")
						icon-search.Nav__Icon(width="20" height="20")
				li.Nav__Item
					router-link.Nav__Link(to="/create")
						icon-plus.Nav__Icon(width="20" height="20")
</template>
<script>
export default {
	name: 'app',
	mounted() {
		this.$store.dispatch('load');
	},
	computed: {
		search() {
			return (this.$store.state.search).toLowerCase();
		},
	},
};
</script>
<style lang="stylus">
body, html, #app
	height: 100%;
	margin 0
	font-family Avenir, Helvetica, Arial, sans-serif

.Page
	background: #0db39e;
	height: 100%;
	overflow-y: auto;

	&__Header
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		height:62px;
		padding:16px;
		margin-bottom: 0;
		box-sizing:border-box;
		background: #16db93;

	&__Main
		padding-bottom: 50px;

	&__Foo
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #16db93;
		z-index 5;
		padding: 10px;

.Nav
	margin: 0;
	padding: 0;

	&__List
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;

	&__Link
		display: block;
		color: white;
		padding: 5px;

	&__Icon
		display: block;

.router-link-active
	color: #efea5a;
</style>
