import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/Index'
import home from '../views/home/Home'
import courses from '../views/courses/Courses'
import online from '../views/courses/Online'
import offline from '../views/courses/Offline'
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
        path: 'courses',
        name: 'courses',
        component: courses,
        children: [
          {
            path:'online',
            name:'online',
            component: online
          },
          {
            path:'offline',
            name:'offline',
            component: offline
          }
        ]
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
