<template>
  <div class="app-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-list">
          <ul>
            <li class="title">新手指南</li>
            <li>
              <router-link :to="{ name:'home' }">购买课程</router-link>
            </li>
            <li>
              <router-link :to="{ name:'home' }">播放说明</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">使用帮助</li>
            <li>
              <router-link :to="{ name:'home' }">视频播放</router-link>
            </li>
            <li>
              <router-link :to="{ name:'home' }">打击盗版</router-link>
            </li>
          </ul>
          <ul>
            <li class="title">关于我们</li>
            <li>
              <router-link :to="{ name:'home' }">市场合作</router-link>
            </li>
            <li>
              <router-link :to="{ name:'home' }">服务条款</router-link>
            </li>
          </ul>
        </div>
        <div class="bussiness">
          <p>
            <i class="mail"></i>jdtax@jdtax.cn</p>
          <p>
            <i class="tel"></i>010-6231-1360
            <span>(周一到周五9:00-17:30)</span>
          </p>          
        </div>
      </div>
      <div class="footer-right">
        <div class="qr-code">
          <div class="code1">
            <p>订阅号</p>
            <p><img src="../../assets/images/订阅号.png" width="97" /></p>
          </div>
          <div class="code2">
            <p>订阅号</p>
            <p><img src="../../assets/images/订阅号.png" width="97" /></p>
          </div>
        </div>
      </div>
      <div class="footer-left-bottom">
        <span>友情链接:</span>
        <ul>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">九鼎财税</router-link>
          </li>
          <li>
            <router-link :to="{ name:'home' }">更多>></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-info">
      <div class="site-info-content">
        <ul>
          <li>京ICP备17044904号-1</li>
          <li>诚信网站</li>
          <li>可信网站</li>
          <li>实名网站认证</li>
          <li>安全联盟认证</li>
          <li>北京市互联网举报中心</li>
          <li>网络社会证信网</li>
          <li>北京工商</li>
          <li>京公网安备88888888号</li>
        </ul>
        <p>Copyright © 2016-2017 九鼎财税 All Rights Reserved. </p>
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
.app-footer {
  width: 100%;
  background-color: #eaeaea;
  color: #333;
  margin-top: 35px;
  a {
    color: #333;
  }
  .footer-left-bottom {
    display: flex;
    float: left;
    margin: 0px 0 26px 22px;
    li {
      margin: 0 14px;
      font-size: 14px;
    }
  }
  .footer-content {
    width: $width;
    margin: auto;
    padding-top: 24px;
    overflow: hidden;
    .footer-left {
      display: flex;
      margin-right: 36px;
      float: left;
      .footer-list {
        margin-left: 46px;
        overflow: hidden;
        .title {
          font-size: 16px;
          margin-bottom: 20px;
          color: #333;
        }
        ul {
          margin-right:70px;
          float: left;
          li {
            display: list-item !important;
            font-size: 14px;
            text-align: center;
            margin-bottom: 16px;
          }
        }
      }
      .bussiness {
        p {
          color: #333;
          margin:25px 0;
          font-size: 14px;
        }
        .mail,
        .tel {
          padding: 2px 12px;
          position: relative;
          top: 4px;
        }
        .mail {
          background-image: url('../../assets/images/Sprite.png');
          background-position: -62px -136px;
        }
        .tel {
          background-image: url('../../assets/images/Sprite.png');
          background-position: -20px -78px;
        }
        spna{
          padding-left: 32px;
        }
      }
    }
    .footer-right {
      float: left;
      .qr-code {
        display: flex;
        p {
          color: #333;
          text-align: center;
          margin-bottom: 10px;
        }
        .code1 {
          margin-right: 32px;
        }
      }
    }
  }
  .site-info {
    background-color: #eaeaea;
    padding: 18px 0;
    border-top: 1px solid #999;
    .site-info-content {
      width: $width;
      margin: auto;
      li {
        color: #333;
        font-size: 12px;
        margin: 0 10px;
      }
      p {
        color: #333;
        text-align: center;
        margin: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
