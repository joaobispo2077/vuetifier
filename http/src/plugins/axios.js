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
    }, error => Promise.reject(error));

    api.interceptors.response.use(response => {
      // const normalizedUsers = Object.entries(response.data)
      //   .map(([key, value]) => ({
      //     id: key,
      //     name: value.name,
      //     email: value.email
      //   }));

      // console.log('normalizedUsers', normalizedUsers);

      // response.data = normalizedUsers;
      return response;
    }, error => Promise.reject(error))
    Vue.prototype.$http = api;
  }
})