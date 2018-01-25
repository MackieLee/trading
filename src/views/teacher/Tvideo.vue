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
      margin: 10px 0 20px 0;
      border-bottom: 1px solid $border-dark;
      box-sizing: border-box;
      span {
        display: inline-block;
        line-height: 30px;
        width: 80px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .active {
    color: $red;
    border-bottom: 1px solid $red;
  }
}
</style>
