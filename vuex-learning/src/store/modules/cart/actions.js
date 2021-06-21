/* eslint-disable no-unused-vars */
export const actions = {
  addProduct({ commit, state, rootState }, payload) {
    setTimeout(() => {
      commit('addProduct', payload);
    }, 1000);
  },
}

// put into Root State while this action is inside a namespaced state
// export const actions = {
//   addProduct: {
//     root: true,
//     handler({ commit, state, rootState }, payload) {
//       setTimeout(() => {
//         commit('addProduct', payload);
//       }, 1000);
//     },
//   }
// }