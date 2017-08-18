<template>
  <div class="app-header">
    <router-link :to="{name: 'home'}" class="logo" tag="span">
      <img src="../../assets/img/logo.png" alt="logo">
    </router-link>
    <div>
      <user-nav :to-join="toJoin" :to-login="toLogin"></user-nav>
      <search></search>
    </div>
  </div>
</template>

<script>
import UserNav from '../../components/header/UserNav'
import Search from '../../components/header/Search'

export default {
  name: 'app-herader',
  computed: {
    toJoin () {
      return {
        name: 'join',
        query: this.$route.fullPath
      }
    },
    toLogin () {
      return{
        name: 'login'
      }
    }
  },
  components: {
    UserNav,
    Search
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base-conf.scss';

.app-header {
  display: flex;
  justify-content: space-between;
  width: $base-width;
  margin: 0 auto;
  .logo{
    padding-left: 50px;
    img{
      height:80px;
      margin: 10px 0;
    }
  }
}
</style>
