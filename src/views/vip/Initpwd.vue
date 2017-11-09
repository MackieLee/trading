<template>
  <div class="init-data">
    <div class="container">
      <p class="title">为了保证您的账号安全，修改密码前请先进行安全验证:</p>
      <label>验证方式</label><select><option>手机号码 173****9220</option><option>手机号码 156****0227</option></select><br>
      <label>验证码</label><input class="getCode" type="text"/><input class="btn-get-code" type="button" value="获取验证码"/><br>
      <input class="submit" type="button" value="确定"/>
      <p>如您的验证方式都已无法使用，请<a style="color:#21A6BE;cursor:pointer;text-decoration:underline;">点击申诉</a>成功后可更换。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
  .init-data{
    border: 1px solid $border-dark;
    .container{
      width: 390px;
      margin: 57px auto;
      .title{
        font-size: 14px;
      }
      label{
        display: inline-block;
        width: 60px;
        text-align:right;
      }
      select{
        width: 288px;
        height: 40px;
        margin: 20px 10px 0 10px;
        border-radius: 3px;
        border:1px solid $border-dark;
        outline: none;
      }
      input[class="getCode"]{
        width: 180px;
        height: 36px;
        margin:30px 10px;
        border:1px solid $border-dark;
        border-radius: 3px;
        outline: none;
      }
      .btn-get-code{
        height: 38px;
        width: 100px;
        background-color: $btn-default;
        color: $white;
        border-radius:4px;
        border: none;
        outline: none;
        cursor: pointer;
      }
      .submit{
        display: block;
        height: 34px;
        width: 174px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: $btn-default;
        color: $white;
        margin:0 auto 30px auto;
        border-radius: 4px;
      }
    }
  }
</style>
