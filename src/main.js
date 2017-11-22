import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueVideoPlayer from 'vue-video-player'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueResource)
Vue.use(VueVideoPlayer)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
