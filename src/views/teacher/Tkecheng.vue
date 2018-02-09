<template>
  <div class="sc">
    <div class="head">
      <div class="title">我的主页</div>
      <p>
        <router-link tag="span":to="{ name : 'upload' }">视频上传</router-link>
        <!-- <span class="splite">&nbsp;</span>
        <router-link tag="span":to="{ name : 'videolist' }">视频</router-link> -->
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
    .splite{
      line-height: 15px;
      border-right: 1px solid $black;
      width: 1px;
    }
    p{
      margin:0px 0 20px 0;
      border-bottom: 1px solid $border-dark;
      box-sizing: border-box;
      span{
        display: inline-block;
        line-height:60px;
        width:100px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .active{
    color: $red;
    border-bottom: 2px solid $red;
  	}
}
</style>
