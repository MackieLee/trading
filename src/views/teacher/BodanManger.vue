<template>
  <div class="bodan-manger">
    <!-- 添加视频 -->
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
    <!-- 修改视频信息 -->
    <Modal
      v-model="fixModal"
      :closable="false"
      :mask-closable="false"
    >
      <p slot="header" style="color:#3399ff;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>修改课程</span>
      </p>
      <Form :model="fix" ref="fix" label-position="left" :label-width="100">
        <FormItem label="标题" prop="url">
          <Input v-model="fix.url"></Input>
        </FormItem>
        <FormItem label="标题" prop="name">
          <Input v-model="fix.name"></Input>
        </FormItem>
        <FormItem label="简要介绍" prop="money">
          <Input v-model="fix.money"></Input>
        </FormItem>
        <FormItem label="适合人群" prop="status">
          <Input v-model="fix.status"></Input>
        </FormItem>
        <FormItem prop="belong">
          <Select v-model="fix.belong" placeholder="请选择播单">
            <Option value=""></Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="submit">提交</Button>
        <Button type="ghost" @click="handleReset('fix')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <!-- 修改播单信息 -->
    <Modal
      :width="700"
      v-model="bodanRestModal"
      :closable="false"
      :mask-closable="false"
    >
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>修改播单信息</span>
      </p>
      <Form :model="bodanRest" ref="bodanRest" label-position="left" :label-width="100">
        <FormItem label="标题" prop="name">
          <Input v-model="bodanRest.name"></Input>
        </FormItem>
        <FormItem label="简要介绍" prop="intro">
          <Input v-model="bodanRest.intro"></Input>
        </FormItem>
        <FormItem label="适合人群" prop="crowd">
          <Input v-model="bodanRest.crowd"></Input>
        </FormItem>
        <FormItem label="课程介绍" prop="value">
          <Input v-model="bodanRest.value" type="textarea" :autosize="{minRows: 2,maxRows: 12}" placeholder="课程介绍"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="submitBodanFixed">提交</Button>
        <Button type="ghost" @click="handleReset('bodanRest')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <!-- 删除多个视频 -->
    <Modal v-model="delVideo" :closable="false" :mask-closable="false">
      <div slot="header" style="color:#FE980F;text-align:center;font-weight:bold;">
        删除视频
      </div>
      <Icon color="#FE980F" style="display:flex;justify-content:center" size="70" type="alert-circled"></Icon>
      <P style="text-align:center;font-size:18px;font-weight:bold;margin-top:20px;">
        您确定要删除这{{ blankChoosen.length }}个视频
      </P>
      <div slot="footer">
        <Button type="ghost" @click="delVideo = false">取消</Button>
        <Button type="error" @click="delClass">确定</Button>
      </div>
    </Modal>
    <!-- 删除单个视频 -->
    <Modal v-model="delSinVideo" :closable="false" :mask-closable="false">
      <div slot="header" style="color:#FE980F;text-align:center;font-weight:bold;">
        删除视频
      </div>
      <Icon color="#FE980F" style="display:flex;justify-content:center" size="70" type="alert-circled"></Icon>
      <P style="text-align:center;font-size:18px;font-weight:bold;margin-top:20px;">
        是否确定删除视频{{ delSinT }}
      </P>
      <div slot="footer">
        <Button type="ghost" @click="delSinVideo = false">取消</Button>
        <Button type="error" @click="delSinClass">确定</Button>
      </div>
    </Modal>
    <!-- 移动视频到其他播单 -->
    <Modal v-model="moveTo" :closable="false" :mask-closable="false">
      <div slot="header">
        移动视频到其他播单
      </div>
      <Select v-model="mt">
        <!-- 遍历播单列表，value = id -->
        <Option v-for=" item in bodanList " :key="item[1].id" :value="item[1].id">{{ item[1].name }}</Option>
      </Select>
      <div slot="footer">
        <Button type="ghost" @click="moveTo = false">取消</Button>
        <Button type="primary">确定</Button>
      </div>
    </Modal>
    <div>
      <div class="clearfix">
        <div class="fl">
          <img src="../../assets/images/huanyuanzx02.png" alt="" />
        </div>
        <div class="fl h-100 top">
          <div class="title">
            <p>{{ bodanInfo.name }}</p>
          </div>
          <p>课时：{{ bodanInfo.period }}</p>
          <p class="date">售价: {{ bodanInfo.money }} 元</p>
        </div>
        <div class="fr">
          <p style="color:#4683ee;cursor:pointer" @click="bodanRestModal = true">编辑播单信息</p>
        </div>
      </div>
      <ul class="sm-tags">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
        <li @click="videoModal = true">添加视频</li>
        <li @click="delVideo = true">移除视频</li>
        <li @click="moveTo = true">移动到播单</li>
      </ul>
    </div>
    <div class="upload-box">
      <CheckboxGroup v-model="bodanDel" @on-change="bodanDelChange">
        <table>
          <tr>
            <th></th>
            <th>附件</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr height="120" v-for="item in items" :key="item.id">
            <td class="ctr" width='50'>
              <Checkbox :label="item.id"><span></span></Checkbox>
            </td>
            <td width='550'>
              <div class="fl">
                <img src="../../assets/images/video-cover.png" alt="" />
              </div>
              <div class="fl h-100">
                <div class="title">
                  <p>{{ item.title }}</p>
                </div>
                <p class="date">2017-12-5 17:09:51</p>
              </div>
            </td>
            <td class="ctr" width='100'>
              {{ item.state }}
            </td>
            <td class="ctr" width='100'>
              <p @click="fixModal = true">编辑信息</p>
              <router-link tag="p" :to="{ name:'videomanger',query:{id:item.id} }">管理视频</router-link>
              <p @click="delSinVideo = true,delSinT = item.title,delSinV = item.id">删除</p><!-- 删除单个视频 -->
            </td>
          </tr>
          <tr v-if="items === []">
            <td width="800px" colspan="4">
              <p style="text-align:center">暂无数据</p>
            </td>
          </tr>
        </table>
      </CheckboxGroup>
    </div>
    <div class="pgs">
      <li class="prev">&lt;上一页</li>
      <li class="current">1</li>
      <li class="custom">2</li>
      <li class="custom">3</li>
      <li class="custom">4</li>
      <li class="points">...</li>
      <li class="jump"><input type="tel" maxlength="3"> /40页</li>
      <li class="submit">确定</li>
      <li class="next">下一页&gt;</li>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/util/cookie"
import { loginUserUrl } from '@/api/api'
export default {
  data() {
    return {
      delSinV:'',//要删除的单个视频的id
      delSinT:'',//要删除的单个视频的title
      bodanDel:[],//这个是把要删除的视频的id存放在里面
      blankChoosen:['1'],//这个是把结果(id)预存到这个数组中
      mt:'',//将视频移动到这个播单，记录这个播单的id
      indeterminate:false,
      checkAll:false,
      items: [//课程(视频)列表
        {
          id:'1',
          title:'2',
          state:'3'
        }
      ],
      bodanList:[
        // 获取老师个人的播单，然后遍历成为播单选择的选项
      ],
      videoModal:false,
      fixModal:false,
      bodanRestModal:false,
      delVideo:false,
      delSinVideo:false,
      moveTo:false,
      gid:'',//播单id
      bodanInfo:{},//当前课程所属播单信息
      fix:{
        id:'',
        url:'',
        name:'',
        money:'',
        status:'',
        belong:''
      },
      video:{
        belong:'',
        url:'',
        title:'',
        price:'',
        state:''
      },
      bodanRest:{
        name:'',
        intro:'',
        crowd:'',
        value:''
      },
    }
  },
  methods: {
    // 页面初始数据
    onload(){
      this.gid = this.$route.query.gid
      // 获取视频列表
      let res = loginUserUrl('getOnline_Courses_catalogue',{
        username: "niuhongda",
        password: "123123q",
        gid:this.gid
      }).then((res)=>{
        console.log(res)
      })
      // 获取当前课程列表所属播单的信息
      let bd = loginUserUrl('getOnline_Courses_details',{
        username: "niuhongda",
        password: "123123q",
        gid:this.gid
      }).then((bd)=>{
        console.log(bd)
        this.bodanInfo = bd.data
      })
      // 不带分页的播单列表的数组，作为option的value来用
      let bdlst = loginUserUrl('getOnline_Filtrate',{
        username: "niuhongda",
        password: "123123q",
        lecturer: getCookie("u_name")
      }).then((bdlst)=>{
        if(bdlst.data && bdlst.data !== ''){
          this.bodanList = Object.entries(bdlst.data).slice(0,-2)
          console.log(this.bodanList)
        }else{
          this.bodanList = []
        }
      })
    },//===onload函数结束===
    // -------------------------接口待补充-------------------------------
    // 删除多个视频
    delClass(){
      this.$Message.success('多个')
    },
    // 删除单个视频
    delSinClass(){
      this.$Message.success('单个')
    },
    //------------------------------------------------------------------
    formatError(){
      this.$Message.error('格式错误，不能上传')
    },
    // 视频信息修改提交
    submit:function(){
      let fix = this.fix
      let res = loginUserUrl('getOnline_Courses_catalogueUpdate',{
        username: "niuhongda",
        password: "123123q",
        id:'',
        url:fix.url,
        name:fix.name,
        money:fix.money,
        status:fix.status,
        gid:fix.belong //移动视频到其他播单
      }).then((res)=>{
        this.$refs.fix.resetFields()
        this.fixModal=false
      })
    },
    // 视频课程添加表单提交
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
    // 修改播单表单提交
    submitBodanFixed:function(){
      let bodan = this.bodanRest
      // console.log(bodan.name)
      let res = loginUserUrl('getOnline_Courses_update',{
        username: "niuhongda",
        password: "123123q",
        gid:this.gid,
        name:bodan.name,
        intro:bodan.intro,
        crowd:bodan.crowd,
        value:bodan.value,
        lecturer:''//讲师id！！待获取
      }).then((res)=>{
        // console.log(res)
      })
      this.bodanRestModal = false
      this.onload()
    },
    // 重置各种表单
    handleReset:function(name){
      this.$refs[name].resetFields()
      this[name +'Modal']=false
      // this.$refs.upload.clearFiles()
    },
    // 视频上传完成回调
    upSuccess(response,file){
      // console.log(response)
    },
    // 视频上传失败回调
    upFail(){

    },
    // 全选
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false
      if (this.checkAll) {
        this.bodanDel = this.blankChoosen
      } else {
        this.bodanDel = []
      }
    },
    // 勾选时触发事件
    bodanDelChange (data) {
      if (data.length === this.items.length) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  },
  created () {
    this.onload()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.modal-outer {
  width: 100%;
  height: 173%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .modal {
    height: 110%;
  }
  .close {
    position: absolute;
    top: 15%;
    left: 60%;
  }
}
.active {
  border-bottom: 1px solid $red;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.ctr {
  text-align: center;
}
.clearfix {
  overflow: hidden;
}
.head {
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
.top {
  margin-left: 10px;
  p {
    line-height: 22px;
  }
}
.sm-tags {
  margin: 15px 0;
  li {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    margin-right: 5px;
    padding: 5px 10px;   
    border-radius: 6px;
    border: 1px solid #ddd;
  }
}
table {
  border: 1px solid $bg-nav;
  th {
    font-weight: bold;
    text-align: center;
    background-color: $bg-nav;
    line-height: 30px;
  }
  td {
    text-align: left;
    height: 60px;
    // border: 1px solid $border-dark;
    border-bottom: 1px dashed $border-dark;
    p {
      line-height: 30px;
      cursor: pointer;
    }
    .h-100 {
      height: 100px;
      width: 360px;
    }
    .title {
      height: 40px;
      p {
        line-height: 30px;
        font-size: 14px;
        margin-left: 20px;
      }
    }
    .date {
      color: $dark;
      margin: 36px 20px;
    }
  }
  img {
    width: 180px;
    height: 100px;
  }
}
.pgs {
  width: 525px;
  margin: 60px auto;
  li {
    width: 33px;
    padding: 4px 0;
    line-height: 20px;
    text-align: center;
    margin-right: 2px;
    cursor: pointer;
    border: 1px solid $border-dark;
    color: $black;
  }
  .prev {
    width: 73px;
    color: $blue;
  }
  .next {
    width: 96px;
    color: $blue;
  }
  .points {
    border: none;
  }
  .submit {
    background-color: $btn-default;
    color: $white;
    width: 44px;
    border: none;
  }
  .jump {
    width: 80px;
    border: 1px solid $border-dark;
    color: #333;
    input {
      width: 30px;
      border: 1px solid $border-dark;
      outline: none;
    }
  }
  .current {
    background-color: $btn-default;
    color: $white;
  }
}
</style>
