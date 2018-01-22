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
							<Input type="text" v-model="form.name" placeholder="请输入用户名/邮箱/手机号"></Input>
						</FormItem>
						<FormItem prop="passwd">
							<Input :type="type" v-model="form.passwd" placeholder="请输入密码"  @on-click="showPasswd" :icon="eye"></Input>
						</FormItem>
						<FormItem prop="picYanzheng" :error="errData">
              <Row>
                <Col span="8" prop="picYanzheng">
                  <Input v-model="form.picYanzheng" placeholder="图片验证"></Input>
                </Col>
                <Col span="15" offset="1">
                  <img @click="getCodeImgChange" :src="codeUri">
                </Col>
              </Row>
            </FormItem>
						<FormItem prop="interest">
							<Checkbox label="记住账号" v-model="remember">记住账号</Checkbox>
							<router-link class="getpwd" :to="{name:'getpwd'}">忘记密码</router-link>
						</FormItem>
						<FormItem>
							<Button type="error" @click="submit(form)" long>登录</Button>
						</FormItem>
					</Form>
					<div class="others">
						<span>合作账号登录 : </span>
						<router-link :to=" { name:'register'} " class="wechat"></router-link>
						<router-link :to=" { name:'register'} " class="weibo"></router-link>
						<router-link :to=" { name:'register'} " class="qq"></router-link>
						<router-link :to=" { name:'register'} " class="alipay"></router-link>
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
import axios from "axios"

export default {
  components: { JoinHeader, JoinFooter },
  data() {
    //这是验证用户是否存在
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"))
      }
      callback()
    };
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
          piccode:value
        }).then((res)=>{
          if(res && res === 10004){
            this.errData = '验证码错误'
          }else if(!res){
            this.errData = '验证码错误'
          }else{
            callback()
          }
        })
      }
      callback()
    }
    return {
      form: {
        name: "",
        passwd: "",
        picYanzheng:""
      },
      errData:'',
      remember: false,
      eye: "eye-disabled",
      type: "password",
      codeUri:'',
      ruleCustom: {
        passwd: [{ validator: validatePwd, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }],
        picYanzheng: [{ validator: validatePic, trigger: "blur" }]
      }
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
    submit: function(arg) {
      let _self = this;
      let res = loginUserUrl("login", {
        username: "niuhongda",
        password: "123123q",
        name: arg.name,
        pwd: arg.passwd
      }).then(res => {
        console.log(res)
        if(!res){
          this.$Message.error("账户名和密码不匹配")
        }else{
          if (res.error_code === 0) {
            // 登录成功记录用户信息
            if (_self.checked) {
              setCookie("u_name", res.data.id, 365)
              window.location.href = "http://localhost:8888/#/home"
            } else {
              setCookie("u_name", res.data.id, 1)
              window.location.href = "http://localhost:8888/#/home"
            }
            this.$Message.success("登录成功")
          } else {
            this.$Message.error("登录失败")
          }
        }
      })
    },
    getCodeImgChange(){
      let _self = this
      _self.codeUri = ''
      setTimeout(function(){
        _self.codeUri = 'http://aip.kehu.zaidayou.com/api/execute/register_code?username=niuhongda&password=123123q'
      },200)
    }
  },
  created () {
    // 获取图片验证码
    this.codeUri = 'http://aip.kehu.zaidayou.com/api/execute/register_code?username=niuhongda&password=123123q'
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.login-box {
  background: url("../../assets/images/登录.png") center center no-repeat;
  background-size: 100% 100%;
  min-height: 549px;
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
