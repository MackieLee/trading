<template>
  <div class="tdetail">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;
      	<router-link to="/teacher">专家团队 &gt;</router-link>{{ intro.name }}</p>
    </div>
    <div class="detail">
      <img src="../../assets/images/t1.png" alt="孙玮教授">
      <h1>{{ intro.name }}</h1>
      <div v-html="intro.value">
        {{ intro.value }}
      </div>
    </div>
    <div class="book-box">
      <div class="title">
        <span></span>
        <font>主讲课程</font>
      </div>
      <div class="video-boxes">
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_33.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_35.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_37.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_39.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  name:'tdetail',
  data(){
    return{
      intro:{}
    }
  },
  mounted () {
    let _self = this
    let res = loginUserUrl('getTeacher_Info',{
      username: "niuhongda",
      password: "123123q",
      tid:this.$route.query.id
    }).then((res)=>{
      _self.intro = res.data
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .tdetail{
    width: $width;
    margin: 0 auto;
    padding-top: 20px;
    // border-top: 1px solid $border-rice;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      i{
        background-position: -18px -100px;
        margin-right: 6px;
      }
    }
    .detail{
      margin: 26px 90px 45px 0;
      overflow: hidden;
      h1{
        font-size: 18px;
        margin-bottom: 8px;
      }
      p{
        font-size: 14px;
        line-height: 35px;
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
      .title{
        width: $width;
        margin: auto;
        margin-bottom: 28px;
        padding-bottom: 10px;
        position: relative;
        border-bottom: 1px solid $border-red;
        span{
          padding: 3px 19px;
          margin-right: 14px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: -3px -314px;
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
          padding: 6px 10px 12px 10px;
          margin-bottom: 10px;
          position: relative;
          &:hover{
            box-shadow: 1px 1px 3px 5px #eee;
          }
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
            span{color: #e7141a;}
            a{
              margin-right: 15px;
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
              padding: 5px 19px;
              background-color: $red;
              color: $white;
              font-size: 10px;
              position: absolute;
              right: 36px;
            }
          }
        }
      }
    }
  }
</style>
