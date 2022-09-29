import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  getters: {
  },
  mutations: {
    setDrawer(state, value) {
      state.drawer = value;
    },
  },
  actions: {
    setDrawer({ commit }, value) {
      commit('setDrawer', value);
    },
  },
  modules: {
  },
});
