<template>
  <div class="origin-item">
    <div class="modal-outer" v-show="modal">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <modal @closeModal="closeModal" :content-series="series"></modal>
    </div>
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
          <div class="min-650 dayi" v-if="part=='3'">
            <!-- 第一个问答 -->
            <div class="item">
              <!-- 标题 -->
              <div class="title unfold">
                分步计算，正确的步骤是否能得分？
                <div class="date">2017-10-08</div>
              </div>
              <div class="detail">
                <!-- 问题详情 -->
                <div class="question-detail">
                  我拿中注协的机考模拟系统练习，点击主观题上面的蓝色的CH输入法按钮，无法切换输入法，怎么回事？是因为是模拟系统所以中注协没安装输入法么？考试时候怎么办？谢谢老师。
                </div>
                <!-- 答案 -->
                <!-- 点击灰色标题栏下拉问题详情！-->
                <div class="ansr">
                  <i></i>
                  王老师的回答
                  <div class="date">2017-09-29 10:32:33</div>
                  勤奋可爱的学员，你好:<br> 正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，您试着换台电脑或者浏览器试试，考试的时候是不会出现这样的问题的，祝备考顺利！ 每个努力学习的小天使都会有收获的，加油
                </div>
              </div>
            </div>
            <div class="item">
              <!-- 标题 -->
              <!-- class名字根据事件触发 fold:unfold-->
              <div class="title fold">
                分步计算，正确的步骤是否能得分？
                <div class="date">2017-10-08</div>
              </div>
            </div>
            <div class="item">
              <!-- 标题 -->
              <!-- class名字根据事件触发 fold:unfold-->
              <div class="title fold">
                分步计算，正确的步骤是否能得分？
                <div class="date">2017-10-08</div>
              </div>
            </div>
          </div>
          <!-- 试题模块！！！！！！ -->
          <div class="min-650 shiti" v-if="part=='4'">
            <div class="test">【本节知识点】其他知识点</div>
          </div>
          <!-- 视频列表模块！！！不分离！！！ -->
          <div class="min-650 kecheng" v-if="part=='5'">
            <div class="class-list">
              <ul>
                <li v-for="item in classes" :key="item.num" :class="{ active: markNum == item.num }" @click="getVideo(item)">
                  <span>{{ item.title }}</span>
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
      <span class="pointer pingjia" @click="modal=!modal,series=true">本节评价</span>
      <span class="pointer shoucang" @click="shouCang">收藏</span>
      <i class="red-heart" v-if="shoucang"></i>
      <i class="grey-heart" v-if="!shoucang"></i>
      <div class="doc-box">
        <div class="doc-item" v-for="item in doc" :key="item.cutpoint">
          <!-- 循环遍历出文档模块 -->
          <!-- 我建议文档内容用富文本编辑器在线编辑 -->
          <div class="doc-content" :data-cut="item.cutPoint" @click="jumpTo">
            {{ item.content }}
            <!-- 将此段的文档遍历到这个地方 -->
            <div class="notes">
              <span>播放本段</span>
              <span @click="modal=!modal,series=false">编写笔记</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
const DOC = require('../../assets/doc.json')
import Modal from './Modal'
export default {
  name: 'video',
  components: { Modal },
  data() {
    return {
      markNum: '1',
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: ""
        }]
      },
      classes: [
        {
          num: '1',
          title: '1. 课程目录课程目录课程目录'
        },
        {
          num: '2',
          title: '2. 课程目录课程目录课程目录'
        },
        {
          num: '3',
          title: '3. 课程目录课程目录课程目录'
        },
        {
          num: '4',
          title: '4. 课程目录课程目录课程目录'
        },
        {
          num: '5',
          title: '5. 课程目录课程目录课程目录'
        }
      ],
      videos: [
        'http://112.253.22.163/2/z/x/a/d/zxaddmlybpqfcakgrlcmvbvzpnkdqk/he.yinyuetai.com/68DB01553913F3CAF794A41F2AB77A76.flv?sc=96b1e18fc28b7552&br=1153&vid=2592783&aid=29438&area=JP&vst=0',
        'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L'
      ],
      part: '1',
      doc: DOC,
      curClass: '土地增值税清算技巧[专题]',
      shoucang: false,
      modal: false,
      // 父组件和子组件数据绑定
      series: true
    }
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
    onPlayerPlay(player) {
    },
    onPlayerPause(player) {
    },
    onPlayerEnded(player) {
    },
    onPlayerLoadeddata(player) {
    },
    onPlayerWaiting(player) {
    },
    onPlayerPlaying(player) {
    },
    onPlayerTimeupdate(player) {
    },
    onPlayerCanplay(player) {
    },
    onPlayerCanplaythrough(player) {
    },
    playerStateChanged(playerCurrentState) {
    },
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
      let ev = event.target
      if (ev.tagName === 'SPAN') {
        document.getElementsByClassName('cur')[0].setAttribute('class', 'tab-title')
        ev.setAttribute('class', 'tab-title cur')
      } else {
        return
      }
      let ref = event.target.dataset.ref
      this.part = ref
    },
    jumpTo: function() {
      let point = event.target.dataset.cut
      this.$refs.videoPlayer.player.currentTime(point)
      this.$refs.videoPlayer.player.play()
    },
    shouCang: function() {
      this.shoucang = !this.shoucang
    },
    closeModal: function() {
      this.modal = false
    },
    noteDown: function() {
      this.modal = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.modal-outer {
  width: 100%;
  height: 180%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  .close {
    position: absolute;
    top: 15%;
    left: 60%;
  }
}
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
    background-image: url('../../assets/images/Sprite.png');
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
      .dayi {
        .item{
          .fold{
            &:hover{
              background-color: #D9D7D7;
            }
          }
        }
        .date {
          float: right;
        }
        .unfold{
          background-color: #D9D7D7;
        }
        .title {
          line-height: 30px;
          padding: 0 13px;
          overflow: hidden;
          cursor: pointer;
        }
        .detail {
          padding: 13px;
          background-color: $white;
          text-indent: 2em;
          .question-detail {
            border-bottom: 1px solid #eee;
            line-height: 36px;
            padding-bottom: 20px;
            margin-bottom: 10px;
          }
          .ansr {
            line-height: 36px;
            overflow: hidden;
            margin-top: 10px;
            i {
              background-position: -93px -89px;
              height: 25px;
            }
          }
        }
      }
      .shiti {
        .test {
          background-color: #D9D7D7;
          line-height: 30px;
          padding: 0 13px;
          overflow: hidden;
          cursor: pointer;
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
            border-bottom: 1px solid #B0ACAC;
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

