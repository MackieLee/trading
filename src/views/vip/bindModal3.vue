<template>
    <div class="content">
      <div class="container">
      	<div class="title">微博绑定</div>
        <table>
          <tr>
            <th>新登录密码</th>
            <td colspan="3">
              <input type="text">
            </td>
            <td></td>
          </tr>
          <tr class="split">
            <td colspan="4"></td>
          </tr>
          <tr>
            <th>确认登录密码</th>
            <td colspan="3">
              <input type="text">
            </td>
            <td></td>
          </tr>
          <tr class="split">
            <td colspan="5"></td>
          </tr>
          <tr>
            <th>验证方式</th>
            <td colspan="3"><select><option>手机号码：150****0227</option><option>邮箱验证：mac*****e233@gmail.com</option></select></td>
            <td></td>
          </tr>
          <tr class="split">
            <td colspan="5"></td>
          </tr>
          <tr>
            <th>验证码</th>
            <td colspan="2"><input type="text" placeholder="请输入验证码"/></td>
            <td class="check-code"><input type="button" value="获取验证码" /></td>
            <td></td>
          </tr>
          <tr class="split">
            <td colspan="5"></td>
          </tr>
          <tr>
            <th width="100"></th>
            <td width="100"><input type="button" value="确 定"/></td>
            <td width="100"></td>
            <td width="100"></td>
            <td width="100"></td>
          </tr>
          <tr class="split">
            <td colspan="5"></td>
          </tr>
          <tr>
            <td colspan="5">如您的验证方式都已无法使用，请<u>点击申诉</u>，成功后可更换。</td>
          </tr>
        </table>
      </div>
 </div>
</template>

<script>
import Stars from '../stars/Stars'
export default {
  data() {
    return {
    }
  },
  components:{
    Stars
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.content {
  width: 700px;
  height: 440px;
  background-color: $white;
  margin: auto;
  .title{
    height: 40px;
    width: 100%; color: #fff; font-size: 14px;
    text-align: center;
    line-height: 40px;
    background-color:#4683ee;
    margin-bottom: 40px;
  }
  .container{
    table{
      border-collapse: collapse;
      margin: 0 auto;
      tr{
        height: 30px;
        th{
          text-align: right;
          padding-right: 10px;
        }
        input,select{
          height: 30px;
          border-radius: 3px;
          outline: none;
        }
        select{
          width: 100%;
          cursor: pointer;
        }
        input[type="text"]{
          width: 95%;
          border: 1px solid $border-dark;
          padding-left: 5%;
        }
        input[type="button"]{
          width: 100%;
          border: none;
          background-color: $red;
          color: $white;
          cursor: pointer;
        }
        .check-code{
          padding-left: 20px;
        }
      }
      .split{
        height: 2 0px;
      }
      u{
        color: #15BED2;
        cursor: pointer;
      }
    }
    table,td,th{
      // border: 1px solid red;
    }
  }
}
</style>
