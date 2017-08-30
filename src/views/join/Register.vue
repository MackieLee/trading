<template>
  <div class="join">
    <join-header></join-header>
    <div class="container">
      <div class="form-box">
        <div class="form">
          <p>欢迎注册九鼎账户</p>
          <join-form></join-form>
        </div>
      </div>
      <div class="login-box">
        <p>已有九鼎账户,<router-link :to="{name:'login'}">登录</router-link><span>合作账号登录</span></p>
        <ul class="others">
          <router-link to="/home" tag="li"><i class="qq"></i>QQ账号登录</router-link>
          <router-link to="/home" tag="li"><i class="wechat"></i>微信账号登录</router-link>
          <router-link to="/home" tag="li"><i class="weibo"></i>微博账号登录</router-link>
          <router-link to="/home" tag="li"><i class="alipay"></i>支付宝账号登录</router-link>
        </ul>
      </div>
    </div>
    <join-footer></join-footer>
  </div>
</template>

<script>
import JoinForm from './JoinForm'
import JoinHeader from './JoinHeader'
import JoinFooter from './JoinFooter'
export default {
  name: 'register',
  components: { JoinHeader,JoinForm,JoinFooter }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.container{
  display: flex;
  width: $width;
  margin: auto;
  justify-content: center;
  background-color: $white;
  p{
    text-align: center;
    margin:30px 0 15px 0;
    font-size: 18px;
  }
  .form-box{
    width: 544px;
    .form{
      padding-right: 100px;
      border-right: 1px solid $rice;
      margin:0 0 70px 124px;
    }
  }
  .login-box{
    width: 545px;
    p{
      position: relative;
      display: flex;
      justify-content: center;
      padding: 30px 0 50px 0;
      margin: 0 90px 0 90px;
      border-bottom: 1px solid $rice;
    }
    span{
      font-size: 16px;
      display: block;
      width: 120px;
      height: 20px;
      text-align: center;
      background-color: $white;
      position: absolute;
      bottom: -10px;
    }
    a{
      color: $red;
    }
    .others{
      width: 135px;
      margin: 74px  auto;
      li{
        margin: 17px 0;
        cursor: pointer;
        i{
          display: inline-block;
          height: 25px;
          width: 25px;
          background-image: url('../../assets/images/Sprite.png');
          vertical-align:text-bottom;
          margin-right: 8px;
        }
        .wechat{
          background-position: -55px -84px;
        }
        .weibo{
          background-position: -56px -127px;
        }
        .qq{
          background-position: -104px -83px;
        }
        .alipay{
          background-position: -103px -125px;
        }
      }
    }
  }
}
</style>
