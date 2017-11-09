<template>
  <div class="vip">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;个人信息设置
      </p>
    </div>
    <div class="container">
      <div class="lf">
        <div class="nav">
          <p @click="toggle('initdata')">个人资料</p>
          <p @click="toggle('initpwd')">账号安全</p>
          <p @click="toggle('bind')">账号绑定</p>
        </div>
      </div>
      <div class="rt">
        <init-data v-show="curItem === 'initdata'"></init-data>
        <init-pwd v-show="curItem === 'initpwd'"></init-pwd>
        <bind v-show="curItem === 'bind'"></bind>
      </div>
    </div>
  </div>
</template>

<script>
import initData from './Initdata'
import initPwd from './Initpwd'
import bind from './Bind'
export default {
  name: "setting",
  components:{
    initData,initPwd,bind
  },
  data() {
    return {
      curItem: "initdata"
    };
  },
  methods: {
    toggle(curItem){
      this.curItem = curItem
    }
  }
};
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
      .nav {
        p {
          margin: 15px 0;
          padding: 11px 0;
          width: 224px;
          color: $black;
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
      }
    }
    .rt {
      width: 811px;
      margin-left: 55px;
    }
  }
}
</style>
