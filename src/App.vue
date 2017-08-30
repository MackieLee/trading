<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
