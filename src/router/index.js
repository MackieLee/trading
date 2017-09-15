import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/Index'
import home from '../views/home/Home'
import courses from '../views/courses/Courses'
import online from '../views/courses/Online'
import video from '../views/courses/Video'
import offline from '../views/courses/Offline'
import odetail from '../views/courses/Detail'
import teacher from '../views/team/teacher'
import tdetail from '../views/team/TDetail'
import faq from '../views/faq/Faq'
import qdetail from '../views/faq/QDetail'
import book from '../views/book/Book'
import item from '../views/book/Item'
import about from '../views/about/About'
import customize from '../views/customize/Customize'
import vip from '../views/vip/Vip'
import study from '../views/vip/Study'
import shoucang from '../views/vip/Shoucang'
import qa from '../views/vip/Qa'
import qianbao from '../views/vip/Qianbao'
import youhuiquan from '../views/vip/Youhuiquan'
import fapiao from '../views/vip/Fapiao'
import dingdan from '../views/vip/Dingdan'
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
      },
      {
        path:'video',
        name:'video',
        component: video
      },
      {
        path:'odetail',
        name:'odetail',
        component: odetail
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: teacher
      },
      {
        path: '/tdetail',
        name: 'tdetail',
        component: tdetail
      },
      {
        path: '/faq',
        name: 'faq',
        component: faq
      },
      {
        path: '/qdetail',
        name: 'qdetail',
        component: qdetail
      },
      {
        path: '/book',
        name: 'book',
        component: book
      },
      {
        path: '/item',
        name: 'item',
        component: item
      },
      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/customize',
        name: 'customize',
        component: customize
      },
      {
        path: 'vip',
        name: 'vip',
        component: vip,
        redirect:{
          name: 'study'
        },
        children:[
          {
            path: 'study',
            name: 'study',
            component: study
          },
          {
            path: 'sc',
            name: 'shoucang',
            component: shoucang
          },
          {
            path: 'qa',
            name: 'qa',
            component: qa
          },
          {
            path: 'qb',
            name: 'qianbao',
            component: qianbao
          },
          {
            path: 'yhq',
            name: 'youhuiquan',
            component: youhuiquan
          },
          {
            path: 'fp',
            name: 'fapiao',
            component: fapiao
          },
          {
            path: 'dd',
            name: 'dingdan',
            component: dingdan
          },
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
  linkActiveClass:'active',
  routes
})
