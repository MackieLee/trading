<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:function(){
    document.write('<script src="\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '" id="kf5-provide-supportBox" kf5-domain="mackielee.kf5.com" charset="utf-8"><\/script>');
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
}
</style>
