<template>
  <div class="audio">
    <div class="di main-wrap" v-loading="audio.waiting">
      <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audio来访问该dom元素 -->
      <audio ref="audio" class="dn"
      :src="url" :preload="audio.preload"
      @play="onPlay"
      @error="onError"
      @waiting="onWaiting"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
      ></audio>
      <div class="slider-w">
        <el-slider v-show="!controlList.noProcess" v-model="sliderTime" :format-tooltip="formatProcessToolTip" @change="changeCurrentTime" class="slider current-slider"></el-slider>
      </div>
      <div style="overflow:hidden;width:360px;margin:5px auto;">
        <!-- <span @click="startPlayOrPause">{{audio.playing | transPlayPause}}</span> -->
        <div class="btns play-btn" @click="startPlayOrPause"><span :class="{ 'play':audio.playing ,'pause':!audio.playing}"></span></div>
        <div class="btns stop-btn" @click="audioStop"><div class="stop"></div></div>
        <!-- <span v-show="!controlList.noSpeed" @click="changeSpeed">{{audio.speed | transSpeed}}</span> -->
        <div class="btns time">
          <i>{{ audio.currentTime | formatSecond}}</i>
          <i>{{ audio.maxTime | formatSecond }}</i>
        </div>
        <div class="btns vol">
          <div class="vol-btns vol-btn" v-show="!controlList.noMuted" @click="startMutedOrNot"><span :class="{ 'silence':audio.muted ,'volume':!audio.muted}"></span></div>
          <div class="vol-btns vol-slider">
            <el-slider v-show="!controlList.noVolume" v-model="volume" :format-tooltip="formatVolumeToolTip" @change="changeVolume" class="slider volume-slider"></el-slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  function realFormatSecond(second) {
    var secondType = typeof second

    if (secondType === 'number' || secondType === 'string') {
      second = parseInt(second)

      var hours = Math.floor(second / 3600)
      second = second - hours * 3600
      var mimute = Math.floor(second / 60)
      second = second - mimute * 60

      return ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
      return '0:00:00'
    }
  }

  export default {
    props: {
      theSpeeds: {
        type: Array,
        default () {
          return [1, 1.5, 2]
        }
      },
      theControlList: {
        type: String,
        default: ''
      }
    },
    name: 'VueAudio',
    data() {
      return {
        url: 'http://61.129.89.249:10080/mp3/mp3/_tax/a5/a5ad9158a8ba1f5ff37145ad0128e16f.mp3',
        audio: {
          currentTime: 0,
          maxTime: 0,
          playing: false,
          muted: false,
          speed: 1,
          waiting: true,
          preload: 'auto'
        },

        sliderTime: 0,
        volume: 100,
        speeds: this.theSpeeds,

        controlList: {
          // 不显示下载
          noDownload: false,
          // 不显示静音
          noMuted: false,
          // 不显示音量条
          noVolume: false,
          // 不显示进度条
          noProcess: false,
          // 只能播放一个
          onlyOnePlaying: false,
          // 不要快进按钮
          noSpeed: false
        }
      }
    },
    methods: {
      setControlList () {
        let controlList = this.theControlList.split(' ')
        controlList.forEach((item) => {
          if(this.controlList[item] !== undefined){
            this.controlList[item] = true
          }
        })
      },
      changeSpeed() {
        let index = this.speeds.indexOf(this.audio.speed) + 1
        this.audio.speed = this.speeds[index % this.speeds.length]
        this.$refs.audio.playbackRate = this.audio.speed
      },
      startMutedOrNot() {
        this.$refs.audio.muted = !this.$refs.audio.muted
        this.audio.muted = this.$refs.audio.muted
      },
      // 音量条toolTip
      formatVolumeToolTip(index) {
        return '音量条: ' + index
      },
      // 进度条toolTip
      formatProcessToolTip(index = 0) {
        index = parseInt(this.audio.maxTime / 100 * index)
        return '进度条: ' + realFormatSecond(index)
      },
      // 音量改变
      changeVolume(index = 0) {
        this.$refs.audio.volume = index / 100
        this.volume = index
      },
      // 播放跳转
      changeCurrentTime(index) {
        this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
      },
      startPlayOrPause() {
        return this.audio.playing ? this.pausePlay() : this.startPlay()
      },
      // 开始播放
      startPlay() {
        this.$refs.audio.play()
      },
      // 暂停
      pausePlay() {
        this.$refs.audio.pause()
      },
      // 当音频暂停
      onPause () {
        this.audio.playing = false
      },
      // 当发生错误, 就出现loading状态
      onError () {
        this.audio.waiting = true
      },
      // 当音频开始等待
      onWaiting (res) {
      },
      // 当音频开始播放
      onPlay (res) {
        this.audio.playing = true
        this.audio.loading = false

        if(!this.controlList.onlyOnePlaying){
          return
        }

        let target = res.target

        let audios = document.getElementsByTagName('audio');

        [...audios].forEach((item) => {
          if(item !== target){
            item.pause()
          }
        })
      },
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
        // console.log('timeupdate')
        // console.log(res)
        this.audio.currentTime = res.target.currentTime
        this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      },
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        this.audio.waiting = false
        this.audio.maxTime = parseInt(res.target.duration)
      },
      audioStop(){
        this.audio.currentTime = 0
        this.$refs.audio.currentTime = 0
        this.$refs.audio.pause()
        this.audio.playing = false
      }
    },
    filters: {
      formatSecond(second = 0) {
        return realFormatSecond(second)
      },
      transPlayPause(value) {
        return value ? 'pause' : 'play'
      },
      transMutedOrNot(value) {
        return value ? '放音' : '静音'
      },
      transSpeed(value) {
        return '快进: x' + value
      }
    },
    created() {
      this.setControlList()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .main-wrap{
    background-color: #eee;
    background-image: linear-gradient(to bottom,#f4f4f4,#d3d3d3);
    border-radius: 5px;
    margin: 0 auto;
    width: 380px;
    span{
      color:#333;
    }
    .slider-w{
      width:330px;
      margin: 10px auto;
    }
    .vol{
      overflow: hidden;
      padding-right: 10px;
      margin-left: 30px;
      .vol-btns{
        float: left;
        .volume{
          margin-top: 12px;
        }
      }
    }
    .el-slider__runway{
      margin:4px 0; background-color: #ccc;
    }
    .btns{
      float: left;
    }
    .time{
      margin-top: 6px;
      i{
        margin: 0 10px 0 10px;
      }
    }
  }
  .slider {
    display: inline-block;
    position: relative;
    top: 7px;
  }
  .current-slider{
    width: 320px;
  }
  .volume-slider{
    width:70px;
  }
  .download {
    color: #409EFF;
  }
  .dn{
    display: none;
  }
  .play{
    background: url('../../assets/images/audio.btns.png') ;
    background-position: -41px -42px;
    vertical-align: text-bottom;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius:100%;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
  }
  .pause{
    background: url('../../assets/images/audio.btns.png');
    background-position: -41px 0px;
    vertical-align: text-bottom;
    display: inline-block;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
  }
  .silence{
    background: url('../../assets/images/audio.btns.png');
    background-position: -280px -176px;
    vertical-align: text-bottom;
    display: inline-block;
    width: 27px;
    height: 27px;
  }
  .volume{
    background: url('../../assets/images/audio.btns.png') ;
    background-position: 0px -170px;
    vertical-align: text-bottom;
    display: inline-block;
    width: 18px;
    height: 15px;
  }
  .stop{
    background: url('../../assets/images/audio.btns.png');
    background-position: -29px -83px;
    vertical-align: text-bottom;
    border-radius: 100%;
    cursor: pointer;
    margin: 6px 10px;
    width: 28px;
    height: 28px;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
  }
</style>
