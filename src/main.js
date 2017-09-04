import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueVideoPlayer from 'vue-video-player'
Vue.use(VueResource)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
