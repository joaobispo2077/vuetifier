/* eslint-disable no-unused-vars */
export const getters = {
  getTotal(state, getters, rootState) {
    return state.products.map(p => p.quantity * p.price)
      .reduce((total, atual) => total + atual, 0);
  },
}