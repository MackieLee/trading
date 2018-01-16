<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;新手指南</p>
    </div>
  <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <!-- .............................. -->
          <span @click="cur = true" :class="{'cur-active' : cur}">课程说明</span>
          <span @click="cur = false" :class="{'cur-active' : !cur}">答疑说明</span>
        </h2>
        <div class="bofang" v-if="cur">
          <P>
          	<h3>播放说明</h3>非常抱歉，由于版权问题，我们每节视频目前只支持在线观看三次。
		      </P>
		      <P>
         <h3>购买课程流程</h3>
         【官网购买】<br><font>1、</font>登录网站首页，点击登录按钮，在登录页面键入您的会员账号、密码及验证码后。<br>
          <font>2、</font>如未注册，先注册，填写个人信息后，同意协议，提交完成注册。<br>
          <font>3、</font>进入官网后可浏览课程，线上课程购买主要有：系列和小节购买<br>
          <font>4、</font>浏览线上课程，可选择点击立即购买和加入购物车。<br>
        		 【立即购买】<br>
          <font>5、</font>立即购买进入订单页面，点击下一步 
          选择常用付款方式，如需开发票请点开申请发票，填写发票信息  <br>
          <font>*注</font> 线上课程发票内容可选择培训费或明细<br>
         如未注册，先注册，填写个人信息后，同意协议，提交完成注册。<br>
          <font>6、</font>选择支付方式。<br>
         <font>7、</font>再次核对商品信息。<br>
         <font>8、</font>可使用优惠券、现金券、邀请码、现金账户余额支付。可根据您的个人情况选择。。<br>
         <font>9、</font>确认支付信息，点击提交订单，订单提交成功。<br>
         <font>10、</font>选择支付方式去付款。<br>
  			   【加入购物车】<br>
          <font>11、</font>加入购物车，进入购物车界面，确认订单无误后，点击“去结算”或点击“返回继续购买”继续添加商品<br>                  
                     【购买成功】<br>
          <font>12、</font>购买成功后，可在会员中心——我的学习,学习购买的课程。<br>
                     如了解详情可以<a href="###" class="a">咨询客服</a>或拨打官网电话010-6231-1360  
         </P>
        </div>
        <div v-else class="bofang">    
          <P>
          	 <h3>答疑说明</h3>
		              本网站支持每个会员向专家提问。
		      </P>
		      <P>
		      <h3>在线提问</h3>
		     	  【官方提问】<br>
		     <font>1、</font>登录网站首页，点击登录按钮，在登录页面键入您的会员账号、密码及验证码后。<br>
          <font>2、</font>如未注册，先注册，填写个人信息后，同意协议，提交完成注册。<br>
		      <font>3、</font>登录网站，进入问答页面，点击我要提问或进入专家个人详情页面，都可提问。 <br>
		      <font>4、</font>点击“我要提问”，描述你的问题，可选择“指定老师回答”和勾选“超过24h自动转为专家团”回答。 <br>
          <font>5、</font>指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待。<br>
          <font>6、</font>描述完点击提交即可，你的问题会在第一时间得到解答。<br>
          <font>7、</font> 提问成功后，系统会提示您“提交成功”。<br>
          <font>8、</font> 提交成功后，可在会员中心——我的问答,查看提交的问题。<br>
          <font>9、</font> 也查看老师给您的回复，如未解决您的问题，点击“查看更多”，
          		即可查看该知识点下的全部答疑内容；您也可以拨打官方电话咨询010-6231-1360<br>
         </P>
        
     
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  name: "odetail",
  data() {
    return {
      showShare: false,
      cur:true,
      cur01:false,
    };
  },
  methods: {
    share: function() {
      this.showShare = !this.showShare;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.about {
  width: $width;
  margin: 0 auto;
  .bold-title{
     font-size: 16px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
    margin-top: 26px;
/*课程说明*/
#xxkc_xq02 {
  width: 100%;
  height: auto;
  margin-top: 20px;
  overflow: hidden;
  // .xq02_r {
  //   width: 45%;
  //   float: right;
  // }
  // .xq02_l {
  //   width: 100%;
  //   float: left;
  // }
  h2 {
    width: 100%;
    height: 32px;
    margin-bottom: 15px;
    border-bottom: 1px solid $red;
    span {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      font-weight: normal;
      font-size: 14px;
      cursor: pointer;
    }
    .cur-active{
      background-color: $red;
      color: $white;
    }
  }
  .txt {
    padding-top: 20px;
    text-indent: 2em;
  }
  .bofang{border: 1px solid #fbc081;
    margin-top: 15px;
  h3{    border-bottom: 2px solid #e5e5e5;
    height: 26px;font-size: 14px;
    border-left: 2px solid #ff2832;
    padding: 0 30px 0 6px;}
    p {
 overflow: hidden;
   width:100%; line-height: 32px;
    font-size: 14px;
    padding: 15px 18px 20px; 
    color: #656565;
		font,.a{color: #4683ee;}

  }
  }
}
   
      }
   
</style>
