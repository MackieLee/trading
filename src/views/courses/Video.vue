<template>
  <div class="origin-item">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        <router-link :to="{ name: 'online' }">&nbsp;&gt;&nbsp;线上课程</router-link>&nbsp;&gt;&nbsp;土地增值税清算技巧[专题]</p>
    </div>
    <div class="container">
      <div class="player">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
      <P class="video-title">土地增值税清算技巧[专题]</P>
      <!-- <div class="class-list">
        <p class="title">
          <i></i>课程目录</p>
        <ul>
          <li v-for="item in classes" :key="item.num" :class="{ active: markNum == item.num }" @click="getVideo(item)">
            <span>{{ item.title }}</span>
            <i></i>
          </li>
        </ul>
      </div> -->
      <div class="comment">
        <p @click="toggle()">
          <span data-ref='1' class="cur">图书详情</span>
          <span data-ref='2'>图书目录</span>
          <span data-ref='3'>评论(189)</span>
        </p>
        <div class="content comment-box" v-if="part=='1'">
          本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。
        </div>
        <div class="comment-box" v-if="part=='2'">
          <font class="font-1">孙玮</font>
          <font class="font-2">著名财税专家</font>
          <font class="font-3">九鼎财税专家委员会专家； 注册会计师、注册税务师；东北财经大学财政专业硕士； 现任青岛大学经济学院副教授，硕士生导师；自1993年6月至今在青岛大学经济学院工作， 讲授《中国税制》、《国际税收》、《税务检查》、《外国税制》、《税务会计》等课程； 自2001年开始至今在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的 老师之一，17年财税培训经历，被称为财税培训界的“常青树”。</font>
          <font class="font-4">自1997年开始至今，在企业和事务所兼职从事财税实务工作，做过国企、大型民营企业、 跨国公司的审计工作；至今已经为多家大型民营企业、外资企业、国企、央企提供常年财税顾 问服务，并成功运作过若干税务筹划方案，深受企业家推崇。
          </font>
        </div>
        <div class="comment-box" v-if="part=='3'">3</div>
      </div>
    </div>
    <div class="docs">
      <div class="doc-item" v-for="item in doc" :key="item.cutpoint" :data-cut=item.cutPoint @click="jumpTo">
        <!-- 循环遍历出文档模块 -->
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
const DOC = require('../../assets/doc.json')
export default {
  name: 'video',
  data() {
    return {
      markNum: '1',
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
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
      doc: DOC
    }
  },
  mounted() {
    this.player.muted(false)
    console.log(this.doc[0].content)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay(player) {
      console.log(player)
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
    },
    //视频列表点播
    getVideo(item) {
      this.playerOptions.sources[0].src = this.videos[item.num - 1]
      this.markNum = item.num
    },
    //卡片切换
    toggle() {
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class', 'cur')
      let ref = event.target.dataset.ref
      this.part = ref
    },
    jumpTo:function(){
      let point = event.target.dataset.cut
      this.player.currentTime(point)
      this.player.play()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.origin-item{
  width:90%;
  margin:0 auto;
  overflow:hidden;
}
.container{
  width:500px;
  float:left;
  .player{
    height:300px;
  }
}
.docs{
  margin-left:550px;
  .doc-item{
    &:hover{
      background-color:$rice;
      cursor:pointer;
    }
  }
}
</style>

