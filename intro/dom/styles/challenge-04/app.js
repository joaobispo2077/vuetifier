new Vue({
	el: '#challenge',
	data: {
		effect: 'spotlight',
		baseClass: '',
		dynamicClass: false,
		color: 'blue',
		progress: 1,
		intervalId: ''
	},
	methods: {
		initializeEffect() {
			setInterval(() => this.effect = this.effect === 'spotlight' ? 'shrink' : 'spotlight', 2500);
		},
		initializeProgress() {
			this.intervalId = setInterval(() => {
				this.progress < 100 ? this.progress++ : clearInterval(this.intervalId)
				console.log('Progress...', this.progress);
			}, 100);
		}
	},
	computed: {
		getClass() {
			return this.dynamicClass ? this.baseClass : '';
		},
		getProgress() {
			return {
				width: this.progress + '%'
			}
		}
	}
})
