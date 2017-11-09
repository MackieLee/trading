<template>
  <div class="online">
      <div class="video-boxes">
        <div class="item">
          <div><router-link :to="{ name:'video'}" class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></router-link></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <i></i><p class="buss-info"><span class="person-current"><i></i><font>1500</font>人</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_12.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_14.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_23.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_25.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'online'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.online{
  width: $width;
  margin: 0 auto;
  margin-top: 20px;
  .video-boxes{
    overflow: hidden;
    .video-cover{
      position: relative;
    }
      .item{
        border: 1px solid $border-red;
        padding: 5px 10px 24px 10px;
        float: left;
        margin:0 13px 18px 13px;
        position: relative;
        .new{
          padding: 2px 4px;
          background-color: $red;
          color: $white;
          font-size: 10px;
          position: absolute;
          right: 0;
          bottom: 3px;
        }
        .video-title{
          margin:15px 0;
          .free{
            padding: 2px 5px;
            background-color: $red;
            color: $white;
            font-size: 12px;
            border-radius: 5px;
            position: absolute;
            right: 15px;
          }
        }
        .buss-info{
          font-size: 12px;
          margin-right: 10px;
          span{
            margin-right: 10px;
          }
        }
        .play{
          display: inline-block;
          height: 20px;
          width:20px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: -20px -13px;
          position: relative;
          left: 54px;
          top: 8px;
        }
      }
  }
}
</style>
