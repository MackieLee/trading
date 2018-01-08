<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;法规查询</p>
    </div>
    <div class="container">
      <!-- 模块一 -->
      <div class="global-overview-left lf">
        <div class="titcon">
          <h2 class="ctr">最新文件</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content clearfix">
          <dl>
            <dd v-for="item in newArr" :key="item.id">
              <router-link :to="{ name : 'fdetail' , query:{ id:item.id }}" class="newtitle">
                {{ item.name }}
              </router-link>
              <span class="date">{{ item.time }}</span>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 模块二 -->
      <div class="global-overview-left rt">
        <div class="titcon">
          <span @click="federal = true" :class="{ 'tab-cur': federal }">中央法规</span>
          <span @click="federal = false" :class="{ 'tab-cur': !federal }">地方法规</span>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <div v-if="federal" class="search">
            <Form ref="federalSearch" :model="federalSearch" :label-width="80">
              <FormItem label="标题">
                <Input v-model="federalSearch.title" placeholder="请输入法规标题"></Input>
              </FormItem>
              <FormItem label="字号">
                <Input v-model="federalSearch.zihao" placeholder="请输入法规字号"></Input>
              </FormItem>
              <FormItem label="年度">
                <Input v-model="federalSearch.niandu" placeholder="请输入法规颁布的年度"></Input>
              </FormItem>
              <FormItem label="发文单位">
                <Input v-model="federalSearch.danwei" placeholder="请输入法规颁布的单位"></Input>
              </FormItem>
              <FormItem label="发文日期">
                <Row>
                  <Col span="12">
                    <DatePicker type="date" @on-change="handleFormat('federalSearch','beginLine',$event)" format="yyyy-MM-dd" placeholder="选择起始时间" style="width: 180px"></DatePicker>
                  </Col>
                  <Col span="12">
                    <DatePicker type="date" @on-change="handleFormat('federalSearch','endLine',$event)" format="yyyy-MM-dd" placeholder="选择截止时间" style="width: 190px"></DatePicker>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" style="width:100px" @click="handleSubmit('federalSearch')">检索</Button>
                <Button type="ghost" style="margin-left: 8px;width:100px" @click="resetForm('federalSearch')">取消</Button>
              </FormItem>
            </Form>
          </div>
          <div v-else class="search">
            <Form ref="localSearch" :model="localSearch" :label-width="80">
              <FormItem label="地区">
                <Select v-model="localSearch.area" style="width:120px">
                  <Option value="地区1">山东省</Option>
                  <Option value="地区1">河北省</Option>
                  <Option value="地区1">河南省</Option>
                  <Option value="地区1">山东省</Option>
                  <Option value="地区1">山东省</Option>
                  <Option value="地区1">山东省</Option>
                  <Option value="地区1">山东省</Option>
                </Select>
              </FormItem>
              <FormItem label="标题">
                <Input v-model="localSearch.title" placeholder="请输入法规标题"></Input>
              </FormItem>
              <FormItem label="字号">
                <Input v-model="localSearch.zihao" placeholder="请输入法规字号"></Input>
              </FormItem>
              <FormItem label="年度">
                <Input v-model="localSearch.niandu" placeholder="请输入法规颁布的年度"></Input>
              </FormItem>
              <FormItem label="发文单位">
                <Input v-model="localSearch.danwei" placeholder="请输入法规颁布的单位"></Input>
              </FormItem>
              <FormItem label="发文日期">
                <Row>
                  <Col span="12">
                    <DatePicker type="date" @on-change="handleFormat('localSearch','beginLine',$event)" format="yyyy-MM-dd" placeholder="选择起始时间" style="width: 180px"></DatePicker>
                  </Col>
                  <Col span="12">
                    <DatePicker type="date" @on-change="handleFormat('localSearch','endLine',$event)" format="yyyy-MM-dd" placeholder="选择截止时间" style="width: 190px"></DatePicker>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" style="width:100px" @click="handleSubmit('localSearch')">检索</Button>
                <Button type="ghost" style="margin-left: 8px;width:100px" @click="handleReset('localSearch')">取消</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
      <!-- 模块三 -->
      <div class="global-overview-left second-line lf">
        <div class="titcon">
          <h2 class="ctr">政策解读</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content clearfix">
          <dl>
            <dd v-for="item in jieduArr" :key="item.id">
              <router-link :to="{ name : 'fdetail' , query:{ id:item.id }}" class="newtitle">
                {{ item.name }}
              </router-link>
              <span class="date">{{ item.time }}</span>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 模块四 -->
      <div class="global-overview-left second-line rt">
        <div class="titcon">
          <h2 class="ctr">税收类别</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <ul class="policy">
            <li>
              <span class="num"></span>
              <a target="_BLANK">税收征收管理</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
// import DatePicker from '../datepicker/DatePicker'
export default {
  // components:{DatePicker},
  name: "fsearch",
  data() {
    return {
      federal: true,
      newArr:[],
      jieduArr:[],
      federalSearch:{
        area:'',
        title:'',
        zihao:'',
        niandu:'',
        danwei:'',
        beginLine:'',
        endLine:''
      },
      localSearch:{
        area:'',
        title:'',
        zihao:'',
        niandu:'',
        danwei:'',
        beginLine:'',
        endLine:''
      }
    }
  },
  mounted:function(){
    let _self = this
    // 最新法规列表
    let res = loginUserUrl('http://aip.kehu.zaidayou.com/api/execute/getlaws_List',{
      username: "niuhongda",
      password: "123123q",
    }).then((res)=>{
      console.log(res)
      for(let j = 0;j<res.data.length;j++){
        if(res.data[j].explain === '1'){
          _self.newArr.push(res.data[j])
        }else if(res.data[j].explain === '2'){
          _self.jieduArr.push(res.data[j])
        }
      }
      let arr = _self.newArr
      // 最新列表的时间
      if(arr){
        for(let i = 0;i<arr.length;i++){
          let time = parseInt(arr[i].time)*1000
          let date = new Date(time).toLocaleDateString()
          _self.newArr[i].time = date
        }
      }
      // 政策解读时间
    })
  },
  methods:{
    handleReset:function(name){
      this.$refs[name].resetFields()
    },
    // 法规查询
    handleSubmit:function(name){
      let obj = this[name]
      // console.log(obj)
      let laws = 0
      if(name === 'federalSearch'){
        laws = 502
      }else if(name === 'localSearch'){
        laws = 503
      }
      this.$router.push({name:'fagui',query:{
        laws:laws,
        area:obj.area,
        name:obj.title,
        reference:obj.zihao,
        date_posted:obj.niandu,
        department:obj.danwei,
        begin_time:obj.beginLine,
        end_time:obj.endLine
        }
      })
    },
    handleFormat:function(obj,line,date){
      this[obj][line] = date
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.about {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  .green {
    color: green;
  }
  .red {
    color: $red;
  }
  .clearfix {
    overflow: hidden;
  }
  .ctr {
    text-align: center;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
    background-position: 0px 30px;
    margin-right: 11px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .container {
    overflow: hidden;
    font-size: 14px;
    line-height: 30px;
    margin-top: 35px;
    position: relative;
    .global-overview-left {
      width: 528px;
      margin-bottom: 35px;
      .titcon {
        background-color: $bg-blue;
        position: relative;
        height: 44px;
        h2 {
          font-size: 16px;
          padding: 10px 0;
          margin-left: 40px;
          color: $white;
        }
        span {
          line-height: 44px;
          padding: 10px 10px 15px 10px;
          color: $white;
          margin-left: 3px;
          cursor: pointer;
        }
        .tab-cur {
          background-color: $white;
          color: $black;
        }
      }
      .content {
        border: 1px solid $border-dark;
        border-top: none;
        height: 400px;
        dd {
          position: relative;
          padding: 10px 5px 4px 15px;
          .newtitle {
            display: inline-block;
            color: #333;
            font-size: 14px;
            width: 100%;
            height: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .date {
            position: absolute;
            right: 12px;
            top: 10px;
            color: $dark;
            font-size: 14px;
          }
        }
        select {
          width: 98px;
          height: 28px;
          margin-right: 14px;
          outline: none;
          border: 1px solid $border-blue;
          display: inline-block;
        }
        .policy {
          height: 240px;
          padding: 4px 15px;
          li {
            float: left;
            font-size: 14px;
            text-align: left;
            width: 33%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 38px;
            .num {
              display: inline-block;
              width: 6px;
              margin-right: 5px;
              height: 6px;
              // background: linear-gradient(#fdb483, #ff84f3)
              background-color: $bg-blue;
            }
          }
        }
        .search{
          padding: 10px 40px 0 20px;
        }
      }
    }
    .second-line {
      .content {
        height: 235px;
      }
    }
  }
}
</style>
