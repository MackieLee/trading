<template>
  <div class="study">
    <div class="pt-1">
      <p class="sum_of_class">我的收藏</p>
      <div class="container">
				<p class="p-line1">商品信息</p>
        <p class="p-line2">商品类型</p>
        <p class="p-line3">操作</p>
      </div>
    </div>
    <div class="pt-2">
  <div class="container">
  	
      <div class="item">
        <p class="p01">
      		   订单号: 53196839876687913 <i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">  
          	 <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 	<span>孙炜</span>
          	 </strong>
         </li>
         <li class="li02">视频</li>
         <li class="li03">          
         	<span class="zcgm">再次购买</span>
          <p class="jindu">学习完成 </p>
         </li>
         
         
        
        </ul>
      </div>
      <div class="item">
        <p class="p01">
      		   订单号: 53196839876687913 <i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">  
          	 <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 	<span>孙炜</span>
          	 </strong>
         </li>
         <li class="li02">视频</li>
         <li class="li03">          
         	<span class="zcgm">再次购买</span>
          <p class="jindu">学习完成 </p>
         </li>
         
         
        
        </ul>
      </div>
      <div class="item">
        <p class="p01">
      		   订单号: 53196839876687913 <i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">  
          	 <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽表中隐藏的稽查陷阱藏的稽查陷
          	 	<span>孙炜</span>
          	 </strong>
         </li>
         <li class="li02">视频</li>
         <li class="li03">          
         	<span class="zcgm">再次购买</span>
          <p class="jindu">学习完成 </p>
         </li>
         
         
        
        </ul>
      </div>

  </div>
         
    </div>
    <div class="pgs">
      <li class="prev">&lt;上一页</li>
      <li class="current">1</li>
      <li class="custom">2</li>
      <li class="custom">3</li>
      <li class="custom">4</li>
      <li class="points">...</li>
      <li class="jump"><input type="tel" maxlength="3"> /40页</li>
      <li class="submit">确定</li>
      <li class="next">下一页&gt;</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "study"
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.study {
  .sum_of_class {
    background-color: $bg-blue;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: $white;
  }
  .pt-1 {
    .container {
      width: 100%;
      margin: 10px auto 15px;
      background-color: #f5f5f5;
      height: 36px;
      p {
        text-align: center;
        float: left;
        font-size: 16px;
        line-height: 36px;
      }
      .p-line1 {
        width: 68%;
      }
      .p-line2 {
        width: 15%;
      }
      .p-line3 {
        width: 15%;
      }
    }
  }
  .container {
    margin-bottom: 20px;
    .item {
      margin-bottom: 20px;
      .p01 {
        background-color: $bg-blue;
        border: none;
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        text-indent: 1em;
        color: $white;
        i {
          color: #e8e8e8;
          font-style: normal;
          padding-left: 10px;
        }
      }
      ul {
        overflow: hidden;
        border: 1px solid #ddd;
        li {
          float: left;
          border-right: 1px solid #ddd;
          height: 76px;
          padding: 10px 10px;
        }
        .li01 {
          width: 65%;
          img {
            float: left;
            width: 92px;
            padding: 5px;
            height: 62px;
            border: 1px solid #ddd;
          }
          strong {
            width: 70%;
            display: block;
            float: left;
            font-size: 14px;
            margin:2px 15px 0px; font-weight: normal;
            span {
           margin-top: 8px;font-size: 12px;
              display: block;
            }
          }
        }
        .li02 {
          width: 14%;
          line-height: 80px;
          text-align: center;
        }
        .li03 {
          border: 0 none;
          text-align: center;
          height: 30px;
          line-height: 30px;
          .zcgm {
            display: block;
            margin: 5px 0 15px;
            color: #fff;
            width: 90px;
            border-radius: 3px;
            background-color: #f84141;
            cursor: pointer;
          }
          span:hover {
            background-color: #e7141a;
          }
          .jindu {
            color: $light-blue;
          }
        }
      }
    }
  }
  .pgs {
    width: 525px;
    margin: 60px auto;
    li {
      width: 33px;
      padding: 4px 0;
      line-height: 20px;
      text-align: center;
      margin-right: 2px;
      cursor: pointer;
      border: 1px solid $border-dark;
      color: $black;
    }
    .prev {
      width: 73px;
      color: $blue;
    }
    .next {
      width: 96px;
      color: $blue;
    }
    .points {
      border: none;
    }
    .submit {
      background-color: $btn-default;
      color: $white;
      width: 44px;
      border: none;
    }
    .jump {
      width: 80px;
      border: 1px solid $border-dark;
      color: #333;
      input {
        width: 30px;
        border: 1px solid $border-dark;
        outline: none;
      }
    }
    .current {
      background-color: $btn-default;
      color: $white;
    }
  }
}
</style>
