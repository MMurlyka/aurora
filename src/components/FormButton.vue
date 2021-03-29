<template lang="pug">
button.Button()
	slot
</template>

<script>
export default {
	name: 'from-button',
	props: {},
};
</script>

<style>
.Button {
	height: 40px;
	display: block;
	width: 100%;
	border-radius: 10px;
	border: 2px solid blueviolet;
	background: coral;
}
</style>
