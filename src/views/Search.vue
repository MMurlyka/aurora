<template lang="pug">
code-items()
</template>

<script>
import CodeItems from '../components/CodeItems.vue';

export default {
	name: 'Search',
	components: { CodeItems },
	computed: {
		search() {
			return this.$store.state.search;
		},
		items() {
			return this.$store.state.items;
		},
	},
};
</script>
