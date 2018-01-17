<template>
  <div class="upload">
    <Modal v-model="modal" :closable="false" :mask-closable="false">
      <p slot="header" style="color:#3399ff;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>上传视频</span>
      </p>
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        accept=".mp4,.avi,.mov,.wmv,.flv"
        :format="['mp4','avi','mov','wmv','flv']"
        :on-format-error="formatError"
        >
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击此处或拖拽视频到此处上传到服务器</p>
          <p>支持的格式有.mp4/.avi/.mov/.wmv/.flv</p>
        </div>
      </Upload>
    </Modal>
    <Modal
      v-model="modal1"
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
        <Button type="ghost" @click="handleReset" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">视频</span><router-link :to="{ name: 'videos'}" style="cursor:pointer" tag="span" class="rt">视频管理</router-link></div>
      </div>
      <div class="video-loader">
        <div class="center">
          <p>您还没有上传过视频！</p>
          <!-- 传说中的实名认证和开放注册，后面被莫名其妙砍掉了 -->
          <!-- <input type="button" @click="showModal('upload')" value="立即上传" class="btn main-btn"/> -->
          <input type="button" @click="modal = true" value="立即上传" class="btn main-btn"/>
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
          <input type="button" @click="modal1 = true" value="创建播单" class="btn main-btn"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from "../modal/TeacherMainModal";
import { loginUserUrl } from '@/api/api'
export default {
  // components: { Modal },
  data() {
    return {
      modal: false,
      modal1:false,
      bodan:{
        name:'',
        intro:'',
        crowd:'',
        value:''
      }
    };
  },
  methods: {
    formatError(){
      console.log('formatE')
    },
    submit:function(){
      let bodan = this.bodan
      let res = loginUserUrl('getOnline_Courses_update',{
        username: "niuhongda",
        password: "123123q",
        bodan
      }).then((res)=>{
        this.$refs.bodan.resetFields()
        this.modal1=false
      })
    },
    handleReset:function(){
      this.$refs.bodan.resetFields()
      this.modal1=false
    }
  }
};
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
