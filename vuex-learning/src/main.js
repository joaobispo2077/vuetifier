import Vue from 'vue';
import App from './App.vue';
import Painel from './components/Painel';
import store from './store';

Vue.config.productionTip = false

Vue.component('Painel', Painel)

Vue.filter('cash', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
