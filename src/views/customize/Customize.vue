<template>
  <div class="customize">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;定制课程
      </p>
    </div>
    <div class="content">
      <font>2017专属您的私人定制</font>
      <form @submit.prevent="submit">
        <div class="flex">
          <label for="danwei" class="tag tag-width">单位名称：</label><input name="danwei" id="danwei" placeholder="请输入您的公司名称" type="text" class="lg-input" />
        </div>
        <div class="flex">
          <label for="sum" class="tag tag-width">听课人数：</label><input name="sum" id="sum" placeholder="请输入您的公司名称" type="text" class="mid-input" />
        </div>
        <div class="flex">
          <label for="category" class="tag tag-width">学员类别：</label><input name="category" id="category" placeholder="管理层/财务人员/非财务人员" type="text" class="mid-input" />
        </div>
        <div class="flex">
          <label class="tag tag-width">授课地址：</label>
          <select v-model="provId" @click="selectProvince(provId)">
            <option v-for="(item,index) in province" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select v-model="areaId" @click="selectArea(areaId)">
            <option v-for="(item,index) in area" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select>
            <option v-for="item in city" :key="item.name">
              {{ item.name }}
            </option>
          </select>
          <input class="xiangxidizhi" placeholder="详细地址"/>
        </div>
        <div class="flex special up">
          <label class="tag tag-width">预定时间：</label>
          <date-picker></date-picker><span>或</span><date-picker></date-picker>
        </div>
        <div class="special">
          <label class="tag tag-width hide">预定时间：</label>
          <p>选择一个时间段 周期2天 课时是12小时</p>
        </div>
        <div class="flex special down">
          <label class="tag tag-width">课 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 题：</label>
          <input name="danwei" id="danwei" placeholder="请输入你想学习的课题" type="text" class="lg-input" />
        </div>
        <div class="flex">
          <label for="jiangshi" class="tag tag-width">讲师要求：</label>
          <input name="jiangshi" id="jiangshi" placeholder="客户指定讲师/九鼎财税指派讲师" type="text" class="mid-input" />
        </div>
        <div class="flex">
          <label class="tag tag-width">备 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 注：</label>
          <textarea  placeholder="请输入您的需求" ></textarea>
        </div>
        <div class="msg flex">
          <div class="tag tag-width title">联系方式：</div>
          <div>
            <div class="tag block"><label for="lianxiren">联系人</label><input name="lianxiren" id="lianxiren" placeholder="申请人名称"/></div>
            <div class="tag block"><label for="zhiwu">职务</label><input name="zhiwu" id="zhiwu" placeholder="申请人职务"/></div>
            <div class="tag block"><label for="dianhua">电话</label><input name="dianhua" id="dianhua" placeholder="请输入11位手机号码或电话号码"/></div>
            <div class="tag block"><label for="youxiang">邮箱</label><input name="youxiang" id="youxiang" placeholder="请输入正确的电子邮箱"/></div>
          </div>
        </div>
        <input type="submit" class="sub" value="提 交"/>
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from '../datepicker/DatePicker'
const PROVINCE = require('../../assets/全国省市.json')
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
      province: PROVINCE,
      provId:'0',
      areaId:'0',
      area:[{ name:'请选择'}],
      city:[{ name:'请选择'}],
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
    }
  },
  mounted(){
  },
  computed: {
  },
  methods: {
    submit: function() {
      console.log('submit')
    },
    selectProvince:function(value){
      this.area = this.province[value].sub
    },
    selectArea:function(value){
      if(this.area[value]){
        this.city = this.area[value].sub
      }
    }
  },
  components:{
    DatePicker
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.customize {
  ::-webkit-input-placeholder {
  color:    #aeaeae;
}
:-moz-placeholder {
  color:    #aeaeae;
}
::-moz-placeholder {
  color:    #aeaeae;
}
:-ms-input-placeholder {
  color:    #aeaeae;
}
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    padding:0 0 26px 0;
    i {
      background-position: -18px -106px;
      margin-right: 6px;
    }
  }
  .content {
    border: 1px solid $border-orange;
    margin: 18px 0 0 0;
    width: 890px;
    overflow: hidden;
    margin: 0 auto;
    font {
      font-size: 26px;
      color: $red;
      display: block;
      text-align: center;
      margin: 50px 0 45px 0;
    }
    form {
      margin-top: 56px;
      width: 664px;
      margin: 0 auto;
      input{
        text-indent: 1em;
      }
      input,select{
        border: 1px solid #ddd;
      }
      .lg-input{
        width:536px;
        height: 33px;
      }
      .flex {
        display: flex;
        margin:35px 0;
        textarea{
          padding: 10px 0;
          min-width: 280px;
          min-height: 80px;
          text-indent: 1em;
          border-color: #ddd;
          outline: none;
        }
      }
      .special{
        display: flex;
        p{
          font-size: 12px;
          color:$dark;
        }
      }
      .up{
        margin-bottom: 9px;
        span{
          font-size: 12px;
          color: $dark;
          line-height: 35px;
          margin: 0 15px;
        }
      }
      .down{
        margin-top: 9px;
      }
      .hide{
        opacity: 0;
      }
      .date-picker{
        width: 178px;
        height: 38px;
        border: 1px solid #ddd;
        cursor: pointer;
      }
      .tag {
        margin-right:34px;
        font-size: 16px;
      }
      select{
        width: 98px;
        height: 35px;
        margin-right: 14px;
      }
      .mid-input{
        width: 280px;
        height: 33px;
      }
      .sm-input{
        width:206px;
        height: 33px;
      }
      .xiangxidizhi{
        width: 200px;
        height:33px;
      }
      .msg{
        margin: 30px 0 0 0;
        .title{
         margin:0 35px 0 0;
        }
        .block{
          margin:0 0 15px 0;
          label{
            display: inline-block;
            width: 114px;
            padding: 13px 0;
            margin-right: 22px;
            line-height: 11px;
            background-color: #F3F3F3;
            text-align: center;
            color: $dark;
            font-size: 14px;
          }
          input{
            height: 33px;
            width: 384px;
          }
        }
      }
      .sub{
         padding-left: 10px; padding-right: 20px; margin:30px 0 50px 50%;
        line-height: 36px;height: 36px;
        background-color: $red;
        outline: none; border-radius: 3px;
        border: none;
        color: $white;
        cursor: pointer;

      }
    }
  }
}
</style>
