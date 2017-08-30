<template>
  <div class="teacher-box">
    <div class="title">
      <span>
        <i></i>
        名师推荐
      </span>
      <span>
        <router-link :to="{name:'home'}">更多>></router-link>
      </span>
    </div>
    <div class="teacher-img">
      <router-link :to="{name: 'home'}">
        <!--<img src="../../assets/images/名师推荐.png"/>-->
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .title{
    width: $width;
    margin: 30px auto;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $rice;
    span{
      font-size: 18px;
      font-weight: 450;
    }
    i{
      padding: 9px 19px;
      background-image: url('../../assets/images/Sprite.png');
      background-repeat: no-repeat;
      background-position: 12px -110px;
      margin-right: 10px;
    }
    a{
      font-size: 14px;
    }
  }
  .teacher-img{
    width: 100%;
    height: 398px;
    background: url('../../assets/images/名师推荐.png') center center no-repeat;
  }
</style>
