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
		<div class="div01">
    		<strong>常用付款方式</strong>
			<ul>
				<li class="li01">
					<a class="a_cur"><img src="../../assets/images/weixin.jpg"></a>
				</li>
				<li class="li02">
					<a><img src="../../assets/images/zhifubao.jpg"></a>
				</li>
				<li class="li03">
					<a>余额</a>
				</li>
				<li class="li04">
					<a><img src="../../assets/images/zaixianzhifu.jpg"></a>
				</li>
			</ul>
		</div>
		<div class="div02">
    		<strong>购买增加</strong>
			<ul>
				<li class="li01"><img src="../../assets/images/ddzf6.png">新增地址</li>
				<li class="li02"><img src="../../assets/images/ddzf6.png">需要开发票</li>
				<li class="li03"><img src="../../assets/images/ddzf6.png">邀请码</li>
				<li class="li04"><img src="../../assets/images/ddzf6.png">积分</li>
				<li class="li05"><img src="../../assets/images/ddzf6.png">优惠卷</li>
			</ul>
		</div>
      
      <div class="btn">
      	 <router-link tag="div" :to="{name:'pay2'}" class="a" >立即付款</router-link>
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
		span{margin-right: 60px; display: block;  color: #000;}
		p{font-size: 14px;float: left; width: 60%;line-height: 40px;}
		}
		.li01{width: 60%;
		img{height: 80px;width: 110px;float: left; margin-right: 10px;}
		}
		}
	.div01{
		strong{margin: 20px 10px 10px; display: block;}
		ul{border:1px solid #ddd;overflow: hidden;
		li{width: 142px;height: 42px; margin:10px;cursor: pointer;
		padding: 10px;float: left;
		.a_cur{border: 1px solid #e7141a;}
		a{border: 1px solid #ddd;text-align: center;line-height: 42px;
    display: block;width: 100%;height: 100%;
    margin-bottom: 5px;position: relative;
    img{width: 100%;}
    }
		}}
	}
	.div02{
		strong{margin: 20px 10px 10px; display: block;}
		ul{border:1px solid #ddd; padding: 20px;
		li{cursor: pointer; width: 142px;height: 42px; line-height: 42px; display: block !important;
		img{width: 14px; vertical-align: middle; margin-right: 10px; }
		}
		}
	}
	.ul03{
		li{font-size: 14px;background: #e5e5e5;line-height: 34px; height: 34px;width: 100%;text-align: right;
		span{
			font-size: 18px; color: #E7141A;margin-right:20px;
		}}
	}
	.btn{width: 100%;text-align: right;overflow: hidden;}
 .a:hover{background: #E7141A;}
   .a{
   	outline: none;border: none;
  	height: 34px; float: right; margin: 40px 30px;
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
