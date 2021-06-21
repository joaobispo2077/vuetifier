/* eslint-disable no-unused-vars */
export const actions = {
  addProduct({ commit, state, rootState }, payload) {
    setTimeout(() => {
      commit('addProduct', payload);
    }, 1000);
  },
}