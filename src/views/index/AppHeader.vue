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
      <a @click="testState" style="position:relative;cursor:pointer">测试</a>
      <div class="user-info" v-show="test">
        <ul>
          <li>
            <router-link :to="{name:'login'}">
              <i class="login"></i>
              <font>登录</font>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'register'}">
              <i class="register"></i>
              <font>注册</font>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="logined" v-show="!test">
        <div class="rt_part" @mouseleave="drop = ''">
          <a class="a-broadcast" @mouseenter="drop = 'left'">
            <i class="broadcast"></i>
          </a>
          <router-link :to="{ name:'initdata'}" class="menu">
            <img @mouseover="drop = 'right'" src="../../assets/images/thumb-test.jpg"/>
          </router-link>
        </div>
        <div class="drop-list drop-left" v-if="drop === 'left'" @mouseenter = "drop = 'left'" @mouseleave="drop = ''">
          <i></i>
          <div>
            <ul>
              <li class="title">通知/公告 <span>6</span></li>
              <li>报名 <span>0</span></li>
              <li>回答 <span>0</span></li>
              <li>评论 <span>0</span></li>
              <li>采纳 <span>0</span></li>
              <li>关注 <span>0</span></li>
              <li>企业公告 <span>0</span></li>
              <li>系统通知 <span>0</span></li>
            </ul>
          </div>
        </div>
        <div class="drop-list drop-right" v-if="drop === 'right'" @mouseenter = "drop = 'right'" @mouseleave="drop = ''">
          <div>
            <ul>
              <router-link :to="{ name: 'initdata'}" tag="li">
                <i class="set"></i><span>账号设置</span>
              </router-link>
              <li><i class="quit"></i><span>安全退出</span></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name: "app-herader",
  data() {
    return {
      navItems: [
        { name: "首页", link: "home" },
        { name: "线上课程", link: "online" },
        { name: "问答", link: "faq" },
        { name: "专家团队", link: "teacher" },
        { name: "线下课程", link: "offline" },
        { name: "法律法规", link: "fsearch" },
        { name: "图书", link: "book" },
        { name: "定制课程", link: "customize" },
        { name: "会员中心", link: "vip" },
        { name: "关于我们", link: "about" }
      ],
      activeItem: "home",
      drop:'',
      test:false
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
    testState:function(){
      this.test = !this.test
    }
  },
// Vuex state manager
  mounted () {
    console.log('get state direct from store:',store.state)
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
      background-position: -138px -319px;
    }
    li {
      margin: 0 1px;
      padding: 4px;font-size: 14px;
    }
    form {
      position: relative;
      input {
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
    .header-nav {
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
        width:100px;
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
        width: 100px;
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
          margin-right: 10px;
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
