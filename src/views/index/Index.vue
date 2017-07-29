<template>
  <div class="index">
    <app-header></app-header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import AppHeader from './AppHeader'

export default {
  name: 'index',
  components: {
    AppHeader
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
