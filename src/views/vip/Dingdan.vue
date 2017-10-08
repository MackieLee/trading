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
        <i></i>全选
      </li>
      <li>合并付款</li>
      <li> 批量确认收货</li>
      <li>删除订单</li>
    </ul>
    <div class="container" v-if="part=='1'">
      <p class="p01">
        <i></i>2017-08-31订单号: 53196839876687913</p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png">土地增值税清算土地<br>增值税清算 </li>
        <li>￥1253.77</li>
        <li> 1</li>
        <li>视频</li>
        <li>￥1253.77</li>
        <li> 交易成功<br>订单详情</li>
      </ul>
      <p class="p01">
        <i></i>2017-08-31订单号: 53196839876687913</p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png">土地增值税清算土地<br>增值税清算 </li>
        <li>￥1253.77</li>
        <li> 1</li>
        <li>视频</li>
        <li>￥1253.77</li>
        <li> 交易成功<br>订单详情</li>
      </ul>
      <p class="p01">
        <i></i>2017-08-31订单号: 53196839876687913</p>
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
      part: '1'
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
.my_order_r {
  height: 900px;
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
}

.my_order_r h2 {
  widows: 100%;
  background: #838383;
  height: 50px;
  font-weight: normal;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}

.my_order_r .ul01 {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #e7151b;
}

.my_order_r .ul01 li {
  width: 128px;
  text-align: center;
  font-size: 18px;
  color: #333;
  float: left;
  padding: 20px 0 15px;
  cursor: pointer;
}

.my_order_r .ul01 .li01 {
  color: #e7151b;
  border-left: 0 none;
}

.my_order_r .ul02 {
  height: 46px;
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
  height: 46px;
  line-height: 46px;
}

.my_order_r .ul03 {
  height: 35px;
  width: 100%;
  margin: 26px 0 20px;
}

.my_order_r .ul03 li {
  border-radius: 3px;
  padding: 0 15px;
  margin: 0 20px;
  border: 1px #ddd solid;
  text-align: center;
  font-size: 14px;
  color: #333;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03 .li01 {
  border: 0 none;
  padding: 0 15px 0 0;
}

.my_order_r .ul03 .li01 i {
  margin-right: 15px;
  display: inline-block;
  width: 13px;
  height: 13px;
  background: url('../../assets/images/Sprite.png') -59px -396px;
}
/*   */

.my_order_r .p01 {
  height: 42px;
  width: 100%;
  background: #ddd;
  line-height: 46px;
  font-size: 14px;
}

.my_order_r .p01 i {
  margin: 0 20px;
  display: inline-block;
  width: 13px;
  height: 13px;
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
  color: #fff;
  font-size: 14px;
  background: #838383;
}
</style>
