<template>
  <div class="item">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link><router-link :to="{ name: 'online' }">&nbsp;&gt;&nbsp;线上课程</router-link>&nbsp;&gt;&nbsp;土地增值税清算技巧[专题]</p>
    </div>
    <div class="container">
      <div class="player">
        <p>土地增值税清算技巧[专题]</p>
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
      <div class="class-list">
        <p class="title"><i></i>课程目录</p>
        <ul>
          <router-link to="/home" tag="li" v-for="item in classes" :key="item">{{ item }}</router-link>
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
      // videojs options
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }]
      },
      classes:[
        '1. 课程目录课程目录课程目录','2. 课程目录课程目录课程目录','3. 课程目录课程目录课程目录','4. 课程目录课程目录课程目录','5. 课程目录课程目录课程目录','6. 课程目录课程目录课程目录'
      ]
    }
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      // console.log('dynamic change options', this.player)
      this.player.muted(false)
    }, 2000)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      player.currentTime(0)
      // console.log('example 01: the player is readied', player)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.item{
  width: $width;
  margin: 0 auto;
  .cur-posi{
    margin: 25px 0 70px 0;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: -106px -204px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .container{
    margin-bottom: 200px;
    padding:25px 0 70px 0;
    background-color: #000;
    display: flex;
    p{
      color: $white;
    }
    .player{
      p{
        margin-left: 70px;
        font-size: $lgtitle;
      }
      .video-player{
        width: 500px;
        margin: 0 70px;
      }
    }
    .class-list{
      width: 217px;
      margin-left: 90px;
      .title{
        font-size: $lgtitle;
        text-align: center;
        i{
          display: inline-block;
          width: 27px;
          height: 22px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: -141px -228px;
          vertical-align: text-bottom;
          margin-right: 6px;
        }
      }
      ul{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      li{
        margin-top: 40px;
        font-size: $title;
        color: $white;
        cursor: pointer;
      }
    }
  }
}


</style>

