<template>
  <div class="app-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-list">
          <ul>
            <li class="title">新手指南</li>
            <li><router-link :to="{ name:'home' }">如何注册</router-link></li>
            <li><router-link :to="{ name:'home' }">如何购课</router-link></li>
            <li><router-link :to="{ name:'home' }">如何支付</router-link></li>
            <li><router-link :to="{ name:'home' }">如何充值</router-link></li>
          </ul>
          <ul>
            <li class="title">使用帮助</li>
            <li><router-link :to="{ name:'home' }">退换课程</router-link></li>
            <li><router-link :to="{ name:'home' }">视频播放</router-link></li>
            <li><router-link :to="{ name:'home' }">打击盗版</router-link></li>
            <li><router-link :to="{ name:'home' }">优惠券</router-link></li>
          </ul>
          <ul>
            <li class="title">关于我们</li>
            <li><router-link :to="{ name:'home' }">关于我们</router-link></li>
            <li><router-link :to="{ name:'home' }">市场合作</router-link></li>
            <li><router-link :to="{ name:'home' }">服务条款</router-link></li>
            <li><router-link :to="{ name:'home' }">版权声明</router-link></li>
          </ul>
        </div>
        <div class="footer-left-bottom">
          <span>友情链接:</span>
          <ul>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">九鼎财税</router-link></li>
            <li><router-link :to="{ name:'home' }">更多>></router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-right">
        <div class="qr-code">
          <div class="code1">
            <p>订阅号</p>
            <p><img src="../../assets/images/订阅号.png" width="50%"/></p>
          </div>
          <div class="code2">
            <p>订阅号</p>
            <p><img src="../../assets/images/订阅号.png" width="50%"/></p>
          </div>
        </div>
        <div class="bussiness">
          <p><i class="mail"></i>liutao@jdtax.cn</p>
          <p><i class="tel"></i>010-62311360</p>
          <p class="work-day">(周一到周五08:30-18:00)</p>
        </div>
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
        <p>Copyright  © 2016-2017 九鼎财税 All Rights Reserved. </p>
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
  .app-footer{
    width: 100%;
    background-color: $black;
    color: $white;
    margin-top: 30px;
    a{
      color: $white;
    }
    .footer-content{
      width: $width;
      margin: auto;
      display: flex;
      padding-bottom: 20px;
      justify-content: space-between;
      .footer-list{
        width: 480px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        .title{
          font-size: 18px;
          margin: 30px 0;
          color: $white;
        }
        ul{
          li{
            display: list-item !important;
            font-size: 14px;
            text-align: center;
            margin-bottom: 15px;
          }
        }
      }
      .footer-left-bottom{
        display: flex;
        li{
          margin: 0 10px;
          font-size: 14px;
        }
      }
      .footer-right{
        margin:20px 120px 0 0;
        .qr-code{
          display: flex;
          p{
            color: $white;
            text-align: center;
            margin-bottom: 10px;
          }
          .code1{
            margin-right: 14px;
          }
        }
        .bussiness{
          padding-left: 12px;
          p{
            color: $white;
            margin: 10px 0;
            font-size: 14px;
          }
          .mail,.tel{
            padding: 2px 16px;
          }
          .mail{
            background-image: url('../../assets/images/Sprite.png');
            background-position: 5px 202px;
          }
          .tel{
            background-image: url('../../assets/images/Sprite.png');
            background-position: -53px 211px;
          }
          .work-day{
            padding-left: 40px;
          }
        }
      }
    }
    .site-info{
      background-color: #1B1B1B;
      padding: 18px 0;
      .site-info-content{

        width: $width;
        margin: auto;
        li{
          color: $white;
          font-size: 12px;
          margin: 0 10px;
        }
        p{
          color: $white;
          text-align: center;
          margin: 10px;
          font-size: 12px;
        }
      }
    }
  }
</style>
