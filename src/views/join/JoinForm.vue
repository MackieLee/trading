<template>
  <form @submit.prevent="submit">
    <div class="form-content">
      <p :class="{ 'p-danger':userState==='danger'}">{{ uNameError.error_01 }}</p>
      <div>
        <span>用户名:</span>
        <input :class=userState type="text" @input="validate('user',$event.target.value)" placeholder="用户名" />
      </div>
      <p :class="{ 'p-danger':pwdState==='danger'}">{{ pwdError.error_01 }}</p>
      <div>
        <span>密码:</span>
        <input :class=pwdState type="password" placeholder="密码" />
      </div>
      <p :class="{ 'p-danger':confirmState==='danger'}"></p>
      <div>
        <span>确认密码:</span>
        <input :class=confirmState type="password" placeholder="确认密码" />
      </div>
      <p></p>
      <div>
        <span>性别:</span>
        <div class="sex">
          <input type="radio" name="sex" />男
          <input type="radio" name="sex" />女
        </div>
      </div>
      <p></p>
      <div>
        <span>生日:</span>
        <div class="birthday" @click="changeBirthday">
          <div><span data-tar="year" data-act="decre">-</span><input type="text" maxlength="4" v-model="birth.year"><span data-tar="year" data-act="plus">+</span></div>
          <div><span data-tar="mon" data-act="decre">-</span><input type="text" maxlength="2" v-model="birth.mon"><span data-tar="mon" data-act="plus">+</span></div>
          <div><span data-tar="day" data-act="decre">-</span><input type="text" maxlength="2" v-model="birth.day"><span data-tar="day" data-act="plus">+</span></div>
        </div>
      </div>
      <p :class="{ 'p-danger':adressState}"></p>
      <div>
        <span>所在地:</span>
        <div class="adress">
          <select v-model="selected">
            <option v-for=" item in province" :key="item" :value=" item ">{{ item }}</option>
          </select>
          <!--怎么用代码知道省份已经选择了-->
          <!--利用 :value 和 v-model 将选项绑定到 selected 数组中-->
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
        </div>
      </div>
      <p :class="{ 'p-danger':emailState==='danger'}"></p>
      <div>
        <span>电子邮箱:</span>
        <input :class=emailState type="text" data-role="email" placeholder="电子邮箱" />
      </div>
      <p :class="{ 'p-danger':phoneNumState==='danger'}"></p>
      <div>
        <span>手机号码:</span>
        <input :class=phoneNumState type="text" data-role="phoneNum" placeholder="手机号码" />
      </div>
      <button class="submit" type="submit">注册</button>
    </div>
  </form>
</template>
<script>
import { validateForm } from '../../util'

export default {
  name: 'join',
  data(){
    return {
      userState:'',
      pwdState:'',
      confirmState:'',
      adressState:false,
      emailState:'',
      phoneNumState:'',
      selected:null,
      birth: {
        year : 2000 ,
        mon : 1,
        day : 1
      },
      uNameError:{
        "error_01" : "只能包含字母，数字下划线和中文字体，长度不能超过12个字符",
        "error_02" : "用户名已经被使用"
      },
      pwdError:{
        "error_01" : "两次输入的密码不一致",
        "error_02" : "密码长度不能超过12个字符"
      },
      province:['','北京','上海','南京','山东','河北','河南'],
      cityObj:{
        "北京" : ['朝阳','海淀','通州','丰台'],
        "山东" : ['青岛','济南','临沂']
      }
    }
  },
  computed:{
    city:function(){
      return this.cityObj[this.selected]
    }
  },
  methods:{
    changeBirthday:function(e){
      let what = e.target.dataset.tar
      if(e.target.dataset.act === 'plus'){
        let [mon,day] = [ this.birth.mon,this.birth.day ]
        this.birth[what]++
        what==="mon"&&mon===12?this.birth.mon=1:what==="day"?((mon===2&&day===29)||(mon===(4||6||9||11)&&day===30)||day===31?this.birth.day=1:""):""
      }else if(e.target.dataset.act === 'decre' && this.birth[what] > 1){
        this.birth[what]--
      }
    },
    submit:function(){

    },
    validateForm,
    validate:function(type,value){
      this[type + 'State'] = validateForm(type,value)
    }
  }
}
</script>
<style lang="scss" scoped>
  form{
    .form-content{
      width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 40px auto;
      p{
        padding:5px 10px;
        font-size: 12px;
        width: 400px;
        margin: 6px 0;
        border-radius: 3px;
        color: #fff;
        height: 16px;
      }
      .p-danger{
        background-color: #a94442;
      }
      div{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        span{
          font-size: 14px
        }
        input{
          height: 20px;
          padding: 5px 10px;
          font-size: 12px;
          line-height: 1.5;
          border-radius: 3px;
          border: 1px solid #66afe9;
          width: 400px;
          margin-left: 40px;
        }
        .sex{
          width: 422px;
          margin-left: 40px;
          display: flex;
          justify-content: flex-start;
          input{
            width: 20px;
            margin-left:20px;
          }
        }
        .birthday{
          width: 420px;
          margin-left: 40px;
          display: flex;
          justify-content: flex-start;
          div{
            margin: 0 5px;
            span{
              margin: 5px;
              cursor: pointer;
            }
            input{
              width: 30px;
              height: 10px;
              margin: auto;
            }
          }
        }
        .adress{
          width: 422px;
          margin-left: 40px;
          display: flex;
          justify-content: flex-start;
          select{
            margin:0 22px;
            width:60px;
            height: 22px;
            border-color: #67B0E9;
            border-radius: 3px;
          }
        }
        .success{
          border-color: #3c763d;
        }
        .danger{
          border-color: #a94442;
        }
      }
      .submit{
        width: 80%;
        margin: 30px 20px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>


