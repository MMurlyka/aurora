<template lang="pug">
div.home
	img(alt="Vue logo" src="../assets/logo.png")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
};
</script>
