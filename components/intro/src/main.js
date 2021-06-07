import Vue from 'vue'
import App from './App.vue'
import Counter from './Counter.vue';

Vue.config.productionTip = false

Vue.component('Counter', Counter);

new Vue({
  render: h => h(App),
}).$mount('#app')
