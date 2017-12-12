<template>
  <div class="pay">
    <div class="container">
    	<ul class="ul01">
    		<li class="li01"><i></i>提交订单</li>
    		<li class="li02"><i></i>确认订单</li>
    		<li class="li03"><i></i>完成订单</li>
    	</ul>

  		<ul class="ul02">
    		<li>订单支付成功！感谢您选择九鼎财税的课程，赶快开始您的自身升值之旅吧！
点击 <span>查看订单</span> 浏览您的订单详情</li>
	</ul>         
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.pay {
  width: $width;
  margin: 0 auto;
  padding-top: 40px;
  .container {width:80%; margin: 0 auto;
  	.ul01{overflow: hidden;
  		li{float: left; 
    height: 34px;
    text-align: center;
    font-family: Microsoft YaHei;
    font-size: 16px;
    line-height: 34px;
    color: #333;
    background: #e5e5e5;width:33.33%;
    i{ height: 21px;width: 21px; display: inline-block; vertical-align: text-bottom;
    margin-right:5px;} 	
    }
     .li01{background: url(../../assets/images/ddzf1.png) no-repeat right top #e7141a;
    color: #fff;
    i{background: url(../../assets/images/ddzf3.png) no-repeat center center;}}
    .li02{background: url(../../assets/images/ddzf1.png) no-repeat right top #e7141a;
    color: #fff;
    i{background: url(../../assets/images/ddzf3.png) no-repeat center center;}}   
    .li03{background: #e7141a;color: #fff;
    	i{background: url(../../assets/images/ddzf5.png) no-repeat center center;}} 
  	}	
		.ul02{ margin:30px 0;background: #e5e5e5;overflow: hidden;
		li{float: left; font-size: 14px;line-height: 40px;margin: 20px 0 20px 10px;
		text-align: center;width: 100%;
		span{font-size: 14px;color: #468ee3;}
		}
}
 }       
}
</style>
