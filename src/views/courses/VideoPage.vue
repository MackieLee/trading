<template>
  <div class="origin-item">
    <Modal
      :width = '450'
      v-model="modal2"
      :closable = "false"
      :mask-closable="false"
      :on-ok="bijiSub"
    >
      <Input v-model="bijiTitle" placeholder="请输入标题" style="margin:20px 0;"></Input>
      <Input v-model="biji" type="textarea" :rows="4" placeholder="请输入笔记内容"></Input>
    </Modal>
    <div class="container">
      <div class="player">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
      <!-- <P class="video-title">土地增值税清算技巧[专题]</P> -->
      <div class="second-block">
        <p class="tab-title-container" @click="toggle()">
          <span class="tab-title cur" data-ref='1'>本节目录</span>
          <span class="tab-title" data-ref='2'>笔记</span>
          <span class="tab-title" data-ref='3'>答疑</span>
          <span class="tab-title" data-ref='4'>试题</span>
          <span class="tab-title" data-ref='5'>课程目录</span>
        </p>
        <div class="tab-content">
          <div class="min-650 benjie" v-if="part=='1'">
          	<p class="biaoti">章节1:【音频试听】课程说明与安排</p>
            <ul>
              <li>
                <font class="numb">1</font>课时1 社保到底保什么14:10</li>
              <li>
                <font class="numb">2</font>课时2 社保到底保什么14:10</li>
              <li>
                <font class="numb">3</font>课时3有了社保，我还需要再增加保险吗？</li>
              <li>
                <font class="numb">4</font>章节4:【第二课】快速阅读的科学原理</li>
              <li>
                <font class="numb">5</font>课时4 商业保险 （本节无内容，我是分隔符）</li>
              <li>
                <font class="numb">6</font>课时5 社会保险 （本节无内容，我是分隔符）</li>
            </ul>
          </div>
          <!-- 笔记模块！！！！ -->
          <div class="min-650 biji" v-if="part=='2'">
          <p  class="biaoti">本节相关的笔记内容</p>
          <ul>
          	<li style="display: block;">
          		 <p class="p_l">1.主观题上面的蓝色的CH输入法按钮,切换输入法</p>
          		<span>编辑</span>
          		<span>删除</span>
          	</li>
           	<li>
          		 <p class="p_l">2.正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，
        	您试着换台电脑或者浏览器试试，祝备考顺利！法</p>
          		<span>编辑</span>
          		<span>删除</span>
          	</li>
           	<li>
          		 <p class="p_l">3.正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，
        	您试着换台电脑或者浏览器试试，祝备考顺利！主观题上面的蓝色的CH输入法按钮,切换输入法</p>
          		<span>编辑</span>
          		<span>删除</span>
          	</li>
           	<li>
          		 <p class="p_l">4.主观题上面的蓝色的CH输入法按钮,切换输入法正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，
        	您试着换台电脑或者浏览器试试，祝备考顺利！</p>
          		<span>编辑</span>
          		<span>删除</span>
          	</li>
          </ul>
          </div>
          <!-- 问答模块！！！！ -->
          <dayi class="min-650" v-if="part=='3'">
          </dayi>
          <!-- 试题模块！！！！！！ -->
          <exam v-if="part=='4'">
          </exam>
          <!-- 视频列表模块！！！ -->
          <div class="min-650 kecheng" v-if="part=='5'">
            <div class="class-list">
              <ul>
 <li v-for="item in classes" :key="item.num" :class="{ active: markNum == item.num }"
 	 @click="getVideo(item)">
                  <span>{{ item.title }}</span>
                  <span class="right">播放次数已用完</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="docs">
      <!-- 课程标题 -->
      <span class="doc-title">{{ curClass }}</span>
      <span class="teacher">主讲：孙玮老师</span>
      <!--<span class="pointer pingjia" @click="modal1=true,series=true">本节评价</span>-->
 	    <router-link class="pointer pingjia"  :to="{path:'/o/VideoPingfen',query:{id:this.$route.query.id}}" tag="span">本节评价</router-link>
      <span class="pointer shoucang" @click="shouCang">收藏</span>
      <i class="red-heart" v-if="shoucang"></i>
      <i class="grey-heart" v-if="!shoucang"></i>
      <span>下载本节视频</span>
      <div class="doc-box">
        <div class="doc-item" v-for="item in doc" :key="item.cutpoint">
          <div class="doc-content" :data-cut="item.cutPoint" @click="jumpTo">
            {{ item.content }}
          </div>
          <div class="notes">
            <span @click="modal2=true">编写笔记</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("video.js/dist/video-js.css")
require("vue-video-player/src/custom-theme.css")
const DOC = require("../../assets/doc.json")
import Exam from './Exam'

import Dayi from './Dayi'
export default {

  components: {Dayi,Exam },
  data() {
    return {
      markNum: "1",
      playerOptions: {
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: ""
          }
        ]
      },
      bijiTitle:'',
      biji:'',
      classes: [
        {
          num: "1",
          title: "1. 章节1:【音频试听】课程说明与安排"
        },
        {
          num: "2",
          title: "2. 章节2:（免费试听）【第一课】 快速阅读的常见误区"
        },
        {
          num: "3",
          title: "3. 章节3【视频课】常见的六个速读误区18:21"
        },
        {
          num: "4",
          title: "4. 章节4:【第二课】快速阅读的科学原理"
        },
        {
          num: "5",
          title: "5. 章节5:【第三课】基础模块一：眼球移动训练"
        },
        {
          num: "6",
          title: "6. 章节6:【第四课】基础模块二：视觉定焦训练"
        }

      ],
      videos: [
        "http://112.253.22.163/2/z/x/a/d/zxaddmlybpqfcakgrlcmvbvzpnkdqk/he.yinyuetai.com/68DB01553913F3CAF794A41F2AB77A76.flv?sc=96b1e18fc28b7552&br=1153&vid=2592783&aid=29438&area=JP&vst=0",
        "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
        "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
      ],
      part: "1",
      doc: DOC,
      curClass: "土地增值税清算技巧[专题]",
      shoucang: false,
      // 父组件和子组件数据绑定
      modal1:false,
      modal2:false
    };
  },
  mounted() {
    this.playerOptions.sources[0].src = this.videos[0]
    this.player.muted(false)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay(player) {},
    onPlayerPause(player) {},
    onPlayerEnded(player) {},
    onPlayerLoadeddata(player) {},
    onPlayerWaiting(player) {},
    onPlayerPlaying(player) {},
    onPlayerTimeupdate(player) {},
    onPlayerCanplay(player) {},
    onPlayerCanplaythrough(player) {},
    playerStateChanged(playerCurrentState) {},
    playerReadied(player) {
      player.currentTime(0)
      player.volume(0.5)
    },
    //视频列表点播
    getVideo(item) {
      this.playerOptions.sources[0].src = this.videos[item.num - 1]
      this.markNum = item.num
    },
    //卡片切换
    toggle() {
      let ev = event.target;
      if (ev.tagName === "SPAN") {
        document
          .getElementsByClassName("cur")[0]
          .setAttribute("class", "tab-title")
        ev.setAttribute("class", "tab-title cur")
      } else {
        return;
      }
      let ref = event.target.dataset.ref
      this.part = ref
    },
    jumpTo: function() {
      let point = event.target.dataset.cut;
      this.$refs.videoPlayer.player.currentTime(point)
      this.$refs.videoPlayer.player.play()
    },
    shouCang: function() {
      this.shoucang = !this.shoucang
      let res = this.loginUserUrl('getTeacher_Attention',{
        username: 'niuhongda',
        password: '123123q',
        uid: this.getCookie('u_name'),
        sid: this.biji,
        type: 3,
      }).then(res =>{
        console.log('单个视频收藏')
        console.log(res)
      })
    },
    bijiSub:function(){
      let res;
      res = this.loginUserUrl('getOnline_Courses_chapterNote', {
        username: "niuhongda",
        password: "123123q",
        cid: "",
        uid: this.getCookie('u_name'),
        value: this.biji,
      }).then(res => {
        console.log('add note text')
        console.log(res)
      });
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.origin-item {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  // border-top: 1px solid $border-rice;
  padding-top: 20px;
  i {
    display: inline-block;
    width: 30px;
    height: 25px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .container {
    width: 530px;
    float: left;
  }
  .docs {
    margin-left: 570px;
    .doc-title {
      font-size: 16px;
      margin-right: 48px;
    }
    .teacher {
      margin-right:30px;
    }
    .pingjia {
      margin-right: 20px;
    }
    .shoucang {
      margin-right:0px;
    }
    .red-heart {
      background-position:-237px -385px;
      margin-right:10px;
      height: 17px;
    }
    .grey-heart {
      background-position: -140px -198px;
      height: 17px; margin-right:10px;
    }
    .pointer {
      cursor: pointer;
    }
    .doc-box {
      // border: 1px solid $border-red;
      padding: 20px 0px;
      .doc-item {
        border: 1px solid transparent;
        .doc-content {
          line-height: 30px;
          margin: 10px;
          padding: 10px;
          &:hover {
            background-color: #f9f9f9;
            cursor: pointer;
          }
        }
        &:hover {
          border: 1px dashed $border-red;
        }
        .notes {
          overflow: hidden;
          margin-top: 25px;
          span:hover{ background-color:#e7141a; }
          span {
            float: right;
            width: 80px;
            text-align: center;
            line-height: 28px;
            background-color: $border-red;
            color: $white;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .second-block {
    margin-top: 34px;
    box-sizing: border-box;
    border: 1px solid $red;
    .tab-title-container {
      padding: 24px;
      padding-bottom: 0px;
      border-bottom: 1px solid $border-red;
      display: flex;
      justify-content: space-between;
      .tab-title {
        font-size: 14px;
        padding: 7px 15px;
        cursor: pointer;
      }
    }
    .tab-content {
      padding:10px 22px;
      .min-650 {
        min-height: 400px;
      }
      .biji{
      	.biaoti{line-height:35px; background-color:#f5f5f5;
      	 text-indent: 1em; margin-bottom: 2px;
      	 }
      	 	li { margin: 10px 0px;overflow: hidden;
         cursor: pointer; display: block;
         .p_l{ float: left;line-height: 28px;width: 80%;}
         span{line-height: 28px; float: right; margin: 0px 10px;}
      	 }
      }
      .benjie {
      	.biaoti{line-height:35px; background-color:#f5f5f5;
      	 text-indent: 1em; margin-bottom: 2px;
      	 }
      	li:hover{background-color:#f5f5f5;}
        li {
          display: list-item !important; line-height: 34px; cursor: pointer;
          .numb {
            color: $white;
            background-color: $orange;
            display: inline-block;
            width:15px;
            line-height:15px;
            text-align: center;
            margin:0 15px;
          }
        }
      }
      .kecheng {
        .class-list {
          padding-bottom: 36px;
          ul {
            display: flex;
            flex-direction: column;
          }
        /*  li:hover{ color: #E7141A;}*/
          li {
            font-size: 12px; line-height: 36px; overflow: hidden;
            color: #333;
            cursor: pointer;background-color: #F5F5F5;
            overflow: hidden;
           padding-left: 15px;margin:5px 0px 10px;
           span.right{float: right; margin-right: 10px; display: inline-block;}
          }
          .active {
            color: #999;
          }
        }
      }
    }
    .cur {
      background-color: $border-red;
      color: $white;
    }
  }
}
</style>

