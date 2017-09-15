<template>
  <div class="customize">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;图书
      </p>
    </div>
    <div class="content">
      <font>2017专属您的私人定制</font>
      <form>
        <div class="flex">
          <label for="sum" class="tag tag-width">听课人数：</label><input name="sum" id="sum" type="text" class="all-in" />
        </div>
        <div class="flex">
          <label class="tag tag-width">地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 址：</label>
          <select v-model="selected">
            <option v-for=" item in province" :key="item" :value=" item ">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
        </div>
        <div class="flex">
          <label class="tag tag-width">时间安排：</label>
          <select v-model="selected">
            <option v-for=" item in province" :key="item" :value=" item ">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
        </div>
        <div class="flex">
          <label class="tag tag-width">课 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 题：</label>
          <select>
            <option></option>
          </select>
        </div>
        <div class="flex">
          <label class="tag tag-width">讲师要求：</label>
          <select>
            <option></option>
          </select>
        </div>
        <div class="flex">
          <label class="tag tag-width" for="shengming">声 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 明：</label><input class="all-in" id="shengming"/>
        </div>
        <div class="msg flex">
          <div class="tag tag-width title">企业信息：</div>
          <div>
            <div class="tag block"><label for="danwei">单位名称</label><input name="danwei" id="danwei"/></div>
            <div class="tag block"><label for="lianxiren">联系人</label><input name="lianxiren" id="lianxiren"/></div>
            <div class="tag block"><label for="zhiwu">职务</label><input name="zhiwu" id="zhiwu"/></div>
            <div class="tag block"><label for="dianhua">电话</label><input name="dianhua" id="dianhua"/></div>
            <div class="tag block"><label for="youxiang">邮箱</label><input name="youxiang" id="youxiang"/></div>
          </div>
        </div>
        <div class="sub">
          提交
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userState: '',
      pwdState: '',
      confirmState: '',
      adressState: false,
      emailState: '',
      phoneNumState: '',
      selected: null,
      birth: {
        year: 2000,
        mon: 1,
        day: 1
      },
      uNameError: {
        "error_01": "只能包含字母，数字下划线和中文字体，长度不能超过12个字符",
        "error_02": "用户名已经被使用"
      },
      pwdError: {
        "error_01": "两次输入的密码不一致",
        "error_02": "密码长度不能超过12个字符"
      },
      province: ['', '北京', '上海', '南京', '山东', '河北', '河南'],
      cityObj: {
        "北京": ['朝阳', '海淀', '通州', '丰台'],
        "山东": ['青岛', '济南', '临沂']
      }
    }
  },
  computed: {
    city: function() {
      return this.cityObj[this.selected]
    }
  },
  methods: {
    submit: function() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.customize {
  width: $width;
  margin: 0 auto;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    padding: 26px 0;
    i {
      background-position: -106px -204px;
      margin-right: 6px;
    }
  }
  .content {
    background-color: $white;
    margin: 18px 0 0 0;
    padding: 94px 100px 200px 134px;
    font {
      font-size: 36px;
      color: $red;
      display: block;
      text-align: center;
    }

    form {
      margin-top: 106px;
      input,select{
        border: 1px solid #ddd;
      }
      .flex {
        display: flex;
        margin:40px 0;
      }
      .tag-width{
        width: 100px;
      }
      .tag {
        margin-right: 15px;
        font-weight: bold;
        font-size: 18px;
      }
      select{
        width: 180px;
        height: 40px;
        margin-right: 30px;
      }
      .all-in{
        width: 725px;
        height: 38px;
      }
      .msg{
        margin: 30px 0 0 0;
        .title{
         margin:0 15px 0 0;
        }
        .block{
          margin:0 0 15px 0;
          label{
            display: inline-block;
            width: 159px;
            padding: 13px 0;
            margin-right: 25px;
            line-height: 18px;
            background-color: #8E8D8D;
            text-align: center;
            color: #fff;
          }
          input{
            height: 40px;
            width: 541px;
          }
        }
      }
      .sub{
        width: 200px;
        padding: 10px 0;
        margin: 120px auto 0 auto;
        background-color: $red;
        color: #fff;
        text-align: center;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
