<template>
  <div class="init-data">
  	<div class="sum_of_class">个人资料</div>
    <div class="info-data lf">
      <div class="item">
        <label for="name">昵称</label><input id="name" />
      </div>
      <div class="item">
        <label for="real-name">真实姓名</label><input id="real-name" />
      </div>
      <div class="item">
        <label for="company">联系电话</label><input id="company" />
      </div>
      <div class="item">
        <label>地区</label>
        <select v-model="provId" @click="selectProvince(provId)">
            <option v-for="(item,index) in province" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select v-model="areaId" @click="selectArea(areaId)">
            <option v-for="(item,index) in area" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select>
            <option v-for="item in city" :key="item.name">
              {{ item.name }}
            </option>
          </select>
      </div>
       <div class="item">
        <label for="company">擅长领域</label><input id="companyy" />

      </div>
      <div class="item">
        <label>行业</label>
        <select class="lg-sel">
          <option v-for="(item,index) in industry" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="item">
        <label>职位</label>
        <select class="lg-sel">
          <option v-for="(item,index) in position" :key="item">
            {{ item }}
          </option>
        </select>
      </div>

      <!--<div class="item">
        <label>公司规模</label>
        <select class="lg-sel">
          <option v-for="(item,index) in size" :key="item">
            {{ item }}
          </option>
        </select>
      </div>-->
      <div class="item_bc">保 存</div>
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
      dataUrl: "",
      selected: null,
      province: PROVINCE,
      provId:'0',
      areaId:'0',
      area:[{ name:'请选择'}],
      city:[{ name:'请选择'}],
      position:['CFO','财务经理','财务专员','财务总监','副总裁','公务员','人事/培训','事业单位人员','税务经理','税务专员','税务总监','学生/学者','总经理'],
      industry:['制造','贸易/零售','进出口','服务','高科技','互联网','建筑和房地产','金融','农林渔牧','物流'],
      size:['小型企业','小微型企业','中型企业','大型企业','中企业/大企业','小企业/大企业','不限'],
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
        ok: "裁剪",
        limit:1024*1024*10
      }
    };
  },
  methods: {
    destroy() {},
    submit() {},
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
  float: left; margin:0 70px 20px 40px;
}
.lg-sel{
  width: 306px !important;
}
.init-data {
  overflow: hidden;
  border: 1px solid $border-dark;
  .info-data{
  	.item_bc{
  		      width: 80px;
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
    .item{
      margin-bottom: 20px;
      label{
        display: inline-block;
        width: 70px;
        text-align: right;
        margin-right: 30px;
        font-size: 14px;
      }
      input{
        width: 300px;
        height: 36px;
        outline: none;
        border-radius: 3px;
        border: 1px solid $border-dark;
        padding: 0 8px;
      }
      #companyy{ width: 100px;}
      .input-sm{
        width:200px;
      }
      select{
        width: 100px;
        height: 40px;
        outline: none;
        border-radius: 3px;
        border: 1px solid $border-dark;
      }
    }
  }
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
