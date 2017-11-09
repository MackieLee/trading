<template>
  <div class="sc">
    <div class="header">
      <p class="fl kechengxinxi">课程信息</p>
      <p class="fl width-154">金额</p>
      <p class="fl width-154">操作</p>
    </div>
    <div class="container">
      <div class="item">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>税务健康体检服务</p>
          <font>孙玮老师</font>
        </div>
        <div class="price">
          <p class="red">￥3588.00</p>
          <p class="res">已有277人收藏</p>
        </div>
        <div class="imm-stu">
          <p>取消收藏</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="item">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>税务健康体检服务</p>
          <font>孙玮老师</font>
        </div>
        <div class="price">
          <p class="red">￥3588.00</p>
          <p class="res">已有277人收藏</p>
        </div>
        <div class="imm-stu">
          <p>取消收藏</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="item">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>税务健康体检服务</p>
          <font>孙玮老师</font>
        </div>
        <div class="price">
          <p class="red">￥3588.00</p>
          <p class="res">已有277人收藏</p>
        </div>
        <div class="imm-stu">
          <p>取消收藏</p>
        </div>
      </div>
    </div>
    <div class="page">1</div>
  </div>
</template>

<script>
export default {
  name: 'shoucang'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.sc {
  overflow: hidden;
  border: 1px solid $border-dark;
  .header {
    background-color: $bg-blue;
    border-radius: 3px;
    color: $white;
    overflow: hidden;
    border: none;
    .fl {
      float: left;
      line-height: 42px;
      font-size: 16px;
    }
    .kechengxinxi{
      width: 501px;
      text-align: center;
      color: $white;
    }
    .width-154{
      width: 154px;
      text-align: center;
      color: $white;
    }
  }
  .container {
    padding: 20px 0;
    border-bottom: 1px solid $border-dark;
    &:hover{
      background-color: $bg-nav;
    }
    .item {
      width: 710px;
      display: flex;
      margin: 0 auto;
    }
    img {
      width: 128px;
      height: 82px;
      margin-top: 8px;
    }
    .middle {
      margin: 0 200px 0 25px;
      p {
        font-size: 18px;
        margin: 15px 0 20px 0;
      }
      font {
        font-size: 14px;
        margin-bottom: 15px;
      }
    }
    .price {
      margin-right: 46px;
      p {
        font-size: 14px;
        margin: 15px 0 20px 0;
      }
      p[class="red"] {
        color: $red
      }
    }
    .imm-stu {
      p {
        line-height: 95px;
        cursor: pointer;
      }
    }
  }
  .page {
    width: 34px;
    height: 34px;
    color: $white;
    line-height: 34px;
    text-align: center;
    margin: 24px auto;
    background-color: $btn-default;
    cursor: pointer;
  }
}
</style>
