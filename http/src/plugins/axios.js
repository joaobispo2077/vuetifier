import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = '';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
})