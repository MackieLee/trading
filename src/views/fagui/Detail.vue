<template>
  <div class="about">
    <div class="cur-posi" id="top">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="fagui-search">法规</router-link>&nbsp;&gt;&nbsp;{{ content.name }}</p>
    </div>
    <div class="container">
      <div class="clearfix main-title ctr">
        <h1>{{ content.department }}</h1>
        <h3>{{ content.name|unescape }}</h3>
      </div>
      <div class="clearfix biaot">
        <div class="second-title">
          <p>文号：{{ content.reference }}</p>
          <p>发文日期：{{ content.date_posted|str }}</p>
        <div class="top-bar">
          <span class="pointer" v-if="shoucang === '2'" @click="pick">
            点击收藏<i class="shouc"></i></span>
          <span class="pointer" v-if="shoucang === '1'" @click="cancelPick">
            取消收藏<i class="shouc1"></i></span>
          <span>网站发布日期:{{ timeUp }}</span>
          <span @click="print" class="pointer">打印本页</span>
        <a href="#bottom">一键到底</a>
      </div>
        </div>
      </div>
      <vue-audio>
      </vue-audio>
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
            {{ content.department }}<br> {{ content.date_posted|str }}
          </div>
        </div>
        <div class="clearfix">
          <div class="lf" v-if="explain">政策解读：</div>
          <div class="lf green" v-if="explain">
            <router-link tag="span" style="cursor:pointer"
            	:to="{path:'/fagui-jiedu',query:{id:content.explain_id}}">《{{ content.name }}
            	》的政策解读</router-link>
          </div>
        </div>
        <div class="clearfix" style="margin:20px 0 25px 0;">
          <div class="lf">分享到:
            <i class="qq iathis_button_qzone"></i>
            <i class="wechat"></i>
            <a href="http://service.weibo.com/share/share.php?title=&url=&searchPic=false&style=simple" target="_blank"><i class="weibo"></i></a>
          </div>
          <div class="rt" style="width:20%;">
            <span>
              <a href="#top" class="pointer">【返回顶部】</a>
            </span>
            <span @click="print" class="pointer">【打印本页】</span>
          </div>
        </div>
        <!-- 分页导航 -->
        <div v-if="ar_pg" style="display:flex;justify-content:center">
          <Page :total="200" show-elevator></Page>
        </div>
        <p class="red">相关法规</p>
        <div class="clearfix xiangguan">
          <div class="lf">
            <router-link tag="p" :to="{ name:'fdetail',query:{ id:item.id }}"
            v-for="item in categray" :key="item.ccc" class="categray" :title="item.name">{{ item.name }}</router-link>
          </div>
          <div class="rt" id="bottom">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api";
import { getCookie } from "@/util/cookie";
import VueAudio from "./Audio";
export default {
  name: "fdetail",
  components: {
    VueAudio
  },
  data() {
    return {
      content: {},
      adjunct: false,
      explain: false,
      timeUp: "",
      timeDown: "",
      path: "",
      shoucang: "2",
      categray: [],
      ar_pg:false,
    };
  },
  created: function() {
    this.onload()
  },
  watch: {
    $route(){
      this.onload()
    }
  },
  methods: {
    print: function() {
      window.print();
    },
    onload() {
      let _self = this;
      let uid = getCookie("u_name")
      this.path = this.$route.query.id
      this.categray = []
      // 加载文章
      let res = loginUserUrl("getlaws_Details", {
        username: "niuhongda",
        password: "123123q",
        nid: this.path
      }).then(res => {
        // console.log(res.data)
        // 相关法规
        let rel = loginUserUrl("getlaws_category", {
          username: "niuhongda",
          password: "123123q",
          id: res.data.form_id
        }).then(rel => {
          let len
          let arr = []
          if(rel.data.length - 1) len = rel.data.length - 1
          let getRan = (x) =>{
            let ran = (() => Math.floor(Math.random().toFixed(x) * len))()
            arr.includes(rel.data[ran]) ? getRan(x) : arr.push(rel.data[ran])
          }
          let count = 5 // 計數器
          if(len >= 1000){
            while(arr.length < count) getRan(3)
          }else if(len >= 100){
            while(arr.length < count) getRan(2)
          }else if(len >= 10){
            while(arr.length < count) getRan(1)
          }
          this.categray.push(...arr)
        })

        let originTime = new Date(parseInt(res.data.time) * 1000)
          .toLocaleDateString()
          .split("/");
        _self.timeUp =
          originTime[0] + "-" + originTime[1] + "-" + originTime[2];
        _self.timeDown =
          originTime[0] + "年" + originTime[1] + "月" + originTime[2] + "日";
        _self.content = res.data;
        // 是否包含附属文档
        if (res.data.adjunct.length !== 0) {
          // console.log(res.data.adjunct.length)
          _self.adjunct = true;
        }
        // 是否包含解读文件
        if (
          res.data.explain_id !== "0" &&
          res.data.explain_id !== "" &&
          res.data.explain === "1"
        ) {
          _self.explain = true;
        }
      });

      // 判断文章是否已经被收藏

      if (uid !== "" && uid !== "undefined") {
        let sc = loginUserUrl("getlaws_userCollect", {
          username: "niuhongda",
          password: "123123q",
          uid: uid
        }).then(sc => {
          // console.log(sc.data)
          for (let i = 0; i < sc.data.length; i++) {
            sc.data[i].goods_id === this.$route.query.id ? (this.shoucang = "1") : this.shoucang;
          }
        });
      } else {
        return false;
      }
    },
    // 添加收藏
    pick: function() {
      let uid = getCookie("u_name");
      if (uid !== "" && uid !== "undefined") {
        let res = loginUserUrl("getlaws_addCollect", {
          username: "niuhongda",
          password: "123123q",
          nid: this.$route.query.id,
          uid: uid
        }).then(res => {
          if (res.data.status) {
            this.shoucang = res.data.status;
          }
        });
      } else {
        this.$router.push({ name: "login" });
      }
    },
    cancelPick: function() {
      let res = loginUserUrl("getlaws_delCollect", {
        username: "niuhongda",
        password: "123123q",
        nid: this.$route.query.id,
        uid: getCookie("u_name")
      }).then(res => {
        res.data === "ok" ? (this.shoucang = "2") : this.shoucang;
      });
    },
  },
  filters: {
    unescape:function (html) {
      try{
        let strobj = html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "\'")
        return strobj
      }catch (err){
        console.log(err)
      }
    },
    str:function (time) {
      let date = new Date(parseInt(time)*1000)
      let y = date.getFullYear()
      let m = date.getMonth()+1
      let d = date.getDate()
      return y+'年'+m+'月'+d+'日'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.about {
  width: $width;
  margin: 0 auto;
  padding-top: 15px;
  // border-top: 1px solid $border-rice;
  .green {
    color: #468ee3;
  }
  .red {
    color: $red;
   font-size:14px;
    padding:20px 0 10px 30px;
    border-top:1px solid #ccc;
    margin-top:10px;
  }
  .jiedua {
    line-height: 36px;
    height: 36px;
    a {
      color: #468ee3;
    }
  }
  .categray {
    cursor: pointer;
    line-height: 30px;
    &:hover{
      color: red;
    }
  }
  .biaot{
  	margin:0px 20px 15px;
  	line-height:25px;

  	border-bottom: 3px solid red;
  }
  .clearfix {
    overflow: hidden;
  }
  .ctr {
    text-align: center;
  }
  .lf {
    float: left;
    width: 70%;
  }
  .rt {
    float: right;
    width: 14%;
  }
  .shouc,.shouc1{width: 24px;
    height: 24px;
    display: inline-block;
    margin: 0;
    background-position: -140px -192px;
    background-image: url("../../assets/images/Sprite.png");
    }
   .shouc{
    background-position: -236px -379px;
		}
  .pointer {
    cursor: pointer;
  }
  .main-title {
    h1 {
      font-size: 24px;
      color: #3188d8;
    }
    h3 {
      font-size: 24px;
      display: inline-block;
      color: $red;
      font-weight: 700;
      padding: 0 2em;
    }
  }
  .second-title {
    p {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .artical {
    background-color: $white;
    width: 1030px;
    margin: 10px auto 10px auto;

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
    width: 32px;
    height: 28px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
    margin-left:5px;
    cursor: pointer;
  }
  .qq {
    background-position: -183px -118px;
  }
  .wechat {
    background-position: -181px -44px;
  }
  .weibo {
    background-position: -183px -89px;
  }
  .cur-posi {
    border-bottom: none;
    p {
      line-height: 20px;
    }
    i {
      background-position: -18px -96px;
      margin: 0 6px 0 0;
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
      span {
        margin:0px 10px;
      }
    }
  }
}
</style>
