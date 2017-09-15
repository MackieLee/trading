<template>
  <div class="item">
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
          <li v-for="item in classes" :key="item.num" @click="getVideo(item)"><span>{{ item.title }}</span>
            <i :class="{ active: markNum == item.num }"></i>
          </li>
        </ul>
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
      ]
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
    getVideo(item){
      this.playerOptions.sources[0].src = this.videos[item.num-1]
      this.markNum = item.num
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.item {
  width: $width;
  margin: 0 auto;
  i {
    display: inline-block;
    width: 30px;
    height: 25px;
    background-image: url('../../assets/images/Sprite.png');
  }
  .cur-posi {
    margin: 25px 0 70px 0;
    i {
      background-position: -106px -204px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .video-title {
    font-size: 18px;
    font-weight: bold;
  }
  .container {
    margin-bottom: 200px;
    padding: 25px 0 70px 0;
    display: flex;
    .player {
      .video-player {
        width: 660px;
      }
    }
    .class-list {
      margin-left: 25px;
      padding: 36px 18px 66px 41px;
      background-color: #807C81;
      .title {
        font-size: $lgtitle;
        text-align: center;
        color: #fff;
        margin-bottom:25px;
        i {
          background-position: -141px -228px;
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
        padding: 19px 0 25px 0;
        font-size: $title;
        color: $white;
        cursor: pointer;
        overflow: hidden;
        border-top: 1px solid #B0ACAC;
        border-bottom: 1px solid #B0ACAC;
        i{
          float: right;
          background-position: -178px -243px;
          margin-left: 40px;
          opacity: 0;
        }
        .active{
          opacity: 1;
        }
      }
    }
  }
}
</style>

