<template>
  <div  class="com-info">
    <div class="title">
      <span></span>
      <font>品牌服务</font>
    </div>
    <div class="container">
      <div class="in-block">
        <div class="ball">
          <div class="shadow"></div>
          <div class="circle first-color"></div>
        </div>
        <div class="tail tail-l">
          咨询团队深入企业审核资料访谈人员发现企业潜在风险指导企业化险为夷
        </div>
        <div class="stars">
          <span v-for="i in 2"><img src="../../assets/images/star_full.svg" /></span>
          <span v-for="i in 3">
            <img width="15px" src="../../assets/images/star_empty.svg"/>
          </span>
        </div>
      </div>
      <div class="in-block">
        <div class="ball">
          <div class="shadow"></div>
          <div class="circle double-color"></div>
        </div>
        <div class="tail tail-l">
          指导企业准备资料比对各种合理方法测算选出最优方案协助企业完美收官
        </div>
        <div class="stars">
          <span v-for="i in 3"><img src="../../assets/images/star_full.svg" /></span>
          <span v-for="i in 2">
            <img width="15px" src="../../assets/images/star_empty.svg"/>
          </span>
        </div>
      </div>
      <div class="in-block">
        <div class="ball"><div class="shadow"></div>
          <div class="circle third-color"></div>
        </div>
        <div class="tail tail-r">
          专家团队提供服务涵盖涉税咨询答疑远程为主现场为辅帮助企业节税避险
        </div>
        <div class="stars">
          <span v-for="i in 4"><img src="../../assets/images/star_full.svg" /></span>
          <span v-for="i in 1">
            <img width="15px" src="../../assets/images/star_empty.svg"/>
          </span>
        </div>
      </div>
      <div class="in-block">
        <div class="ball"><div class="shadow"></div>
          <div class="circle fourth-color"></div>
        </div>
        <div class="tail tail-r">
          专家团队全程服务提供靠谱纳税方案指导企业落地实施规避风险合法节税
        </div>
        <div class="stars">
          <span v-for="i in 5"><img src="../../assets/images/star_full.svg" /></span>
          <span v-for="i in 0">
            <img width="15px" src="../../assets/images/star_empty.svg"/>
          </span>
        </div>
      </div>
      <div class="in-block">
        <div class="ball"><div class="shadow"></div>
          <div class="circle five"></div>
        </div>
        <div class="tail tail-r">
          专家团队全程服务提供靠谱纳税方案指导企业落地实施规避风险合法节税
        </div>
        <div class="stars">
          <span v-for="i in 5"><img src="../../assets/images/star_full.svg" /></span>
          <span v-for="i in 0">
            <img width="15px" src="../../assets/images/star_empty.svg"/>
          </span>
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
    .ball{
      position: relative;
      height: 160px;
      width: 136px;
      overflow: hidden;
      .circle{
        border-radius: 50%;
        height: 136px;
        width: 136px;
        color: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 20px;
        padding: 20px;
        position: absolute;
        text-shadow: 0.1em 0.1em 0.2em black;
      }
      .shadow{
        width: 78px;
        height: 48px;
        position: absolute;
        right: 26px;
        top: 115px;
        border-radius: 50%;
        background: radial-gradient(#a4a4a4, #fff);
        /*background: #7e7e7e;*/
        transform: perspective(200px) rotateX(70deg) rotateZ(-6deg);
      }
    }
    .first-color{
      background: radial-gradient(at 30px 30px, #fff, #f56773, #ef2630, #3d3d3d);
      &:before{
        content: '房地产\a健康体检';
        white-space: pre;
      }
    }
    .double-color{
      background: radial-gradient(at 30px 30px, #fff,#d133b1,#B72997,#3d3d3d);
      &:before{
        content: '土增税\A模拟清算';
        white-space: pre;
      }
    }
    .third-color{
      /*background-color: #1EB4C5;*/
      background: radial-gradient(at 30px 30px, #fff,#1123fd,#0c1ff7, #3d3d3d);
      &:before{
        content:'房地产\A常年顾问';
        white-space: pre;
      }
    }
    .fourth-color{
      background: radial-gradient(at 30px 30px, #fff, #fff74d,#ffc60f, #3d3d3d);
      &:before{
        content: '房地产\a税务规划';
        white-space: pre;
      }
    }
    .five{
      background: radial-gradient(at 30px 30px, #fff, #1fee24, #05c909, #3d3d3d);
      &:before{
        content:'特色小镇\A专项筹划';
        white-space: pre;
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
    .stars{
      display: flex;
      justify-content: space-between;
      width: 104px;
      margin: auto;
    }
  }
</style>
