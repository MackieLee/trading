<template>
  <div class="init-pwd">
    <div class="container">
      <!-- 如果未绑定邮箱或手机，显示绑定邮箱/手机状态，前面用黄色感叹号。利用事件驱动改变类名和文本内容 -->
     <div class="sum_of_class">账号安全</div>
      <table>
        <tr>
          <th width="150" class="passed"><i class="passed"></i>登录密码</th>
          <td width="550">互联网账号存在风险，建议您定期修改密码以保护账号安全。</td>          
           <router-link width="100" class="manager" :to="{path:'/vip/InitpwdModal'}" tag="td">
           	修改密码</router-link>
        </tr>
        <tr>
          <th><i class="stay"></i>邮箱验证</th>
          <td>验证后，可用于快速找回登录密码，接收账户余额变动提醒。</td>
          <router-link width="100" class="manager" :to="{path:'/vip/InitpwdModal1'}" tag="td">
           	绑定邮箱</router-link>
        </tr>
        <tr>
          <th><i class="passed"></i>手机验证</th>
          <td>您验证的手机:<span style="font-weight:bold;margin: 0 10px;">177*****234</span>
          	若已丢失或停用，请立即更换。</td>
          <router-link width="100" class="manager" :to="{path:'/vip/InitpwdModal2'}" tag="td">
           	修改</router-link>
        </tr>
      </table>
      
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
    };
  },

};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.init-pwd {
  .container {
    .sum_of_class {
      background-color: #468ee3;
      margin: 0 0px 30px;
      border: none;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      color: #fff;
    }
    table {
      th,
      td {
        height: 60px;
        border: 1px solid $border-dark;
        padding: 0 20px;
      }
      th {
        font-weight: bold;
        text-align: right;
      }
      .manager {
        color: $blue;
        cursor: pointer;
      }
      i {
        background-image: url("../../assets/images/Sprite.png");
        display: inline-block;
        vertical-align: text-bottom;
        height: 20px;
        width: 22px;
        margin-right: 10px;
      }
      .passed {
        background-position: -518px -203px;
      }
      .stay {
        background-position: -518px -256px;
      }
    }
    .modal {
      height: 162%;
    }
  }
}
</style>
