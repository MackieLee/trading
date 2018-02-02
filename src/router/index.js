import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/Index'//网站总容器
import home from '../views/home/Home'//主页
import offline from '../views/courses/Offline'//线下课程
import odetail from '../views/courses/Detail'//线下课程详情
import detailbd from '../views/courses/detailbd'//线下课程报名表单
import teacher from '../views/team/teacher'//专家团队
import tdetail from '../views/team/TDetail'//专家团队详情页
import faq from '../views/faq/Faq'//问答
import qdetail from '../views/faq/QDetail'//问答详情
import qdMore from '../views/faq/qdMore'//问答列表Q
import Leibiebox from '../views/faq/Leibiebox'//税收类别
import TiwenMore from '../views/faq/TiwenMore'//问答提问页面
import book from '../views/book/Book'//图书
import item from '../views/book/Item'//图书详情
import customize from '../views/customize/Customize'//课程定制
// --------------------法规查询----------------------------------
import fagui from '../views/fagui/Fagui'//法规
import fdetail from '../views/fagui/Detail'//法规详情
import jiedu from '../views/fagui/Jiedu'//政策解读
import fsearch from '../views/fagui/Search'//法规查询
// ---------------------线上课程---------------------------------
import online from '../views/courses/Online'//线上课程
import videopage from '../views/courses/VideoPage'//视频播放
import videoinfo from '../views/courses/VideoInfo'//视频详情、试听、购买页面
import VideoPingfen from '../views/modal/VideoPingjia'//视频详情、试听、购买页面
// ---------------------登录注册----------------------------------
import login from '../views/join/Login'//登录
import register from '../views/join/Register'//注册
import getpwd from '../views/join/Getpwd'//重置密码
// ---------------------vip用户端------------------------------------
import initpwd from '../views/vip/Initpwd'//普通用户端账号安全
import InitpwdModal from '../views/vip/Modal'//普通用户端账号安全绑定页面
import InitpwdModal1 from '../views/vip/Modal1'//普通用户端账号安全绑定页面
import InitpwdModal2 from '../views/vip/Modal2'//普通用户端账号安全绑定页面
import initdata from '../views/vip/Initdata'//普通用户端个人信息设置
import bind from '../views/vip/Bind'//普通用户端账号绑定
import bindModal from '../views/vip/bindModal'//普通用户端账号绑定
import bindModal1 from '../views/vip/bindModal1'//普通用户端账号绑定
import bindModal2 from '../views/vip/bindModal2'//普通用户端账号绑定
import bindModal3 from '../views/vip/bindModal3'//普通用户端账号绑定
import bindModal4 from '../views/vip/bindModal4'//普通用户端账号绑定
import bindModal5 from '../views/vip/bindModal5'//普通用户端账号绑定
import fapiaodetail from '../views/vip/FapiaoDetail'//发票详情
import fapiaoapp from '../views/vip/FapiaoApp'//发票索取
import vip from '../views/vip/Vip'//普通会员端
import study from '../views/vip/Study'//我的学习
import shoucang from '../views/vip/Shoucang'//我的收藏
import qa from '../views/vip/Qa'//我的问答
import qamodal from '../views/modal/Qa_Pingjia'//答疑评价
import qianbao from '../views/vip/Qianbao'//我的钱包
import jifenmall from '../views/vip/jifenmall'//积分商城
import youhuiquan from '../views/vip/Youhuiquan'//我的优惠券
import fapiao from '../views/vip/Fapiao'//发票索取
import dingdan from '../views/vip/Dingdan'//我的订单
import dingdanxq from '../views/vip/dingdanxq'//订单详情
import dingdanpf from '../views/vip/dingd_modal'//订单评价
import cart from '../views/vip/ShoppingCart'//购物车
import jfitem from '../views/vip/JifenItem'//积分商城商品详情
// ---------------------老师端------------------------------------
import tadmin from '../views/teacher/Tadmin'//老师端
import tkecheng from '../views/teacher/Tkecheng'//老师端我的课程
import twenda from '../views/teacher/Twenda'//老师端我的问答
import tqianbao from '../views/teacher/Tqianbao'//老师端我的钱包
import upload from '../views/teacher/Upload'//视频上传
import bindcredit from '../views/teacher/BindCredit'//绑定银行卡
import videolist from '../views/teacher/VideoList'//视频列表
import valuate from '../views/teacher/Tevaluate'//老师端我的评价
import tinitdata from '../views/teacher/Tinitdata'//老师端个人信息设置
import identify from '../views/teacher/Identify' //老师认证
import tbind from '../views/teacher/Tbind'//老师端账号绑定
import tinitpwd from '../views/teacher/Tinitpwd'//老师端账号安全
import tvideo from '../views/teacher/Tvideo'//老师端视频管理
import bodanlist from '../views/teacher/BodanList'//播单列表
import bodanmanger from '../views/teacher/BodanManger'//播单管理
import videomanger from '../views/teacher/Videomanger'//视频管理
import bodan from '../views/teacher/Bodan'//播单中转页面
import videos from '../views/teacher/Videos'//视频列表中转
// ----------------------支付页面----------------------------------
import pay from '../views/account/Pay'//支付页面
import pay1 from '../views/account/Pay1'//支付页面
import pay2 from '../views/account/Pay2'//支付页面
import payok from '../views/account/payok'//支付页面
// ----------------------About——footer----------------------------------
import about from '../views/about/About'//关于我们
import abt from '../views/about/abt'//关于我们
import kechengsm from '../views/about/kechengsm'//课程说明
import dayism from '../views/about/dayism'//答疑说明
import Help from '../views/about/Help'//帮助中心
import shichanghz from '../views/about/shichanghz'//市场合作
import copy from '../views/about/copy'//版权声明
import fuwutk from '../views/about/fuwutk'//服务条款
import yijianfk from '../views/about/yijianfk'//意见反馈

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
      },
      {
        path:'video-info',
        name:'videoinfo',
        component:videoinfo
      },
      {
        path:'VideoPingfen',
        name:'VideoPingfen',
        component:VideoPingfen
      },
      {
        path: 'offline',
        name: 'offline',
        component: offline
      },
      {
        path: 'video',
        name: 'video-page',
        component: videopage
      },
      {
        path: 'odetail',
        name: 'odetail',
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
        path: '/qdMore',
        name: 'qdMore',
        component: qdMore
      },
      {
        path: '/Leibiebox',
        name: 'Leibiebox',
        component: Leibiebox
      },
      {
        path: '/TiwenMore',
        name: 'TiwenMore',
        component: TiwenMore
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
        path: '/pay',
        name: 'pay',
        component: pay
      },
      {
        path: '/pay1',
        name: 'pay1',
        component: pay1
      },
      {
        path: '/pay2',
        name: 'pay2',
        component: pay2
      },
      {
        path: '/payok',
        name: 'payok',
        component: payok
      },
      {
			    path: 'detailbd',
			    name: 'detailbd',
			    component: detailbd
			  },
      // 普通用户端----------------
      {
        path: 'vip',
        name: 'vip',
        component: vip,
        redirect: {
          name: 'study'
        },
        children: [
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
            path: 'qamodal',
            name: 'qamodal',
            component: qamodal
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
          {
            path: 'ddxq',
            name: 'dingdanxq',
            component: dingdanxq
          },
          {
            path: 'dingdanpf',
            name: 'dingdanpf',
            component: dingdanpf
          },
          {
            path: 'cart',
            name: 'shopping-cart',
            component: cart
          },
          {
            path: 'initdata',
            name: 'initdata',
            component: initdata
          },
          {
            path: 'initpwd',
            name: 'initpwd',
            component: initpwd
          },
          {
            path: 'InitpwdModal',
            name: 'InitpwdModal',
            component: InitpwdModal
          },
          {
            path: 'InitpwdModal1',
            name: 'InitpwdModal1',
            component: InitpwdModal1
          },
          {
            path: 'InitpwdModal2',
            name: 'InitpwdModal2',
            component: InitpwdModal2
          },
          {
            path: 'bind',
            name: 'bind',
            component: bind
          },
          {
            path: 'bindModal',
            name: 'bindModal',
            component: bindModal
          },
          {
            path: 'bindModal1',
            name: 'bindModal1',
            component: bindModal1
          },
          {
            path: 'bindModal2',
            name: 'bindModal2',
            component: bindModal2
          },
          {
            path: 'bindModal3',
            name: 'bindModal3',
            component: bindModal3
          },
          {
            path: 'bindModal4',
            name: 'bindModal4',
            component: bindModal4
          },
          {
            path: 'bindModal5',
            name: 'bindModal5',
            component: bindModal5
          },
          {
            path: 'fapiao-detail',
            name: 'fapiao-detail',
            component: fapiaodetail
          },
          {
            path: 'fapiaoapp',
            name: 'fapiaoapp',
            component: fapiaoapp
          }
        ]
      },
      {
        path: 'jfsc',
        name: 'jifenmall',
        component: jifenmall
      },
      {
        path: 'jfitem',
        name: 'jfitem',
        component: jfitem
      },
      //老师端-----------------------
      {
        path: 'teacher-admin',
        name: 't-admin',
        component: tadmin,
        redirect: {
          name: 't-kecheng'
        },
        children: [
          {
            path: 'teacher-kecheng',
            name: 't-kecheng',
            component: tkecheng,
            redirect: {
              name: 'upload'
            },
            children: [
              {
                path: 'upload',
                name: 'upload',
                component: upload
              },
              {
                path: 'video-list',
                name: 'video-list',
                component: videolist
              }
            ]
          },
          {
            path: 'teacher-wenda',
            name: 't-wenda',
            component: twenda
          },
          {
            path: 'teacher-qianbao',
            name: 't-qianbao',
            component: tqianbao
          },
          {
            path: 'bindcredit',
            name: 'bindcredit',
            component: bindcredit
          },
          {
            path: 'valuate',
            name: 'valuate',
            component: valuate
          },
          {
            path: 'tinitdata',
            name: 't-initdata',
            component: tinitdata
          },
          {
          	path: 'identify',
          	name: 'identify',
          	component: identify
          },
          {
          	path: 'tinitpwd',
          	name: 't-initpwd',
          	component: tinitpwd
          },
          {
          	path: 'tbind',
          	name: 't-bind',
          	component: tbind
          },
          {
          	path: 'tvideo',
          	name: 't-video',
            component: tvideo,
            redirect: {
              name:'bodan'
            },
            children:[
              {
                path: 'bodan',
                name: 'bodan',
                component: bodan,
                redirect: {
                  name:'bodanlist'
                },
                children:[
                  {
                    path: 'bodanlist',
                    name: 'bodanlist',
                    component: bodanlist
                  },
                  {
                    path: 'bodanmanger',
                    name: 'bodanmanger',
                    component: bodanmanger
                  }
                ]
              },
              {
                path: 'videos',
                name: 'videos',
                component: videos,
                redirect: {
                  name:'videolist'
                },
                children:[
                  {
                    path: 'videolist',
                    name: 'videolist',
                    component: videolist
                  },
                  {
                    path: 'videomanger',
                    name: 'videomanger',
                    component: videomanger
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'fagui',
        name: 'fagui',
        component: fagui
      },
      {
        path: 'fagui-detail',
        name: 'fdetail',
        component: fdetail
      },
      {
        path: 'fagui-jiedu',
        name: 'jiedu',
        component: jiedu
      },
      {
        path: 'fagui-search',
        name: 'fsearch',
        component: fsearch
      },
      {
        path: 'abt',
        name: 'abt',
        component: abt
      },
      {
        path: 'kechengsm',
        name: 'kechengsm',
        component: kechengsm
      },
      {
        path: 'dayism',
        name: 'dayism',
        component: dayism
      },
      {
        path: 'Help',
        name: 'Help',
        component: Help
      },
      {
        path: 'shichanghz',
        name: 'shichanghz',
        component: shichanghz
      },
      {
        path: 'copy',
        name: 'copy',
        component: copy
      },
      {
        path: 'fuwutk',
        name: 'fuwutk',
        component: fuwutk
      },
      {
        path: 'yijianfk',
        name: 'yijianfk',
        component: yijianfk
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
  },
  {
    path: '/getpwd',
    name: 'getpwd',
    component: getpwd
  }
]
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
