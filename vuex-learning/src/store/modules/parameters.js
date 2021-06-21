export default {
  state: {
    quantity: 0,
    price: 0
  },
  getters: {
    defaultQuantity(state) {
      return state.quantity;
    },
    defaultPrice(state) {
      return state.price;
    }
  },
  mutations: {
    changeDefaultQuantity(state, payload) {
      state.quantity = payload;
    },
    changeDefaultPrice(state, payload) {
      state.price = payload;
    },
  },
  actions: {
    changeDefaultQuantity({ commit }, payload) {
      commit('changeDefaultQuantity', payload);
    },
    changeDefaultPrice({ commit }, payload) {
      commit('changeDefaultPrice', payload);
    },
  }
}