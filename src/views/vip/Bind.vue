<template>
  <div class="bind">
    <div class="container">
      <div class="sum_of_class">账号安全</div>
      <table>
        <tr height="50">
          <td width="60">
            <img />
          </td>
          <td width="100">
            电子邮箱
          </td>
          <td width="400">
            <span>li******@jdtax.cn</span>
          </td>
          <td width="110">
          	<router-link  class="re-bind" :to="{path:'bindModal'}" tag="button">
           	修改绑定</router-link>
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td>
            手机号码
          </td>
          <td>
            <span>177******1234</span>
          </td>
          <td>
            <router-link  class="re-bind" :to="{path:'bindModal1'}" tag="button">
           	修改绑定</router-link>
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td>
            QQ号码
          </td>
          <td>
            <span>qzuser</span>
          </td>
          <td>
						<router-link  class="re-bind" :to="{path:'bindModal2'}" tag="button">
           	修改绑定</router-link>
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td>
            微博
          </td>
          <td>
            <span>未绑定</span>
          </td>
          <td>
           <router-link  class="re-bind" :to="{path:'bindModal3'}" tag="button">
           	修改绑定</router-link>
            
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td>
            微信
          </td>
          <td>
            <span>一杯北野君</span>
          </td>
          <td>
            <router-link  class="re-bind" :to="{path:'bindModal4'}" tag="button">
           	修改绑定</router-link>
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td> 支付宝</td>
          <td>
            <span>七七七</span>
          </td>
          <td>
           <router-link  class="re-bind" :to="{path:'bindModal5'}" tag="button">
           	修改绑定</router-link>
          </td>
        </tr>
      </table>
      

      
    </div>
  </div>
</template>

<script>

export default {
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
.bind {
  padding: 30px;
  margin-bottom: 100px;
  .container {
    border: 1px solid $border-dark;
    padding-bottom: 20px;
  }
  button {
    width: 100px;
    height: 34px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .re-bind {
    border: 1px solid $border-blue;
    background-color: $white;
    color: $black;
    &:hover {
      border: none;
      background-color: #4683ee;;
      color: $white;
    }
  }
  .imm-bind {
    border: none;
    background-color: #4683ee;;
    color: $white;
  }
  .cancel-bind {
    border: none;
    background-color: $btn-danger;
    color: $white;
  }
}
</style>
