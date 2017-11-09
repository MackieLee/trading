<!--
<template>
    <div class="vue-sound-wrapper">
        <div class="vue-sound__player">
            <div class="btn-group btn-group-xs" role="group">
                <a @click="stop()" title="Stop" class="btn btn-default"><i class="icon-white glyphicon glyphicon-stop"></i></a>
                <a @click="play()" title="Play" v-bind:class="playStyle"><i class="icon-white glyphicon glyphicon-play"></i></a>
                <a @click="pause()" title="Pause" v-bind:class="pauseStyle"><i class="icon-white glyphicon glyphicon-pause"></i></a>
                <a v-on:click="setPosition" class="btn btn-default vue-sound__playback-time-wrapper" title="Time played : Total time">
                    <div v-bind:style="progressStyle" class="vue-sound__playback-time-indicator"></div>
                    <span class="vue-sound__playback-time-current">{{currentTime}}</span>
                    <span class="vue-sound__playback-time-separator"></span>
                    <span class="vue-sound__playback-time-total">{{duration}}</span>
                </a>
                <a @click="download()" class="btn btn-default"><i class="glyphicon glyphicon-floppy-disk"></i></a>
                <a @click="mute()" v-bind:class="mutedStyle" title="Mute"><i class="icon-white glyphicon glyphicon-volume-off"></i></a>
                <a v-on:mouseover="toggleVolume()" class="btn btn-default" title="Volume"><i class="icon-white glyphicon glyphicon-equalizer"></i></a>
            </div>
            <input orient="vertical" v-model.lazy="volumeValue" v-on:change="updateVolume()" v-show="hideVolumeSlider" type="range" min="0" max="100" class="volume-slider"/>
        </div>
        <audio v-bind:id="playerId" ref="audiofile" :src="file" preload="auto" style="display:none;"></audio>
    </div>
</template>
-->
<template>
  <div class="vue-sound-wrapper">
    <div class="audio-player">
      <!-- 时间流进度条 -->
      <div v-on:click="setPosition" class="time-bar" title="Time played : Total time">
        <div class="time-stream" v-bind:style="progressStyle"></div>
      </div>
      <!-- 按钮组 -->
      <div class="btns">
        <div class="control">
          <a class="btn play" @click="play" title="Play"></a>
          <a class="btn stop" @click="stop" title="Stop"></a>
          <a class="btn pause" @click="pause" title="Pause"></a>
        </div>
        <div class="vol">
          <i class="vol-btn dec" @click="mute"></i>
          <p class="vol-bar">
            <span class="vol-stream"></span>
          </p>
          <i class="vol-btn incr"></i>
        </div>
      </div>
    </div>
    <audio :src="file"></audio>
  </div>
</template>

<script src="../../util/vueaudio.plugin.js"></script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.audio-player {
  width: 410px;
  height: 70px;
  border-radius: 10px;
  background-color: #cbcbcb;
  margin: 0 auto;
  .time-bar {
    position: relative;
    margin: 10px 4px 4px 4px;
    background-color: #f3f3f3;
    display: inline-block;
    width: 400px;
    height: 10px;
    border-radius: 10px;
    box-shadow:inset 0 1px 2px rgba(0,0,0,.1);
    .time-stream{
      display: inline-block;
      height: 10px;
      background-color: #468EE3;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
    }
  }
  .btns{
    overflow: hidden;
    margin-left: 4px;
    .control{
      float: left;
      cursor: pointer;
      .btn{
        display: inline-block;
        height: 33px;
        width: 33px;
        background-image: url('../../assets/images/Sprite.png');
      }
      .play{
        background-position:114px -54px;
      }
      .stop{
        background-position: 111px -104px;
      }
      .pause{
        background-position: 112px -142px;
      }
    }
    .vol{
      float: right;
      margin-right: 13px;
      margin-top: 8px;
      cursor: pointer;
      .vol-btn{
        display: inline-block;
        width: 19px;
        height: 19px;
        background-image: url('../../assets/images/Sprite.png');
      }
      .dec{
        background-position: 110px 192px;
      }
      .vol-bar{
        display: inline-block;
        margin-bottom: 6px;
        width: 62px;
        height: 5px;
        background-color: $white;
        border-radius: 5px;
        box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
        position: relative;
        .vol-stream{
          display: inline-block;
          height: 5px;
          position: absolute;
          top: 0;
          left: 0;
          border-radius:5px;
          background-color: #468EE3;
        }
      }
      .incr{
        background-position: 106px 160px;
      }
    }
  }
}
</style>
