<template>
	<div class="login">
		<join-header></join-header>
		<div class="login-box">
			<div class="content">
				<div class="form-box">
					<p class="title">
						<a :class="{'text-bottom-long':cur,'text-bottom-short':!cur}" @click="cur=false" class="text-ali-ctr">手机找回</a>
						<a :class="{'text-bottom-long':!cur,'text-bottom-short':cur}" @click="cur=true" style="text-align:right">邮箱找回</a>
					</p>
					<Form ref="form" :model="form" :rules="ruleCustom">
						<FormItem prop="phNum" v-show="!cur">
							<Input type="text" v-model="form.phNum" placeholder="请输入手机号"></Input>
						</FormItem>
            <FormItem prop="mail" v-show="cur">
							<Input type="text" v-model="form.mail" placeholder="请输入邮箱"></Input>
						</FormItem>
						<FormItem prop="passwd">
							<Input :type="type" v-model="form.passwd" placeholder="请输入密码"  @on-click="showPasswd" :icon="eye"></Input>
						</FormItem>
            <FormItem prop="passwdCheck">
              <Input :type="type" v-model="form.passwd" placeholder="请确认密码"  @on-click="showPasswd" :icon="eye"></Input>
            </FormItem>
						<FormItem prop="yanzhengma">
							<Input type="text" placeholder="请输入验证码"></Input>
						</FormItem>
						<FormItem>
							<Button type="error" @click="submit(form)" long>重 置</Button>
						</FormItem>
					</Form>
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
  import { setCookie,getCookie } from "@/util/cookie"
	import axios from 'axios'

	export default {
		components: { JoinHeader, JoinFooter },
		data() {
      // 验证密码格式
      const validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'))
				} else {
					let reg = reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/
					if(reg.test(value)){
						if(this.form.passwdCheck !== '') {
							// 对第二个密码框单独验证
							this.$refs.form.validateField('passwdCheck')
						}
					}else{
						callback(new Error('密码不少于8位且必须包含字母和数字'))
					}
					callback();
				}
			}
			//确认密码
			const validatePassCheck = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请确认密码'));
				} else if(value !== this.form.passwd) {
					callback(new Error('两次输入的密码不一样'));
				} else {
					callback();
				}
			}
			//验证码
			const validateYanzhengma = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('验证码不能为空'))
				}
				callback()
			}
			return {
				form: {
					name: '',
          passwd: '',
          passwdCheck:'',
          phNum:'',
          mail:''
				},
        eye:'eye-disabled',
        type:'password',
        cur:false,
				ruleCustom: {
					passwd: [
						{ required: true, validator: validatePass, trigger: 'blur' }
					],
					passwdCheck: [
						{ required: true, validator: validatePassCheck, trigger: 'blur' }
          ],
          mail: [
						{ required: true, message: '不能为空', trigger: 'blur' }
          ],
          phNum: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
					yanzhengma: [
						{ validator: validateYanzhengma, trigger: 'blur' }
					]
				}
			}
		},
		methods: {
      // 密码隐藏
      showPasswd:function(){
        this.eye === 'eye'?this.eye = 'eye-disabled':this.eye = 'eye'
        this.type === 'password'?this.type = 'text':this.type = 'password'
      },
			// 登录
      submit: function(arg) {
        let _self = this
				let res = loginUserUrl('login', {
					username: 'niuhongda',
					password: '123123q',
          name:arg.name,
          pwd:arg.passwd
				}).then((res)=>{
          if(res.error_code === 0){
            // 登录成功记录用户信息
            if(_self.checked){
              // localStorage
              if(localStorage){
                localStorage.setItem('user',JSON.stringify(_self.form))
                // 显示 [object object]，实际上是JSON对象，可以直接 => 属性 使用或读取具体属性值
                // console.log('local-ok' + JSON.parse(sessionStorage.getItem('user')))
              }else{
                this.$Message.error('您的浏览器未启用缓存')
              }
            }else{
            // sessionStorage 和 window 生命周期绑定 页面关闭 => 数据清空，而且登录状态应该由后台来验证，前台容易被伪造。webstorage只适合存储次要数据
            // 用户的登录状态和退出状态由后台来记录
            // 用户的登录信息保存在cookie中
              setCookie('u_name',arg.name,1)
              window.location.href = "http://localhost:8888/#/home"
            }
            this.$Message.success('登录成功')
          }else{
            this.$Message.error('登录失败')
          }
        })
			},
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../assets/style/base.scss";
	.login-box {
		background: url("../../assets/images/登录.png") center center no-repeat;
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
					padding: 0 10px 5px 10px;
				}
        .text-bottom-long{
          border-bottom: 2px solid $border-rice;
          width: 193px;
        }
        .text-bottom-short{
          border-bottom: 2px solid $border-blue;
        }
				.txt-ali-rt {
					text-align: right;
				}
				.txt-ali-ctr {
					text-align: left;
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
