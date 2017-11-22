<template>
  <div class="my_order_r">
    <h2>我的发票</h2>
    <div class="22">
      <ul class="ul02">
        <li class="li01">订单详情</li>
        <li>状态</li>
        <li>发票类型</li>
        <li>操作</li>
      </ul>
      <p class="p01">
        <!-- <i @click="change()" data-ref='0' :class="{ selected: num1}"></i> -->
        <span class="span01">2017-08-31</span><span>53196839876687913</span>
      </p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png"/><p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p></li>
        <li>已开</li>
        <li>
          <span>专用发票</span>
        </li>
        <li>申请发票</li>
      </ul>
      <p class="p01">
        <!-- <i @click="change()" data-ref='1' :class="{ selected: num2}"></i> -->
        <span class="span01">2017-08-31</span><span>53196839876687913</span>
      </p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png"/><p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p></li>
        <li>已开</li>
        <li><span>专用发票</span>
        </li>
        <li>申请发票</li>
      </ul>
      <p class="p01">
        <!-- <i @click="change()" data-ref='2' :class="{ selected: num3}"></i> -->
        <span class="span01">2017-08-31</span><span>53196839876687913</span>
      </p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png"/><p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p></li>
        <li>未开</li>
        <li><span>专用发票</span>
        </li>
        <li>申请发票</li>
      </ul>
      <ul class="ul06">
        <!-- <li class="li01">
          <i @click="change()" data-ref='all' :class="{ selected: all}"></i>
          全选 </li>
        <li>申请发票</li>
        <li class="li03"> 发票总额：0 元</li> -->
      </ul>
      <div class="number">
        <a>1</a>
        <a>2</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fapiao",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.selected {
  background-position: -101px -254px !important;
}

i {
  margin-right: 5px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}

.my_order_r {
  height: 900px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}

.my_order_r h2 {
  widows: 100%;
  background: $bg-blue;
  height:42px;
  font-weight: normal;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  border: none;
  color: $white;
}

.my_order_r .ul01 {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid $red;
}

.my_order_r .ul01 li {
  width: 128px;
  text-align: center;
  font-size: 18px;
  color: $black;
  float: left;
  padding: 20px 0 15px;
  cursor: pointer;
}

.my_order_r .ul01 .li01 {
  color: $red;
  border-left: 0 none;
}

.my_order_r .ul02 {
  height: 35px;
  width: 100%;
  background: $bgcolor;
  margin: 14px 0 ;
  .li01{
    width: 400px;
  }
}

.my_order_r .ul02 li {
  width: 120px;
  text-align: center;
  font-size: 14px;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03,
.my_order_r .ul06 {
  height: 35px;
  width: 100%;
  margin: 26px 0 20px;
}

.my_order_r .ul03 li,
.my_order_r .ul06 li {
  padding: 0 15px;
  border-radius: 3px;
  margin: 0 20px;
  border: 1px $border-blue solid;
  text-align: center;
  font-size: 14px;
  color: $blue;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03 .li01,
.my_order_r .ul06 .li01 {
  border: 0 none;
  padding: 0 15px 0 0;
}

.my_order_r .ul06 .li03 {
  color: $red;
  border: 0 none;
  padding: 0 0 0 290px;
}

.my_order_r .ul03 .li01 i,
.my_order_r .ul06 .li01 i {
  background-position: -101px -282px;
}

.my_order_r .p01 {
  width: 100%;
  background: $bg-blue;
  line-height: 31px;
  color: $white;
}

.my_order_r .p01 i {
  margin: 0 5px 0 20px;
  background-position: -101px -284px;
}

.my_order_r .p01 {
  span{
    margin-left: 30px;
  }
  span.span01{
    margin-left: 20px;
    color: $grey-white;
  }
}

.my_order_r .ul05 {
  height: 95px;
  width: 100%;
  border: 1px solid $border-dark;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.my_order_r .ul05 li {
  width: 120px;
  line-height: 95px;
  text-align: center;
  color: $black;
  float: left;
  border-left: 1px solid $border-dark;
}

.my_order_r .ul05 .li01 {
  border-left: 0 none;
  width: 400px;
  text-align: left;
  margin-left: 20px;
  padding-top: 10px;
  img{
    float: left;
    padding: 5px;
    border: 1px solid $border-dark;
  }
  p{
    float: left;
    margin-left: 10px;
  }
}

.my_order_r .number {
  height: 34px;
  width: 80px;
  margin: 40px auto 0;
}

.my_order_r .number a {
  height: 34px;
  width: 34px;
  display: inline-block;
  text-align: center;
  line-height: 34px;
  color: $white;
  font-size: 14px;
  background: $btn-default;
  cursor: pointer;
}
</style>
