import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/Index'
import Home from '../views/home/Home'
import Join from '../views/Join'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  }
]
export default new Router({
  mode: 'history',
  routes
})
