<template>
  <div>
    <Modal v-model="modal" width="1000" :closable="false">
      <p slot="header"  style="color:red;text-align:center">
        <span>神州九鼎用户协议</span>
      </p>
      <div class="copy">
        <P>
          尊敬的用户，欢迎您注册成为九鼎财税用户。<br>
          在注册前请您仔细阅读如下服务条款：本服务协议双方为本网站与本网站用户，本服务协议具有合同效力。<br>
          您确认本服务协议后，本服务协议即在您和本网站之间产生法律效力。<br>
          请您务必在注册之前认真阅读全部
          服务协议内容，如有任何疑问，可向本网站咨询。无论您事实上是否在注册之前认真阅读了本服务协议，只要您点击协议正本下方的
          "注册"按钮并按照本网站注册程序成功注册为用户，您的行为仍然表示您同意并签署了本服务协议。
		    </P>
        <P>
	    		<h3>用户的帐号、密码和安全性</h3>
	    		<font>1、</font>会员务必确保注册用户名及密码的安全性。如果丢失，造成的损失将由本人承担全部后果。<br>
	    		<font>2、</font>会员对利用该用户名及密码所进行的一切课程负全部责任；因此所衍生的任何损失或损害，本网站不承担任何责任。<br>
				  <font>3、</font>会员不得将账号借予他人或多人共同使用一个账号。如果发现或者有正当的理由怀疑多人共用一个帐号的现象，本网站保留结束或终止该账号的权利。<br>
				  <font>4、</font>本网站不对会员所发布信息的删除或储存失败负责。本网站有判定会员的行为是否符合九鼎财税服务条款的要求的保留权利，如果会员违背了服务条款的规定，九鼎财税有中断对其提供网络服务的权利。
        </P>
        <P>
	    		<h3>用户隐私制度</h3>【用户同意】<br>
          <font>1、</font>提供及时、详尽及准确的个人资料。<br>
          <font>2、</font>同意接收来自本网站的信息。<br>
          <font>3、</font>不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。<br>
          <font>4、</font>本网站不公开用户的姓名、地址、电子邮箱和笔名，以下情况除外，相应的法律及程序要求本网
          站提供用户的个人资料、如果用户提供的资料包含有不正确的信息、本网站保留结束用户使用本网站信息服务资格的权利。<br>
          <font>5、</font>用户授权本网站透露这些信息。<br>【用户隐私制度】<br>
				  <font>6、</font>尊重用户个人隐私是本网站的一项基本政策。所以，本网站一定不会在未经合法用户授权时公开、编
            辑或透露其注册资料及保存在本网站中的非公开内容，除非有法律许可要求或本网站在诚信的基础上认为透露这些信息在以下四种情况是必要的：<br>
            （1）遵守有关法律规定，遵从本网站合法服务程序。<br>
            （2）保持维护本网站的商标所有权。<br>
            （3）在紧急情况下竭力维护用户个人和社会大众的隐私安全。<br>
            （4）本网站保留发布会员人口分析资询的权利。<br>
				</P>
        <P>
          <h3>会员承担的责任</h3>
          <font>1、</font>九鼎财税所有会员需自备上网所需要的设备，自行承担上网产生的各项费用。使用自己的电脑能够顺利地接入国际互联网，并能访问本网站主页。
          <font>2、</font>会员需提供详尽、准确的个人资料并及时更新。若会员提供任何错误、不实、过时或不完整的资料为九鼎财税所知，或者九鼎财税有合理理由怀疑资料为错误、不实、过时或不完整，九鼎财税保留结束或终止其注册学员资格的权利。九鼎财税承诺不对外透露学员信息，除以下情况外：  <br>
            （1）会员授权九鼎财税透露这些信息。<br>
            （2）相应的法律及程序要求九鼎财税提供会员的个人资料。如果会员提供的资料包含有不正确的信息，九鼎财税保留结束会员使用网络服务资格的权利。<br>
          <font>3、</font>会员必须遵守中华人民共和国的法律、法规、规章、条例、以及其他具有法律效力的规范，不使用网络服务做任何非法用途。<br>
          <font>4、</font>不得干扰或混乱网络服务。<br>
          <font>5、</font>不得侵犯九鼎财税所有著作权、版权。<br>
          <font>6、</font>不得将广告、促销资料等，通过上载、张贴、发送电子邮件或以其他方式传送，供前述目的使用的专用区域除外。<br>
          <font>7、</font>不得在九鼎财税内发布违法信息，用户对其发布的内容单独承担法律责任。<br>
          <font>8、</font>严禁发表、散布、传播任何反动、色情及违反国家安全、扰乱社会秩序等有害信息，会员需对自己在网上的行为承担法律责任。<br>
          会员若在九鼎财税上散布和传播反动、色情或其他违反国家法律的信息，九鼎财税的系统记录将作为学员违反法律的证据。<br>
				</P>
        <P>
   		   <h3>信息内容的权利和义务</h3>
   		   <font>1、</font>本网站有义务在现有技术上维护整个在线平台的正常运行，并努力提升和改进技术，使学员的网络教育课程得以顺利进行。<br>
   		   <font>2、</font>本网站提供的网络服务内容包括：文字、文档、声音、图片、录像、图表、邮件及广告中的全部内容，九鼎财税拥有以上内容的完全版权，
严禁任何个人或单位在未经九鼎财税许可的情况下对这些内容进行翻版、复制、转载、篡改等一切用于商业课程的行为。<br>
				<font>2、</font>对于会员在九鼎财税平台上的不当行为或其它任何九鼎财税认为应当终止服务的情况，九鼎财税有权随时作出删除相关信息、终止服务提供等处理，
而无须征得会员的同意；九鼎财税应本着诚实信用的原则向会员提供远程教育服务，不得随意中断或停止提供该项服务。
   		   </P>
 		      <P>
	    		<h3>本网站服务条款的确认和接纳</h3>本网站各项服务的所有权和运作权归本网站拥有。
	    		</P>
	    		<P>
	    		<h3>关于网站的说明</h3>
	    		<font>1、</font>九鼎财税所有产品一经购买（包括网上注册、邮局汇款、银行电汇、报名点缴费等各种购买方式），都不允许任何形式的退换。<br>
				  <font>2、</font>会员缴费为九鼎财税在线网络课堂的教育信息费，不包含学员的上网电话费、上网信息费等。<br>
			 	  <font>3、</font>积分和优惠卷是会员在九鼎财税在线听课、问答、图书购买、线下课报名使用，不找零，不兑换现金或其他产品和服务。<br>
	    		<font>4、</font>会员在九鼎财税购买的课程，只限播放三次，请会员认真观看。<br>
	    		<font>5、</font>会员在九鼎财税报名线下课程，可在官方报名，也可拨打官方电话报名。<br>
	    		<font>6、</font>会员在九鼎财税向专家提问，需向专家支付费用。<br>
	    		<font>7、</font>会员在九鼎财税购买的图书，可以调换，图书调换期限均为5天，以会员签收日为准，
          	在不影响二次销售情况下需要会员自身承担单程寄回运费将图书寄回。<br>
	    		<font>7、</font>会员在九鼎财税得到的积分，可在积分商城里兑换商品，商品一经兑换，不允许退换。
	    		</P>
				  <P>
            <h3>拒绝提供担保</h3>
            <font>1、</font>用户明确同意信息服务的使用由用户个人承担风险。<br>
   					<font>2、</font>本网站不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保，但会在能力范围内，避免出错。
          </P>
          <P>
          <h3>信息的储存及限制</h3>
            本网站对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害来自：不正当使用本网站服务，
  或用户传送的信息不符合规定等。这些行为都有可能导致本网站形象受损，所以本网站事先提出这种损害
  的可能性，同时会尽量避免这种损害的发生。
          </P>
          <P>
          <h3>结束服务</h3>
          <font>1、</font>会员注册完成后，享受九鼎财税提供的各类咨询、信息查询、试听等多重免费服务。如需使用九鼎财税的其他网络课程，
          付费经确认后，九鼎财税会开通相应的服务权限（服务权限是指会员享受所购买服务的资格）。
              具体服务内容开通的时间和进度以网站的最新公告或课件更新记录为准。<br>
        <font>2、</font>结束服务后，会员使用相应服务权限的权利马上终止。从那时起，会员没有权利，九鼎财税也没有义务传送任何未处理的信息或未完成的服务给会员或第三方。
          </P>
            <P>
            <h3>免责条款</h3>
            <font>1、</font>不保证（包括但不限于）：<br>
              （1）服务不受干扰，及时、安全、可靠或不出现任何错误；<br>
              （2）用户经由本服务取得的任何产品、服务或其他材料符合用户的期望。<br>
            <font>2、</font>会员使用经由九鼎财税务下载或取得的任何资料，其风险自行负担。<br>
            <font>3、</font>由于地震、台风、洪水、火灾、战争、政府禁令以及其他不能预见并且对
            其发生和后果不能防止或避免的不可抗力或互联网上的黑客攻击事件，致使影响九鼎财税服务履行的，九鼎财税不承担责任。<br>
            <font>4、</font>当九鼎财税以链接形式推荐其他网站内容时，由于九鼎财税并不控制相关网站和资源，因此访问者需理解并同意，
            九鼎财税并不对这些网站或资源的可用性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性，
            对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，九鼎财税均不承担任何责任。<br>
            <font>5、</font>任何由于黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营的不可抗力而造成的个人资料泄露、丢失、被盗用、
              被窜改或不能正常看课等，九鼎财税均得免责。<br>
          <font>6、</font>九鼎财税如因系统维护或升级而需暂停服务时，将事先公告。若因线路及非本公司控制范围外的硬件故障或其它不可抗力而导致暂停服务，于暂停服务期间造成的一切不便与损失，九鼎财税不负任何责任。<br>
          <font>7、</font>九鼎财税使用者因违反本声明的规定而触犯中华人民共和国法律的，一切后果自己负责，本网站不承担任何责任。本用户协议根据现行中华人民共和国法律法规制定。如发生协议条款与中华人民共和国法律法规相抵触时，则这些条款将完全按法律法规的规定重新解释，
            本用户协议的其它条款仍对九鼎财税和会员具有法律约束力。<br>
            </P>
            <P>
              <h3>法律</h3>
              <font>1、</font>本网站信息服务条款要与中华人民共和国的法律解释一致。<br>
              <font>2、</font>用户和本网站一致同意服从本网站所在地有管
                辖权的法院管辖。如发生本网站服务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持对用户的约束力。
          </P>
      </div>
      <div slot="footer">
        <Button type="error" @click="modal = false" long>关闭</Button>
      </div>
    </Modal>
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
      <FormItem ref="picyz" label="验证码" prop="picYanzheng" :error="errData2">
        <Row>
          <Col span="8">
            <Input v-model="formValidate.picYanzheng" placeholder="图片验证"></Input>
          </Col>
          <Col span="15" offset="1">
            <img @click="getCodeImgChange" :src="imgUrl">
          </Col>
        </Row>
      </FormItem>
      <FormItem ref="yanzheng" label="验证码" prop="yanzhengma" :error="errData">
        <Row>
          <Col span="10">
            <Input v-model="formValidate.yanzhengma" placeholder="动态验证码"></Input>
          </Col>
          <Col span="12" offset="2">
            <Button v-if="vCode" type="ghost" @click="getVCode">获取动态验证码</Button>
            <Button v-else type="ghost" disabled>{{ time + "后获取"}}</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="邀请码" prop="yaoqingma">
        <Input v-model="formValidate.yaoqingma" placeholder="请输入邀请码"></Input>
      </FormItem>
      <FormItem prop="agree">
        <Checkbox v-model="formValidate.agree">阅读并接受</Checkbox><span @click="modal = true" style="color:red;cursor:pointer">《神州九鼎财税用户协议》</span>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate',formValidate)">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
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
        let res = loginUserUrl("getuser", {
          username: "niuhongda",
          password: "123123q",
          name: value
        });
        setTimeout(() => {
          res.then(res => {
            // console.log(res)
            if (res && res.error_code === 0) {
              // console.log(res);
              callback(new Error("用户已存在"))
            } else {
              callback()
            }
          });
        }, 1000);
      }
    };
    //密码
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
        if (reg.test(value)) {
          if (this.formValidate.passwdCheck !== "") {
            // 对第二个密码框单独验证
            this.$refs.formValidate.validateField("passwdCheck")
          }
        } else {
          callback(new Error("密码不少于8位且必须包含字母和数字"))
        }
        callback()
      }
    };
    //确认密码
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请确认密码"))
      } else if (value !== this.formValidate.passwd) {
        callback(new Error("两次输入的密码不一样"))
      } else {
        callback();
      }
    };
    // 验证手机号或邮箱 ----验证码功能不行----
    const validateMail = (rule, value, callback) => {
      // 至2017年的手机号正则
      let regMb = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/;
      // 邮箱正则
      let regMa = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (value === "") {
        callback(new Error("不能为空"));
      } else if (regMb.test(value)) {
        this.mail = true;
        callback();
        // 判断手机号是否已经被注册过，如果没有，那就可以向这个手机发送验证码
        let res = loginUserUrl('register_verification',{
          username: "niuhongda",
          password: "123123q",
          name:this.formValidate.name,
          tel:value
        })
        setTimeout(() => {
          res.then(res => {
            console.log('phone'+res.error_code)
            if (res && res.error_code === 0) {
              callback()
            } else {
              callback(new Error('验证码输入错误或已过期'))
            }
          });
        }, 1000)
      } else if (regMa.test(value)) {
        // console.log('邮箱不对')
        this.mail = true;
        callback();
        // 判断邮箱号是否已经被注册过，如果没有，那就可以向这个邮箱发送验证码
        let res = loginUserUrl('register_verification',{
          username: "niuhongda",
          password: "123123q",
          email:value
        })
        setTimeout(() => {
          res.then(res => {
            console.log('mail'+res)
            if (res && res.error_code === 0) {
              callback()
            } else {
              callback(new Error('验证码输入错误或已过期'))
            }
          });
        }, 1000)
      } else {
        callback();
      }
    }
    // 验证动态码 ---目前功能测试正常---
    const validateYanzhengma = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"))
      } else {
        let res = loginUserUrl("register_verification_code", {
          username: "niuhongda",
          password: "123123q",
          name:this.formValidate.mail,
			  	code:value
        })
        setTimeout(() => {
          res.then(res => {
            if (res && res.error_code === 0) {
              callback()
            } else {
              callback(new Error('验证码输入错误或已过期'))
            }
          });
        }, 1000)
      }
    };
    // 验证图片验证码
    const validatePic = (rule, value, callback) => {
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
            this.yanZheng = true
            callback()
          }
        })
      }
    };
    // 是否勾选了同意
    const validateAgree = (rule, value, callback) => {
      if (value === false) {
        callback(new Error("请阅读并同意《神州九鼎财税用户协议》"))
      } else {
        callback()
      }
    };
    return {
      vCode: true,
      time: 60,
      mail: false,
      yanZheng: false,
      modal: false,
      imgUrl:'',
      errData:'',
      errData2:'',
      dataArr:'',
      formValidate: {
        name: "",
        passwd: "",
        passwdCheck: "",
        mail: "",
        picYanzheng: "",
        yanzhengma: "",
        yaoqingma: "",
        agree: true
      },
      type:1,
      ready:false,
      ruleValidate: {
        name: [{ required: true, validator: validateName, trigger: "blur" }],
        mail: [{ required: true, validator: validateMail, trigger: "blur" }],
        passwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ required: true, validator: validatePassCheck, trigger: "blur" }],
        yanzhengma: [{ required: true,validator: validateYanzhengma,trigger: "blur"}],
        agree: [{ required: true, validator: validateAgree, trigger: "blur" }],
        picYanzheng: [{ required: true, validator: validatePic, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name, arg) {
      this.$refs[name].validate(valid => {
        if(valid){
          let res = loginUserUrl("register", {
            username: "niuhongda",
            password: "123123q",
            name: arg.name,
            pwd: arg.passwd,
            piccode:arg.picYanzheng,
            code:arg.yanzhengma,
            tel:arg.mail,
            email:arg.mail,
            type:arg.type,
            invitation:arg.yanzhengma
          }).then(res => {
            if (res && res.error_code === 0) {
              this.$Message.success("注册成功!")
              setCookie("u_name", arg.name, 1)
              window.location.href = "http://localhost:8888/#/home";
            } else {
              // console.log(res)
              this.$Message.error("表单提交失败")
            }
          })
        }
      })
    },
    getVCode: function() {
      console.log(this.formValidate.mail)
      console.log(this.type)
      let _self = this;
      _self.$refs.formValidate.validateField("mail");
      _self.$refs.formValidate.validateField("picYanzheng");
      console.log(_self.mail && _self.yanZheng)
      if (_self.mail && _self.yanZheng) {
        _self.vCode = false;
        // console.log(this.formValidate.mail)
        // console.log(this.type)
        // 获取短信/邮件验证码
        let res = loginUserUrl("register_sendCode", {
          username: "niuhongda",
          password: "123123q",
          number:this.formValidate.mail,
          type:this.type
        }).then((res)=>{
        })
        let interval = window.setInterval(function() {
          if (_self.time-- <= 0) {
            _self.time = 60
            _self.vCode = true
            window.clearInterval(interval)
          }
        }, 1000)
      }
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    getCodeImgChange(){
      this.getImg()
    },
    getImg(){
      let res = loginUserUrl('register_code',{
        username: "niuhongda",
        password: "123123q"
      }).then((res)=>{
        console.log(res)
        this.dataArr = ''
        for(let i=0;i<res.data.length;i++){
          this.dataArr += res.data[i]
        }
        this.imgUrl = res.data1
      })
    }
  },
  created () {
    this.getImg()
  }
}
</script>
<style lang="scss" scoped>
.copy {
  border: 1px solid #fbc081;
  margin-top: 15px;
  h3 {
    border-bottom: 2px solid #e5e5e5;
    height: 26px;
    font-size: 14px;
    border-left: 2px solid #ff2832;
    padding: 0 30px 0 6px;
  }
  p {
    overflow: hidden;
    width: 100%;
    line-height: 32px;
    font-size: 14px;
    padding: 15px 18px 20px;
    color: #656565;
    font,
    .a {
      color: #4683ee;
    }
  }
}
</style>
