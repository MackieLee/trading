<template>
  <div class="upload">
    <Modal v-model="videoModal" :closable="false" :mask-closable="false">
      <p slot="header" style="color:#3399ff;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>上传视频</span>
      </p>
      <Upload
        type="drag"
        ref="upload"
        action="//jsonplaceholder.typicode.com/posts/"
        accept=".mp4,.avi,.mov,.wmv,.flv"
        :format="['mp4','avi','mov','wmv','flv']"
        :on-format-error="formatError"
        :on-success="upSuccess"
        :on-error="upFail"
        >
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击此处或拖拽视频到此处上传到服务器</p>
          <p>支持的格式有.mp4/.avi/.mov/.wmv/.flv</p>
        </div>
      </Upload>
      <Form :model="video" ref="video">
        <!-- 播单选择下拉框 -->
        <FormItem prop="belong">
          <Select v-model="video.belong" placeholder="请选择播单">
            <Option value=""></Option>
          </Select>
        </FormItem>
        <!-- 视频url -->
        <FormItem prop="url">
          <Input v-model="video.url" placeholder="视频url"></Input>
        </FormItem>
        <!-- 标题 -->
        <FormItem prop="title">
          <Input v-model="video.title" placeholder="标题"></Input>
        </FormItem>
        <!-- 价格 -->
        <FormItem props="price">
          <Input v-model="video.price" placeholder="价格"></Input>
        </FormItem>
        <!-- 状态 -->
        <FormItem prop="state">
          <Select v-model="video.state" placeholder="显示或隐藏该视频">
            <Option value="1">显示</Option>
            <Option value="2">隐藏</Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="upload">确定</Button>
        <Button type="ghost" @click="handleReset('video')">取消</Button>
      </div>
    </Modal>
    <!-- 创建播单 -->
    <Modal
      v-model="bodanModal"
      :closable="false"
      :mask-closable="false"
    >
      <p slot="header" style="color:#3399ff;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>创建播单</span>
      </p>
      <Form :model="bodan" ref="bodan" label-position="left" :label-width="100">
        <FormItem label="标题" prop="name">
          <Input v-model="bodan.name"></Input>
        </FormItem>
        <FormItem label="简要介绍" prop="intro">
          <Input v-model="bodan.intro"></Input>
        </FormItem>
        <FormItem label="适合人群" prop="crowd">
          <Input v-model="bodan.crowd"></Input>
        </FormItem>
        <FormItem label="课程介绍" prop="value">
          <Input v-model="bodan.value" type="textarea" :autosize="{minRows: 2,maxRows: 12}" placeholder="课程介绍"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="submit">提交</Button>
        <Button type="ghost" @click="handleReset('bodan')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">视频</span></div>
      </div>
      <div class="video-loader">
        <div class="center">
          <p>您还没有上传过视频！</p>
          <!-- 传说中的实名认证和开放注册，后面被莫名其妙砍掉了 -->
          <!-- <input type="button" @click="showModal('upload')" value="立即上传" class="btn main-btn"/> -->
          <input type="button" @click="videoModal = true" value="立即上传" class="btn main-btn"/>
        </div>
      </div>
    </div>
    <div class="bodan">
      <div class="head">
        <div class="title"><span class="lf">播单</span><router-link :to="{ name: 'bodanlist'}" style="cursor:pointer" tag="span" class="rt">播单管理</router-link></div>
      </div>
      <div class="video-loader">
        <div class="center">
          <p>点击按钮创建一个新的播单</p>
          <!-- <input type="button" @click="showModal('bodan')" value="创建播单" class="btn main-btn"/> -->
          <input type="button" @click="bodanModal = true" value="创建播单" class="btn main-btn"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/util/cookie"
import { loginUserUrl } from '@/api/api'
export default {
  data() {
    return {
      videoModal: false,
      bodanModal:false,
      bodan:{
        name:'',
        intro:'',
        crowd:'',
        value:''
      },
      video:{
        belong:'',
        url:'',
        title:'',
        price:'',
        state:''
      }
    }
  },
  methods: {
    formatError(){
      this.$Message.error('格式错误，不能上传')
    },
    submit:function(){
      let bodan = this.bodan
      let res = loginUserUrl('getOnline_Courses_add',{
        username: "niuhongda",
        password: "123123q",
        uid:getCookie('u_name'),
        form_id:'',
        crowd:bodan.crowd,
        lecturer:'',
        profession:'',
        period:'',
        money:'',
        money_marketing:'',
        name:bodan.name,
        img:'',
        audition:'',
        intro:bodan.intro,
        value:bodan.value
      }).then((res)=>{
        this.$refs.bodan.resetFields()
        this.bodanModal=false
      })
    },
    upload(){
      let video = this.video
      let res = loginUserUrl('getOnline_Courses_catalogueAdd',{
        username: "niuhongda",
        password: "123123q",
        gid:video.belong,
        url:video.url,
        name:video.name,
        money:video.price,
        sort:'',
        status:video.status
      }).then((res)=>{
        this.$refs.video.resetFields()
        this.videoModal=false
        this.$refs.upload.clearFiles()
      })
    },
    handleReset:function(name){
      this.$refs[name].resetFields()
      this[name +'Modal']=false
      // this.$refs.upload.clearFiles()
    },
    upSuccess(response,file){
      console.log(response)
    },
    upFail(){

    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.active {
  border-bottom: 1px solid $red;
}
.upload-box,
.bodan {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  .head {
    .lf {
      float: left;
    }
    .rt {
      float: right;
    }
    .title {
      background-color: $bg-nav;
      line-height: 35px;
      overflow: hidden;
      span {
        width: 70px;
        text-align: center;
      }
    }
  }
  .video-loader {
    height:200px;
  }
}
.btn {
  padding: 10px;
  color: $white;
  background-color: $red;
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}
.center {
  position: relative;
  top: 20%;
  p {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
