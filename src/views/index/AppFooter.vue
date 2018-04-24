<template>
  <div class="app-footer">
    <div class="container">
      <div>
        <p class="bread">
          <router-link to="/about/abt">公司简介</router-link>/
          <a>网站地图</a>/
          <a>意见反馈</a>/
          <a>招贤纳士</a>
        </p>
        <p class="com_name">
          神州九鼎财税咨询(北京)有限公司 简称“九鼎财税”
        </p>
        <p class="co">
          联系电话: 010-6231-136 (周一至周五8:30-6:00)  邮箱: jdtax@jdtax.cn
        </p>
        <p class="co">
          北京: 北京市海淀区志新东路5号鸿基实业酒店A座5层 邮政编码: 100083
        </p>
      </div>
      <div>
        <div class="inline-block">
          <p>订阅号</p>
          <img src="../../assets/images/订阅号.jpg" width="97" />
        </div>
        <div class="inline-block">
          <p>服务号</p>
          <img src="../../assets/images/服务号.jpg" width="97" />
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="foot-bottom">
      <p class="flex">
        <span>京ICP备17044904号-1</span><span>诚信网站</span><span>可信网站</span><span>实名网站认证</span><span>安全联盟认证</span><span>北京市互联网举报中心</span><span>网络社会证信网</span><span>北京工商</span><span>京公网安备88888888号</span>
      </p>
      <p class="center">
        Copyright  2016-2017 九鼎财税, All Rights Reserved
      </p>
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
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 30px 10px;
  .container{
    display: flex;
    width: 1090px;
    margin: 0 auto;
    justify-content: space-between;
    .inline-block{
      display: inline-block;
      margin-right: 30px;
      p{
        text-align: center;
        font-size: 16px;
      }
      img{
        margin-top: 25px;
      }
    }
    .bread{
      font-size: 16px;
      a{
        color: #000;
      }
    }
    .com_name{
      font-size: 14px;
      margin-top: 45px;
      margin-bottom: 10px;
    }
    .co{
      line-height: 2rem;
      font-size: 13px;
    }
  }
  .separator{
    height: 1px;
    border-top: 1px solid silver;
    margin: 15px 0;
  }
  .foot-bottom{
    width: 1090px;
    margin: auto;
    p.flex{
      display: flex;
      justify-content: space-around;
      span{
        line-height: 2rem;
      }
    }
    p.center{
      text-align: center;
    }
  }
}
</style>
