<template>
  <div class="study">
    <div class="pt-1">
      <p class="sum_of_class">共1个课程</p>
      <div class="container">
        <div class="item item1">
          <p class="f-line">今天上课</p>
          <p>0分钟</p>
        </div>
        <div class="item item2">
          <p class="f-line">今天上课</p>
          <p>0分
            <span>再上100分钟可获得100积分</span>
          </p>
        </div>
        <div class="item item3">
          <p class="f-line">高于平台</p>
          <p>0%学员</p>
        </div>
      </div>
    </div>
    <div class="pt-2">
      <div class="container">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>税务健康体检服务</p>
          <font>孙玮老师</font>
        </div>
        <span class="sm-btn">马上学习</span>
      </div>
      <div class="page">1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'study'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.study {
  .sum_of_class {
    background-color: #ddd;
    border: 1px solid #cbcbcb;
    padding: 15px;
    font-size: 16px;
    border-radius: 3px;
    text-align: center;
    color: #333;
  }
  .pt-1 {
    background-color: #fff;
    .container {
      width: 710px;
      margin: 30px auto;
      display: flex;
      border-top: 1px solid $red;
      .item {
        margin: 30px 0;
        p {
          text-align: center;
          margin-bottom: 15px;
          font-size: 18px;
        }
        .f-line {
          margin-bottom: 30px;
        }
      }
      .item1 {
        border-right: 1px solid $red;
        padding: 0 60px 0 25px;
      }
      .item2 {
        border-right: 1px solid $red;
        padding: 0 84px 0 64px;
        span {
          font-size: 14px;
        }
      }
      .item3 {
        padding-left: 86px;
      }
    }
  }
  .pt-2 {
    background-color: #fff;
    padding: 25px 50px;
    .container {
      width: 728px;
      display: flex;
      img{
        width: 128px;
        height: 82px;
      }
      .middle{
        margin: 0 250px 0 25px;
        p{
          font-size: 18px;
          margin: 15px 0 20px 0;
        }
        font{
          font-size: 14px;
          margin-bottom: 15px;
        }
      }
      .sm-btn{
        width: 116px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        background-color: #999;
        margin-top: 20px;
      }
    }
    .page{
      width: 34px;
      height: 34px;
      color: #fff;
      line-height: 34px;
      text-align: center;
      margin: 24px auto;
      background-color: #999;
    }
  }
}
</style>
