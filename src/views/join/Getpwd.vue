<template>
  <div class="login">
    <join-header></join-header>
    <div class="login-box">
      <div class="content">
        <form class="login-form">
          <p class="title"><a class="txt-ali-lf" @click="zhaohui()">手机找回</a><a class="txt-ali-rt" @click="zhaohui()">邮箱找回</a></p>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="user">
            <i class="iblock"></i>
            <input type="text" name="user" :placeholder=" placeholder " />
          </div>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="ckcode">
            <span></span>
            <input type="text" name="ckcode" placeholder="请输入验证码" />
            <span class="ck-code"></span>
          </div>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="pwd">
            <span></span>
            <i class="iblock"></i>
            <input type="password" name="pwd" placeholder="6~16位密码，包含数字、字母或符号中的两种" />
          </div>
          <div class="error"><p v-show="error"><i class="iblock"></i><span> {{ error }}</span></p></div>
          <div class="pwd">
            <span></span>
            <i class="iblock"></i>
            <input type="password" name="pwd" placeholder="请输入密码" />
          </div>
          <div class="login-btn">
            <button class="submit" type="submit">重置密码</button>
          </div>
          <P class="shensu">如您的检验方式都已无法使用，请<a>点此申诉</a>,成功后<br>可更换</P>
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
  name: 'getpwd',
  data() {
    return {
      error:'',
      placeholder: '请输入手机号'
    }
  },
  methods:{
    zhaohui:function(){
      // document.getElementsByClassName('mail')[0].className = 'mobile'
      // var mobile = document.getElementsByClassName('mobile')[0].className=
      // 改变类，包含text-align，borde-bottom
      event.currentTarget.text === '手机找回'?(this.placeholder = '请输入手机号'):(this.placeholder = '请输入邮箱')

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
      width: 337px;
      padding: 35px 0 20px 23px;
      background-color: $white;
      .iblock{
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
        a{
          display: inline-block;
          padding-bottom: 5px;
          cursor: pointer;
        }
        .txt-ali-lf{
          text-align: left;
          border-bottom: 1px solid $rice;
        }
        .txt-ali-rt{
          text-align: right;
          border-bottom:1px solid $rice;
        }
        .txt-ali-ctr{
          text-align: center;
          border-bottom: 2px solid $green;
        }
        a{
          text-align: right;
          padding-right: 20px;
        }
      }
      .pwd,.user{
        position: relative;
        i{
          position: absolute;
          top: 4px;
          left:4px;
        }
      }
      .pwd{
        i{
          background-position: -58px 171px;
        }
      }
      .user{
        i{
          background-position: -115px -35px;
        }
      }
      input {
        height: 20px;
        padding: 5px 10px 5px 35px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
        border: 1px solid $border;
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
          margin: 24px 0 15px 0;
          width: 160px;
          padding: 5px;
          border: none;
          border-radius: 5px;
          color: $black;
          background-color:#c7daf7;
          cursor: pointer;
        }
      }
      .shensu{
        font-size: 12px;
        line-height: 24px;
        a{
          color:#0d66e7;
          cursor: pointer;
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
          background-position: -58px -22px;
        }
        .checked{
          background-position: -58px -41px;
        }
        a{
          color: $red;
        }
      }
      .others {
        width: 314px;
        margin-top:20px;
        padding: 20px 0 15px 0;
        border-top: 1px solid $rice;
        a{
          display: inline-block;
          margin: 0 9px;
          width: 33px;
          height: 33px;
          background-image: url('../../assets/images/Sprite.png');
        }
        .wechat{
          background-position: -51px -81px;
        }
        .weibo{
          background-position: -51px -124px;
        }
        .qq{
          background-position: -100px -81px;
        }
        .alipay{
          background-position: -100px -122.5px;
        }
      }
    }
  }
}
</style>
