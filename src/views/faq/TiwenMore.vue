<template>
  <div>
    <Modal v-model="modal" width="430">
      <div slot="header">微信支付</div>
        <img :src="imgUri" style="height:400px"/>
      <div slot="footer" style="display:none"></div>
    </Modal>
    <div class="content">
    	<div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/Faq">问答</router-link>&nbsp;&gt;&nbsp;提问</p>
    </div>
      <div class="title">我要提问</div>
            <Form ref="ask" :model="ask" :roules="askValidate">
        <FormItem prop = "title">
        	<div class="sub-title sub-title1"><i></i>请您列出您要咨询的问题的标题</div>
          <Input v-model="ask.title" placeholder="输入下您的问题"></Input>
        </FormItem>
        <div class="sub-title"><i></i>请具体描述您要咨询的问题</div>
        <FormItem prop="content">
          <Input v-model="ask.content" type="textarea" :rows="6" placeholder="请在这儿描述您的问题"></Input>
        </FormItem>
     <div class="sub-title"><i></i>请选出您要咨询的问题分类</div>
      <ul class="leibie">
      	<li v-for="item in items " :key="item.id" @click="thisItem = item.id" :class="{'active':thisItem===item.id}">{{ item.name }}</li>
      </ul>
        <FormItem>
          <Row>
            <Col span="12"  style="width: 20%">
              <span>指定老师</span>
              <Select v-model="ask.teacher" class="teacher">
                <Option v-for="t in ts" :value="t.id" :key="t.id">{{ t.name }}
              </Option>
              </Select>
            </Col>
            <Col span="12"  style="width:25%">
              <Checkbox v-model="ask.choose">超过24小时继续等待所指定老师回答</Checkbox>
            </Col>
            <div style="color:grey;">
            	指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待
            </div>
				   <div class="footer">
				    <Button type="ghost" @click="handleReset" class="qux">重置</Button>
				   </div>
          </Row>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
import { getCookie } from "@/util/cookie"
export default {
  data() {
    return {
      modal:false,
      ts:[],//老师列表
      items:{},
      sel:[],
      imgUri:'',
      payed:false,
      ask:{
        choose:false,
        title:'',
        content:'',
        teacher:''
      },
      askValidate:{
        title:[{required:true,trigger:"blur"}],
        content:[{required:true,trigger:"blur"}]
      }
    }
  },
  computed: {

  },
  mounted () {
    let res = loginUserUrl(
      "getTeacherList",
      {
        username: "niuhongda",
        password: "123123q"
      }
    ).then((res)=>{
      if(res){
        this.ts = res.data
      }
    })
    let classify = loginUserUrl('getlaws_classify',{
      username: "niuhongda",
      password: "123123q"
    }).then((classify)=>{
      console.log(classify)
      this.items = classify.data
    })
  },
  methods:{
    handleReset(){
      this.ask.title = ''
      this.ask.content = ''
      this.ask.teacher = ''
      this.ask.choose = false
    },
    selAdd(id){
      if(this.sel.length != 0){
        let flag = false
        for(let i = 0;i<this.sel.length;i++){
          if(this.sel[i] === id){
            this.sel.splice(i,1)
            flag = true
          }
        }
        if(!flag){
          this.sel.push(id)
        }
      }else{
        this.sel.push(id)
      }
    },
    sub(){
      let arr = ''
      let choose = this.ask.choose?1:2
      for(let i =0;i<this.sel.length;i++){
        arr += this.sel[i]+','
      }
      // console.log('this.ask.title:'+this.ask.title+"this.ask.content:"+this.ask.content+'this.ask.teacher:'+parseInt(this.ask.teacher)+'formid'+arr.substr(0,arr.length-1))
      let res = loginUserUrl('getQuestions_add',{
        username: "niuhongda",
        password: "123123q",
        name:this.ask.title,
        intro:this.ask.content,
        // teacher_id:parseInt(this.ask.teacher),
        teacher_id:1448,
        uid:parseInt(getCookie('u_name')),
        choose:choose,
        form_id:arr.substr(0,arr.length-1),
        pay_type:2
      }).then((res)=>{
        this.order_id = res.order_pay.order_id
        this.modal = true
        if(res.intro){
          this.imgUri = res.intro
        }
      })
      this.ifpayed()
    },
    ifpayed(){
      let int = setInterval(()=>{
        let res = loginUserUrl('getShopcar_WeiXinPayOK',{
          username: "niuhongda",
          password: "123123q",
          order_id:this.order_id
        }).then((res)=>{
          console.log(res)
          if(res.status === 1){
            this.payed = true
            this.$Message.success('支付并提交问题成功')
            this.modal = false
            clearInterval(int)
          }
          if(this.modal === false){
            clearInterval(int)
          }
      })
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
i {
  display: inline-block;
  width: 20px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}

.cur-posi {
  padding: 0 0 26px 0;
  width: 100%;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.content{width: 1090px; 
 margin: 10px auto;
 .sub-title1{margin: 0px auto 0px !important;}
 .sub-title{margin: 10px auto;
 font-size: 14px;
 color: #333;
 i{background-position: -18px -101px;}
 		}
 		.ivu-form-item{margin: 10px auto 0px;}
.leibie{
	overflow:hidden;
	margin: 0px auto;
	li{
		font-size: 14px;
		margin:10px 10px;
		line-height: 25px;
		padding:5px 10px;
		border: 1px solid #ddd;
    border-radius:3px;
    cursor: pointer;
    &:hover{
      color:$blue;
      border-color:$blue;
    }
  }
  .active{
    border-color: $blue;
    color:$blue;
  }
}
.title{
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: $btn-default;
  color: $white;
}
.teacher{ width:150px;}
.footer{
	width:310px;
	.tij,.qux{
   width:120px;
   margin:30px 15px;
		}
	}
}

</style>
