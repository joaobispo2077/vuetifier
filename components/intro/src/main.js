import Vue from 'vue'
import App from './App.vue'
import Counters from './Counters.vue';

Vue.config.productionTip = false

Vue.component('Counters', Counters);

new Vue({
  render: h => h(App),
}).$mount('#app')
