<template>
  <div class="init-data">
    <div class="sum_of_class">个人资料</div>
    <div class="info-data lf">
      <Form :label-width="100" label-position='right' :model="uData">
        <FormItem label="昵称" prop="nickName">
          <Input type="text" v-model="uData.nickName" small placeholder="请输入昵称"></Input>
        </FormItem>
        <FormItem label="真实姓名" prop="realName">
          <Input type="text" v-model="uData.realName" placeholder="请输入真实姓名"></Input>
        </FormItem>
        <FormItem label="联系电话" prop="num">
          <Input type="text" v-model="uData.num" placeholder="请输入联系电话"></Input>
        </FormItem>
        <formItem label="行业" prop="industry">
          <Select v-model="uData.industry" style="width:150px">
            <Option v-for="item in industry" :key="item" :value="item">{{ item }}</Option>
          </Select>
        </formItem>
        <formItem label="职位" prop="position">
          <Select v-model="uData.position" style="width:150px">
            <Option v-for="item in position" :key="item" :value="item">{{ item }}</Option>
          </Select>
        </formItem>
        <FormItem label="地区" prop="prov" inline>
          <Row>
            <Col span="7">
              <Select v-model="provId" @on-change="selectProvince(provId)">
                <Option v-for="(item,index) in province" :key="item.name" :value="index">{{ item.name }}</Option>
              </Select>
            </Col>
            <Col span="7" offset="1">
              <Select v-model="areaId" @on-change="selectArea(areaId)">
                <Option v-for="(item,index) in this.area" :key="item.name" :value="index">{{ item.name }}</Option>
              </Select>
            </Col>
            <Col span="7" offset="1">
              <Select v-model="uData.district">
                <Option v-for="item in this.city" :key="item.name" :value="item.name">{{ item.name }}</Option>
              </Select>
            </Col>
          </Row>
        </FormItem>
        <!-- 添加标签 -->
        <FormItem label="擅长领域">
          <el-tag
            :key="tag"
            v-for="tag in tags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">添加</el-button><p style="color:silver;margin-top:10px;">如：个人所得税、房地产税</p>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">提交</Button>
          <Button type="ghost" @click="cancel">取消</Button>
        </FormItem>
      </Form>{{ tags }}
    </div>
    <div class="cropper rt">
      <img class="preview" :src="newavatar">
      <upload v-show="avataredit" :server="upload.server" :limit="upload.limit" :api="upload.api" :filename="upload.filename" :params="upload.params" @success="upsuccess" v-model="newavatar" :crop="upload.crop" :width="upload.width" :height="upload.height" :ok="upload.ok" :cancel="upload.cancel">
        <button class="upavatar">上传头像</button>
      </upload>
      <p>仅支持jpg、png格式，不要超过1M</p>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"
import upload from "../cropper/uploadavatar";
const PROVINCE = require('../../assets/全国省市.json')
export default {
  components: { upload },
  data() {
    return {
      province: PROVINCE,
      provId:'0',
      areaId:'0',
      area:[{ name:'请选择'}],
      city:[{ name:'请选择'}],
      position:['CFO','财务经理','财务专员','财务总监','副总裁','公务员','人事/培训','事业单位人员','税务经理','税务专员','税务总监','学生/学者','总经理'],
      industry:['制造','贸易/零售','进出口','服务','高科技','互联网','建筑和房地产','金融','农林渔牧','物流'],
      avataredit: true,
      newavatar: null,
      upload: {
        server: "",
        api: "",
        params: {
          token: ""
        },
        preview: true,
        crop: true,
        width: 400,
        height: 400,
        cancel: "取消",
        ok: "确定",
        limit:1024*1024*10
      },
      index:1,
      uData:{
        name:'',
        nickName:'',
        realName:'',
        num:'',
        prov:'',
        industry:'',
        position:''
      },
      // 标签
      tags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    cancel:function(){

    },
    handleSubmit() {
      this.labelAdd()
      this.labelGet()
    },
    upsuccess() {
      console.log(this);
    },
    // 添加标签
    labelAdd(){
      console.log('我提交的数组是这个:')
      console.log(this.tags)
      let res=loginUserUrl('getTeacher_laberl',{
        username: "niuhongda",
        password: "123123q",
        tid:1448,
        laberl:this.tags
      }).then((res)=>{
        console.log('返回的结果:')
        console.log(res)
        // 提交表单的时候同时调用这个函数，提交标签
      })
    },
    // 获取标签数组
    labelGet(){
      let res=loginUserUrl('getTeacher_laberl_List',{
        username: "niuhongda",
        password: "123123q",
        tid:1448
      }).then((res)=>{
        // console.log('get-----')
        // console.log(res)
        // console.log('---get')
        if(res.data[0].label !== ''){
          this.tags = res.data[0].label.split('"')[1].split(',')
        }
      })
    },
    selectProvince:function(value){
      this.area = this.province[value].sub
    },
    selectArea:function(value){
      if(this.area[value]){
        this.city = this.area[value].sub
      }
    },
    // 标签操作
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  // 页面创建完成后，加载老师的标签
  created(){
    this.labelGet()
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.rt{
  float: left;
  .sum_of_class{background-color: #468ee3; margin:0 0px 30px;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;}
}
.lf{
  float: left;
  margin:0 80px 20px 20px;
  width:400px;
}
.init-data {
  overflow: hidden;
  border: 1px solid $border-dark;
  .cropper {text-align: center;
    .preview {
      width: 230px;
      height: 230px;
    }
    .upavatar {
      width: 150px;
      height: 38px;
      background-color:#e7141a;
      text-align: center;
      line-height: 38px;
      color: $white;
      border: none;
      outline: none;
      border-radius: 3px;
      margin: 20px auto;
    }
  }
}
</style>
