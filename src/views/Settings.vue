<template lang="pug">
.Settings
	| фильтры
	label.Group-Field
		.Group-Field__Label Доступно?
		input(name="available" :checked="available" value="available" type="checkbox"
			@change="available = $event.target.checked")
</template>
