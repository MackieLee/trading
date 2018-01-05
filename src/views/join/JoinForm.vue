<template>
	<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
		<FormItem label="用户名" prop="name">
			<Input v-model="formValidate.name" placeholder="请输入您要注册的用户名"></Input>
		</FormItem>
		<FormItem label="密码" prop="passwd">
			<Input type="password" v-model="formValidate.passwd" placeholder="请输入密码"></Input>
		</FormItem>
		<FormItem label="确认密码" prop="passwdCheck">
			<Input type="password" v-model="formValidate.passwdCheck" placeholder="请再次输入密码"></Input>
		</FormItem>
		<FormItem label="手机/邮箱" prop="mail">
			<Input v-model="formValidate.mail" placeholder="请输入手机号码或邮箱"></Input>
		</FormItem>
		<FormItem label="验证码" prop="yanzhengma">
			<Input v-model="formValidate.yanzhengma" placeholder="请输入验证码"></Input>
		</FormItem>
		<FormItem label="邀请码" prop="yaoqingma">
			<Input v-model="formValidate.yaoqingma" placeholder="请输入邀请码"></Input>
		</FormItem>
		<FormItem>
			<Button type="primary" @click="handleSubmit('formValidate',formValidate)">Submit</Button>
			<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
		</FormItem>
	</Form>
</template>
<script>
import { loginUserUrl } from "@/api/api";
import { setCookie, getCookie } from "@/util/cookie";
export default {
  data() {
    //用户名验证
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        let res = loginUserUrl(
          "http://aip.kehu.zaidayou.com/api/execute/getuser",
          {
            username: "niuhongda",
            password: "123123q",
            name: value
          }
        );
        setTimeout(() => {
          res.then(res => {
            if (res === 0) {
              console.log(res);
              callback(new Error("用户已存在"));
            } else {
              callback();
            }
          });
        }, 1000);
      }
    };
    //密码
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg = (reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/);
        if (reg.test(value)) {
          if (this.formValidate.passwdCheck !== "") {
            // 对第二个密码框单独验证
            this.$refs.formValidate.validateField("passwdCheck");
          }
        } else {
          callback(new Error("密码不少于8位且必须包含字母和数字"));
        }
        callback();
      }
    };
    //确认密码
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"));
      } else if (value !== this.formValidate.passwd) {
        callback(new Error("两次输入的密码不一样"));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        name: "",
        passwd: "",
        passwdCheck: "",
        mail: "",
        yanzhengma: "",
        yaoqingma: ""
      },
      ruleValidate: {
        name: [{ required: true, validator: validateName, trigger: "blur" }],
        mail: [{ required: true, message: "不能为空", trigger: "blur" }],
        passwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        passwdCheck: [
          { required: true, validator: validatePassCheck, trigger: "blur" }
        ],
        yanzhengma: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name, arg) {
      this.$refs[name].validate(valid => {
        let res = loginUserUrl(
          "http://aip.kehu.zaidayou.com/api/execute/register",
          {
            username: "niuhongda",
            password: "123123q",
            name: arg.name,
            pwd: arg.passwd
          }
        ).then(res => {
          if (valid) {
            if (res.error_code === 0) {
              this.$Message.success("注册成功!");
              setCookie("u_name", arg.name, 1);
              window.location.href = "http://localhost:8888/#/home";
            } else {
              console.log(res);
              this.$Message.error("表单提交失败");
            }
          } else {
            return false;
          }
        })
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
