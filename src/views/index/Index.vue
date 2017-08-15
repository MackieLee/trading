<template>
  <div class="index">
    <app-header></app-header>
    <app-nav></app-nav>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import AppHeader from './AppHeader'
import AppNav from './AppNav'

export default {
  name: 'index',
  components: {
    AppHeader,AppNav
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base-conf.scss';

.index {
  .content {
    width: $base-width;
    margin: 0 auto;
  }
}
</style>
