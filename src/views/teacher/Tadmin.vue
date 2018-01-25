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
        <div class="flex">
          <div class="head"></div>
          <div class="name">
            <p class="p1">孙老师</p>
            <p class="p2">财税专家</p>
          </div>
        </div>
        <div class="nav">
          <router-link v-for="item in tags" :key="item.router" tag="p" :to="{ name : item.router }">
             <i :class="item.router"></i>{{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="rt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"
export default {
  name: "t-admin",
  data() {
    return {
      tags: [
        { name: "我的主页", router: "t-kecheng" },
        { name: "内容管理", router: "t-video" },
        { name: "我的问答", router: "t-wenda" },
        { name: "老师认证", router: "identify" },
        { name: "我的钱包", router: "t-qianbao" },
        { name: "学员评价", router: "valuate" },
        { name: "个人资料", router: "t-initdata" },
        { name: "账号安全", router: "t-initpwd" },
        { name: "账号绑定", router: "t-bind" }
      ]
    };
  },
  methods: {},
  created () {
    let cookieName = getCookie('u_name')
    if(cookieName !== '' && cookieName !== 'undefined' ){
    }else{
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.vip {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid $border-rice;
  .active {
    color: $red !important;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
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
      .name{margin-left: 10px;}
      .p1{font-size: 14px;}
      .p1,.p2 {margin: 5px 0 10px 0;}
      // .p2 {
      //   margin-left: 32px;
      // }
      .flex {
        display: flex;
      }
      .head {
        width:60px;
        height: 60px;
        background-image: url("../../assets/images/huanyuanzx01.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        border-radius: 50%;
        margin: 0px 10px;
      }
      .nav {
        p {
          margin: 15px 0;
          padding: 5px 30px;
          width: 224px;
          color: #333;
          text-align: left;
          cursor: pointer;
          i{margin-right: 6px;}

        .t-kecheng { background-position: -58px -221px;}
        .t-video{ background-position: -15px -388px;}
        .t-wenda { background-position: -143px -228px;}
        .identify{ background-position: -57px -388px;}
        .t-qianbao { background-position: -142px -136px;}
        .valuate{ background-position: -143px -385px;}
        .t-initdata {background-position: -145px -287px;}
        .t-initpwd { background-position: -236px -151px;}
        .t-bind { background-position: -233px -79px;}
      }
       }
    }
    .rt {
      width: 811px;
      margin-left: 55px;
    }
  }
}
</style>
