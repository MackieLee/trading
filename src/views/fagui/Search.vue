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
          <h2 class="ctr">最新文件
          	<a @click="handleSubmit('federalSearch')" >更多>></a>
          </h2>
        </div>
        <div class="clearfix"></div>
        <div class="content clearfix" style="position: relative;">
          <dl>
            <dd v-for="item in newArr" :key="item.id" :title='item.name'>
              <router-link :to="{ name : 'fdetail' , query:{ id:item.id }}"  class="newtitle">
                {{ item.name|unescape }}
              </router-link>
              <span class="date">{{ item.time }}</span>
            </dd>
          </dl>
          <div v-if="s_spin" class="s_spin">
            <div>
              <p>加载中</p>
              <Spin size="large"></Spin>
            </div>
          </div>
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
          <div v-if="federal" class="search" style="padding-top: 25px;">
            <Form ref="federalSearch" :model="federalSearch" :label-width="80">
             <FormItem label="税收分类">
						   <Select v-model="federalSearch.form_id" style="width:130px">
						      <Option v-for="item in classify" :key="item.fuck" :value="item.id">{{ item.name }}</Option>
						    </Select>
						  </FormItem>
              <FormItem label="标题" prop="title">
                <Input v-model="federalSearch.title"  @keyup.enter.native="handleSubmit('federalSearch')" placeholder="请输入法规标题"></Input>
              </FormItem>
              <FormItem label="文号" prop="zihao">
                <Input v-model="federalSearch.zihao"  @keyup.enter.native="handleSubmit('federalSearch')" placeholder="国税发〔2009〕31号"></Input>
              </FormItem>
              <FormItem label="发文年度" prop="niandu">
                <Input v-model="federalSearch.niandu"  @keyup.enter.native="handleSubmit('federalSearch')" placeholder="请输入法规颁布的年度"></Input>
              </FormItem>
              <FormItem label="发文单位" prop="danwei">
                <Input v-model="federalSearch.danwei"  @keyup.enter.native="handleSubmit('federalSearch')" placeholder="请输入法规颁布的单位"></Input>
              </FormItem>
              <FormItem label="发文日期">
                <Row>
                  <Col span="12" style="width: 160px; margin-bottom: 10px;">
                    <FormItem prop="beginLine">
                      <DatePicker type="date" v-model="federalSearch.beginLine"
                      	@on-change="handleFormat('federalSearch','beginLine',$event)"
                      	 format="yyyy-MM-dd" placeholder="选择起始时间" style="width: 160px">
                      </DatePicker>
                    </FormItem>
                  </Col>
                  <Col span="12" style="width: 160px;">
                    <FormItem prop="endLine">
                      <DatePicker type="date" v-model="federalSearch.endLine"
                      	@on-change="handleFormat('federalSearch','endLine',$event)"
                      	format="yyyy-MM-dd" placeholder="选择起始时间" style="width: 160px">
                      </DatePicker>
                    </FormItem>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" style="width:70px" @click="handleSubmit('federalSearch')">
                	检索</Button>
                <Button type="ghost" style="margin-left: 10px;width:70px" @click="handleReset('federalSearch')">重置</Button>
              </FormItem>
            </Form>
          </div>
          <div v-else class="search">
            <Form ref="localSearch" :model="localSearch" :label-width="80">
              <FormItem label="地区">
                <Select v-model="localSearch.area" style="width:130px">
                  <Option v-for="area in areas" :key="area.id" :value="area.name">{{ area.name }}</Option>
                </Select>
              </FormItem>

    <FormItem label="税收分类">
   <Select v-model="localSearch.form_id" style="width:130px">
      <Option v-for="item in classify" :key="item.fuck" :value="item.id">{{ item.name }}</Option>
    </Select>
  </FormItem>
					   <FormItem label="标题">
                <Input v-model="localSearch.title"  @keyup.enter.native="handleSubmit('localSearch')" placeholder="请输入法规标题"></Input>
              </FormItem>
              <FormItem label="文号">
                <Input v-model="localSearch.zihao"  @keyup.enter.native="handleSubmit('localSearch')" placeholder="国税发〔2009〕31号"></Input>
              </FormItem>
              <FormItem label="发文年度">
                <Input v-model="localSearch.niandu"  @keyup.enter.native="handleSubmit('localSearch')" placeholder="请输入法规颁布的年度"></Input>
              </FormItem>
              <FormItem label="发文单位">
                <Input v-model="localSearch.danwei"  @keyup.enter.native="handleSubmit('localSearch')" placeholder="请输入法规颁布的单位"></Input>
              </FormItem>
              <FormItem label="发文日期">
                <Row>
                  <Col span="12"  style="width: 160px; margin-bottom: 10px;">
                    <DatePicker type="date" v-model="localSearch.beginLine" @on-change="handleFormat('localSearch','beginLine',$event)" format="yyyy-MM-dd" placeholder="选择起始时间" style="width: 160px"></DatePicker>
                  </Col>
                  <Col span="12"  style="width: 160px;">
                    <DatePicker type="date" v-model="localSearch.endLine" @on-change="handleFormat('localSearch','endLine',$event)" format="yyyy-MM-dd" placeholder="选择截止时间" style="width: 160px"></DatePicker>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" style="width:70px" @click="handleSubmit('localSearch')">
                	检索</Button>
                <Button type="ghost" style="margin-left: 10px;width:70px"
                	 @click="handleReset('localSearch')">重置</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
      <!-- 模块三 -->
      <div class="global-overview-left second-line lf">
        <div class="titcon">
          <h2 class="ctr">政策解读
         	 <a @click="handleSubmit('federalSearch')" >更多>></a>
          </h2>
        </div>
        <div class="clearfix"></div>
        <div class="content clearfix" style="position: relative;">
          <dl>
            <dd v-for="item in jieduArr" :key="item.id"  :title='item.name'>
              <router-link :to="{ name : 'fdetail' , query:{ id:item.id }}" class="newtitle">
                {{ item.name|unescape }}
              </router-link>
              <span class="date">{{ item.time }}</span>

            </dd>
          </dl>
          <div v-if="s_spin" style="position:absolute; top:0; background-color: rgb(255,255,255,0.6);width:100%;height:100%;">
            <div style="position: absolute; top: 50%; left: 50%;">
              <p>加载中</p>
              <Spin size="large"></Spin>
            </div>
          </div>
        </div>
      </div>
      <!-- 模块四 -->
      <div class="global-overview-left second-line rt">
         <img src="../../assets/images/faguit.png">
      </div>

    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  name: "fsearch",
  data() {
    return {
      federal: true,
      newArr:[],
      jieduArr:[],
      begin:'',
      end:'',
      areas:'',
      classify:'',
      s_spin:true,
      federalSearch:{
        area:'',
        title:'',
        zihao:'',
        niandu:'',
        danwei:'',
        beginLine:'',
        endLine:'',
        form_id:''
      },
      localSearch:{
        area:'',
        title:'',
        zihao:'',
        niandu:'',
        danwei:'',
        beginLine:'',
        endLine:'',
        form_id:''
      }
    }
  },
  mounted:async function(){
    let _self = this
    // 最新法规列表
    try{
      let res = await loginUserUrl('getlaws_List',{page:1,number:5000})
      if(res){this.s_spin = false}else{console.log('err')}
      let resArr = Object.entries(res.data).slice(0,-1)
      for (let j = 0;j<resArr.length;j++){
        if(resArr[j][1].explain === '1'){
          let faguiTime = resArr[j][1].reference
          // let date = new Date(parseInt(faguiTime)*1000).toLocaleDateString()
          resArr[j][1].time = faguiTime
          _self.newArr.push(resArr[j][1])
        }else if(resArr[j][1].explain === '2'){
          let time = resArr[j][1].reference
          // let date = new Date(parseInt(time)*1000).toLocaleDateString()
          resArr[j][1].time = time
          _self.jieduArr.push(resArr[j][1])
        }
        // console.log(resArr[j][1])
      }
    }catch(err){
      console.log(err)
    }
    let area = await loginUserUrl('getlaws_localStatute',{})
    this.areas = area.data
    let classify = await loginUserUrl('getlaws_classify',{})
    this.classify = classify.data
  },
  methods:{
    handleReset:function(name){
      let {keys, values, entries} = Object
      for (let [key, value] of entries(this[name])) {
        this[name][key] = ''
      }
    },
    // 法规查询
    handleSubmit:function(name){
      let obj = this[name]
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
        begin_time:this.begin,
        end_time:this.end,
        form_id:obj.form_id
      }})
    },
    handleFormat:function(obj,line,date){
      if(line === 'beginLine'){
        this.begin = date
      }else{
        this.end = date
      }
    },
    jump:function(arg){
      console.log(arg)
    }
  },
  filters: {
    unescape:function (html) {
    return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "\'");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
/*.spin-cover{
  position:absoult;
}*/
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
    width: 780px;
  }
  .rt {
    float: right;
     width: 300px;
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
      margin-bottom: 35px;
      .titcon {
        background-color: $bg-blue;
        position: relative;
        height: 44px;
        h2 {
          font-size: 16px;
          padding: 10px 0;
          color: $white; overflow: hidden;
          a{
          	float: right;
          	font-size: 14px; height: 44px;
          	color: $white;
          	 margin-right: 20px;
          }
        }
        span {
          line-height: 45px;
          padding: 10px 10px 15px 10px;
          color: $white;
          margin-left: 3px;
          cursor: pointer;
        }
        .tab-cur {
          background-color: $white;
          color: $black;
          font: 14px/1.5 tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
        }
      }
      .content {
        border: 1px solid $border-dark;
        border-top: none;
        height: 506px;
        dd:hover{
        .newtitle,.date{color: red;}
        	}
        dd {
          position: relative;
          padding: 13px 5px 0px 15px;

          .newtitle {
            display: inline-block;
            color: #333;
            font-size: 14px;
            width: 490px;
            height: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .date {
            position: absolute;
            right: 12px;
            top: 10px;
            color: #666;
            font-size: 12px;
            width: 190px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
          height: 100%;
          padding: 4px 15px;
          li:hover{
          	span{color: red;}
          	}
          li {
            float: left;
            font-size: 14px;
            text-align: left;
            width: 50%;
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
          padding: 10px 40px 0 10px;
        }
      }
    }
    .second-line {
      .content {
        height: 360px;
      }
    }
  }
}
</style>
