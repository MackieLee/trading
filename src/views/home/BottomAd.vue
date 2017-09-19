<template>
  <div class="bottom-ad">
    <div class="bottom-warp">
      <img src="../../assets/images/haibao (2).png"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .bottom-ad{
    overflow: hidden;
    .bottom-warp{
      position: relative;
      height: 485px;
      background: url('../../assets/images/haibao (1).png') center center;
      background-size: 100% 100%;
      img{
        position: absolute;
        top: 30px;
        right: 475px;
      }
    }
  }
</style>
