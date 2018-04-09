import Vue from 'vue'
import Router from 'vue-router'
//------------------------------------------------------------

const index = r => require.ensure([], () => r(require('../views/index/Index')), 'index') //网站总容器
const home = r => require.ensure([], () => r(require('../views/home/Home')), 'home') //主页
const off = r => require.ensure([], () => r(require('../views/courses/off')), 'off') //线下课程
const offline = r => require.ensure([], () => r(require('../views/courses/Offline')), 'offline')//线下课程
const odetail = r => require.ensure([], () => r(require('../views/courses/Detail')),'odetail')//线下课程详情
const detailbd = r => require.ensure([], () => r(require('../views/courses/detailbd')),'detailbd')//线下课程报名表单
const t = r => require.ensure([], () => r(require('../views/team/t')),'t')//root page
const teacher = r => require.ensure([], () => r(require('../views/team/teacher')),'teacher')//专家团队
const tdetail = r => require.ensure([], () => r(require('../views/team/TDetail')),'tdetail')//专家团队详情页
const f = r => require.ensure([], () => r(require('../views/faq/f' )),'f')//root page of faq
const faq = r => require.ensure([], () => r(require('../views/faq/Faq')),'faq')//问答
const qdetail = r => require.ensure([], () => r(require('../views/faq/QDetail')),'qdetail')//问答详情
const qdMore = r => require.ensure([], () => r(require('../views/faq/qdMore')),'qdMore')//问答列表Q
const Leibiebox = r => require.ensure([], () => r(require('../views/faq/Leibiebox')),'Leibiebox')//税收类别
const TiwenMore = r => require.ensure([], () => r(require('../views/faq/TiwenMore')),'TiwenMore')//问答提问页面
const b = r => require.ensure([], () => r(require('../views/book/b')),'b')//图书
const book = r => require.ensure([], () => r(require('../views/book/Book')),'book')//图书
const item = r => require.ensure([], () => r(require('../views/book/Item')),'item')//图书详情
const customize = r => require.ensure([], () => r(require('../views/customize/Customize')),'customize')//课程定制
// --------------------法规查询----------------------------------
const fg = r => require.ensure([], () => r(require('../views/fagui/fg')),'fg')//法规
const fagui = r => require.ensure([], () => r(require('../views/fagui/Fagui')),'fagui')//法规
const fdetail = r => require.ensure([], () => r(require('../views/fagui/Detail')),'fdetail')//法规详情
const jiedu = r => require.ensure([], () => r(require('../views/fagui/Jiedu')),'jiedu')//政策解读
const fsearch = r => require.ensure([], () => r(require('../views/fagui/Search')),'fsearch')//法规查询
// ---------------------线上课程---------------------------------
const online = r => require.ensure([], () => r(require('../views/courses/Online')),'online')//线上课程
const o = r => require.ensure([], () => r(require('../views/courses/o.vue')),'o')// root page
const videopage = r => require.ensure([], () => r(require('../views/courses/VideoPage')),'videopage')//视频播放
const videoinfo = r => require.ensure([], () => r(require('../views/courses/VideoInfo')),'videoinfo')//视频详情、试听、购买页面
const VideoPingfen = r => require.ensure([], () => r(require('../views/modal/VideoPingjia')),'VideoPingfen')//视频详情、试听、购买页面
// ---------------------登录注册----------------------------------
const login = r => require.ensure([], () => r(require('../views/join/Login')),'login')//登录
const register = r => require.ensure([], () => r(require('../views/join/Register')),'register')//注册
const getpwd = r => require.ensure([], () => r(require('../views/join/Getpwd')),'getpwd')//重置密码
// ---------------------vip用户端------------------------------------
const initpwd = r => require.ensure([], () => r(require('../views/vip/Initpwd')),'initpwd')//普通用户端账号安全
const InitpwdModal = r => require.ensure([], () => r(require('../views/vip/Modal')),'InitpwdModal')//普通用户端账号安全绑定页面
const InitpwdModal1 = r => require.ensure([], () => r(require('../views/vip/Modal1')),'InitpwdModal1')//普通用户端账号安全绑定页面
const InitpwdModal2 = r => require.ensure([], () => r(require('../views/vip/Modal2')),'InitpwdModal2')//普通用户端账号安全绑定页面
const initdata = r => require.ensure([], () => r(require('../views/vip/Initdata')),'initdata')//普通用户端个人信息设置
const bind = r => require.ensure([], () => r(require('../views/vip/Bind')),'bind')//普通用户端账号绑定
const bindModal = r => require.ensure([], () => r(require('../views/vip/bindModal')),'bindModal')//普通用户端账号绑定
const bindModal1 = r => require.ensure([], () => r(require('../views/vip/bindModal1')),'bindModal1')//普通用户端账号绑定
const bindModal2 = r => require.ensure([], () => r(require('../views/vip/bindModal2')),'bindModal2')//普通用户端账号绑定
const bindModal3 = r => require.ensure([], () => r(require('../views/vip/bindModal3')),'bindModal3')//普通用户端账号绑定
const bindModal4 = r => require.ensure([], () => r(require('../views/vip/bindModal4')),'bindModal4')//普通用户端账号绑定
const bindModal5 = r => require.ensure([], () => r(require('../views/vip/bindModal5')),'bindModal5')//普通用户端账号绑定
const fapiaodetail = r => require.ensure([], () => r(require('../views/vip/FapiaoDetail')),'fapiaodetail')//发票详情
const fapiaoapp = r => require.ensure([], () => r(require('../views/vip/FapiaoApp')),'fapiaoapp')//发票索取
const vip = r => require.ensure([], () => r(require('../views/vip/Vip')),'vip')//普通会员端
const study = r => require.ensure([], () => r(require('../views/vip/Study')),'study')//我的学习
const shoucang = r => require.ensure([], () => r(require('../views/vip/Shoucang')),'shoucang')//我的收藏
const qa = r => require.ensure([], () => r(require('../views/vip/Qa')),'qa')//我的问答
const qamodal = r => require.ensure([], () => r(require('../views/modal/Qa_Pingjia')),'qamodal')//答疑评价
const qianbao = r => require.ensure([], () => r(require('../views/vip/Qianbao')),'qianbao')//我的钱包
const jifenmall = r => require.ensure([], () => r(require('../views/vip/jifenmall')),'jifenmall')//积分商城
const youhuiquan = r => require.ensure([], () => r(require('../views/vip/Youhuiquan')),'youhuiquan')//我的优惠券
const fapiao = r => require.ensure([], () => r(require('../views/vip/Fapiao')),'fapiao')//发票索取
const dingdan = r => require.ensure([], () => r(require('../views/vip/Dingdan')),'dingdan')//我的订单
const dingdanxq = r => require.ensure([], () => r(require('../views/vip/dingdanxq')),'dingdanxq')//订单详情
const dingdanpf = r => require.ensure([], () => r(require('../views/vip/dingd_modal')),'dingdanpf')//订单评价
const cart = r => require.ensure([], () => r(require('../views/vip/ShoppingCart')),'cart')//购物车
const jfitem = r => require.ensure([], () => r(require('../views/vip/JifenItem')),'jfitem')//积分商城商品详情
// ---------------------老师端------------------------------------
const tadmin = r => require.ensure([], () => r(require('../views/teacher/Tadmin')),'tadmin')//老师端
const tkecheng = r => require.ensure([], () => r(require('../views/teacher/Tkecheng')),'tkecheng')//老师端我的课程
const twenda = r => require.ensure([], () => r(require('../views/teacher/Twenda')),'twenda')//老师端我的问答
const tqianbao = r => require.ensure([], () => r(require('../views/teacher/Tqianbao')),'tqianbao')//老师端我的钱包
const upload = r => require.ensure([], () => r(require('../views/teacher/Upload')),'upload')//视频上传
const bindcredit = r => require.ensure([], () => r(require('../views/teacher/BindCredit')),'bindcredit')//绑定银行卡
const videolist = r => require.ensure([], () => r(require('../views/teacher/VideoList')),'videolist')//视频列表
const valuate = r => require.ensure([], () => r(require('../views/teacher/Tevaluate')),'valuate')//老师端我的评价
const tinitdata = r => require.ensure([], () => r(require('../views/teacher/Tinitdata')),'tinitdata')//老师端个人信息设置
const identify = r => require.ensure([], () => r(require('../views/teacher/Identify' )),'identify')//老师认证
const tbind = r => require.ensure([], () => r(require('../views/teacher/Tbind')),'tbind')//老师端账号绑定
const tinitpwd = r => require.ensure([], () => r(require('../views/teacher/Tinitpwd')),'tinitpwd')//老师端账号安全
const tvideo = r => require.ensure([], () => r(require('../views/teacher/Tvideo')),'tvideo')//老师端视频管理
const bodanlist = r => require.ensure([], () => r(require('../views/teacher/BodanList')),'')//播单列表
const bodanmanger = r => require.ensure([], () => r(require('../views/teacher/BodanManger')),'bodanlist')//播单管理
const videomanger = r => require.ensure([], () => r(require('../views/teacher/Videomanger')),'videomanger')//视频管理
const bodan = r => require.ensure([], () => r(require('../views/teacher/Bodan')),'bodan')//播单中转页面
const videos = r => require.ensure([], () => r(require('../views/teacher/Videos')),'videos')//视频列表中转
// ----------------------支付页面----------------------------------
const pay = r => require.ensure([], () => r(require('../views/account/Pay')),'pay')//支付页面
const pay1 = r => require.ensure([], () => r(require('../views/account/Pay1')),'pay1')//支付页面
const pay2 = r => require.ensure([], () => r(require('../views/account/Pay2')),'pay2')//支付页面
const payok = r => require.ensure([], () => r(require('../views/account/payok')),'payok')//支付页面
// ----------------------About——footer----------------------------------
const about = r => require.ensure([], () => r(require('../views/about/About')),'about')//关于我们
const abt = r => require.ensure([], () => r(require('../views/about/abt')),'abt')//关于我们
const kechengsm = r => require.ensure([], () => r(require('../views/about/kechengsm')),'kechengsm')//课程说明
const dayism = r => require.ensure([], () => r(require('../views/about/dayism')),'dayism')//答疑说明
const Help = r => require.ensure([], () => r(require('../views/about/Help')),'Help')//帮助中心
const shichanghz = r => require.ensure([], () => r(require('../views/about/shichanghz')),'shichanghez')//市场合作
const copy = r => require.ensure([], () => r(require('../views/about/copy')),'copy')//版权声明
const fuwutk = r => require.ensure([], () => r(require('../views/about/fuwutk')),'fuwutk')//服务条款
const yijianfk = r => require.ensure([], () => r(require('../views/about/yijianfk')),'yijianfk')//意见反馈

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
        path:'o',
        name:'o',
        component: o,
        redirect: {
          name: 'online'
        },
        children: [
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
            path: 'video',
            name: 'video-page',
            component: videopage
          }
        ]
      },

      {
        path: 'off',
        name: 'off',
        component: off,
        redirect: {
          name: 'offline'
        },
        children: [
          {
            path: 'offline',
            name: 'offline',
            component: offline
          },
          {
            path: 'odetail',
            name: 'odetail',
            component: odetail
          },
        ]
      },

      {
        path:'t',
        name:'t',
        component:t,
        redirect:{
          name: 'teacher'
        },
        children:[
          {
            path: 'teacher',
            name: 'teacher',
            component: teacher
          },
          {
            path: 'tdetail',
            name: 'tdetail',
            component: tdetail
          },
        ]
      },

      {
        path:'f',
        name:'f',
        component:f,
        redirect: {
          name: 'faq'
        },
        children: [
          {
            path: 'faq',
            name: 'faq',
            component: faq
          },
          {
            path: 'qdetail',
            name: 'qdetail',
            component: qdetail
          },
          {
            path: 'qdMore',
            name: 'qdMore',
            component: qdMore
          },
          {
            path: 'Leibiebox',
            name: 'Leibiebox',
            component: Leibiebox
          },
          {
            path: 'TiwenMore',
            name: 'TiwenMore',
            component: TiwenMore
          }
        ]
      },
      {
        path:'b',
        name:'b',
        component:b,
        redirect:{
          name:'book'
        },
        children:[
          {
            path: 'book',
            name: 'book',
            component: book
          },
          {
            path: 'item',
            name: 'item',
            component: item
          },
        ]
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

      //关于我们---------------
      {
        path: 'about',
        name: 'about',
        component: about,
        redirect: {
          name: 'abt'
        },
        children: [
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
        path: 'fg',
        name: 'fg',
        component:fg,
        redirect:{
          name: 'fsearch'
        },
        children:[
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
          }
        ]
      },
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
  scrollBehavior (to,from,savedPosition) {
    return { x: 0, y: 0 }
  }
})
