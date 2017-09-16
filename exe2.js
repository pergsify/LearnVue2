Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  	<div class="modal-background" @click="$emit('close')"></div>
			  	<div class="modal-content">
			  		<div class="box">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
						</p>		  
					</div>  
			 	</div>
		  	<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`,
});

new Vue({
	el: '#root',

	data: {
		showModal: false
	}
});
