<template>
	<div class="character-creator">
		<h1 class="title">Character Creator</h1>
		<section>
			<b-field label="Name">
				<b-input v-model="name" maxlength="50" required></b-input>
			</b-field>

			<div class="field is-grouped is-grouped-centered">
				<b-field label="Profession">
					<b-select v-model="profession" required>
						<option v-for="prof in professions" :key="prof">
							{{ prof }}
						</option>
					</b-select>
				</b-field>
			</div>
			<br><br>
			<b-button tag="input" native-type="submit" value="Submit" @click="createCharacter" />
		</section>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: "CharacterCreator",
	data(){
		return{
			name: '',
			profession: '',
			professions: ['Mage', 'Warrior', 'Thief']
		}
	},
	methods: {
		cleanInputs(){
			this.name = '';
			this.profession = '';
		},
		createCharacter(){
			axios.post('http://localhost:9000/characters', {
				name: this.name,
				profession: this.profession
			});
			this.cleanInputs();
		}
	}
};
</script>

<style scoped>
</style>
