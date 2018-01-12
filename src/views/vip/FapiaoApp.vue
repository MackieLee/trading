<template>
  <div class="application">
    <div class="content">
      <div class="header">填写发票信息</div>
      <form @submit.prevent = "submit">
        <table>
          <tr class="btn-group">
            <th width="120"><span class="border" @click="toggle(1)" :class="{'rd-border':current == '1'}">普通发票<i></i></span></th>
            <th width="120"><span class="border" @click="toggle(2)" :class="{'rd-border':current == '2'}">专用发票<i></i></span></th>
            <th width="120"></th>
            <th width="120"></th>
          </tr>
        </table>
        <!-- 模块一 -->
        <table v-show="current == '1'">
          <tr><td colspan="5" class="warning"><p><i></i>发票内容仅是培训费，咨询费，图书费</p></td></tr>
          <tr><th><font class="star">*</font><label for="invoice-title">发票抬头：</label></th><td colspan="4"><input id="invoice-title" name="invoice-title" type="text" /></td></tr>
          <tr><th><font class="star">*</font><label for="identifier">纳税人识别号：</label></th><td colspan="4"><input id="identifier" name="identifier" type="text" /></td></tr>
          <tr>
            <th><font class="star"></font><label>发票内容：</label></th>
            <td>
              <label :class="{'rd-border':mingxi === 'mingxi' }" class="mingxi border" for="mingxi">明细<i></i></label>
              <input id="mingxi" v-model="mingxi" value="mingxi" type="radio"/>
            </td>
            <td>
              <label :class="{'rd-border':mingxi === 'train' }" class="mingxi border" for="train">培训费<i></i></label>
              <input id="train" v-model="mingxi" value="train" type="radio"/>
            </td>
            <td>
              <label :class="{'rd-border':mingxi === 'consult' }" class="mingxi border" for="consult">咨询费<i></i></label>
              <input id="consult" v-model="mingxi" value="consult" type="radio"/>
            </td>
            <td v-show="bookItem">
              <label :class="{'rd-border':mingxi === 'book' }" class="mingxi border" for="book">图书费<i></i></label>
              <input id="book" v-model="mingxi" value="book" type="radio"/>
            </td>
          </tr>
          <tr><th><font class="star">*</font><label for="address">发票邮寄地址：</label></th><td colspan="3"><input id="address" name="address" /></td></tr>
          <tr><th><font class="star">*</font><label for="phone">收票人手机：</label></th><td colspan="3"><input id="phone" name="phone" /></td></tr>
          <tr><th><font class="star"></font><label for="email">收票人邮箱：</label></th><td colspan="3"><input id="email" name="email" /></td></tr>
          <tr><td width="120"></td><td width="120"></td><td width="120"></td><td width="120"></td><td width="120"></td></tr>
          <tr class="btn-group">
            <td><input type="submit" class="btn btn-danger" value="提交"></td>
            <td><input type="button" class="btn cancel" value="取消"></td>
            <td></td>
          </tr>
        </table>
        <!-- 模块二 -->
        <table v-show="current == '2'">
          <!-- 单位名称 -->
          <tr><td colspan="5" class="warning"><p><i></i>发票内容仅是培训费，咨询费，图书费</p></td></tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-invoice-title">单位名称：</label>
            </th>
            <td colspan="4">
              <input id="pro-invoice-title" name="invoice-title" type="text" />
            </td>
          </tr>
          <!-- 纳税人识别码 -->
          <tr>
            <th>
              <font class="star">*</font><label for="pro-identifier">纳税人识别码：</label>
            </th>
            <td colspan="4">
              <input id="pro-identifier" name="identifier" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-registed-address">注册地址：</label>
            </th>
            <td colspan="4">
              <input id="pro-registed-address" name="registed-address" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-registed-phone">注册电话：</label>
            </th>
            <td colspan="4">
              <input id="pro-registed-phone" name="registed-phone" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-bank">开户银行：</label>
            </th>
            <td colspan="4">
              <input id="pro-bank" name="bank" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-account">银行账户：</label>
            </th>
            <td colspan="4">
              <input id="pro-account" name="account" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-address">发票邮寄地址：</label>
            </th>
            <td colspan="4">
              <input id="pro-address" name="address" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star">*</font><label for="pro-phone">收票人手机：</label>
            </th>
            <td colspan="4">
              <input id="pro-phone" name="phone" type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <font class="star"></font><label for="pro-email">收票人邮箱：</label>
            </th>
            <td colspan="4">
              <input id="pro-email" name="email" type="text" />
            </td>
          </tr>
          <tr>
            <td width="120"></td>
            <td width="120"></td>
            <td width="120"></td>
            <td width="120"></td>
            <td width="120"></td>
          </tr>
          <tr class="btn-group">
            <td><input type="submit" class="btn btn-danger" value="提交"></td>
            <td><input type="button" class="btn cancel" value="取消"></td>
            <td></td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mingxi: "mingxi",
      current: "1",
      bookItem: true
    };
  },
  methods: {
    submit: () => {},
    toggle: function(i) {
      this.current = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.application {
  width: 700px;
  .content {
    width: 100%;
    border: 1px solid $border-dark;
    .header {
      height: 40px;
      background-color: $bg-blue;
      line-height: 40px;
      color: $white;
      text-align: center;
      font-size: 16px;
    }
    form{
      padding:20px;
    }
  }
}
label {
  display: inline-block;
}
table,
tr,
td {
  text-align: left;
  padding-left: 10px;
  height: 40px;
  // border:1px solid $border-dark;
}
table {
  border-collapse: collapse;
  th {
    text-align: right;
  }
  .star {
    color: $red;
    margin-right: 10px;
  }
  .btn-group td {
    text-align: right;
  }
  .btn-group {
    input,
    span {
      cursor: pointer;
    }
  }
  input {
    width: 95%;
    height: 25px;
    outline: none;
  }
  input[type="radio"] {
    display: none;
  }
  .btn {
    display: inline-block;
    width: 100px;
    height: 27px;
    outline: none;
    line-height: 25px;
  }
  .btn-danger {
    border: none;
    color: $white;
    background-color: $red;
  }
  .cancel {
    border: 1px solid $border-dark;
    box-sizing: border-box;
    background-color: #fff;
  }
  .border {
    display: inline-block;
    border: 1px solid $border-dark;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 100px;
    position: relative;
  }
  .mingxi {
    width: 100px;
    cursor: pointer;
  }
  .rd-border {
    border: 1px solid $red;
    i {
      position: absolute;
      height: 20px;
      width: 20px;
      background-image: url("../../assets/images/Sprite.png");
      background-position: 45px -82px;
      bottom: 0;
      right: 0;
    }
  }
  .warning {
    p {
      background-color: #fffdee;
      line-height: 30px;
      padding-left: 20px;
      i {
        background-image: url("../../assets/images/Sprite.png");
        background-position: 44px -12px;
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: text-bottom;
        margin-right: 8px;
      }
    }
  }
}
</style>
