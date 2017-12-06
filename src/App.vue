<template>
  <div id="app">
    <div class="toolbar-tabs">
      <div class="bar">1</div>
      <div class="bar">2</div>
      <div class="bar">3</div>
    </div>
    <router-view></router-view>
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
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
  }
  .toolbar-tabs{
    position: fixed;
    right: 0;
    top:40%;
    z-index: 1500;
    .bar{
      height: 35px;
      width:35px;
      background-color: #7a6e6e;
      color: #fff;
      text-align: center;
      margin-bottom: 2px;
    }
  }
}
</style>
