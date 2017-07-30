import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

const state = {
  user: ''
}

export default new Vuex.Store({
  modules: {
    user
  }
})
