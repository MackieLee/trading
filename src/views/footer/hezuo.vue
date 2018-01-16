<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;关于我们</p>
    </div>
  <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <!-- .............................. -->
          <span @click="cur = true" :class="{'cur-active' : cur}">帮助中心</span>
          <span @click="cur = false" :class="{'cur-active' : !cur}">市场合作</span>
        </h2>
        <div class="hezuo" v-if="cur">
          <P>
          	<h3>帮助中心</h3>非常抱歉，由于版权问题，我们每节视频目前只支持在线观看三次。
		      </P>
		      <P>
        
         【官网购买】<br><font>1、</font>登录网站首页，点击登录按钮，在登录页面键入您的会员账号、密码及验证码后。<br>
          <font>2、</font>如未注册，先注册，填写个人信息后，同意协议，提交完成注册。<br>
          <font>3、</font>进入官网后可浏览课程，线上课程购买主要有：系列和小节购买<br>
          <font>4、</font>浏览线上课程，可选择点击立即购买和加入购物车。<br>
        		 【立即购买】<br>
          <font>5、</font>立即购买进入订单页面，点击下一步 
          选择常用付款方式，如需开发票请点开申请发票，填写发票信息  <br>
          <font>*注</font> 发票内容可选择培训费或明细<br>
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
        <div v-else class="hezuo">
					 <P>		 	
					 	 <h3>市场合作</h3>
					 	 【合作对象及方式】<br>
							 如果您是媒体、渠道，想洽谈资源置换、市场合作，请联系：<br>
							邮箱：jdtax@jdtax.cn）<br>
							  如果您想在九鼎财税投放广告，请联系：<br>
							   电话：010-6231-1360<br>
							   我们拥有丰富的高端客户资源。如果您也拥有丰富的资
源，而且在当地享有良好的声誉，拥有广泛的客户关系及网络。我们期望以互惠互利的原则与您携手合作，
共同开拓市场，共同打造优良品牌，为我们共同的客户提供业界优质的服务水平！
				    </P>
				    <P>
					    <h3>行业合作</h3>
					         【合作企业】<br>
							 鲁商置业股份有限公司青岛<br>
							 青岛华商置业收购银泰公司<br>
							 北京国华置业有限公司<br>
					  </P>
					  <P>
					  <h3>合作宗旨</h3>
					         【合作宗旨】<br>
我们相信联合各方资源将会使我们彼此更加强大。通过资源共享，优势互补，
我们一定能够让我们的服务更趋完善，取长补短，利益共享是我们的合作宗旨！选择优秀的合作伙伴，提升双方的社会效益。
					  </P>
					  <P>
					 <h3>其它合作</h3>
					    其它合作：如果您有其它更好的推广方式，请与我们及时沟通。
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
/*服务条款*/
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
  .hezuo{border: 1px solid #fbc081;
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
