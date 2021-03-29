<template lang="pug">
.Code-Items
	code-item.Code-Items__Item(
	v-for="(item, code) in items" :code="code" :item="item")
	.Code-Items__404(v-if="items.length === 0") Ничего не нашлось. Иди, Аня даст код:)
</template>

<script>
import CodeItem from '@/components/CodeItem.vue';

export default {
	name: 'code-items',
	components: { CodeItem },
	methods: {
		filtered({ name }) {
			const lowerName = name.toLowerCase();

			return lowerName.indexOf((this.search).toLowerCase());
			// if (search === '' ) return true;
			// else if (lowerName.indexOf(search) !== -1) return true;
			// return false;
		},
	},
	computed: {
		items() {
			return this.$store.state.items;
		},
	},
};
</script>

<style>
.Code-Items__404 {
	color: beige;
	font-size: 24px;
}
</style>
