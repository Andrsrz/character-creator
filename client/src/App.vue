<template>
	<div id="app">
		<section class="hero is-fullheight">
			<div class="hero-head">
				<div class="container has-text-centered">
					<b-button class="top-button" type="is-primary" @click="changeView">
						{{ this.title }}
					</b-button>
					<CharacterView v-show="showCharacters" :characters="characters"/>
					<CharacterCreator v-show="showCreator"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'

import CharacterView from './components/CharacterView.vue'
import CharacterCreator from './components/CharacterCreator.vue'

export default {
	name: 'App',
	components: {
		CharacterView,
		CharacterCreator
	},
	data(){
		return{
			showCharacters: true,
			showCreator: false,
			title: "Create a Character",
			characters: null
		}
	},
	methods: {
		changeView(){
			if(this.showCharacters == true){
				this.showCharacters = false;
				this.showCreator = true;
				this.title = "Characters"
			}else{
				this.showCharacters = true;
				this.showCreator = false;
				this.title = "Create a Character";
			}
		},
		getCharacters(){
			axios.get('http://localhost:9000/characters')
				 .then(response => (this.characters = response.data));
		},
	},
	mounted(){
		this.getCharacters();
	}
}
</script>

<style lang="scss">
.top-button {
	margin: 20px;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #9B2335;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
