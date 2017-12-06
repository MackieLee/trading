<template>
	
  <div class="bind"> 
    <div class="container">    
    	
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
            <input class="re-bind" type="button" value="修改绑定" />
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
            <input class="re-bind" type="button" value="修改绑定" />
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
            <input class="cancel-bind" type="button" value="取消绑定" />
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
            <input class="imm-bind" type="button" value="立即绑定" />
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
            <input class="cancel-bind" type="button" value="取消绑定" />
          </td>
        </tr>
        <tr height="50">
          <td>
            <img />
          </td>
          <td>
            支付宝
          </td>
          <td>
            <span>七七七</span>
          </td>
          <td>
            <input class="imm-bind" type="button" value="立即绑定" />
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
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
  .bind{
    border: 1px solid $border-dark;
    padding: 30px;
    margin-bottom: 100px;
    input[type="button"]{
      width: 100px;
      height: 34px;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .re-bind{
      border: 1px solid $border-blue;
      background-color: $white;
      color: $black;
      &:hover{
        border: none;
        background-color: $btn-special;
        color: $white;
      }
    }
    .imm-bind{
      border:none;
      background-color: $btn-default;
      color: $white;
    }
    .cancel-bind{
      border: none;
      background-color: $btn-danger;
      color: $white;
    }
  }
</style>
