Vue.component('coupon', {
	template: `
		<input id="input" placeholder="Enter your coupon" @blur="onCouponApplied">
	`,

	methods: {
		onCouponApplied() {
			this.$emit('applied')
		}
	}


});

new Vue({
	el: '#root',

	data: {
		couponApplied: false,
		

	},

	methods: {
		onCouponApplied() {
			this.couponApplied = true
			
		}
	}
});