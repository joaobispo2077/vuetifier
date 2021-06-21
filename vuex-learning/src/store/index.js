import Vue from 'vue';
import Vuex from 'vuex';

import Cart from './modules/cart';
import Parameters from './modules/parameters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cart,
    Parameters
  }
});
