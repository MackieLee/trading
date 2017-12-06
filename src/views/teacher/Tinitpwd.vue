<template>
  <div class="init-pwd">
    <div class="container">
      <!-- 如果未绑定邮箱或手机，显示绑定邮箱/手机状态，前面用黄色感叹号。利用事件驱动改变类名和文本内容 -->
     <div class="sum_of_class">账号安全</div>
      <table>
        <tr>
          <th width="100" class="passed"><i class="passed"></i>登录密码</th>
          <td width="500">互联网账号存在风险，建议您定期修改密码以保护账号安全。</td>
          <td @click="showModal('pwd')" width="100" class="manager">修改</td>
        </tr>
        <tr>
          <th><i class="stay"></i>邮箱验证</th>
          <td>验证后，可用于快速找回登录密码，接收账户余额变动提醒。</td>
          <td @click="showModal('email')" class="manager">绑定邮箱</td>
        </tr>
        <tr>
          <th><i class="passed"></i>手机验证</th>
          <td>您验证的手机:<span style="font-weight:bold;margin: 0 10px;">177*****234</span>若已丢失或停用，请立即更换。</td>
          <td @click="showModal('phone')" class="manager">修改</td>
        </tr>
        <tr>
          <th><i class="passed"></i>支付密码</th>
          <td>建议您定期更换新的支付密码，提高安全性。</td>
          <td @click="showModal('payword')" class="manager">支付密码管理</td>
        </tr>
      </table>
      <div class="modal-outer" v-show="modal">
        <modal @closeModal="closeModal" :content-series="series"></modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../vip/Modal";
export default {
  components: { Modal },
  data() {
    return {
      modal: false,
      series: ""
    };
  },
  methods: {
    closeModal: function() {
      this.modal = false;
    },
    showModal: function(what) {
      this.modal = true;
      this.series = what;
    }
  }
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
        background-position: 41px 176px;
      }
      .stay {
        background-position: 41px 124px;
      }
    }
    .modal {
      height: 162%;
    }
  }
}
</style>

