<template lang="pug">
.FieldInput
	input.FieldInput__Input(:type="type" ref="input" :placheholder="placeholder" :value="value"
		:name="name" @input="$emit('input', $event)")
</template>

<script>
export default {
	name: 'field-input',
	emits: ['update:title'],
	props: ['placeholder', 'name', 'value', 'type'],
};
</script>

<style scoped lang="stylus">
.FieldInput
	&__Input
		display: block;
		width: 100%;
		height: 30px;
		padding: 0 15px;
		border-radius: 0px;
		border: none;
		box-sizing: border-box;
</style>
