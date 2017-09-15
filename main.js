Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the store', completed: true },
				{ task: 'Finish screencast', completed: false },
				{ task: 'Make donatioin', completed: false },
				{ task: 'Clear Inbox', completed: false },
				{ task: 'Make dinner', completed: false },
				{ task: 'Clean Room', completed: true }
			]
		};
	}
});

Vue.component('task', {
	 template: '<li><slot></slot></li>',

	//  Data equals to a function that returns an object, Keep this in mind
	// data() {
	// 	return {
	// 		message: 'Foobar'
	// 	}
	// }
});

// Vue.component('order', {
// 	template: '<h1>Hello JUN</h1>'
// });

new Vue({
	el: '#root'
})