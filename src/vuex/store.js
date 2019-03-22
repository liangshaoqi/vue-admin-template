/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cancelArr: []
  },
  getters: {},
  // 修改state状态
  mutations: {
    // 添加事件到队列
    addCancelArr(state, val) {
      state.cancelArr.push(val);
    },
    // 清空队列
    clearCancelArr(state) {
      const len = state.cancelArr.length;
      state.cancelArr.splice(0, len);
    }
  },
  // 触发mutations事件
  actions: {
    runCancel({ commit, state }) {
      state.cancelArr.forEach(cancel => {
        cancel && cancel("cancel");
      })
      //触发mutation中clearCancelArr事件
      commit('clearCancelArr')
    }
  }
});
