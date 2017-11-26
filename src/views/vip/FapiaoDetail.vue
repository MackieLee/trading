<template>
  <div class="detail">
    <table border="1">
      <tr height="30" border-color="#666">
        <td colspan="2">发票信息 订单号1234567890</td>
      </tr>
      <tr height="30">
        <td width="200">发票类型</td>
        <td width="500">纸质发票</td>
      </tr>
      <tr height="30">
        <td>发票内容</td>
        <td>办公用品</td>
      </tr>
      <tr height="30">
        <td>发票抬头</td>
        <td>神州九鼎财税咨询有限公司</td>
      </tr>
      <tr height="30">
        <td>发票税号</td>
        <td>一串字符串</td>
      </tr>
      <tr height="30">
        <td>邮寄地址</td>
        <td>河北等...</td>
      </tr>
      <tr height="30">
        <td>邮编</td>
        <td>10008</td>
      </tr>
    </table>
    <table>
      <tr height="30">
        <td width="150">发票代码</td>
        <td width="150">发票号码</td>
        <td width="150">发票编号</td>
        <td width="150">二维码</td>
      </tr>
      <tr height="30">
        <td>123214141</td>
        <td>1413414</td>
        <td>13414</td>
        <td>13414</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "fapiao-detail",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.detail {
  table {
    border-collapse: collapse;
  }
  table,
  tr,
  td {
    border: 1px solid $border-dark;
    text-align: center;
  }
}
</style>
