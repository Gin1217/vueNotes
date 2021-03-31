import Vue from 'vue'
import Vuex from 'vuex'
import { types } from './types'

//引入章鱼猫模块
import octocat from './modules/octocat'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    octocat
  },
  state: {
    list: []
  },
  actions: {
    addDataTolistAction({ commit }, item) {
      commit('addDataTolist', item)
    },
    delDataTolistAction({ commit }, index) {
      commit('delDataTolist', index)
    }
  },
  mutations: {
    [types.ADD_DATA_TO_LIST](state, item) {
      state.list.push(item)
    },
    [types.DEL_DATA_TO_LIST](state, index) {
      state.list.splice(index, 1)
    }
  },
  getters: {
    vuexList(state) {
      return state.list
    }
  }
})

export default store
