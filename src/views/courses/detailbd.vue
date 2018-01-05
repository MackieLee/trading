<template>
  <div class="customize">
    <div class="cur-posi">
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税></router-link>
        <router-link to="/odetail">线下课程</router-link>&nbsp;&gt;&nbsp;线下课程报名
    </div>
    <div class="content">
      <font>线下课程报名</font>
      <form @submit.prevent="submit">
      	<div class="flex">
  <label for="sum" class="danwei"><i>*</i>公司名称：</label><input placeholder="请输入您的公司名称" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>职 位：</label><input placeholder="请输入您的职位" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>姓 名：</label><input placeholder="请输入您的名称" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei">性 别：</label><input placeholder="请输入您的性别" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>手机号码：</label><input placeholder="请输入您的手机号码" type="text" class="mid-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>电子邮箱：</label><input placeholder="请输入您的电子邮箱" type="text" class="mid-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei">固定电话：</label><input placeholder="请输入您的电话" type="text" class="mid-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>听课人数：</label><input placeholder="请输入您的听课人数" type="text" class="mid-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>课程单价：</label><input placeholder="请输入课程单价" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>课程名称：</label><input placeholder="请输入课程名称" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>开课城市：</label><input placeholder="请输入开课城市" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>培训时间：</label><input placeholder="请输入培训时间" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei">是否住宿：</label><input placeholder="请输入是否住宿" type="text" class="lg-input" />
        </div>
        <div class="flex">
  <label for="sum" class="danwei"><i>*</i>付款方式：</label><input placeholder="请输入付款方式" type="text" class="lg-input" />
        </div>
        
      </form>
      <div class="div">
 <router-link :to="{ name: 'pay' }" tag="input" type="submit" class="sub" value="提 交">
 </router-link>
       	<router-link :to="{ name: 'home' }" tag="p" class="p">
       如有任何疑问，请联系 <span>在线客服</span></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.customize {
  ::-webkit-input-placeholder {
    color: #aeaeae;
  }
  :-moz-placeholder {
    color: #aeaeae;
  }
  ::-moz-placeholder {
    color: #aeaeae;
  }
  :-ms-input-placeholder {
    color: #aeaeae;
  }
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  i {
    display: inline-block;
    width: 9px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .cur-posi {
    padding: 0 0 26px 0;
    i {
      background-position: -18px -106px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .content {
    margin: 18px auto;
    width: 98%;
    overflow: hidden;
    margin: 0 auto;
    font {
      font-size: 26px;
      display: block;
      margin: 0px 0 20px;
      height: 40px;
      background-color: #468ee3;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      color: #fff;
    }
    form{
      border: 1px solid #ddd; 
      width: 94%;
      margin: 20px auto; padding:20px 30px;
      .flex {display: inline-block;
        margin: 15px 10px;
        i {
          margin-right: 6px;
          color: #e7141a;
        }
        .danwei {
          margin-right: 10px;display: inline-block;
          font-size: 16px;
          width: 130px;
          line-height: 38px;
          text-align: right;
        }
        input {
          width: 320px;
          height: 38px;
          text-indent: 1em;
          border: 1px solid #ddd;
        }
      }
    }
    .div {
      width: 99%;
      margin: 30px;
      text-align: center;
      .sub {
        width: 80px;
        line-height: 36px;
        height: 36px;
        background-color: $red;
        outline: none;
        border-radius: 3px;
        border: none;
        color: $white;
        cursor: pointer;
      }
      .p {
        margin: 20px 0px;
        cursor: pointer;
        span {
          color: #117cee;
        }
      }
    }
  }
}
</style>
