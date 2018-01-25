<template>
  <div class="video-list">
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
        <Button type="primary" @click="submit">提交</Button>
        <Button type="ghost" @click="handleReset('bodanRest')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <!-- 创建播单对话框 -->
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
        <Button type="primary" @click="create">提交</Button>
        <Button type="ghost" @click="handleReset('bodan')" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <div class="head">
      <div class="all">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
        <span @click="bodanModal = true" style="cursor:pointer">创建播单</span>
        <!-- <span>删除</span> -->
      </div>
      <div class="title">
        <span class="fl">播单</span>
        <span class="fr" style="text-align:center">操作</span>
        <span class="fr">视频数</span>
      </div>
      <div style="height:20px;"></div>
    </div>
    <div class="upload-box">
      <CheckboxGroup v-model="bodanDel" @on-change="bodanDelChange">
      <table>
        <tr height="120" v-for="item in classes" :key="item[1].id">
          <td width='50'>
            <Checkbox :label="item[1].id"><span></span></Checkbox>
          </td>
          <th width='550'>
            <div class="fl">
              <img src="../../assets/images/huanyuanzx02.png" alt="" />
            </div>
            <div class="fl h-100">
              <div class="title">
                <p>{{ item[1].name }}</p>
              </div>
              <p class="date">2017-12-5 17:09:51</p>
            </div>
          </th>
          <td width='100'>
            视频:2
          </td>
          <td width='100'>
            <p @click="bodanRestModal = true,gid = item[1].id">
              修改播单
            </p>
            <router-link tag="p" :to="{ name:'bodanmanger' }">管理播单</router-link>
            <!-- <p @click="getDel(item[1].id)">删除</p> -->
          </td>
        </tr>
      </table>
      </CheckboxGroup>
    </div>
    <div style="display:flex;justify-content:center;margin:80px 0 30px 0;">
      <Page :total="total" @on-change="page($event)" show-elevator></Page>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/util/cookie"
import { loginUserUrl } from '@/api/api'
export default {
  data() {
    return {
      classes: [],
      bodanDel:[],
      blankChoosen:[],
      indeterminate:false,
      checkAll:false,
      bodanRestModal:false,
      bodanModal:false,
      bodan:{
        name:'',
        intro:'',
        crowd:'',
        value:''
      },
      bodanRest:{
        name:'',
        intro:'',
        crowd:'',
        value:''
      },
      gid:'',
      total:0,
      pageNum:1,

    }
  },
  methods: {
    handleReset:function(name){
      this.$refs[name].resetFields()
      this[name +'Modal']=false
    },
    // 修改播单信息
    submit:function(){
      let bodan = this.bodanRest
      console.log(bodan.name)
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
        console.log(res)
      })
      this.bodanRestModal = false
      this.onload()
    },
    // 创建播单的接口
    create:function(){
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
        console.log(res)
        this.$refs.bodan.resetFields()
        this.bodanModal=false
      })
      this.onload()
    },
    // 全选
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.bodanDel = this.blankChoosen
      } else {
        this.bodanDel = []
      }
    },
    // 勾选时触发事件
    bodanDelChange (data) {
      if (data.length === this.classes.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    onload(){
      let res = loginUserUrl('getOnline_Courses',{
        username: "niuhongda",
        password: "123123q",
        page:this.pageNum
      }).then((res)=>{
        console.log(res.data.paging)
        let obj = Object.entries(res.data).slice(0,-2)
        this.classes = obj
        this.total = parseInt(res.data.counts)
        for(let i = 0;i<obj.length;i++){
          this.blankChoosen.push(obj[i][1].id)
        }
      })
    },
    page:function(num){
      this.pageNum = num
      this.onload()
    },
    // 播单删除
    // getDel(arg){
    //   let id = parseInt(arg)
    //   let res = loginUserUrl('getOnline_Courses_Delete',{
    //     username: "niuhongda",
    //     password: "123123q",
    //     cid:id
    //   }).then((res)=>{
    //   })
    //   this.onload()
    // }
  },
  created () {
    this.onload()
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.active {
  border-bottom: 1px solid $red;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.head {
  .title {
    background-color: $bg-nav;
    line-height: 35px;
    overflow: hidden;
    span {
      width:105px;
      text-align: center;
    }
  }
}
.all{
  line-height:35px;
  margin: 15px 0;
  label{
    margin:0 15px 0 10px;
  }
  span{
    padding: 5px 15px;
    margin-left: 10px;
    border: 1px solid $border-dark;
  }
}
.upload-box {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  padding: 10px;

  table {
    th,
    td {
      height: 60px;
      // border: 1px solid $border-dark;
      border-bottom: 1px dashed $border-dark;
    }
    th {
      font-weight: bold;
      text-align: left;
      .h-100{
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
    td {
      text-align: center;
      p {
        line-height: 30px;
        cursor: pointer;
      }
    }
    img {
      width: 180px;
      height: 100px;
    }
  }
}
</style>
