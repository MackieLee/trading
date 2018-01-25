<template>
  <Form>
    <!-- 多选 -->
    <FormItem>
      <Row>
        <Col>请在此处添加多选题</Col>
        <Col>
          <Input type="text" v-model="muilt.title" placeholder="多选试题"></Input>
        </Col>
        <Col style="height:10px"></Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" v-model="muilt.a" placeholder="请输入选项A"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="muilt.b" placeholder="请输入选项B"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="muilt.c" placeholder="请输入选项C"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="muilt.d" placeholder="请输入选项D"></Input>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col span="4">
          请标记出正确答案
        </Col>
        <Col span="10">
          <CheckboxGroup v-model="muilt.checkbox">
            <Checkbox label="A"></Checkbox>
            <Checkbox label="B"></Checkbox>
            <Checkbox label="C"></Checkbox>
            <Checkbox label="D"></Checkbox>
          </CheckboxGroup>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="textarea" v-model="muilt.txtar" :autosize="{minRows: 3,maxRows: 8}" placeholder="请写出问题的解析"></Input>
        </Col>
      </Row>
    </FormItem>
    <!-- 单选01 -->
    <FormItem>
      <Row>
        <Col>请在此处添加单选题01</Col>
        <Col>
          <Input type="text" v-model="sin1.title" placeholder="多选试题"></Input>
        </Col>
        <Col style="height:10px"></Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" v-model="sin1.a" placeholder="请输入选项A"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin1.b" placeholder="请输入选项B"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin1.c" placeholder="请输入选项C"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin1.d" placeholder="请输入选项D"></Input>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col span="4">
          请标记出正确答案
        </Col>
        <Col span="10">
          <RadioGroup v-model="sin1.radio">
            <Radio label="A">A</Radio>
            <Radio label="B">B</Radio>
            <Radio label="B">C</Radio>
            <Radio label="B">D</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="textarea" v-model="sin1.txtar" :autosize="{minRows: 3,maxRows: 8}" placeholder="请写出问题的解析"></Input>
        </Col>
      </Row>
    </FormItem>
    <!-- 单选02 -->
    <FormItem>
      <Row>
        <Col>请在此处添加单选题02</Col>
        <Col>
          <Input type="text" v-model="sin2.title" placeholder="多选试题"></Input>
        </Col>
        <Col style="height:10px"></Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" v-model="sin2.a" placeholder="请输入选项A"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin2.b" placeholder="请输入选项B"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin2.c" placeholder="请输入选项C"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="sin2.d" placeholder="请输入选项D"></Input>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col span="4">
          请标记出正确答案
        </Col>
        <Col span="10">
          <RadioGroup v-model="sin2.radio">
            <Radio label="A">A</Radio>
            <Radio label="B">B</Radio>
            <Radio label="B">C</Radio>
            <Radio label="B">D</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="textarea" v-model="sin2.txtar" :autosize="{minRows: 3,maxRows: 8}" placeholder="请写出问题的解析"></Input>
        </Col>
      </Row>
    </FormItem>
    <!-- 判断01 -->
    <FormItem>
      <Row>
        <Col>请在此处添加判断题01</Col>
        <Col>
          <Input type="text" v-model="judge1.title" placeholder="判断题01"></Input>
        </Col>
        <Col style="height:10px"></Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" v-model="judge1.a" placeholder="请输入选项A"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge1.b" placeholder="请输入选项B"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge1.c" placeholder="请输入选项C"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge1.d" placeholder="请输入选项D"></Input>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col span="4">
          请标记出正确答案
        </Col>
        <Col span="10">
          <RadioGroup v-model="judge1.radio">
            <Radio label="true">true</Radio>
            <Radio label="false">false</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="textarea" v-model="judge1.txtar" :autosize="{minRows: 3,maxRows: 8}" placeholder="请写出问题的解析"></Input>
        </Col>
      </Row>
    </FormItem>
    <!-- 判断02 -->
    <FormItem>
      <Row>
        <Col>请在此处添加判断题02</Col>
        <Col>
          <Input type="text" v-model="judge2.title" placeholder="判断题"></Input>
        </Col>
        <Col style="height:10px"></Col>
      </Row>
      <Row>
        <Col>
          <Input type="text" v-model="judge2.a" placeholder="请输入选项A"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge2.b" placeholder="请输入选项B"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge2.c" placeholder="请输入选项C"></Input>
        </Col>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="text" v-model="judge2.d" placeholder="请输入选项D"></Input>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col span="4">
          请标记出正确答案
        </Col>
        <Col span="10">
          <RadioGroup v-model="judge2.radio">
            <Radio label="true">true</Radio>
            <Radio label="false">false</Radio>
          </RadioGroup>
        </Col>
      </Row>
      <Row>
        <Col style="height:10px"></Col>
        <Col>
          <Input type="textarea" v-model="judge2.txtar" :autosize="{minRows: 3,maxRows: 8}" placeholder="请写出问题的解析"></Input>
        </Col>
      </Row>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data(){
    return{
      muilt:{
        title:'',
        a:'',
        b:'',
        c:'',
        d:'',
        radio:[],
        txtar:''
      },
      sin1:{
        title:'',
        a:'',
        b:'',
        c:'',
        d:'',
        radio:'',
        txtar:''
      },
      sin2:{
        title:'',
        a:'',
        b:'',
        c:'',
        d:'',
        radio:'',
        txtar:''
      },
      judge1:{

      },
      judge2:{

      }
    }
  }
}
</script>

<style>

</style>
