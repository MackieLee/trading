<template>
  <div class="upload">
    <Modal v-model="videoModal" :closable="false" :mask-closable="false">
      <p slot="header" style="color:#3399ff;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>上传视频</span>
      </p>
      <input type="file" name="file" @change="selFile" id="files"/>
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
      <div>
        {{ txtar }}
      </div>
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
          <!-- || 下面原始按钮 || -->
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
import { loginUserUrl,pushVideoInfo } from '@/api/api'
export default {
  data() {
    return {
      videoModal: false,
      bodanModal:false,
      file:{},
      uploadAddress:"",
      uploadAuth:"",
      videoId:"",
      txtar:'',
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
      },
    }
  },
  methods: {
    // 添加播单
    submit:function(){
      let bodan = this.bodan
      let res = loginUserUrl('getOnline_Courses_add',{
        username: "niuhongda",
        password: "123123q",
        uid:getCookie('u_name'),
        form_id:'',
        crowd:bodan.crowd,
        lecturer:getCookie('u_name'),
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
    selFile(event){
      this.file = event.target.files[0]
      console.log(this.file)
    },
    // 上传视频
    upload(){
      let video = this.video
      let res = pushVideoInfo('Message/getaddress',{
        data:[]
      }).then((res)=>{
        if(res.data){
          console.log(res.data)
          this.uploadAddress = res.data.UploadAddress
          this.uploadAuth = res.data.uploadAuth
          this.videoId = res.data.VideoId
        }
        var userData = '{"Vod":{"UserData":{"IsShowWaterMark":"false","Priority":"7"}}}'
        var uploader = new AliyunUpload.Vod({
          // 文件上传失败
          'onUploadFailed': function (uploadInfo, code, message) {
            this.txtar ="onUploadFailed: file:" + uploadInfo.file.name + ",code:" + code + ", message:" + message
          },
          // 文件上传完成
          'onUploadSucceed': function (uploadInfo) {
            console.log('success')
          },
          // 文件上传进度
          'onUploadProgress': function (uploadInfo, totalSize, loadedPercent) {
            this.txtar = "onUploadProgress:file:" + uploadInfo.file.name + ", fileSize:" + totalSize + ", percent:" + Math.ceil(loadedPercent * 100.00) + "%"
          },
          // STS临时账号会过期，过期时触发函数
          'onUploadTokenExpired': function () {
          },
          onUploadCanceled:function(uploadInfo){
          },
          // 开始上传
          'onUploadstarted': function (uploadInfo) {
            uploader.setUploadAuthAndAddress(uploadInfo, this.uploadAuth, this.uploadAddress)
          }
        })
        uploader.addFile(this.file, null, null, null, userData)
        uploader.startUpload()
      })
    },
    handleReset:function(name){
      this.$refs[name].resetFields()
      this[name +'Modal']=false
      // this.$refs.upload.clearFiles()
    },
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
      line-height:50px;
      overflow: hidden;
      span {
        width: 70px;
        text-align: center;
      }
    }
  }
  .video-loader {
    height: 200px;
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
