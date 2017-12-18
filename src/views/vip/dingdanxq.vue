<template>
  <div class="bind-credit">
    <div class="content">
      <div class="title">订单详情</div>
      <div class="form-container">
 		<ul class="ul01">
 			<li>
 				<span class="span01">订单编号:111693313386687913</span>
 				<span class="span02">支付宝交易号:2017121221001001985371445893</span> 	
 				<span>创建时间:2017-12-12 11:35:09</span> 		
 			</li>
 			<li>
 				<span class="span01">发货时间:2017-12-12 11:35:09</span>
 				<span class="span02">付款时间:2017-12-12 11:35:09</span> 	
 				<span>成交时间:2017-12-12 11:35:09</span> 		
 			</li>	
 		</ul>
 		<ul class="ul02">
    		<li class="li01">
    			 <img src="../../assets/images/huanyuanzx02.png">
	         <p>您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</p>
    		</li>
    		<li class="li02">
    			产品类型<span>专题课</span>
    		</li>
    		<li class="li03">
    			总金额(元)<span>￥2,800.00</span>
    		</li>
    	</ul>
    	
 		<ul class="ul03"><li>总金额:<span>￥2,800.00</span></li></ul>
 		
 		<ul class="ul04">			
 			<li>
 				<h3>订单信息</h3>
 				<p>支付方式：<span>在线支付</span></p>
 				<p>商品总额：<span>￥2,800.00</span></p>
 				<p>应付金额：<span>￥2,800.00</span></p>
 			</li>
 			<li>
 				<h3>发票详情</h3>
 				<p>发票类型：<span>电子普通发票</span></p>
 				<p>发票抬头：<span>个人</span></p>
 				<p>发票内容：<span>明细</span></p>
 			</li>
 			<li class="li03">
 				<h3>个人信息</h3>
 				<p>手机号码：<span>176****1778</span></p>
 				<p>快递方式：<span>快递</span></p>
 				<p>收件人：<span>闫七七</span></p>
 			</li>
 		</ul>

		<ul class="ul05"><li>应付金额:<span>￥2,800.00</span></li></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.bind-credit {
  overflow: hidden;
}
.content {
  background-color: $white;
  margin: auto;
  .title {
    height: 40px;font-size: 16px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: $bg-blue;
    color: $white;
  }
.form-container{border: 1px #ddd solid;width:809px;
	ul{overflow: hidden;}
  .ul01{
   li{line-height:40px;width: 100%; border-bottom: 1px #ddd dashed;
  span{display: inline-block; width:25%;margin-left:15px;}
  .span02{ width:35%;} 
    }	
  }
	.ul02{ margin:30px 0;background: #e5e5e5;overflow: hidden;
	li{float: left;width: 15%; font-size: 14px;line-height: 40px;margin: 20px 0 20px 10px;
	span{margin-right: 60px; display: block;  color: #000;}
	p{font-size: 14px;float: left; width: 60%;line-height: 40px;}
	}
	.li01{width: 60%;
	img{height: 80px;width: 110px;float: left; margin-right: 10px;}
	}
	}
	.ul03{margin: 10px 0;
	li{font-size: 14px;background: #f0f0f0;line-height: 34px; height: 34px;width: 100%;text-align: right;
	span{
		font-size: 18px; color: #E7141A;margin-right:20px;
	}}
}
	.ul04{ 
		li{width:25%;float: left;margin-left:60px; border-right: 1px solid #ddd;
	  .li03{border-right:none;}
		h3{font-size: 14px; line-height:44px;padding-left: 20px;}
		p{line-height:34px; }
		span{}
		}
	}
	.ul05{margin: 10px 0;
	li{font-size: 14px;line-height: 34px; height: 34px;width: 100%;text-align: right;
	span{
		font-size: 18px; color: #E7141A;margin-right:20px;
	}}
}
  }
  
    }

</style>
