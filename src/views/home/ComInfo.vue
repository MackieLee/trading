<template>
  <div  class="com-info">
    <div class="title">
      <span></span>
      <font>品牌服务</font>
    </div>
    <div class="container">
      <div class="in-block">
        <div class="circle yellow"></div>
        <div class="tail tail-l">
          咨询团队深入企业审核资料访谈人员发现企业潜在风险指导企业化险为夷
        </div>
      </div>
      <div class="in-block">
        <div class="circle purple"></div>
        <div class="tail tail-l">
          指导企业准备资料比对各种合理方法测算选出最优方案协助企业完美收官
        </div>
      </div>
      <div class="in-block">
        <div class="circle blue"></div>
        <div class="tail tail-r">
          专家团队提供服务涵盖涉税咨询答疑远程为主现场为辅帮助企业节税避险
        </div>
      </div>
      <div class="in-block">
        <div class="circle red"></div>
        <div class="tail tail-r">
          专家团队全程服务提供靠谱纳税方案指导企业落地实施规避风险合法节税
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "../../assets/style/base.scss";
  .com-info{
    margin-top: 46px;
  }
  .title {
    width: $width;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 5px;
    position: relative;
    border-bottom: 1px solid $red;
    font {
      font-size: 18px;
      font-weight: 400;
      display: inline-block;
      padding-left: 5px;
    }
    span {
      padding: 6px 14px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-repeat: no-repeat;
      background-position: -391px -389px;
    }
  }
  .container{
    width: 1090px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .in-block{
    display: inline-block;
    max-width:136px;
    .circle{
      border-radius: 50%;
      height: 136px;
      color: #fff;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 20px;
      padding: 20px;
      transition: box-shadow .5s;
      &:hover{
        box-shadow: 3px 3px 3px 3px #e3e3e3;
      }
    }
    .yellow{
      background-color: #F39B1D;
      &:before{
        content: '房地产健康体检';
      }
    }
    .purple{
      background-color: #B72997;
      &:before{
        content: '土增税模拟清算';
      }
    }
    .blue{
      background-color: #1EB4C5;
      &:before{
        content:'房地产常年顾问';
      }
    }
    .red{
      background-color: #D81827;
      &:before{
        content:'房地产税务规划';
      }
    }
    .tail{
      font-size: 13px;
      line-height: 2rem;
      margin-top: 2rem;
      width: 104px;
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>
