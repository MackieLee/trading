<template>
  <div class="study">
   		<div class="pt-1">
	      <p class="sum_of_class">我的学习</p>
	  	<div class="div-1">      
	      <div class="container">
	        <div class="item item1">
	          <p class="f-line">已看</p>
	          <p>100分钟</p>
	        </div>
	        <div class="item item2">
	          <p class="f-line">今天上课</p>
	          <p>0分
	            <span>再上100分钟可获得100积分</span>
	          </p>
	        </div>
	        <div class="item item3">
	          <p class="f-line">高于平台</p>
	          <p>0%学员</p>
	        </div>
	      </div>
	    
   		</div>
   	</div> 
    
    <div class="pt-2">
      <div class="container">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>企业所得税年度纳税申报表中隐藏的稽查陷阱
藏的稽查陷</p>
          <font>孙玮</font>
        </div>
        <div class="sm-btn">
          <span>开始学习</span>
          <p class="jindu">学习进度：0% </p>
        </div>
      </div>
      <div class="container">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>企业所得税年度纳税申报表中隐藏的稽查陷阱
藏的稽查陷</p>
          <font>孙玮</font>
        </div>
        <div class="sm-btn">
          <span>开始学习</span>
          <p class="jindu">学习进度：0% </p>
        </div>
      </div>
      <div class="container">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>企业所得税年度纳税申报表中隐藏的稽查陷阱
藏的稽查陷</p>
          <font>孙玮</font>
        </div>
        <div class="sm-btn">
          <span>继续观看</span>
          <p class="jindu">学习进度：2% </p>
        </div>
      </div>
      <div class="container">
        <img src="../../assets/images/huanyuanzx02.png" />
        <div class="middle">
          <p>企业所得税年度纳税申报表中隐藏的稽查陷阱
藏的稽查陷</p>
          <font>孙玮</font>
        </div>
        <div class="sm-btn">
          <span class="zcgm">再次购买</span>
          <p class="jindu">学习完成 </p>
        </div>
      </div>
      
         
    </div>
   <div class="page">1</div>  
  </div>
</template>

<script>
export default {
  name: 'study'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.study {
  .sum_of_class {
    background-color: $bg-blue;
    border: none; height: 40px;line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: $white;
  }
  .pt-1 {
   .div-1{
  	  border: 1px solid $border-dark;
			    margin: 10px 0;
    .container {
      width: 95%;
      margin: 10px auto;
      display: flex;
      border-top: 1px solid $red;
      .item {
        margin: 20px 0 5px;
        p {
          text-align: center;
          font-size: 16px;
        }
        .f-line {
          margin-bottom: 30px;
        }
      }
      .item1 {
        border-right: 1px solid $red;
        width: 30%;
      }
      .item2 {
        border-right: 1px solid $red;
      width: 40%;
        span {
          font-size: 14px;
        }
      }
      .item3 {
      width: 30%;
      }
    }
  } }
  .pt-2 {
    padding:0px 10px;margin-top: 15px;
    border: 1px solid $border-dark;
    .container {
      width:100%;
      display: flex;    padding:10px 5px 10px;
      border-bottom: 1px solid $border-dark;
      img{
       width: 92px;
    height: 62px;
 		padding: 5px;
        border: 1px solid #ddd;
      }
      .middle{
        margin:0 10px;
        width:70%;
        p{
          font-size: 14px;
          margin:  0;
        }
        font{
          font-size: 14px;
           line-height: 36px;height: 36px;
        }
      }
      .sm-btn{
        width: 20%;margin:0 10px;
        span{
        display: block;	 height: 30px;
        line-height: 30px;
        text-align: center;
        color:#fff;width: 90px;
        border-radius: 3px;
        background-color:#f84141;cursor: pointer;
        }
         span:hover{ background-color:#e7141a; }
        
        .zcgm{
        	color:#333;
        	 border:1px solid #ddd;
        	background-color:#fff;
        	}
        	.zcgm:hover{color:#fff;
        	background-color:#e7141a;}
        .jindu{
        	line-height: 36px;height: 36px;
          color: $light-blue;    text-indent: 0.5em;
        }
      }
    }
    
    .page{
    
      }
  }
}
</style>
