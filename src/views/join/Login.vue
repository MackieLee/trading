<template>
	<div class="login">
		<join-header></join-header>
		<div class="login-box">
			<div class="content">
				<div class="form-box">
					<p class="title">
						<a class="txt-ali-ctr">登录</a>
						<router-link :to="{ name:'register' }" class="txt-ali-rt">注册</router-link>
					</p>
					<Form ref="form" :model="form" :rules="ruleCustom">
						<FormItem prop="name">
							<Input type="text" v-model="form.name" placeholder="请输入用户名/邮箱/手机号" @keyup.enter.native="handleSubmit('form',form)"></Input>
						</FormItem>
						<FormItem prop="passwd">
							<Input :type="type" v-model="form.passwd" placeholder="请输入密码" @keyup.enter.native="handleSubmit('form',form)"  @on-click="showPasswd" :icon="eye"></Input>
						</FormItem>
						<FormItem prop="picYanzheng" :error="errData">
              <Row>
                <Col span="8" prop="picYanzheng">
                  <Input v-model="form.picYanzheng" placeholder="图片验证" @keyup.enter.native="handleSubmit('form',form)"></Input>
                </Col>
                <Col span="15" offset="1">
                  <img @click="getCodeImgChange" :src="imgUrl">
                </Col>
              </Row>
            </FormItem>
						<FormItem prop="interest">
							<Checkbox label="记住账号" v-model="remember" @keyup.enter.native="handleSubmit('form',form)">记住账号</Checkbox>
							<router-link class="getpwd" :to="{name:'getpwd'}">忘记密码</router-link>
						</FormItem>
						<FormItem>
							<Button type="error" @click="handleSubmit('form',form)" long>登录</Button>
						</FormItem>
					</Form>
					<div class="others">
						<span>合作账号登录 : </span>
						<router-link :to=" { name:'register'} " class="wechat"></router-link>
						<router-link :to=" { name:'register'} " class="weibo"></router-link>
						<router-link :to=" { name:'register'} " class="qq"></router-link>
						<a href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018013102120596&scope=auth_user&redirect_uri=http%3a%2f%2faip.kehu.zaidayou.com%2fapi%2fAlipaylogin%2flogin&state=542" class="alipay"></a>
					</div>
				</div>
			</div>
		</div>
		<join-footer></join-footer>
	</div>
</template>
<script>
import JoinHeader from "./JoinHeader"
import JoinFooter from "./JoinFooter"
import { loginUserUrl } from "@/api/api"
import { setCookie, getCookie } from "@/util/cookie"

export default {
  components: { JoinHeader, JoinFooter },
  data() {
    let regMb = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/;
    // 用户名不能为空
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"))
      }else if(regMb.test(value)){
        this.format = 2
      }else{
        callback()
      }
      callback()
    };
    // 密码不能为空
    const validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"))
      }
      callback();
    };
    //验证码
    const validatePic = (rule,value,callback) => {
      if(value === ''){
        callback(new Error("不能为空"))
      }else{
        let res = loginUserUrl('register_verification',{
          username: "niuhongda",
          password: "123123q",
          piccode:value,
          code:this.dataArr
        }).then((res)=>{
          if(res && res === 10004){
            callback(new Error("验证码错误"))
          }else if(!res){
            callback(new Error("验证码错误"))
          }else{
            callback()
          }
        })
      }
    }
    return {
      form: {
        name: "",
        passwd: "",
        picYanzheng:""
      },
      dataArr:'',
      imgUrl:'',
      errData:'',
      remember: false,
      eye: "eye-disabled",
      type: "password",
      ruleCustom: {
        passwd: [{ required: true, validator: validatePwd, trigger: "blur" }],
        name: [{ required: true, validator: validateName, trigger: "blur" }],
        // picYanzheng: [{ required: true, validator: validatePic, trigger: "blur" }]
      },
      format: 1,
    };
  },
  methods: {
    // 密码隐藏
    showPasswd: function() {
      this.eye === "eye" ? (this.eye = "eye-disabled") : (this.eye = "eye")
      this.type === "password"
        ? (this.type = "text")
        : (this.type = "password")
    },
    // 登录
    handleSubmit(name, arg) {
      let _self = this
      this.$refs[name].validate(valid => {
        let res = loginUserUrl("login", {
          username: "niuhongda",
          password: "123123q",
          name: arg.name,
          pwd: arg.passwd,
          format:this.format,
        }).then(res => {
          if(valid){
            if(!res){
              this.$Message.error("账户名和密码不匹配")
            }else{
              console.log(res)
              if (res.error_code === 0) {
                // 登录成功记录用户信息
                if (_self.checked) {
                  setCookie("u_name", res.data.id,365)
                  this.$router.push({name:'home'})
                } else {
                  setCookie("u_name", res.data.id,1)
                  this.$router.push({name:'home'})
                }
                this.$Message.success("登录成功")
              } else {
                this.$Message.error("登录失败")
              }
            }
          }else{
            return false
          }
        })
      })
    },
    getImg(){
      let res = loginUserUrl('register_code',{
        username: "niuhongda",
        password: "123123q"
      }).then((res)=>{
        this.dataArr = ''
        for(let i=0;i<res.data.length;i++){
          this.dataArr += res.data[i]
        }
        this.imgUrl = res.data1
      })
    },
    getCodeImgChange(){
      this.getImg()
    }
  },
  created () {
    this.getImg()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.login{
  height: 100%;
}
.login-box {
  background: url("../../assets/images/登录.jpg") center center no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .form-box {
    width: 315px;
    background-color: #fff;
    float: right;
    margin: 50px 120px;
    padding: 25px;
    border-radius: 10px;
    .title {
      padding-bottom: 10px;
      a {
        display: inline-block;
        cursor: pointer;
        text-align: right;
        padding: 0 10px 5px 10px;
      }
      .txt-ali-rt {
        text-align: right;
        border-bottom: 2px solid $border-rice;
        width: 217px;
      }
      .txt-ali-ctr {
        text-align: center;
        border-bottom: 2px solid $border-blue;
      }
    }
    .getpwd {
      float: right;
      color: red;
    }
  }
  .others {
    margin-top: 20px;
    padding: 20px 0 15px 0;
    border-top: 1px solid $border-rice;
    a {
      display: inline-block;
      margin: 0 9px;
      width: 25px;
      height: 22px;
      background-image: url("../../assets/images/Sprite.png");
    }
    .wechat {
      background-position: -182px -49px;
    }
    .weibo {
      background-position: -184px -92px;
    }
    .qq {
      background-position: -186px -122px;
    }
    .alipay {
      background-position: -185px -162px;
    }
  }
}
</style>
