<template>
  <div class="tax-box">
    <div class="title">
      <span></span>
      <font>土地增值税</font>
      <a>更多>></a>
    </div>
    <div class="tax-container">
      <div class="side-ad"></div>
      <div class="video-boxes">
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
          <p class="video-title"><a>税收筹划案例精解-3</a><span class="free">免费</span></p>
          <p class="buss-info"><span class="person-current"><font>31</font>人在学</span><span class="classes">课时</span><font>25</font><span>MIN</span><a class="play"></a></p>
        </div>
        <div class="item">
          <div><a class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></a></div>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .tax-box{
    margin-top: 30px;
  }
  .title{
    width: $width;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid $rice;
    span{
      padding: 2px 19px;
      margin-right: 10px;
      background-image: url('../../assets/images/Sprite.png');
      background-repeat: no-repeat;
      background-position: 12px -49px;
    }
    font{
      font-size: 18px;
      font-weight: 450;
    }
    a{
      font-size: 14px;
      position: absolute;
      right: 0
    }
  }
  .tax-container{
    display: flex;
    flex-direction: row;
    width: $width;
    margin: auto;
    .side-ad{
      width: 259px;
      height: 506px;
      background-image: url('../../assets/images/九鼎财税01_07.png');
      background-size: 100% auto;
      background-repeat: no-repeat;
      margin-right: 20px;
    }
    .video-boxes{
      width: 821px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .video-cover{
        position: relative;
      }
      .item{
        border: 1px solid $red;
        padding: 5px 10px;
        margin-bottom: 10px;
        position: relative;
        .new{
          padding: 2px 4px;
          background-color: $red;
          color: $white;
          font-size: 10px;
          position: absolute;
          right: 0;
          bottom: 4px;
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
          padding: 14px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: 0 472px;
          position: relative;
          left: 50px;
          top: 10px;
        }
      }
    }
  }
</style>
