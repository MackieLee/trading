<template>
  <form @submit.prevent="submit">
    <!-- 用户名 -->
    <div class="error"><p v-show="error.userError">
      <span> {{ error.userNameError }}</span></p></div>
    <div class="icon user">
      <i class="iblock"></i>
      <input type="text" name="user" v-model="formData.userName" @input="validate('userName',$event.target.value)" placeholder="请输入用户名" />
    </div>
    <!-- 手机号/邮箱 -->
    <div class="error"><p v-show="error.userError">
      <span> {{ error.userError }}</span></p></div>
    <div class="icon user">
      <i class="iblock"></i>
      <input type="text" name="user" v-model="formData.phoneNum" @input="validate('user',$event.target.value)" placeholder="请输入手机号/邮箱" />
    </div>
    <!-- 密码 -->
    <div class="error"><p v-show="error.pwdError">
      <span> {{ error.pwdError }}</span></p></div>
    <div class="icon pwd">
      <i class="iblock"></i>
      <input type="text" v-model="formData.pwd" name="pwd" @input="validate('pwd',$event.target.value)" placeholder="请输入密码" />
    </div>
    <!-- 确认密码 -->
    <div class="error"><p v-show="error.pwdError">
      <span> {{ error.confirmError }}</span></p></div>
    <div class="icon confirm">
      <i class="iblock"></i>
      <input type="text" v-model="formData.confirmPwd" @blur="checkPwd" @input="validate('pwd',$event.target.value)" name="confirm" placeholder="确认密码" />
    </div>
    <!-- 验证码 -->
    <div class="error"><p v-show="error.ckCodeError">
      <span> {{ error.ckCodeError }}</span></p></div>
    <div class="icon code ckcode">
      <i class="iblock"></i>
      <input type="text" v-model="formData.ckcode" name="ckcode" placeholder="请输入验证码" />
      <span class="ck-code"></span>
    </div>
    <!-- 短信/邮件验证码 -->
    <div class="error"><p v-show="error.phoneCodeError">
      <span> {{ error.phoneCodeError }}</span></p></div>
    <div class="icon code phcode">
      <i class="iblock"></i>
      <input type="text" v-model="formData.phoneCode" name="phcode" placeholder="短信验证码" />
    </div>
    <!-- 邀请码 -->
    <div class="error"><p v-show="error.invCodeError">
      <span> {{ error.invCodeError }}</span></p></div>
    <div class="icon code invcode">
      <i class="iblock"></i>
      <input type="text" v-model="formData.invCode" name="invcode" placeholder="邀请码" />
    </div>
    <div class="read">
      <span @click="toggleChecked">
        <input type="checkbox" name="read"/><i :class="[ { checked: checked },{ unchecked: !checked },'iblock' ]"></i><label for="read">阅读并同意《九鼎服务协议》</label>
      </span>
    </div>
    <div class="login-btn">
      <button class="submit" type="submit">注册</button>
    </div>
  </form>
</template>

<script>
import { validateForm } from "../../util";
export default {
  data() {
    return {
      checked: false,
      error:{
        userError: "",
        userNameError:"",
        pwdError: "",
        confirmError:"",
        phoneCodeError:"",
        ckCodeError:"",
        invCodeError:""
      },
      formData:{
        userName:"",
        phoneNum:"",
        pwd:"",
        confirmPwd:"",
        ckCode:"",
        phoneCode:"",
        invCode:""
      },
    };
  },
  methods: {
    toggleChecked: function() {
      this.checked = !this.checked;
    },
    //扩充checkjs内容
    //格式不对的输入框显示对应的文字
    // 类型 和 状态，成功状态 或者是 失败状态，失败状态返回失败原因
    validateForm,
    validate: function(type, value) {
      let state = validateForm(type, value);
    },
    checkPwd:function(){
      (this.confirmPwd === this.pwd)?this.pwdError = "":null
    },
    submit:function(){

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.iblock {
  display: inline-block;
  height: 22px;
  width: 20px;
  background-image: url("../../assets/images/Sprite.png");
}
.error {
  height: 20px;
  p {
    line-height: 14px;
    i {
      background-position: -55px 0;
    }
    span {
      vertical-align: text-top;
      color: $red;
    }
  }
}
.icon {
  position: relative;
  i {
    position: absolute;
    top: 4px;
    left: 4px;
  }
}
.pwd,
.confirm {
  i {
    background-position: -99px -49px;
  }
}
.user,
.ckcode,
.phcode,
.invcode {
  i {
    background-position: -101px -15px;
  }
}
input {
  height: 20px;
  padding: 5px 10px 5px 35px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  border: 1px solid $border-blue;
  width: 267px;
  margin-bottom: 7px;
  &:focus {
    border-color: $red;
    outline: none;
  }
}
.ckcode input {
  width: 30%;
  margin-right: 12px;
}
.read {
  display: flex;

  padding-right: 28px;
  margin: 10px 0 38px 0;
  input {
    display: none;
  }
  i {
    vertical-align: text-bottom;
    height: 18px;
    width: 18px;
  }
  .unchecked {
    background-position: -101px -282px;
  }
  .checked {
    background-position: -101px -253px;
  }
}
.login-btn {
  display: flex;
  justify-content: center;
  .submit {
    width: 162px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: $white;
    background-color: $btn-danger;
    cursor: pointer;
    &:hover {
      background-color: $btn-danger-hover;
    }
  }
}
</style>
