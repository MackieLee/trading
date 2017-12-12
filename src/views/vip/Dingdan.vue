<template>
  <div class="my_order_r">
    <h2>我的订单</h2>
    <ul class="ul01">
      <li @click="toggle()" class="li01" data-ref="1">所有订单</li>
      <li @click="toggle()" data-ref="2">待付款(1)</li>
      <li @click="toggle()" data-ref="3"> 已完成</li>
      <li @click="toggle()" data-ref="4"> 待评价(5)</li>
    </ul>
    <ul class="ul02">
      <li class="li01">报名信息 </li>
      <li class="li02">单价</li>
      <li class="li03">类型</li>
      <li class="li04">实付款</li>
      <li class="li05">交易状态</li>
      <li class="li06">操作</li>
    </ul>
   <div class="container" v-if="part=='1'">
   	<div class="item">
        <p class="p01">订单号: 53196839876687913<i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">等待付款</span>
          <p class="jindu">订单详情 </p>
         </li>
         <li class="li06">
         	<span class="zcgm">付款</span>
          <p class="jindu">取消订单 </p>
         </li>
        </ul>
      </div>
   	  <div class="item">
        <p class="p01">订单号: 53196839876687913<i>2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">已取消</span>
          <p class="jindu">订单详情 </p>
         </li>
         <li class="li06">
         	<span class="zcgm">立即购买</span>
          <p class="jindu"> </p>
         </li>
        </ul>
      </div>
   	  <div class="item">
        <p class="p01">订单号: 53196839876687913<i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">已付款</span>
          <p class="jindu">订单详情 </p>
         </li>
         <li class="li06">
         	<span class="zcgm">立即购买</span>
          <p class="jindu">立即评价</p>
         </li>
        </ul>
      </div>
   </div>
   <div class="container" v-if="part=='2'"></div>
    <div class="container" v-if="part=='3'"></div>
    <div class="container" v-if="part=='4'"></div>

    <div class="number">
      <a>1</a>
      <a>2</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "dingdan",
  data() {
    return {
      num1: false,
      num2: false,
      num3: false,
      all: false,
      part: "1"
    };
  },
  methods: {
    toggle() {
      document.getElementsByClassName("li01")[0].className = "";
      let attr = event.target.getAttribute("class");
      if (attr != "ul01") {
        event.target.setAttribute("class", "li01");
      }
      let ref = event.target.dataset.ref;
      this.part = ref;
    },
    change: function() {
      let ref = event.target.dataset.ref;
      if (ref === "all") {
        if (this.num1 == this.num2 && this.num2 == this.num3) {
          this.num1 = !this.num1;
          this.num2 = !this.num2;
          this.num3 = !this.num3;
          this.all = !this.all;
        } else {
          this.num1 = true;
          this.num2 = true;
          this.num3 = true;
          this.all = true;
        }
      } else if (ref === "0") {
        this.num1 = !this.num1;
      } else if (ref === "1") {
        this.num2 = !this.num2;
      } else {
        this.num3 = !this.num3;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_order_r {
  height: auto;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}
.my_order_r h2 {
  widows: 100%;
  background: $bg-blue;
  height: 40px;
  font-weight: normal;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: $white;
}

.my_order_r .ul01 {
  height: 20px;
  width: 100%;
  border-bottom: 1px solid $red;
  padding-top: 10px;
}

.my_order_r .ul01 li {
  width: 100px;
  text-align: center;
  border-right: 1.5px solid #999;
  color: $black;
  float: left;
  cursor: pointer;
}
.my_order_r .ul01 .li01 {
  color: $red;
}
.my_order_r .ul02 {
  height: 36px;
  width: 100%;
  background: #ddd;
  margin: 14px 0;
  li {
    width: 12%;
    text-align: center;
    font-size: 14px;
    color: #333;
    float: left;
    line-height: 36px;
  }
  .li01 {
    width: 46%;
  }
  .li02 {
    width: 11%;
  }
  .li03 {
    width: 8%;
  }
  .li05 {
    width: 10%;
  }
}
/*   */
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
        width: 44%;
        img {
          float: left;
          width: 92px;
          padding: 5px;
          height: 62px;
          border: 1px solid #ddd;
        }
        span {
          width: 56%;
          line-height: 30px;
          float: left;
          font-size: 14px;
          margin: 5px 10px 0;
          display: block;
          span {
            display: block;
            font-weight: normal;
          }
        }
      }
      .li02,
      .li03,
      .li04 {
        width: 8%;
        line-height: 80px;
        text-align: center;
      }
      .li03 {
        width: 6%;
      }
      .li05 {
        line-height: 30px;
        text-align: center;
        width: 8%;
        .zcgm {
          display: block;
          margin: 10px 0;
          color: #e7141a;
        }
        .jindu {
          color: $light-blue;
        }
      }
      .li06 {
        border: 0 none;
        .zcgm {
          display: block;
          margin: 5px 0 15px;
          color: #fff;
          width: 80px;
          text-align: center;
          border-radius: 3px;
          height: 30px;
          line-height: 30px;
          background-color: #f84141;
          cursor: pointer;
        }
        span:hover {
          background-color: #e7141a;
        }
        .jindu {
          color: $light-blue;
          text-indent: 1em;
        }
      }
    }
  }
}
</style>
