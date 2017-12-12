<template>
  <div class="online">
    <div class="video-boxes">
      <div class="item" v-for="item in classes" :key="item.title">
        <div><router-link :to="{name: item.link}" class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></router-link></div>
        <p class="video-title"><a>{{ item.title }}</a></p>
        <p class="buss-info"><span class="score"><i></i><font>{{ item.score }}</font>分</span><span class="person-current"><i></i><font>{{ item.person }}</font>人</span><span class="classes">课时</span><font>{{ item.class }}</font><span>MIN</span></p>
        <p class="price"><span>课程:<font class="rd">￥{{ item.price }}</font></span><router-link :to="{name:item.link}" class="free">试 听</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      classes:[
        { title:"税收筹划案例精解-3",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-4",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-5",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-6",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-3",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-3",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-3",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"},
        { title:"税收筹划案例精解-3",link:"videoinfo",src:"../../assets/images/九鼎财税01_10.png",score:"100",class:"25",person:"1500",price:"1000"}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.online {
  width: $width;
  margin: 0 auto;
  margin-top: 20px;
  .video-boxes {
    overflow: hidden;
    i{
      background-image: url('../../assets/images/Sprite.png');
    }
    .rd{
      color: $red;
    }
    .video-cover {
      position: relative;
    }
    .item {
      border: 1px solid $border-red;
      padding: 5px 10px 10px 10px;
      float: left;
      margin: 0 13px 18px 13px;
      position: relative;
      &:hover{
        box-shadow: 1px 1px 4px 5px #eee;
      }
      .new {
        padding: 2px 4px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 0;
        bottom: 3px;
      }
      .video-title {
        margin: 5px 0;
        font-size: 14px;
      }
      .buss-info {
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 10px;
        span {
          margin-right: 10px;
        }
        .score i{
          display: inline-block;
          height: 20px;
          width: 15px;
          background-position: -240px -287px;
          vertical-align: text-bottom;
        }
        .person-current i{
          display: inline-block;
          height: 20px;
          width: 25px;
          background-position: -344px -285px;
          vertical-align: text-bottom;
        }
      }
      .price{
        .free {
          padding: 2px 15px;
          background-color: $red;
          color: $white;
          font-size: 12px;
          position: absolute;
          right: 15px;
          cursor: pointer;
        }
        font{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
