<template>
  <Form>
    <FormItem
      v-for="(item, index) in docs"
      v-if="item.status"
      :key="index"
      :prop="item.value">
        <Row>
          <Col span="24">
            <Input type="text" v-model="item.title" placeholder="请输入小节标题"></Input>
          </Col>
          <Col span="24">
            <div style="height:20px;"></div>
          </Col>
          <Col span="24">
            <Input type="textarea" :autosize="{minRows: 5,maxRows: 15}" v-model="item.value" placeholder="请输入小节文档..."></Input>
          </Col>
          <Col span="24">
            <div style="height:20px;"></div>
          </Col>
          <Col span="4">
            <Input type="text" :number="true" v-model="item.min" placeholder="请输入断点"></Input>
          </Col>
          <Col span="1">分</Col>
          <Col span="4">
            <Input type="text" :number="true" v-model="item.sec" placeholder="请输入断点"></Input>
          </Col>
          <Col span="1">秒</Col>
        </Row>
        <Row>
          <Col span="24">
            <div style="height:20px;"></div>
          </Col>
        </Row>
        <Row>
          <Col span="2" offset="11">
            <Button type="ghost" @click="handleRemove(index)">删除</Button>
          </Col>
        </Row>
    </FormItem>
    <FormItem>
      <Row>
        <Col span="12" offset="6">
          <Button type="dashed" long @click="handleAdd" icon="plus-round">添加一段文档</Button>
        </Col>
      </Row>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data(){
    return{
      index:1,
      docs: [
        {
          value: '',
          title:'',
          min:0,
          sec:0,
          index: 1,
          status: 1
        }
      ]
    }
  },
  methods: {
    handleAdd () {
      this.index++;
      this.docs.push({
        value: '',
        title:'',
        min:0,
        sec:0,
        index: this.index,
        status: 1
      })
    },
    handleRemove (index) {
      this.docs[index].status = 0;
    }
  }
}
</script>

<style>

</style>
