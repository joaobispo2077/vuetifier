import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    quantity: 0,
    price: 0
  },
  getters: {
    getTotal(state) {
      return state.products.map(p => p.quantity * p.price)
        .reduce((total, atual) => total + atual, 0);
    },
    defaultQuantity(state) {
      return state.quantity;
    },
    defaultPrice(state) {
      return state.price;
    }
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    changeDefaultQuantity(state, payload) {
      state.quantity = payload;
    },
    changeDefaultPrice(state, payload) {
      state.price = payload;
    },
  },
  actions: {
    addProduct({ commit }, payload) {
      setTimeout(() => {
        commit('addProduct', payload);
      }, 1000);
    },
    changeDefaultQuantity({ commit }, payload) {
      commit('changeDefaultQuantity', payload);
    },
    changeDefaultPrice({ commit }, payload) {
      commit('changeDefaultPrice', payload);
    },
  }
});
