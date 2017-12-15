<template>
  <div id="app">
    <div class="toolbar-tabs">
      <div class="bar bar-1" @mouseenter = "qrCode = true" @mouseleave = "qrCode = false"></div>
      <div class="bar bar-2">
        <a class="to-top" href="#app"></a>
      </div>
      <div @click="openKefu" class="bar bar-3"></div>
      <div class="app-qr-code" v-if="qrCode" @mouseenter = "qrCode = true" @mouseleave = "qrCode = false">
        <div class="app-code code1">
          <p>订阅号</p>
          <p><img src="./assets/images/订阅号.png" width="97" /></p>
        </div>
        <div class="app-code code2">
          <p>订阅号</p>
          <p><img src="./assets/images/订阅号.png" width="97" /></p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { store } from "vuex";
export default {
  name: "app",
  data() {
    return {
      qrCode:false
    };
  },
  mounted: function() {},
  created() {},
  methods: {
    openKefu: () => {
      window.KF5SupportBoxAPI.ready(function() {
        // 打开组件弹出层
        window.KF5SupportBoxAPI.open(function() {
          // 动画完成后执行的回调函数
          // .........
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style/base-conf.scss";
#app {
  li {
    display: inline-block;
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
  .toolbar-tabs {
    position: fixed;
    right: 0;
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
      background-image: url("./assets/images/sprite02.png");
      color: #fff;
      text-align: center;
      margin-bottom: 2px;
    }
    .bar-1 {
      background-position: -120px -440px;
      &:hover {
        background-position: -120px -500px;
      }
    }
    .bar-2 {
      background-position: -240px -440px;
      &:hover {
        background-position: -240px -500px;
      }
    }
    .bar-3 {
      background-position: -60px -440px;
      &:hover {
        background-position: -60px -500px;
      }
    }
    .app-qr-code {
      position: absolute;
      right: 34px;
      top: -34px;
      width: 210px;
      p {
        color: #333;
        text-align: center;
        margin-bottom: 10px;
      }
      .app-code {
        float: left;
      }
    }
  }
}
</style>
