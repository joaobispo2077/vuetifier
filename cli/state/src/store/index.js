import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10,
    inputed: 'ata'
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--,
    updateMessage(state, message) {
      state.inputed = message;
    }
  },
  actions: {
    decrement: ({ commit }) => commit('decrement')
  },
  modules: {
  }
})
