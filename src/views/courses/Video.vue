<template>
  <div class="origin-item">
    <Modal
      :width = '850'
      v-model="modal1"
      :closable = "false"
      :mask-closable="false">
      <video-pingjia></video-pingjia>
    </Modal>
    <Modal
      :width = '450'
      v-model="modal2"
      :closable = "false"
      :mask-closable="false">
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
            <ul>
              <li>
                <font class="numb">1</font>房地产老项目收入成本结转问题</li>
              <li>
                <font class="numb">2</font>房地产老项目收入成本结转问题</li>
              <li>
                <font class="numb">3</font>房地产老项目收入成本结转问题</li>
              <li>
                <font class="numb">4</font>房地产老项目收入成本结转问题</li>
              <li>
                <font class="numb">5</font>房地产老项目收入成本结转问题</li>
              <li>
                <font class="numb">6</font>房地产老项目收入成本结转问题</li>
            </ul>
          </div>
          <!-- 笔记模块！！！！ -->
          <div class="min-650 biji" v-if="part=='2'">
            未发现本节相关的笔记内容
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
                <li v-for="item in classes" :key="item.num" :class="{ active: markNum == item.num }" @click="getVideo(item)">
                  <span>{{ item.title }}</span>
                  <span></span>
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
      <span class="pointer pingjia" @click="modal1=true,series=true">本节评价</span>
      <span class="pointer shoucang" @click="shouCang">收藏</span>
      <i class="red-heart" v-if="shoucang"></i>
      <i class="grey-heart" v-if="!shoucang"></i>
      <span>下载本节视频</span>
      <div class="doc-box">
        <div class="doc-item" v-for="item in doc" :key="item.cutpoint">
          <div class="doc-content" :data-cut="item.cutPoint" @click="jumpTo">
            {{ item.content }}
            <div class="notes">
              <span>播放本段</span>
              <span @click="modal2=true">编写笔记</span>
            </div>
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
import VideoPingjia from "../modal/VideoPingjia"
import Dayi from './Dayi'
export default {
  name: "video",
  components: { VideoPingjia,Dayi,Exam },
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
      classes: [
        {
          num: "1",
          title: "1. 课程目录课程目录课程目录"
        },
        {
          num: "2",
          title: "2. 课程目录课程目录课程目录"
        },
        {
          num: "3",
          title: "3. 课程目录课程目录课程目录"
        },
        {
          num: "4",
          title: "4. 课程目录课程目录课程目录"
        },
        {
          num: "5",
          title: "5. 课程目录课程目录课程目录"
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
    }
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
    margin-left: 620px;
    .doc-title {
      font-size: 16px;
      margin-right: 48px;
    }
    .teacher {
      margin-right: 70px;
    }
    .pingjia {
      margin-right: 10px;
    }
    .shoucang {
      margin-right: 0px;
    }
    .red-heart {
      background-position: -236px -262px;
      height: 17px;
    }
    .grey-heart {
      background-position: -140px -199px;
      height: 17px;
    }
    .pointer {
      cursor: pointer;
    }
    .doc-box {
      // border: 1px solid $border-red;
      margin-top: 30px;
      padding: 20px 10px;
      .doc-item {
        border: 1px solid transparent;
        .doc-content {
          line-height: 30px;
          margin: 15px;
          padding: 15px;
          .notes {
            overflow: hidden;
            margin-top: 25px;
            span {
              float: right;
              width: 80px;
              text-align: center;
              line-height: 25px;
              background-color: $border-red;
              color: $white;
              margin-right: 10px;
            }
          }
          &:hover {
            background-color: #f9f9f9;
            cursor: pointer;
          }
        }
        &:hover {
          border: 1px dashed $border-red;
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
      padding: 24px;
      .min-650 {
        min-height: 400px;
      }
      .benjie {
        li {
          display: list-item !important;
          .numb {
            color: $white;
            background-color: $orange;
            display: inline-block;
            width: 18px;
            line-height: 18px;
            text-align: center;
            margin: 0 10px 17px 0;
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
          li {
            padding: 22px 36px 22px 32px;
            font-size: 14px;
            color: #333;
            cursor: pointer;
            overflow: hidden;
            border-bottom: 1px solid #b0acac;
          }
          .active {
            background-color: #d8d8d8;
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

