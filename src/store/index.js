import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_USER = "SET_USER";

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      // call API
      commit(SET_USER, user);
    },
  },
  modules: {},
});
