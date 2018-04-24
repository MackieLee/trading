<template>
  <div class="app-header">
    <div class="header-container">
      <div class="header-nav">
        <ul>
          <li>
            <router-link :to="{name: 'home'}" tag="span" class="no-active">
              <i class="logo"></i>
            </router-link>
          </li>
          <router-link v-for="item in navItems" :key="item.name" :to="{ name:item.link }" tag="li">{{ item.name }}</router-link>
        </ul>
      </div>
      <div>
        <form action="">
          <input placeholder="请输入您的搜索" />
          <i></i>
        </form>
      </div>
      <div class="user-info" v-show="!nickName">
        <ul>
          <li>
            <router-link :to="{name:'login'}">
             <!-- <i class="login"></i>-->
              <font class="lu">登录</font>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'register'}">
              <!--<i class="register"></i>-->
              <font class="zhuce">注册</font>
            </router-link>
          </li>
          <!--<li>
          </li>-->
        </ul>

      </div>
      <router-link :to="{name:'t-admin'}">
        <font>测试</font>
      </router-link>
      <div class="logined" v-show="nickName">
        <div class="rt_part" @mouseleave="drop = ''">
          <a class="a-broadcast" @mouseenter="drop = 'left'">
            <i class="broadcast"></i>
          </a>
          <router-link :to="{ name:'vip'}" class="menu">
            <img @mouseover="drop = 'right'" src="../../assets/images/thumb-test.jpg"/>
          </router-link>
        </div>
        <div class="drop-list drop-left" v-if="drop === 'left'" @mouseenter = "drop = 'left'" @mouseleave="drop = ''">
          <i></i>
          <div>
           	 <ul>
	              <li class="title">通知/公告 <span>{{announce.counts}}</span></li>
	              <li>报名 <span>{{announce.apply}}</span></li>
	              <li>回答 <span>{{announce.answer}}</span></li>
	              <li>评论 <span>{{announce.comment}}</span></li>
	              <li>收藏 <span>{{announce.collect}}</span></li>
	              <li>系统通知 <span>{{announce.xiaoxi}}</span></li>
           	 </ul>
          </div>
        </div>
        <div class="drop-list drop-right" v-if="drop === 'right'" @mouseenter = "drop = 'right'" @mouseleave="drop = ''">
          <div>
            <ul>
              <router-link :to="{ name: 'initdata'}" tag="li">
                <i class="set"></i><span>账号设置</span>
              </router-link>
              <li @click="quit"><i class="quit"></i><span>安全退出</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import { getCookie,setCookie } from "@/util/cookie"
export default {
  name: "app-herader",
  data() {
    return {
      navItems: [
        { name: "首页", link: "home" },
        { name: "机构简介", link: "abt" },
        { name: "品牌服务", link: ""},
        { name: "专家团队", link: "f" },
        { name: "专家答疑", link: "t" },
        { name: "法规查询", link: "f" },
        { name: "定制课程", link: "fg" },
      ],
      activeItem: "home",
      drop:'',
      nickName:'',
      announce:{
        counts:0,
        apply:0,
        answer:0,
        comment:0,
        collect:0,
        xiaoxi:0,
      }
    };
  },
  computed: {
    toJoin() {
      return {
        name: "join",
        query: this.$route.fullPath
      };
    }
  },
  methods: {
    getItem: function(item) {
      this.activeItem = item.link;
    },
    quit:function(){
      setCookie('u_name','',1)
      this.nickName = ''
    },
    // get user's emits or announcements !!
    init:function () {
      let res = this.loginUserUrl("notification",{
        username: "niuhongda",
        password: "123123q",
      }).then( res =>{
        console.log('apply/answer/comment/collect/xiaoxi')
        console.log(res)
      //  先看数据格式，再计算数目相加的结果。
      })
    }
  },
  mounted () {
    let userName = getCookie("u_name")
    if(userName !== null && userName !== '' && userName !== undefined){
      this.nickName = userName
      this.init()
    }else{
      return ''
    }

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base-conf.scss";
@import "../../assets/style/base.scss";

.app-header {
  height: 65px;
  border-bottom: 2px solid $border-rice;
  .header-container {
    width: $width;
    margin: 0px auto;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding: 18px 71px;
      background-image: url("../../assets/images/Sprite.png");
      background-position: -140px -322px;
    }
    li {
      margin: 0 1px;
      padding: 4px;font-size: 14px;
    }
    form {
      position: relative;
      input {
      	width: 250px;
        height: 26px;
        border: 1px solid $red;
        border-radius: 15px;
        outline: none;
        padding: 0 10px 0 35px;
        line-height: 12px;
        font-size: 12px;
      }
      i {
        display: block;
        position: absolute;
        top: 4px;
        left: 6px;
        width: 21px;
        height: 21px;
        background-image: url("../../assets/images/Sprite.png");
        background-position: -20px -140px;
      }
    }
    .user-info{
    	li{
    		font{padding: 5px 8px;
    		 color: #fff;}
    		.lu{ background:#39f;}
    		.zhuce{ background:red;}
    	}
    }
    .header-nav {
    	li:hover{color:$red;}
      li {
        cursor: pointer;
      }
      .active {
        color: $red;
      }
      .no-active {
        border: none;
      }
    }
    .register,
    .login {
      display: inline-block;
      width: 27px;
      height: 25px;
      background-image: url("../../assets/images/Sprite.png");
    }
    .login {
      background-position: -56px -36px;
    }
    .register {
      background-position: -52px -9px;
    }
    .logined {
      position: relative;
      .rt_part {
        .a-broadcast{
          display: inline-block;
          margin-top: 7px;
          margin-right: 20px;
        }
        .broadcast {
          display: inline-block;
          width: 25px;
          height: 25px;
          background-image: url("../../assets/images/Sprite.png");
          background-position: -286px -250px;
          vertical-align: text-bottom;
          &:hover{
            background-position: -342px -251px;
          }
        }
        .menu {
          color: #666;
          font-size: 12px;
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;
          text-align: left;
          img {
            border-radius: 50%;
            display: inline-block;
            vertical-align: top;
            height: 38px;
            width: 38px;
            border: 1px solid #fff;
          }
        }
      }
      .drop-list {
        position: absolute;
        z-index: 3000;
        border: 1px solid #e5e5e5;
        top: 40px;
        right: 0;
        background-color: #fff;
        padding: 10px;
      }
      .drop-left {
        right:30px;
        width:130px;
        .title{
          border-bottom:1px solid $border-dark;
          span{
            padding: 0 0;
            width:18px;
            background-color: $btn-danger;
            color: $white;
            text-align: center;
            border-radius:3px;
            font-weight:bold;
          }
        }
        span{
          display: inline-block;
          color: $red;
          margin-right: 5px;
        }
      }
      .drop-right {
        width: 120px;
        left:27px;
        li:hover{
          color: $blue;
          cursor: pointer;
        }
        i{
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url("../../assets/images/Sprite.png");
          vertical-align: text-bottom;
          margin-right:6px;
        }
        .set{
          background-position: -307px -314px;
        }
        .quit{
          background-position:-305px -348px;
        }
      }
    }
  }
}
</style>
