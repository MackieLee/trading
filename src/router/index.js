import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/Home'
import regist from '../view/Regist'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/regist',
    name: 'regist',
    component: regist
  }
]
export default new Router({
  mode: 'history',
  routes
})
