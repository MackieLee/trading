<template>
  <div>
    <div class="content">
    	<div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
    </div>
      <div class="title">我要提问</div>
      <ul class="leibie">
      	 <li>企业所得税</li>
         <li>税种征收管理</li>     
      	 <li>个人所得税</li>
         <li>印花税</li>     
      	 <li>契税</li>
         <li>房产税</li>     
      	 <li>城镇土地使用税</li>
         <li>土地增值税</li>     
      	 <li>车船税</li>
         <li>增值税</li>     
         <li>其他税费</li>     
      	 <li>综合税收政策</li>    
      </ul>
      <Form ref="ask" :model="ask" :roules="askValidate">
        <FormItem prop = "title">
          <Input v-model="ask.title" placeholder="输入下您的问题"></Input>
        </FormItem>
        <div class="sub-title">问题描述（选填）：</div>
        
        <FormItem prop="content">
          <Input v-model="ask.content" type="textarea" :rows="6" placeholder="请在这儿描述您的问题">
          </Input>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12"  style="width: 20%">
              <span>指定老师</span>
              <Select v-model="ask.teacher" class="teacher">
                <Option v-for="t in ts" :value="t.id" :key="t.name">{{ t.name }}
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
				    <Button type="ghost"  class="qux">取消</Button>
				    <Button type="primary" class="tij">提交</Button>
				   </div>
          </Row>
        </FormItem>       
      </Form>
			
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
export default {
  data() {
    return {
      ts:[],
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
  },
  methods:{
    handleReset:function(){
      this.ask.title = ''
      this.ask.content = ''
      this.ask.teacher = ''
      this.ask.choose = false
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
.content{width: 1090px; margin: 10px auto;
.leibie{
	overflow:hidden;	
	margin: 10px auto;
	li{ 
		font-size: 14px;
		margin:10px 10px;
		 line-height: 25px;
		padding:5px 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	
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
