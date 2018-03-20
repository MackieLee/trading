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
        <!-- 行业 -->
        <formItem label="行业" prop="industry">
          <Select v-model="uData.industry" style="width:150px">
            <Option v-for="item in industry" :key="item" :value="item">{{ item }}</Option>
          </Select>
        </formItem>
        <!-- 职位 -->
        <formItem label="职位" prop="position">
          <Select v-model="uData.position" style="width:150px">
            <Option v-for="item in position" :key="item" :value="item">{{ item }}</Option>
          </Select>
        </formItem>
        <!-- 地区 -->
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
        <!-- 公司名称 -->
        <FormItem label="公司名称" prop="company_name">
          <Input type="text" v-model="uData.cName" placeholder="请输入联系电话"></Input>
        </FormItem>
        <!-- 公司规模 -->
        <formItem label="公司规模" prop="company_scale">
          <Select v-model="uData.scale" style="width:150px">
            <Option v-for="item in scale" :key="item" :value="item">{{ item }}</Option>
          </Select>
        </formItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">提交</Button>
          <Button type="ghost" @click="handleReset">取消</Button>
        </FormItem>
      </Form>
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
      scale:['小公司','中型公司','大型公司','大企业'],
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
        nickName:'',
        realName:'',
        num:'',
        prov:'',
        industry:'',
        position:'',
        cName:'',
        scale:''

      },
      // 标签
      tags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleReset:function(){

    },
    handleSubmit() {
      let udata = this.uData
      let res = this.loginUserUrl('useradd',{
        username: "niuhongda",
        password: "123123q",
        name:this.getCookie("u_name"),
        nickname:udata.nickName,
        province:udata.prov,
        city:'',
        district:'',
        profession:udata.industry,
        occupation:udata.position,
        company_name:udata.cName,
        company_scale:udata.scale,
        real_name:udata.realName
      }).then((res)=>{
        console.log(res)
      })
    },
    upsuccess() {
      console.log(this);
    },
    selectProvince:function(value){
      this.area = this.province[value].sub
    },
    selectArea:function(value){
      if(this.area[value]){
        this.city = this.area[value].sub
      }
    },
    onload(){

    }
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
