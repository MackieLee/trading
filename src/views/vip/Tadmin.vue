<template>
  <div class="vip">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;会员中心
      </p>
    </div>
    <div class="container">
      <div class="lf">
        <div class="title flex">
          <div class="head"></div>
          <div class="name">
            <p class="p1">
              在树下听歌</p>
            <p class="p2">普通会员</p>
          </div>
        </div>
        <div class="nav">
          <router-link tag="p" :to="{ name : 't-kecheng'}">
            <i class="t1"></i>我的课程</router-link>
          <router-link tag="p" :to="{ name : 't-wenda'}">
            <i class="t2"></i>我的问答</router-link>
          <router-link tag="p" :to="{ name : 't-qianbao'}">
            <i class="t3"></i>我的钱包</router-link>
          <!-- <router-link tag="p" :to="{ name : 't-dingdan'}">
            <i class="t4"></i>我的订单</router-link> -->
        </div>
      </div>
      <div class="rt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'t-admin',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.vip {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid $border-rice;
  .active{
    color: $red !important;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -56px -82px;
      margin-right: 6px;
    }
  }
  .container {
    margin-top: 26px;
    display: flex;
    .lf {
      width: 224px;
      padding-bottom: 90px;
      p {
        margin: 15px 10px;
      }
      .p1{
        margin-top: 15px;
        i{
          background-position: -115px -35px;
        }
      }
      // .p2 {
      //   margin-left: 32px;
      // }
      .flex {
        display: flex;
      }
      .head {
        width: 82px;
        height: 82px;
        background-image: url('../../assets/images/huanyuanzx01.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        border-radius: 50%;
        margin: 0px 10px;
      }
      .nav {
        p {
          margin:15px 0;
          padding: 11px 0;
          width: 224px;
          color: #333;
          text-align: center;
          cursor: pointer;
        }
        .t1 {
          background-position: -154px -288px;
          margin-right: 6px;
        }
        .t2 {
          height: 18px;
          background-position: -154px -326px;
          margin-right: 6px;
        }
        .t3 {
          background-position: -154px -307px;
          margin-right: 6px;
        }
        .t4 {
          background-position: -159px -343px;
          margin-right: 6px;
        }
        .t5 {
          background-position: -154px -362px;
          margin-right: 6px;
        }
        .t6 {
          background-position: -157px -379px;
          margin-right: 6px;
        }
        .t7 {
          background-position: -154px -398px;
          margin-right: 6px;
        }
      }
    }
    .rt{
      width: 811px;
      margin-left: 55px;
    }
  }
}
</style>
