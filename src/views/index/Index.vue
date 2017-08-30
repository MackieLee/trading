<template>
  <div class="index">
    <app-header></app-header>
    <section class="content">
      <router-view></router-view>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default {
  name: 'index',
  components: {
    AppHeader,AppFooter
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base-conf.scss';
@import '../../assets/style/base.scss';

.index {
  .content {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
