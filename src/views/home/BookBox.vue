<template>
  <div class="book-box">
    <div class="title">
      <span></span>
      <font>财经图书</font>
      <a>更多>></a>
    </div>
    <div class="book-container">
      <!-- <div class="video-boxes">
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="book-name"><a>土地增值税实战与案例</a><span class="book-style">精解</span></p>
          <p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>
        </div>
      </div> -->
      <div class="modals">
        <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
          <div class="modal-cover">
            <div>
              <p>税务咨询师是怎么炼成的？</p>
              <span>How did the tax consultant make it?</span>
            </div>
          </div>
          <div><router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_45.png"/></router-link></div>
        </div>
        <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
          <div class="modal-cover">
            <div>
              <p>会计师成长之路</p>
              <span>The path of Accountant's growth</span>
            </div>
          </div>
          <div><router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_47.png"/></router-link></div>
        </div>
        <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
          <div class="modal-cover">
            <div>
              <p>公司财务大杂烩</p>
              <span>A Hodgepodge of corporate finace</span>
            </div>
          </div>
          <div><router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_50.png"/></router-link></div>
        </div>
        <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
          <div class="modal-cover">
            <div>
              <p>企业应避免哪些陷阱？</p>
              <span>What traps should be avoided in enterprise finace</span>
            </div>
          </div>
          <div><router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_52.png"/></router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    modalBlock(e){
      e.target.firstChild.style.display='none'
    },
    modalHide(e){
      e.target.firstChild.style.display='flex'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .book-box{
    margin-top: 30px;
  }
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
      background-position: 12px -158px;
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
  .book-container{
    width: $width;
    margin: auto;
    .video-boxes{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .video-cover{
        position: relative;
      }
      .item{
        border: 1px solid #E7141A;
        padding: 5px 10px;
        margin-bottom: 10px;
        position: relative;
        .new{
          padding: 2px 4px;
          background-color: #E7141A;
          color: #fff;
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
          color: #E7141A;
          .current-price{
            font-size: 18px;
            margin-right: 10px;
          }
          .grey{
            color: #6F666E;
          }
          .im-buy{
            padding: 3px 5px;
            background-color: #E7141A;
            color: #fff;
            font-size: 10px;
            position: absolute;
            right: 15px;
          }
        }
      }
    }
    .modals{
      display: flex;
      justify-content: space-between;
      margin: 35px 0 60px 0;
      .item{
        position: relative;
      }
      .modal-cover{
        background-color: rgba(0,0,0,0.6);
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        span,p{
          color: #fff;
          text-align: center;
        }
        span{
          display: block;
          font-size: 12px;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
</style>
