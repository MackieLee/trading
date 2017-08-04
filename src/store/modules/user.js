import * as types from '../mutation-types'

const state = {
  user: ''
}

const getters = {
  getUser: state => state.user
}

const mutations = {
  [types.JOIN] (state, user) {
    state.user = user
  }
}

const actions = {
  join ({ commit }, user, password) {
    if (user && password) {
      commit(types.JOIN, user)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
