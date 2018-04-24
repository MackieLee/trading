<template>
  <div id="app">
    <div class="toolbar-tabs">
      <router-link tag="div" :to="{ name: 'shopping-cart'}" class="bar bar-1"></router-link>
      <div @click="kefu = true" class="bar bar-2"></div>
      <router-link tag="div" :to="{ name: 'customize'}" class="bar bar-3"></router-link>
      <div class="bar bar-4" @mouseenter = "qrCode = true" @mouseleave = "qrCode = false"></div>
      <div class="bar bar-5">
        <a class="to-top" href="#app"></a>
      </div>
      <!-- qr-code -->
      <div class="app-qr-code" v-if="qrCode" @mouseenter = "qrCode = true" @mouseleave = "qrCode = false">
        <div style="border:1px solid #ddd;overflow:hidden;float:left;">
          <div class="app-code code1">
            <p>订阅号</p>
            <p><img src="./assets/images/订阅号.jpg" width="97" /></p>
          </div>
          <div class="app-code code2">
            <p>订阅号</p>
            <p><img src="./assets/images/服务号.jpg" width="97" /></p>
          </div>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="lianxifangshi" v-if="kefu" @mouseenter = "kefu = true" @mouseleave = "kefu = false">
        <div class="content">
          <p class="title">客户服务</p>
          <p><i></i>010-62311360</p>
          <p><i></i>jdtax@jdtax.cn</p>
          <div @click="openKefu" class="kf">
            在线客服
          </div>
        </div>
      </div>
    </div>
    <img @click="openKefu" class="kefu-gif" src="./assets/images/kefu.gif" />
    <router-view></router-view>
  </div>
</template>

<script>
var kf = require('./util/kf')
import { store } from "vuex";
export default {
  name: "app",
  data() {
    return {
      qrCode: false,
      kefu: false
    };
  },
  beforeCreate () {
    this.$Spin.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            'class': 'demo-spin-icon-load',
            props: {
              type: 'load-c',
              size: 18
            }
          }),
          h('div', 'Loading')
        ])
      }
    })
    setTimeout(() => {
      this.$Spin.hide()
    }, 1000)
  },
  mounted: function() {},
  created() {},
  methods: {
    openKefu:()=>{
      kf.openKefu()
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style/base-conf.scss";
#app {
  height: 100%;
  li {
    display: inline-block;
  }
  .amap-box {
    width: 500px;
    height: 500px;
  }
  min-width: 1100px;
  .modal {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
  }
  .kefu-gif {
    position: fixed;
    right: 40px;
    top: 100px;
    width: 70px;
    z-index: 500;
    cursor: pointer;
  }
  .toolbar-tabs {
    position: fixed;
    right: 40px;
    top: 40%;
    z-index: 1500;
    .to-top {
      display: block;
      height: 100%;
      width: 100%;
    }
    .bar {
      height: 40px;
      width: 40px;
      cursor: pointer;
      background-image: url("./assets/images/Sprite.png");
      color: #fff;
      text-align: center;
      margin-bottom: 2px;
    }
    .bar-1 {
      background-position: -19px -431px;
      &:hover {
        background-position: -290px -431px;
      }
    }
    .bar-2 {
      background-position: -75px -431px;
      &:hover {
        background-position: -345px -431px;
      }
    }
    .bar-3 {
      background-position: -129px -431px;
      &:hover {
        background-position: -400px -431px;
      }
    }
    .bar-4 {
      background-position: -186px -431px;
      &:hover {
        background-position: -451px -431px;
      }
    }
    .bar-5 {
      background-position: -240px -431px;
      &:hover {
        background-position: -505px -431px;
      }
    }
    .app-qr-code {
      position: absolute;
      right: 34px;
      bottom: -34px;
      width: 300px;
      p {
        color: #333;
        text-align: center;
        margin-bottom: 10px;
      }
      .app-code {
        float: left;
        padding: 20px;
        background-color: #fff;
        box-shadow: 2px 2px 8px #ddd;
      }
    }
    .lianxifangshi {
      position: absolute;
      right: 50px;
      bottom: 17px;
      width: 170px;
      box-shadow: 2px 2px 8px #ddd;
      .content {
        border: 1px solid #ddd;
        box-sizing: border-box;
        border-bottom: none;
        padding-top: 10px;
        background-color: #fff;
        p {
          text-align: center;
          line-height: 30px;
          color: #468ee3;
        }
        p[class="title"] {
          color: #333;
        }
        .kf {
          background-color: #468ee3;
          color: #fff;
          margin-top: 10px;
          line-height: 40px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }

}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
.s_spin{
  position:absolute;
  top:0;
  background-color: rgba(255,255,255,0.6);
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
