<template>
  <div class="faq">
    <div class="teacher-box">
      <div class="cur-posi">
        <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
      </div>
      <div class="item">
        <div class="flex">
          <div class="head-120"></div>
          <div class="name">
            <p>孙老师</p>
            <span>九鼎财税资深讲师</span>
          </div>
        </div>
        <div class="tag-box">
            <span>
              <p>
                课程
              </p>
              <font>10</font>
            </span>
            <span>
              <p>回答</p>
              <font>17</font>
            </span>
            <span>
              <p>荣誉值</p>
              <font>99%</font>
            </span>
            <span class="shanchang"><i></i>擅长领域</span>
        </div>
        <div class="tags">
          <ul>
            <li>税收筹划</li>
            <li>税收筹划</li>
            <li>税收筹划</li>
            <li>税收筹划</li>
          </ul>
        </div>
        <div class="ask">
          <p class="ask-btn">提问</p>
          <p>已解决27个问题</p>
        </div>
      </div>
    </div>
    <div class="faq-box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/base.scss';
  .faq{
    width: $width;
    margin: 0 auto;
    i{
      display: inline-block;
      width: 30px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      padding: 26px 0;
      border-bottom:1px solid $rice;
      i{
        background-position: -106px -204px;
        margin-right: 6px;
      }
    }
    .item{
      width: 330px;
      height: 526px;
      background:$white;
      margin-top: 40px;
      .flex{
        display: flex;
        .head-120{
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 20px 30px 10px 35px;
          background-image: url('../../assets/images/jitax_专家团队_03.png');
          background-repeat: no-repeat;
          background-position: center;
        }
        .name{
          margin: 42px 30px 50px 0;
          P{
            font-size: $lgtitle;
            margin-bottom: 16px;
          }
        }
      }
      .tag-box{
        position: relative;
        display: flex;
        width: 250px;
        justify-content: space-between;
        padding: 30px 0 35px 0;
        margin: 0 auto;
        border-bottom: 1px solid $black;
        span{
          p{
            width: 50px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 15px;
            background: -webkit-linear-gradient($white,#8CEEE0, #87C7EB);
            background: -o-linear-gradient($white,#8CEEE0, #87C7EB);
            background: -moz-linear-gradient($white,#8CEEE0, #87C7EB);
            background: linear-gradient($white,#8CEEE0, #87C7EB);
          }
          font{
            display: block;
            text-align: center;
          }
        }
        span[class='shanchang']{
          font-size: 16px;
          display: block;
          width: 120px;
          height: 20px;
          text-align: center;
          background-color: $white;
          position: absolute;
          bottom: -10px;
          left: 25%;
          i{
            background-position: 2px -209px;
            margin-right: 6px;
          }
        }
      }
      .tags{
        margin: 30px 17px;
      }
      .ask{
        text-align: center;
        p[class="ask-btn"]{
          width: 107px;
          height: 33px;
          margin: 27px auto;
          line-height: 33px;
          border-radius: 5px;
          color: $white;
          background-color: $red;
        }
      }
    }
  }
</style>
