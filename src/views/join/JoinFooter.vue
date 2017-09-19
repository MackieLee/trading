<template>
  <div class="app-footer">
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
    color: #333;
    margin-top: 30px;
    a{
      color: #333;
    }
    .site-info{
      background-color: #eaeaea;
      padding: 18px 0;
      .site-info-content{
        width: $width;
        margin: auto;
        li{
          color: #333;
          font-size: 12px;
          margin: 0 10px;
        }
        p{
          color: #333;
          text-align: center;
          margin: 10px;
          font-size: 12px;
        }
      }
    }
  }
</style>
