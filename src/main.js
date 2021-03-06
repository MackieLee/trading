import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueVideoPlayer from 'vue-video-player'
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import './my-theme/dist/iview.css'
import { loginUserUrl } from "@/api/api";
import { setCookie, getCookie } from "@/util/cookie"

Vue.use(iView)
Vue.use(VueResource)
Vue.use(VueVideoPlayer)
Vue.use(VueQuillEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.setCookie = setCookie
Vue.prototype.getCookie = getCookie
Vue.prototype.loginUserUrl = loginUserUrl

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
