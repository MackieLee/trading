<template>
  <div class="bind-credit">
    <div class="content">
      <div class="title">绑定银行卡</div>
      <div class="form-container">
        <p class="emit">填写身份信息<span>请填写每项信息并认真核对，填写后将无法更改</span></p>
        <table>
          <tr>
            <th width="120">真实姓名</th>
            <td width="240">
              <input type="text">
            </td>
          </tr>
          <tr class="split">
            <td colspan="2"></td>
          </tr>
          <tr>
            <th>身份证号</th>
            <td >
              <input type="text">
            </td>
          </tr>
        </table>
        <p class="emit">填写银行信息</p>
        <table>
          <tr>
            <th>银行开户姓名:</th>
            <td colspan="2">
              您还未填写真实姓名
              <!-- {{ 当store中存在真实姓名 }} -->
            </td>
          </tr>
          <!--<tr class="split">
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>所在地区</th>
            <td colspan="2">
              <select>
                <option>-请选择-</option>
              </select>
            </td>
          </tr>
          <tr class="split">
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>所在银行</th>
            <td colspan="2">
              <select>
                <option>-请选择-</option>
              </select>
            </td>
          </tr>
          <tr class="split">-->
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>银行卡号</th>
            <td colspan="2">
              <input type="text">
            </td>
          </tr>
          <tr class="split">
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>手机号</th>
            <td colspan="2">
              <input type="text">
            </td>
          </tr>
          <tr class="split">
            <td colspan="3"></td>
          </tr>
          <tr class="split">
            <td colspan="3"></td>
          </tr>
          <tr>
            <td width="120"></td>
            <td width="120"><input type="button" value="确定"/></td>
            <td width="120"><input type="button" value="取消"/></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.bind-credit {
  overflow: hidden;
}
.content {
  background-color: $white;
  margin: auto;
  .title {
    height: 40px;font-size: 16px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: $bg-blue;
    color: $white;
  }
  .form-container {
    border: 1px solid $border-dark;
    padding: 20px 20px 40px;
    .emit {
      font-size: 16px;
      line-height: 30px;
      border-bottom: 1px dashed $border-dark;
      margin: 20px;
      span {
        font-size: 14px;
        display: inline-block;
        color: $dark;
        margin-left: 20px;
      }
    }
    table {
      border-collapse: collapse;
      margin: 0 auto;
      tr {
        height: 30px;
        th {
          text-align: right;
          padding-right: 10px;
        }
        input,
        select {
          height: 30px;
          border-radius: 3px;
          outline: none;
        }
        select {
          width: 100%;
          cursor: pointer;
        }
        input[type="text"] {
          width: 95%;
          border: 1px solid $border-dark;
          padding-left: 5%;
        }
        input[type="button"] {
          width: 60%;
          border: none;
          background-color: $red;
          color: $white;
          cursor: pointer;
        }
        .check-code {
          padding-left: 20px;
        }
      }
      .split {
        height: 15px;
      }
      u {
        color: #15bed2;
        cursor: pointer;
      }
    }
  }
}
</style>
