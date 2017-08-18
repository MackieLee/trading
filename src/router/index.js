import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/Index'
import Home from '../views/home/Home'
import Join from '../views/join/Join'
import JoinForm from '../views/join/JoinForm'
import Login from '../views/join/Login'

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
    component: Join,
    children:[
      {
        path: '/join',
        name: 'join',
        component: JoinForm
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login
  // }
]
export default new Router({
  mode: 'history',
  routes
})
