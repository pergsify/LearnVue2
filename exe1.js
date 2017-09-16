Vue.component('message', {

	props: [ 'title', 'body'],

	data() {
		return {
			isVisible: true
		}
	},

	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    {{ title }}
		    <!-- <button class="delete" aria-label="delete" @click="hideModal"></button> -->
		    <button class="delete" aria-label="delete" @click="isVisible = false"></button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`,
	// Or place it inline @click="isVisible = false"
	// methods: {
	// 	hideModal() {
	// 		this.isVisible = false;
	// 	}
	// }
});

new Vue({
	el: '#root'
});