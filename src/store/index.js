import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user: user,

  }
  // 如果开启严格模式，那么不在Mutations中修改状态，会报错。这儿并没有开启严格模式
})

export default store
