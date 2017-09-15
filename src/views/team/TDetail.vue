<template>
  <div class="tdetail">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税 &gt;</router-link><router-link to="/teacher">专家团队 &gt;</router-link>孙玮教授</p>
    </div>
    <div class="detail">
      <img src="../../assets/images/jitax_专家团队_033.png" alt="孙玮教授">
      <h1>孙玮教授</h1>
      <p>
            九鼎财税专家委员会专家；  注册会计师、注册税务师；东北财经大学财政专业硕士；
        现任青岛大学经济学院副教授，硕士生导师；自1993年6月至今在青岛大学经济学院工作，
        讲授《中国税制》、《国际税收》、《税务检查》、《外国税制》、《税务会计》等课程；
        自2001年开始至今在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的
        老师之一，17年财税培训经历，被称为财税培训界的“常青树”。
      </p>
      <p>
            自1997年开始至今，在企业和事务所兼职从事财税实务工作，做过国企、大型民营企业、
        跨国公司的审计工作；至今已经为多家大型民营企业、外资企业、国企、央企提供常年财税顾
        问服务，并成功运作过若干税务筹划方案，深受企业家推崇。
      </p>
    </div>
    <div class="book-box">
      <div class="title">
        <span></span>
        <font>主讲课程</font>
        <a>更多>></a>
      </div>
      <div class="video-boxes">
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_33.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_35.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_37.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_39.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'tdetail'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .tdetail{
    width: $width;
    margin: 0 auto;
    i{
      display: inline-block;
      width: 22px;
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
    .detail{
      margin: 38px 90px 100px 100px;
      h1{
        font-size: 24px;
        margin-bottom: 30px;
      }
      p{
        font-size: 16px;
        line-height: 40px;
        text-indent: 32px;;
      }
      img{
        float: left;
        width: 210px;
        height: 266px;
        margin: 0 50px 25px 0;
      }
    }
    .book-box{
      margin-bottom: 80px;
      .title{
        width: $width;
        margin: auto;
        margin-bottom: 20px;
        padding-bottom: 10px;
        position: relative;
        border-bottom: 1px solid $rice;
        span{
          padding: 9px 19px;
          margin-right: 10px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: 132px -206px;
        }
        font{
          font-size: 18px;
          font-weight: 450;
        }
        a{
          font-size: 14px;
          position: absolute;
          right: 0;
        }
      }
      .video-boxes{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .video-cover{
          position: relative;
        }
        .item{
          border: 1px solid $red;
          padding: 5px 10px;
          margin-bottom: 10px;
          position: relative;
          .new{
            padding: 2px 4px;
            background-color: $red;
            color: $white;
            font-size: 10px;
            position: absolute;
            right: 0;
            bottom: 4px;
          }
          .book-name{
            margin: 5px 0 20px 0;
            a{
              margin-right: 30px;
            }
          }
          .buss-info{
            font-size: 12px;
            color: $red;
            .current-price{
              font-size: 18px;
              margin-right: 10px;
            }
            .grey{
              color: $black;
            }
            .im-buy{
              padding: 3px 5px;
              background-color: $red;
              color: $white;
              font-size: 10px;
              position: absolute;
              right: 15px;
            }
          }
        }
      }
    }
  }
</style>
