import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    point: 0
  },
  mutations: {
    totalPoin(state, value) {
      state.point = value
    }
  },
  actions: {},
  modules: {}
});