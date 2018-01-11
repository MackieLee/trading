<template>
  <div>
    <div class="content">
      <div class="title">我要提问</div>
      <Form ref="ask" :model="ask" :roules="askValidate">
        <FormItem prop = "title">
          <Input v-model="ask.title" placeholder="写下您的问题"></Input>
        </FormItem>
        <div class="sub-title">问题描述（选填）：</div>
        <FormItem prop="content">
          <Input v-model="ask.content" type="textarea" :rows="6" placeholder="请在这儿写下您的问题描述"></Input>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
              <span>指定老师</span>
              <Select v-model="ask.teacher" style="width:150px">
                <Option v-for="t in ts" :value="t.id" :key="t.name">{{ t.name }}</Option>
              </Select>
            </Col>
            <Col span="12">
              <Checkbox v-model="ask.choose">超过24小时继续等待所指定老师回答</Checkbox>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <!-- <Button type="primary" @click="handleSubmit">Submit</Button>
          <Button type="ghost" @click="handleReset" style="margin-left: 8px">Reset</Button> -->
        </FormItem>
        <div style="color:grey;">指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待</div>
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
      "http://aip.kehu.zaidayou.com/api/execute/getTeacherList",
      {
        username: "niuhongda",
        password: "123123q"
      }
    ).then((res)=>{
      this.ts = res.data
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
.title{
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: $btn-default;
  color: $white;
  margin-bottom: 20px;
}
.sub-title{
  margin:10px 0;
  font-size:14px;
}
.teacher-sel{
  margin: 20px 0;
  .select{
    width:150px;
    margin: 0 10px;
  }
}

</style>
