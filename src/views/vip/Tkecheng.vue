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
  name: 't-kecheng'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.sc {
  background-color: #fff;
  overflow: hidden;
  .header {
    background-color: #Ddd;
    border-radius: 3px;
    color: #fff;
    overflow: hidden;
    border: 1px solid #CBCBCB;
    .fl {
      float: left;
      line-height: 46px;
      font-size: 16px;
    }
    .kechengxinxi{
      width: 501px;
      text-align: center;
    }
    .width-154{
      width: 154px;
      text-align: center;
    }
  }
  .container {
    padding: 20px 0;
    border-bottom: 1px solid #CBCBCB;
    &:hover{
      background-color: #eee;
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
        font-size: 16px;
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
        color: red;
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
    color: #fff;
    line-height: 34px;
    text-align: center;
    margin: 24px auto;
    background-color: #999;
    cursor: pointer;
  }
}
</style>
