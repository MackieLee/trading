<template>
  <div class="login">
    <join-header></join-header>
    <div class="login-box">
      <div class="content">
        <form class="login-form">
          <p class="title"><span>会员登录</span><router-link :to=" { name:'register'} ">会员注册</router-link></p>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="user">
            <i class="iblock"></i>
            <input type="text" name="user" placeholder="请输入用户名" />
          </div>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="pwd">
            <span></span>
            <i class="iblock"></i>
            <input type="password" id="pwd" name="pwd" placeholder="请输入密码" />
            <i class="cover pos-rt" @mouseenter="discover" @mouseout="cover"></i>
          </div>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="ckcode">
            <span></span>
            <input type="text" name="ckcode" placeholder="请输入验证码" />
            <span class="ck-code"></span>
          </div>
          <div class="remember">
            <span @click="toggleChecked">
              <input type="checkbox" name="remember"/><i :class="[ { checked: checked },{ unchecked: !checked },'iblock' ]"></i><label for="remember">记住密码</label>
            </span>
            <router-link :to=" { name:'getpwd' } ">
              找回密码
            </router-link>
          </div>
          <div class="login-btn">
            <button class="submit" type="submit">登录</button>
          </div>
          <div class="others">
            <span>合作账号登录 : </span>
            <router-link :to=" { name:'register'} " class="wechat"></router-link>
            <router-link :to=" { name:'register'} " class="weibo"></router-link>
            <router-link :to=" { name:'register'} " class="qq"></router-link>
            <router-link :to=" { name:'register'} " class="alipay"></router-link>
          </div>
        </form>
      </div>
    </div>
    <join-footer></join-footer>
  </div>
</template>
<script>
import JoinHeader from './JoinHeader'
import JoinFooter from './JoinFooter'

export default {
  name: 'login',
  data() {
    return {
      checked:false,
      error:''
    }
  },
  methods:{
    toggleChecked:function(){
      this.checked = !this.checked
    },
    discover:function(){
      document.getElementById('pwd').type = 'text'
    },
    cover:function(){
      document.getElementById('pwd').type = 'password'
    }
  },
  components:{ JoinHeader,JoinFooter }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.login-box {
  background: url('../../assets/images/登录.png') center center no-repeat;
  background-size: 100% 100%;
  .content{
    width: $width;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .login-form {
      border-radius: 10px;
      margin: 50px 90px;
      width: 314px;
      padding: 25px;
      background-color: $white;
      .iblock,.cover,.discover{
        display: inline-block;
        height: 18px;
        width: 18px;
        background-image: url('../../assets/images/Sprite.png');
      }
      .error{
        height: 20px;
        p{
          line-height: 14px;
          i{
            background-position: -55px 0;
          }
          span{
            vertical-align: text-top;
            color:$red;
          }
        }
      }
      .title{
        padding-bottom: 10px;
        span,a{
          display: inline-block;
          padding-bottom: 5px;
        }
        span{
          width: 90px;
          text-align: center;
          border-bottom: 2px solid $border-blue;
        }
        a{
          width: 204px;
          text-align: right;
          padding-right: 20px;
          border-bottom: 2px solid $border-rice;
        }
      }
      .pwd,.user{
        position: relative;
        i{
          position: absolute;
          top: 4px;
        }
        .cover{
          background-position:-143px 300px;
          &:hover{
            background-position: -143px 272px;
          }
        }
        .pos-rt{
          top:6px;
          right: 30px;
        }
      }
      .pwd{
        i[class="iblock"]{
          background-position: -99px -49px;
          left:4px;
        }
      }
      .user{
        i{
          background-position:-60px -41px;
          left:4px;
        }
      }
      input {
        height: 20px;
        padding: 5px 10px 5px 35px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
        border: 1px solid $border-blue;
        width: 267px;
        margin-bottom: 10px;
        &:focus{
          border-color: $red;
          outline: none;
        }
      }
      .ckcode input {
        width: 30%;
        padding: 5px 10px;
      }
      .login-btn{
        display: flex;
        justify-content: center;
        .submit {
          width: 160px;
          padding: 5px;
          border: none;
          border-radius: 5px;
          color: $white;
          background-color: $btn-danger;
          cursor: pointer;
          &:hover{
            background-color: $btn-danger-hover;
          }
        }
      }
      .remember{
        display: flex;
        justify-content: space-between;
        padding-right: 28px;
        margin-bottom: 40px;
        input{
          display: none;
        }
        i{
          vertical-align: text-bottom;
        }
        .unchecked{
          background-position:-99px -193px;
        }
        .checked{
          background-position:-99px -225px;
        }
        a{
          color: $red;
        }
      }
      .others {
        width: 314px;
        margin-top:20px;
        padding: 20px 0 15px 0;
        border-top: 1px solid $border-rice;
        a{
          display: inline-block;
          margin: 0 9px;
          width: 25px;
          height: 22px;
          background-image: url('../../assets/images/Sprite.png');
        }
        .wechat{
          background-position: -182px -49px;
        }
        .weibo{
          background-position: -184px -92px;
        }
        .qq{
          background-position: -186px -122px;
        }
        .alipay{
          background-position: -185px -162px;
        }
      }
    }
  }
}
</style>
