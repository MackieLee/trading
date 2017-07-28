<template>
  <div class="header">
    <router-link :to="{ name: 'home' }" class="logo" tag="span">
      <img src="../assets/logo.png" alt="logo">
    </router-link>
    <div class="right">
      <user-nav class="user"></user-nav>
      <search class="search"></search>
    </div>
  </div>
</template>

<script>
import UserNav from './UserNav'
import Search from './Search'

export default {
  components: { UserNav, Search }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  width: 1200px;
  height:100px;
  margin: auto;
  .right {
    text-align: right;
    width: 1120px;
    padding-right: 20px;
    .user,.search{
      display: flex;
      justify-content: flex-end;
    }
  }
}
.logo{
  padding-left: 20px;
  img{
  height:80px;
  margin: 10px 0;
  }
}
</style>
