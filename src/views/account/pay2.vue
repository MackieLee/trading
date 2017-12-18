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
	         <p class="p">订单提交成功  订单号： 35873707168</p>
	          <p>限时购买、请于24小时完成付款</p>
    		</li>
    		<li class="li02">
    			产品类型<span>专题课</span>
    		</li>
    		<li class="li03">
    			总金额(元)<span>￥2,800.00</span>
    		</li>
    	</ul>
    	<ul class="ul03">
    		<li class="li01">支付宝支付</li>
    		<li class="li02">
    		<p>
    		<img data-v-c0be5632="" src="/static/img/订阅号.e8ca73d.png" width="240">
    		<span>打开微信，用微信扫一扫即可付款。</span></p>
    		<img src="../../assets/images/ddzf7.png">
    		</li>   
    		<router-link tag="li" style="cursor:pointer;" :to="{ name: 'pay1'}" class="li01">其他付款方式></router-link>
    	</ul>      
      <div class="btn">
      	 <router-link tag="div" :to="{name:'payok'}" class="a" >立即支付</router-link>
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
    .li01{background: url(../../assets/images/ddzf1.png) no-repeat right top #e7141a;
    color: #fff;
    i{background: url(../../assets/images/ddzf3.png) no-repeat center center;}}
    .li02{background: url(../../assets/images/ddzf.png) no-repeat right top #e7141a;
    color: #fff;
    i{background: url(../../assets/images/ddzf3.png) no-repeat center center;}}   
    .li03{
    	i{background: url(../../assets/images/ddzf5.png) no-repeat center center;}} 
  	}	
		.ul02{ margin:30px 0;background: #e5e5e5;overflow: hidden;
		li{float: left;width: 15%;margin: 20px 0 20px 10px;font-size: 14px;line-height: 40px;
		span{margin-right: 60px; display: block; color: #000;}
		p{font-size: 14px;float: left; width: 60%;line-height: 40px;}
		}
		.li01{width:55%;padding-left: 40px;
	 .p{color: #000;font-size: 16px;}
		}
		.li03{
	   span{color: #E7141A;font-size: 18px;}}
		}
	.ul03{ border: 1px #ddd solid; padding: 20px 30px;
		.li02{overflow: hidden; padding: 0px 30px;
		p{margin-right: 50px;float: left;font-size: 14px;width: 300px;height: 300px; padding-top: 20px;
		span{margin-top: 40px;}}
		img{float: left; margin: 0 30px;}
			}
	   .li01{font-size: 18px; text-align: left;} 
		li{font-size: 14px;width: 90%;text-align: center;}
		
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
