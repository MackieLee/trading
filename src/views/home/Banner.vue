<template>
  <div class="banner">
    <div class="lunbo">
      <ul>
        <li class="banner-item">
          <router-link :to="{name:'home'}"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .lunbo{
    width: 100%;
    height: 422px;
    ul{
      display: block;
      width: 100%;
      height: 100%;
      li{
        display: block;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/images/banner1.png');
      }
    }
  }
</style>
