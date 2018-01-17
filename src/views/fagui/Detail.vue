<template>
  <div class="about">
    <div class="cur-posi" id="top">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;详细内容</p>
    </div>
    <div class="container">
      <div class="clearfix main-title ctr">
        <h1>{{ content.department }}</h1>
        <h3>{{ content.name }}</h3>
      </div>
      <div class="clearfix" style="margin-bottom:15px;line-height:25px;">
        <div class="second-title">
          <p>文号:{{ content.reference }}</p>
          <p>发文日期:{{ content.date_posted }}</p>
        </div>
      </div>
      <vue-audio>
      </vue-audio>
      <div class="top-bar">
        <span>网站发布日期:{{ timeUp }}</span>
        <span class="pointer" v-if="shoucang === '2'" @click="pick">点击收藏</span>
        <span class="pointer" v-if="shoucang === '1'" @click="cancelPick">已收藏</span>
        <span @click="print" class="pointer">打印本页</span>
        <a href="#bottom">一键到底</a>
      </div>
      <div class="artical">
        <div v-html="content.value">
          {{ content.value }}
        </div>
        <div class="clearfix">
          <div class="lf" v-if="adjunct">附件：</div>
          <div class="lf green">
            <p v-for="item in content.adjunct" :key="item.name">
              <a :href="item.document">{{item.name}}</a>
            </p>
          </div>
          <div class="rt">
            国家税务总局<br> {{ timeDown }}
          </div>
        </div>
        <div class="clearfix">
          <div class="lf" v-if="explain">政策解读：</div>
          <div class="lf green" v-if="explain">
            <router-link tag="span" style="cursor:pointer" :to="{path:'/fagui-jiedu',query:{id:content.explain_id}}">《{{ content.name }}》的政策解读</router-link>
          </div>
        </div>

        <div class="clearfix" style="margin:20px 0 25px 0;">
          <div class="lf">分享到:
            <i class="qq"></i>
            <i class="wechat"></i>
            <i class="weibo"></i>
          </div>
          <div class="rt" style="width:20%;">
            <span>
              <a href="#top" class="pointer">【返回顶部】</a>
            </span>
            <span @click="print" class="pointer">【打印本页】</span>
          </div>
        </div>
        <!-- 分页导航 -->
        <div style="display:flex;justify-content:center">
          <Page :total="200" show-elevator></Page>
        </div>
        <p class="red" style="font-size:14px;padding:20px 0 10px 30px;border-top:1px solid #ccc;margin-top:10px;">相关法规</p>
        <div class="clearfix xiangguan">
          <div class="lf">
            <router-link tag="p" :to="{ name:'fdetail',query:{ id:item.id }}" v-for="item in categray" :key="item.id" class="p1">{{ item.name }}</router-link>
          </div>
          <div class="rt">
            <p>企函字[2012]47</p>
            <p>企函字[2012]47</p>
          </div>
          <div class="rt" id="bottom">
            <p class="p1">2012-9-4</p>
            <p class="p1">2012-9-4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"
import VueAudio from './Audio'
export default {
  name: "fdetail",
  components: {
    VueAudio
  },
  data(){
    return{
      content:{},
      adjunct:false,
      explain:false,
      timeUp:'',
      timeDown:'',
      path:'',
      shoucang:'2',
      categray:[]
    }
  },
  created:function(){
    let _self = this
    let uid = getCookie('u_name')
    this.path = this.$route.query.id

    // 加载文章

    let res = loginUserUrl('getlaws_Details',{
      username: "niuhongda",
      password: "123123q",
      nid: this.path
    }).then((res)=>{
      // console.log(res.data)
      // 相关法规
      let rel = loginUserUrl('getlaws_category',{
        username: "niuhongda",
        password: "123123q",
        id:res.data.form_id
      }).then((rel)=>{
        let random = Math.floor((Math.random()*(rel.data.length-1)))
        let random2 = 0
        if(random >= rel.data.length-2){
          random2 = random - 1
        }else{
          random2 = random + 1
        }
        this.categray.push(rel.data[random],rel.data[random2])
      })
      let originTime = (new Date(parseInt(res.data.time)*1000).toLocaleDateString()).split('/')
      _self.timeUp = originTime[0]+'-'+originTime[1]+'-'+originTime[2]
      _self.timeDown = originTime[0]+'年'+originTime[1]+'月'+originTime[2]+'日'
      _self.content = res.data
      // 是否包含附属文档
      if(res.data.adjunct.length !== 0 ){
        // console.log(res.data.adjunct.length)
        _self.adjunct = true
      }
      // 是否包含解读文件
      if(res.data.explain_id !== '0' && res.data.explain_id !== '' && res.data.explain === '1'){
        _self.explain = true
      }
    })

    // 判断文章是否已经被收藏

    if(uid !== '' && uid !== 'undefined' ){
      let sc = loginUserUrl('getlaws_userCollect',{
        username: "niuhongda",
        password: "123123q",
        uid: uid
      }).then((sc)=>{
        // console.log(sc.data)
        for(let i=0;i<sc.data.length;i++){
          sc.data[i].goods_id === this.$route.query.id ? this.shoucang = '1':this.shoucang
        }
      })
    }else{
      return false
    }
  },
  methods:{
    print:function(){
      window.print()
    },
    // 添加收藏
    pick:function(){
      let uid = getCookie('u_name')
      if(uid !== '' && uid !== 'undefined' ){
        let res = loginUserUrl('getlaws_addCollect',{
          username: "niuhongda",
          password: "123123q",
          nid:this.$route.query.id,
          uid: uid
        }).then((res)=>{
          if(res.data.status){
            this.shoucang = res.data.status
          }
        })
      }else{
        this.$router.push({name:'login'})
      }
    },
    cancelPick:function(){
      let res = loginUserUrl('getlaws_delCollect',{
        username: "niuhongda",
        password: "123123q",
        nid:this.$route.query.id,
        uid: getCookie('u_name')
      }).then((res)=>{
        res.data === 'ok' ? this.shoucang = '2' : this.shoucang
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.about {
  width: $width;
  margin: 0 auto;
  padding-top:15px;
  // border-top: 1px solid $border-rice;
  .green {
    color: green;
  }
  .red {
    color: $red
  }
  .jiedua{line-height: 36px; height: 36px;
  a{color: #468EE3;}
  }
  .clearfix {
    overflow: hidden;
  }
  .ctr {
    text-align: center;
  }
  .lf {
    float: left; width: 70%;
  }
  .rt {
    float: right; width: 14%;
  }
  .pointer{
    cursor: pointer;
  }
  .main-title {
    h1 {
      font-size: 18px;
      color: #333;
    }
    h3 {
      font-size: 22px;
      display: inline-block;
      color: $red
    }
  }
  .second-title {
    p {
      text-align: center;
      margin-top: 10px; font-size: 14px;
    }
  }
  .artical {
    background-color: $white;
    width: 1030px;
    padding: 20px 0;
    margin: 0px auto 10px auto;
    border-top: 1px solid #ccc;
  }
  .xiangguan {
    margin-left: 30px;
    p {
      line-height: 25px;
      font-size: 14px;
    }
    .p1 {
      margin-right: 30px;
    }
  }
  i {
    display: inline-block;
    width: 27px;
    height: 25px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
    margin:0 11px;
    cursor: pointer;
  }
  .qq{
    background-position: -183px -118px;
  }
  .wechat{
    background-position: -181px -44px;
  }
  .weibo{
    background-position: -183px -89px;
  }
  .cur-posi {
    border-bottom: none;
    p{line-height: 20px;}
    i {
      background-position: -18px -96px;
      margin:0 6px 0 0;
    }
  }
  .container {
    overflow: hidden;
    font-size: 14px;
    line-height: 30px;
    position: relative;
    background-color: $white;
    padding-top: 35px;
    margin-top: 20px;
    border: 1px solid $border-rice;
    .top-bar {
      text-align: right;
      margin-right: 30px;
      span {
        margin-right: 20px;
      }
    }
  }
}
</style>
