import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_FIREBASE_URL;

// axios.defaults.headers.common['Authorization'] = 'fake-token';
// axios.defaults.headers.get['Accep'] = 'application/json';

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    const api = axios.create({
      baseURL: process.env.VUE_APP_FIREBASE_URL,
      headers: {
        'Authorization': 'fake-common-token', // token that will work in every request
        get: { // token that works only i get request
          'Authorization': 'fake-get-token'
        }
      }
    });

    api.interceptors.request.use(async config => {
      await new Promise(resolve => {

        setTimeout(() => resolve(true), 2500);
      });

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