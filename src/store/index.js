import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  user: ''
}

const mutations = {
  [types.SIGN_IN](state, user) {
    state.user = user
  }
}

const getters = {
  getUser: state => state.user
}

const actions = {
  signIn({ commit }, user, password) {
    if (user && password) {
      commit(types.SIGN_IN, user)
    }
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})