/* eslint-disable no-unused-vars */
export default {
  state: {
    products: [],
  },
  getters: {
    getTotal(state, getters, rootState) {
      return state.products.map(p => p.quantity * p.price)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    addProduct({ commit, state, rootState }, payload) {
      setTimeout(() => {
        commit('addProduct', payload);
      }, 1000);
    },
  }
}