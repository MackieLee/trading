<template>
  <div class="tax-box-sed">
    <div class="title">
      <span></span>
      <font>个人所得税</font>
      <a>更多>></a>
    </div>
    <div class="tax-container">
      <div class="side-ad"></div>
      <div class="video-boxes">
        <div class="item" v-for="item in classes" :key="item.title" title="zhe s sssss">
          <div><router-link :to="{name:'video'}" class="video-cover"><img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></router-link></div>
          <p class="video-title"><a>{{ item.title }}</a></p>
          <p class="buss-info"><span class="score"><i></i><font>{{ item.score }}</font>分</span><span class="person-current"><i></i><font>{{ item.person }}</font>人</span><span class="classes">课时</span><font>{{ item.class }}</font><span>MIN</span></p>
          <p class="price"><span>课程:<font class="rd">￥{{ item.price }}</font></span><span class="free">试 听</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        {
          title: "税收筹划案例精解-3",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        },
        {
          title: "税收筹划案例精解-4",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        },
        {
          title: "税收筹划案例精解-5",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        },
        {
          title: "税收筹划案例精解-6",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        },
        {
          title: "税收筹划案例精解-3",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        },
        {
          title: "税收筹划案例精解-3",
          link: "video",
          src: "../../assets/images/九鼎财税01_10.png",
          score: "100",
          class: "25",
          person: "1500",
          price: "1000"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.tax-box-sed {
  margin: 30px 0;
}
.title {
  width: $width;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid $red;
  span {
    padding: 6px 14px;
    margin-right: 10px;
    background-image: url("../../assets/images/Sprite.png");
    background-repeat: no-repeat;
    background-position: -13px -166px;
  }
  font {
    font-size: 18px;
    font-weight: 450;
    display: inline-block;
    padding-left: 5px;
  }
  a {
    font-size: 14px;
    position: absolute;
    right: 0;
  }
}
.tax-container {
  display: flex;
  flex-direction: row;
  width: $width;
  margin: auto;
  .side-ad {
    width: 259px;
    height: 506px;
    background-image: url("../../assets/images/九鼎财税01_07.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .video-boxes {
    width: 821px;
    overflow: hidden;
    i {
      background-image: url("../../assets/images/Sprite.png");
    }
    .rd {
      color: $red;
    }
    .video-cover {
      position: relative;
    }
    .item {
      border: 1px solid $border-red;
      padding: 5px 10px 10px 10px;
      float: left;
      margin: 0 13px 18px 13px;
      position: relative;
      &:hover {
        box-shadow: 1px 1px 4px 5px #eee;
      }
      .new {
        padding: 2px 4px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 0;
        bottom: 3px;
      }
      .video-title {
        margin: 5px 0;
        font-size: 14px;
      }
      .buss-info {
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 10px;
        span {
          margin-right: 10px;
        }
        .score i {
          display: inline-block;
          height: 20px;
          width: 20px;
          background-position: -240px -287px;
          vertical-align: text-bottom;
        }
        .person-current i {
          display: inline-block;
          height: 20px;
          width: 20px;
          background-position: -346px -285px;
          vertical-align: text-bottom;
        }
      }
      .price {
        .free {
          padding: 2px 15px;
          background-color: $red;
          color: $white;
          font-size: 12px;
          position: absolute;
          right: 15px;
          cursor: pointer;
        }
        font {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
