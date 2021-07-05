import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_FIREBASE_URL;

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    const api = axios.create({
      baseURL: process.env.VUE_APP_FIREBASE_URL
    });

    api.interceptors.request.use(async config => {
      await new Promise(resolve => {

        setTimeout(() => resolve(true), 2500);
      });

      console.log('config', config)
      return config;
    })

    Vue.prototype.$http = api;
  }
})