<template>
	<div class="character-creator">
		<h1 class="title">Character Creator</h1>
		<section>
			<b-field label="Name">
				<b-input v-model="name" maxlength="50"></b-input>
			</b-field>

			<div class="field is-grouped is-grouped-centered">
				<b-field label="Profession">
					<b-select placeholder="Select a Profession">
						<option v-model="profession" v-for="prof in professions" :key="prof">
							{{ prof }}
						</option>
					</b-select>
				</b-field>
			</div>
		</section>
		{{ name }}
		{{ profession }}
	</div>
</template>

<script>
export default {
	name: "CharacterCreator",
	data(){
		return{
			name: '',
			profession: '',
			professions: ['Mage', 'Warrior', 'Thief']
		}
	}
};
</script>

<style scoped>
</style>
