<template>
  <div class="orgin-item">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        <router-link :to="{ name: 'online' }">&nbsp;&gt;&nbsp;线上课程</router-link>&nbsp;&gt;&nbsp;土地增值税清算技巧[专题]</p>
    </div>
    <P class="video-title">土地增值税清算技巧[专题]</P>
    <div class="container">
      <div class="player">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
      <div class="class-list">
        <p class="title">
          <i></i>课程目录</p>
        <ul>
          <li v-for="item in classes" :key="item.num" :class="{ active: markNum == item.num }" @click="getVideo(item)">
            <span>{{ item.title }}</span>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
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
    <div class="video-box-title">
      <span></span>
      <font>主讲课程</font>
      <a>更多>></a>
    </div>
    <div class="video-boxes">
      <div class="box-item">
        <div>
          <router-link to="/video" class="video-cover"><img src="../../assets/images/jitax_线上课程_03.png" />
            <span class="new">NEW</span>
          </router-link>
        </div>
        <p class="video-title">
          <router-link to="/home">税收筹划案例精解-3</router-link>
        </p>
        <p class="buss-info">
          <span class="person-current">
            <font>31</font>人在学</span>
          <span class="classes">课时</span>
          <font>25</font>
          <span>MIN</span>
          <router-link to="/home" class="play">进入学习</router-link>
        </p>
      </div>
      <div class="box-item">
        <div>
          <router-link to="/home" class="video-cover"><img src="../../assets/images/jitax_线上课程_05.png" />
            <span class="new">NEW</span>
          </router-link>
        </div>
        <p class="video-title">
          <router-link to="/home">税收筹划案例精解-3</router-link>
        </p>
        <p class="buss-info">
          <span class="person-current">
            <font>31</font>人在学</span>
          <span class="classes">课时</span>
          <font>25</font>
          <span>MIN</span>
          <router-link to="/home" class="play">进入学习</router-link>
        </p>
      </div>
      <div class="box-item">
        <div>
          <router-link to="/home" class="video-cover"><img src="../../assets/images/jitax_线上课程_07.png" />
            <span class="new">NEW</span>
          </router-link>
        </div>
        <p class="video-title">
          <router-link to="/home">税收筹划案例精解-3</router-link>
        </p>
        <p class="buss-info">
          <span class="person-current">
            <font>31</font>人在学</span>
          <span class="classes">课时</span>
          <font>25</font>
          <span>MIN</span>
          <router-link to="/home" class="play">进入学习</router-link>
        </p>
      </div>
      <div class="box-item">
        <div>
          <router-link to="/home" class="video-cover"><img src="../../assets/images/jitax_线上课程_09.png" />
            <span class="new">NEW</span>
          </router-link>
        </div>
        <p class="video-title">
          <router-link to="/home">税收筹划案例精解-3</router-link>
        </p>
        <p class="buss-info">
          <span class="person-current">
            <font>31</font>人在学</span>
          <span class="classes">课时</span>
          <font>25</font>
          <span>MIN</span>
          <router-link to="/home" class="play">进入学习</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
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
          src: "http://112.253.22.163/2/z/x/a/d/zxaddmlybpqfcakgrlcmvbvzpnkdqk/he.yinyuetai.com/68DB01553913F3CAF794A41F2AB77A76.flv?sc=96b1e18fc28b7552&br=1153&vid=2592783&aid=29438&area=JP&vst=0"
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
      part: '1'
    }
  },
  mounted() {
    this.player.muted(false)
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
    getVideo(item) {
      this.playerOptions.sources[0].src = this.videos[item.num - 1]
      this.markNum = item.num
    },
    toggle() {
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class', 'cur')
      let ref = event.target.dataset.ref
      this.part = ref
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.orgin-item {
  width: $width;
  margin: 0 auto;
  i {
    display: inline-block;
    width: 30px;
    height: 25px;
    background-image: url('../../assets/images/Sprite.png');
  }
  .cur-posi {
    margin: 25px 0 25px 0;
    i {
      background-position: -52px -80px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .video-title {
    font-size: 18px;
  }
  .container {
    padding: 20px 0 50px 0;
    display: flex;
    .player {
      .video-player {
        width: 660px;
      }
    }
    .class-list {
      margin-left: 25px;
      padding: 36px 18px 66px 41px;
      background-color: #989898;
      .title {
        font-size: $lgtitle;
        color: #fff;
        margin-bottom: 25px;
        i {
          background-position: -22px 25px;
          vertical-align: text-bottom;
          margin-right: 6px;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      li {
        padding: 22px 36px 22px 32px;
        font-size: 14px;
        color: $white;
        cursor: pointer;
        overflow: hidden;
        border-top: 1px solid #B0ACAC;
        border-bottom: 1px solid #B0ACAC;
        i {
          float: right;
          background-position: -117px 25px;
          margin-left: 40px;
          opacity: 0;
        }
      }
      .active {
        background-color: #898989;
        i {
          opacity: 1;
        }
      }
    }
  }
  .comment {
    .comment-box {
      min-height: 180px;
      font {
        display: block;
        text-indent: 45px;
      }
      .font-1 {
        margin-top: 30px;
      }
      .font-2 {
        margin-top: 18px;
      }
      .font-3 {
        margin-top: 32px;
        text-indent: 32px;
        line-height: 30px;
      }
      .font-4 {
        text-indent: 32px;
        line-height: 30px;
      }
    }
    p {
      border-bottom: 1px solid $rice;
      overflow: hidden;
      span {
        float: left;
        color: $black;
        padding: 10px 16px;
        cursor: pointer;
      }
      span[class="cur"] {
        background-color: $red;
        color: $white;
      }
    }
    .content {
      text-indent: 32px;
      line-height: 35px;
      font-size: 16px;
      padding: 30px 10px;
    }
  }
  .video-box-title {
    width: $width;
    margin: auto;
    margin: 50px 0 28px 0;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid $rice;
    span {
      padding: 3px 15px;
      margin-right: 14px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: 0px 88px;
    }
    font {
      font-size: 18px;
      font-weight: 450;
    }
    a {
      font-size: 14px;
      position: absolute;
      right: 0;
    }
  }
  .video-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-cover {
      position: relative;
    }
    .box-item {
      border: 1px solid $red;
      padding: 6px 6px 10px 6px;
      margin-bottom: 38px;
      position: relative;
      .new {
        padding: 2px 4px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 0;
        bottom: 4px;
      }
      .video-title {
        margin: 15px 0;
        position: relative;
        font-size: 16px;
        font-weight: normal;
      }
      .buss-info {
        font-size: 12px;
        margin-right: 10px;
        span {
          margin-right: 10px;
        }
      }
      .play {
        padding: 2px 5px;
        background-color: $red;
        color: $white;
        font-size: 12px;
        position: absolute;
        right: 15px;
      }
    }
  }
}
</style>

