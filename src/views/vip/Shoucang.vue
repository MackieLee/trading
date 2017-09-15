<template>
  <div class="sc">
    <p class="sum_of_class">共1个课程</p>
    <div class="container">
      <img src="../../assets/images/huanyuanzx02.png" />
      <div class="middle">
        <p>税务健康体检服务</p>
        <font>孙玮老师</font>
      </div>
      <div class="imm-stu">
        <p class="price">￥3588.00</p>
        <p class="sm-btn">马上学习</p>
        <p>已有277人收藏</p>
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
  background-color: #fff;
  overflow: hidden;
  .sum_of_class {
    background-color: $silver;
    padding: 15px;
    border-radius: 3px;
    text-align: center;
    color: #fff;
  }
  .container {
    width: 710px;
    margin: 30px auto;
    padding: 41px 0 23px 0;
    display: flex;
    border-top: 1px solid $red;
    img {
      width: 128px;
      height: 82px;
    }
    .middle {
      margin: 0 250px 0 25px;
      p {
        font-size: 18px;
        margin: 15px 0 20px 0;
      }
      font {
        font-size: 14px;
        margin-bottom: 15px;
      }
    }
    .sm-btn {
      width: 116px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      border-radius: 5px;
      background-color: $silver;
      margin: 11px 0 20px 0;
    }
    .price{
      color: $red;
    }
  }
  .page {
    width: 34px;
    height: 34px;
    color: #fff;
    line-height: 34px;
    text-align: center;
    margin: 24px auto;
    background-color: $silver;
  }
}
</style>
