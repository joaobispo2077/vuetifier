import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'Produto 1', quantity: 7, price: 14.55 },
      { id: 2, name: 'Produto 2', quantity: 10, price: 22.99 },
      { id: 3, name: 'Produto 3', quantity: 1, price: 43.18 },
    ]
  },
  getters: {
    getTotal(state) {
      return state.products.map(p => p.quantity * p.price)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    }
  }
});
