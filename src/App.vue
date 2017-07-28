<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'

export default {
  components: { AppHeader,AppNav }
}
</script>

<style lang="scss">
@import './assets/reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
