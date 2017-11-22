<template>
  <div class="my_order_r">
    <h2>我的订单</h2>
    <ul class="ul01" @click="toggle()">
      <li class="li01" data-ref="1">所有订单</li>
      <li data-ref="2">待付款1</li>
      <li data-ref="3"> 待发货1</li>
      <li data-ref="4"> 待收货4</li>
      <li data-ref="5">待评价5</li>
    </ul>
    <ul class="ul02">
      <li>宝贝 </li>
      <li>单价</li>
      <li> 数量</li>
      <li>商品</li>
      <li>实付款</li>
      <li>交易状态</li>
    </ul>
    <ul class="ul03">
      <li class="li01">
        <i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选 </li>
      <li>合并付款</li>
      <li> 批量确认收货</li>
      <li>删除订单</li>
    </ul>
    <div class="container" v-if="part=='1'">
      <p class="p01">
        <i @click="change()" data-ref='0' :class="{ selected: num1}"></i>2017-08-31订单号: 53196839876687913</p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png">土地增值税清算土地<br>增值税清算 </li>
        <li>￥1253.77</li>
        <li> 1</li>
        <li>视频</li>
        <li>￥1253.77</li>
        <li> 交易成功<br>订单详情</li>
      </ul>
      <p class="p01">
        <i @click="change()" data-ref='1' :class="{ selected: num2}"></i>2017-08-31订单号: 53196839876687913</p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png">土地增值税清算土地<br>增值税清算 </li>
        <li>￥1253.77</li>
        <li> 1</li>
        <li>视频</li>
        <li>￥1253.77</li>
        <li> 交易成功<br>订单详情</li>
      </ul>
      <p class="p01">
        <i @click="change()" data-ref='2' :class="{ selected: num3}"></i>2017-08-31订单号: 53196839876687913</p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png">土地增值税清算土地<br>增值税清算 </li>
        <li>￥1253.77</li>
        <li> 1</li>
        <li>视频</li>
        <li>￥1253.77</li>
        <li> 交易成功<br>订单详情</li>
      </ul>
    </div>
    <div class="container" v-if="part=='2'"></div>
    <div class="container" v-if="part=='3'"></div>
    <div class="container" v-if="part=='4'"></div>
    <div class="container" v-if="part=='5'"></div>
    <div class="number">
      <a>1</a>
      <a>2</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdan',
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
      document.getElementsByClassName('li01')[0].className = ''
      let attr = event.target.getAttribute('class')
      console.log(event.target)
      console.log(attr)
      if(attr != 'ul01'){
         event.target.setAttribute('class', 'li01')
      }
      let ref = event.target.dataset.ref
      this.part = ref
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
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.selected {
  background-position: -101px -254px !important;
}
.my_order_r {
  height: 900px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}
i{
  vertical-align: text-bottom;
}
.my_order_r h2 {
  widows: 100%;
  background: $bg-blue;
  height: 42px;
  font-weight: normal;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  color: $white;
}

.my_order_r .ul01 {
  height: 42px;
  width: 100%;
  border-bottom: 1px solid $red;
}

.my_order_r .ul01 li {
  width: 128px;
  text-align: center;
  font-size: 16px;
  color: $black;
  float: left;
  padding: 10px 0 15px;
  cursor: pointer;
}

.my_order_r .ul01 .li01 {
  color: $red;
  border-left: 0 none;
}

.my_order_r .ul02 {
  height: 35px;
  width: 100%;
  background: #ddd;
  margin-top: 14px;
}

.my_order_r .ul02 li {
  width: 128px;
  text-align: center;
  font-size: 14px;
  color: #333;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03 {
  height: 25px;
  width: 100%;
  margin: 15px 0;
}

.my_order_r .ul03 li {
  border-radius: 3px;
  padding: 0 15px;
  margin: 0 20px;
  border: 1px #ddd solid;
  text-align: center;
  font-size: 12px;
  color: #333;
  float: left;
  line-height: 25px;
}

.my_order_r .ul03 .li01 {
  border: 0 none;
  padding: 0 15px 0 0;
}

.my_order_r .ul03 .li01 i {
  margin-right: 5px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('../../assets/images/Sprite.png') -59px -396px;
}
/*   */
.my_order_r .p01 {
  height: 30px;
  width: 100%;
  background: $bg-blue;
  line-height: 30px;
  font-size: 12px;
  color: $white;
}

.my_order_r .p01 i {
  margin: 0 20px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('../../assets/images/Sprite.png') -59px -396px;
}

.my_order_r .ul05 {
  height: 110px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.my_order_r .ul05 li {
  width: 90px;
  height: 80px;
  line-height: 24px;
  padding-top: 30px;
  text-align: center;
  font-size: 14px;
  color: #333;
  float: left;
  border-left: 1px solid #ddd;
}

.my_order_r .ul05 .li01 {
  border-left: 0 none;
  width: 300px;
  text-align: left;
}

.my_order_r .ul05 .li01 img {
  margin: -18px 18px 11px 5px;
  float: left;
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
}
.my_order_r .p01 i {
  margin: 0 5px 0 20px;
  background-position: -101px -284px;
}
.my_order_r .ul03 .li01 i,
.my_order_r .ul06 .li01 i {
  background-position: -101px -282px;
}
</style>
