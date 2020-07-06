<template>
	<div class="character-view">
		<h1 class="title">Character View</h1>
		<p v-for="(character, index) in characters" :key="index">
			{{ character.name }} is a {{ character.profession }}
		</p>
	</div>
</template>

<script>
export default {
	name: "CharacterView",
	props: {
		characters: Array
	}
};
</script>

<style scoped>
</style>
