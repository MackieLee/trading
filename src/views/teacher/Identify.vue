<template>
	<div class="my_order_r">
		<p class="sum_of_class">老师认证</p>
		<div class="txt">
			<img src="../../assets/images/336438490428669734.png">通过身份验证将提升你在九鼎财税平台上的权威性，增加学生对你的信任度，九鼎官方也会给予你更多的宣传和推广。
九鼎财税承诺，认证过程中填写的身份证号与上传的证明材料只做认证使用，不会用做其他任何用途。
		</div>

		<div class="container div01">
			<h3>基本信息</h3>
      <table>
        <!-- 单位名称 -->
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr><td colspan="6" class="warning"><p><i></i>发票内容仅是培训费，咨询费，图书费</p></td></tr>
        <tr>
          <th>
            <font class="star">*</font><label for="pro-invoice-title">真实姓名：</label>
          </th>
          <td colspan="4">
            <input id="pro-invoice-title" name="invoice-title" type="text" />
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <!-- 纳税人识别码 -->
        <tr>
          <th>
            <font class="star">*</font><label for="pro-identifier">身份证号：</label>
          </th>
          <td colspan="4">
            <input id="pro-identifier" name="identifier" type="text" />
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label for="pro-registed-address">认证说明：</label>
          </th>
          <td colspan="4">
            <textarea id="pro-registed-address" name="registed-address" maxlength="60" v-model="introduce" @input="count"></textarea>
            <p>已输入 {{ inputCount }} /最多输入 60</p>
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label for="pro-registed-phone">电子邮箱：</label>
          </th>
          <td colspan="4">
            <input id="pro-registed-phone" name="registed-phone" type="text" />
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label for="pro-bank">手机号码：</label>
          </th>
          <td colspan="4">
            <input id="pro-bank" name="bank" type="text" />
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label>身份证照片：</label>
          </th>
          <td>
            <label for="pro-account" class="btn upload-file">身份证照片</label>
            <input id="pro-account" name="account" type="file" style="display:none"/>
          </td>
        </tr>
        <tr>
          <th>
          </th>
          <td colspan="5">
            <p>上传身份证扫描正面，通过身份认证将有效预防身份信息被冒用的风险。</p>
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr class="title">
          <td colspan="6">
            <p>基本信息（以下 “职位证明” 和 “资质/荣誉” 至少提供一项）</p>
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label for="pro-address">职位证明：</label>
          </th>
          <td>
            <label for="pro-address" class="btn upload-file">职位证明</label>
            <input id="pro-address" name="account" type="file" style="display:none"/>
          </td>
        </tr>
        <tr>
          <th>
          </th>
          <td colspan="5">
            <p>上传身份证扫描正面，通过身份认证将有效预防身份信息被冒用的风险。</p>
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <th>
            <font class="star">*</font><label>资质/荣誉证明：</label>
          </th>
          <td>
            <label for="pro-phone" class="btn upload-file">资质/荣誉证明</label>
            <input id="pro-phone" name="account" type="file" style="display:none"/>
          </td>
        </tr>
        <tr>
          <th>
          </th>
          <td colspan="5">
            <p>上传身份证扫描正面，通过身份认证将有效预防身份信息被冒用的风险。</p>
          </td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
        <tr>
          <td width="120"></td>
          <td width="80"></td>
          <td width="80"></td>
          <td width="80"></td>
          <td width="80"></td>
          <td width="80"></td>
        </tr>
        <tr class="btn-group">
          <td><input type="button" class="btn btn-danger" value="提交"></td>
          <td><input type="button" class="btn cancel" value="取消"></td>
          <td></td>
        </tr>
        <tr class="splite">
          <td colspan="6"></td>
        </tr>
      </table>
	  </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      inputCount:'0',
      introduce:''
    };
  },
  methods: {
    count:function(){
      setTimeout(()=>{
        this.inputCount = this.introduce.length
      },100)
    }
  }
};
</script>

 <style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_order_r {
  width: 811px;
  margin-left: 55px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
  .sum_of_class {
    background-color: #468ee3;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .txt {
    font-size: 14px;
    border: 1px solid #ddd;
    line-height: 34px;
    padding: 10px 15px 10px 60px;
    position: relative;
    img {
      display: inline-block;
      width: 30px;
      position: absolute;
      left: 15px;
      top: 25px;
      height: 30px;
    }
  }
  .div01 {
    border: 1px solid #ddd;
    margin: 20px 0;
    overflow: hidden;
    h3 {
      background-color: $bg-nav;
      line-height: 30px;
      padding-left: 20px;
    }
    table,
    tr,
    td {
      text-align: left;
      padding-left: 10px;
      // border:1px solid $border-dark;
    }
    table {
      border-collapse: collapse;
      margin: 0 auto;
      th {
        text-align: right;
        color: $dark;
        font-size: 14px;
      }
      .splite{
        height: 30px;
      }
      .title{
        height: 30px;
        background-color: $bg-nav;
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
        width: 90%;
        height: 25px;
        outline: none;
        padding:0 10px;
        line-height:25px;
      }
      input[type="radio"] {
        display: none;
      }
      .upload-file{
        display: inline-block;
        width: 80px;
        background-color: $bg-nav;
        text-align: center;
        color: $dark;
        cursor: pointer;
      }
      textarea{
        resize: none;
        width: 90%;
        padding:10px;
        height: 60px;
        outline: none;
      }
      p{
        color: $dark;
      }
      .btn {
        display: inline-block;
        width: 80px;
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
        background-color: #fff;
      }
    }
  }
}
</style>
