<template>
  <div>
    <div class="content">
      <div class="title">我要提问</div>
      <div class="ctr">
        <Input v-model="title" placeholder="写下您的问题"></Input>
        <div class="sub-title">问题描述（选填）：</div>
          <Input v-model="content" type="textarea" :rows="6" placeholder="请在这儿写下您的问题描述"></Input>
        <div class="teacher-sel">
          <span>指定老师</span>
          <Select class="select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
          <Checkbox v-model="wait">超过24小时继续等待所指定老师回答</Checkbox>
        </div>
        <div style="color:grey;">指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wait:null,
      title:'',
      content:''
    }
  },
  computed: {

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
