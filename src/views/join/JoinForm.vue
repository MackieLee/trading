<template>
  <form>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon user">
      <i class="iblock"></i>
      <input type="text" name="user" @input="validate('user',$event.target.value)" placeholder="请输入手机号/邮箱" />
    </div>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon pwd">
      <i class="iblock"></i>
      <input type="text" name="pwd" placeholder="请输入密码" />
    </div>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon confirm">
      <i class="iblock"></i>
      <input type="text" name="confirm" placeholder="确认密码" />
    </div>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon code ckcode">
      <i class="iblock"></i>
      <input type="text" name="ckcode" placeholder="请输入验证码" />
      <span class="ck-code"></span>
    </div>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon code phcode">
      <i class="iblock"></i>
      <input type="text" name="phcode" placeholder="短信验证码" />
    </div>
    <div class="error"><p v-show="error">
      <!-- <i class="iblock"></i> -->
      <span> {{ error }}</span></p></div>
    <div class="icon code invcode">
      <i class="iblock"></i>
      <input type="text" name="invcode" placeholder="邀请码" />
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
import { validateForm } from '../../util'
export default {
  data() {
    return {
      checked:false,
      error:''
    }
  },
  methods:{
    toggleChecked:function(){
      this.checked = !this.checked
    },
    //扩充checkjs内容
    //格式不对的输入框显示对应的文字
    validateForm,
    validate:function(type,value){
      console.log(validateForm(type,value))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .iblock{
    display: inline-block;
    height: 20px;
    width: 20px;
    background-image: url('../../assets/images/Sprite.png');
  }
  .error{
    height: 20px;
    p{
      line-height: 14px;
      i{
        background-position: -55px 0;
      }
      span{
        vertical-align: text-top;
        color:$red;
      }
    }
  }
  .icon{
    position: relative;
    i{
      position: absolute;
      top: 4px;
      left:4px;
    }
  }
  .pwd,.confirm{
    i{
      background-position: -28px 0px;
    }
  }
  .user,.ckcode,.phcode,.invcode{
    i{
      background-position: -86px -2px;
    }
  }
  input {
    height: 20px;
    padding: 5px 10px 5px 35px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    border: 1px solid $border;
    width: 267px;
    margin-bottom: 7px;
    &:focus{
      border-color: $red;
      outline: none;
    }
  }
  .ckcode input {
    width: 30%;
    margin-right: 12px;
  }
  .login-btn{
    display: flex;
    justify-content: center;
    .submit {
      width: 160px;
      padding: 5px;
      border: none;
      border-radius: 5px;
      color: $white;
      background-color: $red;
      cursor: pointer;
    }
  }
  .read{
    display: flex;

    padding-right: 28px;
    margin: 10px 0 38px 0;
    input{
      display: none;
    }
    i{
      vertical-align: text-bottom;
    }
    .unchecked{
      background-position: -58px -19px;
    }
    .checked{
      background-position: -58px -38.5px;
    }
  }
  .login-btn{
    display: flex;
    justify-content: center;
    .submit {
      width: 162px;
      padding: 5px;
      border: none;
      border-radius: 5px;
      color: $white;
      background-color: $red;
      cursor: pointer;
    }
  }
</style>
