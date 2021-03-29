<template lang="pug">
div
	label.Group-Field
		.Group-Field__Label Код
		field-input.Group-Field__Field(name="id" :value="id" @input="id = $event.target.value")
	label.Group-Field
		.Group-Field__Label Название
		field-input.Group-Field__Field(name="name" :value="name" @input="name = $event.target.value")
	label.Group-Field
		.Group-Field__Label Кнопка
		field-input.Group-Field__Field(name="button" type="number" :value="button"
			@input="button = $event.target.value")
	label.Group-Field
		.Group-Field__Label Штучка?
		input(name="piece" :checked="piece" type="checkbox" value="piece"
			@change="piece = $event.target.checked")
	label.Group-Field
		.Group-Field__Label Уценка?
		input(name="discounted" :checked="discounted" value="discounted" type="checkbox"
			@change="discounted = $event.target.checked")
	label.Group-Field
		.Group-Field__Label Доступно?
		input(name="available" :checked="available" value="available" type="checkbox"
			@change="available = $event.target.checked")
	.Group-Field
		form-button(@click="create()") Создать
</template>

<script>
import FormButton from '../components/FormButton.vue';

export default {
	name: 'Create',
	components: { FormButton },
	methods: {
		create() {
			this.$store.dispatch('create', {
				id: this.id,
				name: this.name,
				button: this.button,
				piece: this.piece,
				discounted: this.discounted,
				available: this.available,
			});
			this.$router.router.push('');
			// const payload = {
			// 	id: this.id,
			// 	name: this.$refs.name.input.value,
			// };

			// console.log(payload);
		},
	},
	data() {
		return {
			id: '',
			name: '',
			button: '',
			piece: false,
			discounted: false,
			available: true,
		};
	},
	// computed: {
	// 	name() {
	// 		return this.$store.state.items[this.id].name;
	// 	},
	// 	button() {
	// 		return this.$store.state.items[this.id].button;
	// 	},
	// 	piece() {
	// 		return this.$store.state.items[this.id].piece;
	// 	},
	// 	discounted() {
	// 		return this.$store.state.items[this.id].discounted;
	// 	},
	// 	available() {
	// 		return this.$store.state.items[this.id].available;
	// 	},
	// },
};
</script>

<style scoped lang="stylus">
.Group-Field
	display: block;
	color: white;
	padding: 10px;
	margin-bottom: 1px;
	background: #0f0f0f;
</style>
