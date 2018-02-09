<template>
  <div class="sc">
    <div class="head">
      <div class="title">内容管理</div>
      <p>
        <router-link tag="span":to="{ name : 'bodan' }">播单管理</router-link>
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
    .splite {
      line-height: 15px;
      border-right: 1px solid $black;
      width: 1px;
    }
    p {
      margin-bottom:20px;
      border-bottom: 1px solid $border-dark;
      box-sizing: border-box;
      span {
        display: inline-block;
        line-height: 50px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
  .active {
    color: $red;
    border-bottom:2px solid $red;
  }
}
</style>
