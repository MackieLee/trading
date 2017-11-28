<template>
  <div class="init-pwd">
    <div class="container">
      <!-- <p class="title">为了保证您的账号安全，修改密码前请先进行安全验证:</p>
      <label>验证方式</label><select><option>手机号码 173****9220</option><option>手机号码 156****0227</option></select><br>
      <label>验证码</label><input class="getCode" type="text"/><input class="btn-get-code" type="button" value="获取验证码"/><br>
      <input class="submit" type="button" value="确定"/>
      <p>如您的验证方式都已无法使用，请<a style="color:#21A6BE;cursor:pointer;text-decoration:underline;">点击申诉</a>成功后可更换。</p> -->
      <table>
        <tr>
          <th width="100" class="passed"><i></i>登录密码</th>
          <td width="400">互联网账号存在风险，建议您定期修改密码以保护账号安全。</td>
          <td width="100" class="manager">修改</td>
        </tr>
        <tr>
          <th><i class="stay"></i>邮箱验证</th>
          <td>验证后，可用于快速找回登录密码，接收账户余额变动提醒。</td>
          <td class="manager">验证</td>
        </tr>
        <tr>
          <th><i class="passed"></i>手机验证</th>
          <td>您验证的手机:<span style="font-weight:bold;margin: 0 10px;">177*****234</span>若已丢失或停用，请立即更换。</td>
          <td class="manager">修改</td>
        </tr>
        <tr>
          <th><i class="passed"></i>支付密码</th>
          <td>建议您定期更换新的支付密码，提高安全性。</td>
          <td class="manager">支付密码管理</td>
        </tr>
      </table>
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
.init-pwd{
  .container{
    table{
      th,td{
        height: 60px;
        border: 1px solid $border-dark;
        padding: 0 20px;
      }
      th{
        font-weight: bold;
        text-align: right;
      }
      .manager{
        color: $blue;
        cursor: pointer;
      }
      i{
        background-image: url('../../assets/images/Sprite.png');
        display: inline-block;
        vertical-align: text-bottom;
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
      .passed{
        background-position: 0 0;
      }
      .stay{
        background-position: 44px -13px;
      }
    }
  }
}
















  // .init-pwd{
  //   border: 1px solid $border-dark;
  //   margin-bottom: 100px;
  //   .container{
  //     width: 390px;
  //     margin: 57px auto;
  //     .title{
  //       font-size: 14px;
  //     }
  //     label{
  //       display: inline-block;
  //       width: 60px;
  //       text-align:right;
  //     }
  //     select{
  //       width: 288px;
  //       height: 40px;
  //       margin: 20px 10px 0 10px;
  //       border-radius: 3px;
  //       border:1px solid $border-dark;
  //       outline: none;
  //     }
  //     input[class="getCode"]{
  //       width: 180px;
  //       height: 36px;
  //       margin:30px 10px;
  //       border:1px solid $border-dark;
  //       border-radius: 3px;
  //       outline: none;
  //     }
  //     .btn-get-code{
  //       height: 38px;
  //       width: 100px;
  //       background-color: $btn-default;
  //       color: $white;
  //       border-radius:4px;
  //       border: none;
  //       outline: none;
  //       cursor: pointer;
  //     }
  //     .submit{
  //       display: block;
  //       height: 34px;
  //       width: 174px;
  //       outline: none;
  //       border: none;
  //       cursor: pointer;
  //       background-color: $btn-default;
  //       color: $white;
  //       margin:0 auto 30px auto;
  //       border-radius: 4px;
  //     }
  //   }
  // }
</style>
