<template>
  <div class="pay">
    <div class="container">
    	<ul class="ul01">
    		<li class="li01"><i></i>提交订单</li>
    		<li class="li02"><i></i>确认订单</li>
    		<li class="li03"><i></i>完成订单</li>
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
      
      <div class="btn">
      	 <router-link tag="div" :to="{name:'pay1'}" class="a" >立即购买</router-link>
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
    .li01{background: url(../../assets/images/ddzf.png) no-repeat right top #e7141a;
    color: #fff;
    i{background: url(../../assets/images/ddzf3.png) no-repeat center center;}}
    .li02{background: url(../../assets/images/ddzf2.png) no-repeat right top #e5e5e5;
    i{background: url(../../assets/images/ddzf4.png) no-repeat center center;}}   
    .li03{i{background: url(../../assets/images/ddzf5.png) no-repeat center center;}} 
  	}
		.ul02{ margin:30px 0;background: #f0f0f0;overflow: hidden;
		li{float: left;width: 15%; font-size: 14px;line-height: 40px;margin: 20px 0 20px 10px;
		span{margin-right: 60px; display: block;  color: #000;}
		p{font-size: 14px;float: left; width: 60%;line-height: 40px;}
		}
		.li01{width: 60%;
		img{height: 80px;width: 110px;float: left; margin-right: 10px;}
		}
		}
		.ul03{
			li{font-size: 14px;background: #f0f0f0;line-height: 34px; height: 34px;width: 100%;text-align: right;
			span{
				font-size: 18px; color: #E7141A;margin-right:20px;
			}}
		}
		.btn{width: 100%;text-align: right;overflow: hidden;}
	 .a:hover{background: #E7141A;}
   .a{
   	outline: none;border: none;
  	height: 34px; float: right; margin: 30px 20px;
    width:90px;
    padding: 0 10px;
    background: #f84141;
    color: #fff;
    font-size: 14px;
    display: block;
    border-radius: 3px;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
  }
  	
  	
   }

       
}
</style>
