<template>
  <div class="sc">
    <div class="head">
      <div class="title">我的主页</div>
      <p>
        <router-link tag="span":to="{ name : 'upload' }">主页</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "t-kecheng"
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.sc {
  .head {
    .title {
      background-color: $btn-default;
      line-height: 35px;
      font-size: 14px;
      color: $white;
      text-align: center;
    }
    p{
      height: 40px;
      span{
        display: inline-block;
        line-height: 15px;
        width: 50px;
        margin-top: 15px;
        border-right: 1px solid $black;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
