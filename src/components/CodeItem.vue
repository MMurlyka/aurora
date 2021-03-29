<template lang="pug">
router-link.Item(:to="'/item/' + code" v-if="isVisible")
	.Item__Code(:class="{Item__Discount: item.discounted}") {{ code }}
	.Item__Name {{ item.name }}
		span.Item__Piece(v-if="item.piece")  [шт.]
		span.Item__Weight(v-if="!item.piece")  [ваг.]
		span.Item__Discount(v-if="item.discounted")  [Знижена ціна!]
</template>

<script>
export default {
	name: 'code-item',
	methods: {
	},
	computed: {
		isVisible() {
			const name = this.item.name.toLowerCase();
			const { search } = this;

			if (search === '') return true;
			if (name.indexOf(search) !== -1) { return true; }
			return false;
		},
		search() {
			return this.$store.state.search.toLowerCase();
		},
	},
	props: {
		item: Object,
		code: {
			required: true,
		},
	},
};
</script>

<style lang="stylus">
.Item
	display: flex;
	color: #2c3e50;
	color: white;
	margin-bottom: 1px;
	background: #0f0f0f;
	text-decoration: none;

	&__Code
		width: 45px;
		border-right: 1px solid #0db39e;
		padding: 8px;
		text-align: right;

	&__Name
		padding: 8px;

	&__Weight
		color: #54478c;
	&__Piece
		color: #f29e4c;
	&__Discount
		color: #efea5a;

</style>
