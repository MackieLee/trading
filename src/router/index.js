import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/Index'
import home from '../views/home/Home'
import online from '../views/online/Online'
import login from '../views/join/Login'
import register from '../views/join/Register'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: index,
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: home
      },
      {
        path: 'online',
        name: 'online',
        component: online
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
export default new Router({
  mode: 'history',
  routes
})
