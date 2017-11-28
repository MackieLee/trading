<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div class="modal"></div> -->
  </div>
</template>

<script>
import { store } from 'vuex'
export default {
  name: 'app',
  data(){
    return{

    }
  },
  mounted:function(){
    document.write('<script src="\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '" id="kf5-provide-supportBox" kf5-domain="mackielee.kf5.com" charset="utf-8"><\/script>');
  },
  computed:{
    store(){
      user: 'getUser'
    }
  },
  created(){
    console.log(this.store)
  }
}
</script>

<style lang="scss">
@import './assets/style/base-conf.scss';
#app {
  li{
    display: inline-block;
  }
  min-width: 1100px;
  .modal{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
