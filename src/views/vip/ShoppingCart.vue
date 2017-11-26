<template>
  <div class="my_order_r">
    <h2>我的订单</h2>
    <ul class="ul02">
      <li class="li01">
        <i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选
      </li>
      <li class="block-hori block-nav-1">报名信息 </li>
      <li class="block-hori block-2">单价</li>
      <li class="block-hori block-3">商品</li>
      <li class="block-hori block-4">实付款</li>
      <li class="block-hori block-5">操作</li>
    </ul>
    <div class="container">
      <div class="item">
        <p class="p01">
          <i @click="change()" data-ref="0" :class="{ selected: num1}"></i>2017-08-31订单号: 53196839876687913</p>
        <div class="ul">
          <div class=" block block-1 li01 lf"><div class="lf img"><img src="../../assets/images/huanyuanzx02.png"></div><div class="lf header">土地增值税清算土地增值税清算</div></div>
          <div class=" block block-2 lf">￥4588.00</div>
          <div class=" block block-3 lf">视频</div>
          <div class=" block block-4 lf"><p>应付</p><p>￥4588.00</p></div>
          <div class=" block block-5 lf"> <button class="btn-danger">立即付款</button><br>加到我的收藏</div>
        </div>
      </div>
      <div class="item">
        <p class="p01">
          <i @click="change()" data-ref="1" :class="{ selected: num2}"></i>2017-08-31订单号: 53196839876687913</p>
        <div class="ul">
          <div class=" block block-1 li01 lf"><div class="lf img"><img src="../../assets/images/huanyuanzx02.png"></div><div class="lf header">土地增值税清算土地增值税清算</div></div>
          <div class=" block block-2 lf">￥4588.00</div>
          <div class=" block block-3 lf">视频</div>
          <div class=" block block-4 lf"><p>应付</p><p>￥4588.00</p></div>
          <div class=" block block-5 lf"> <button class="btn-danger">立即付款</button><br>加到我的收藏</div>
        </div>
      </div>
    </div>
    <ul class="ul03">
      <li class="li01">
        <i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选 </li>
      <button class="btn-danger rt right-cut">去结算</button>
    </ul>
    <div class="number">
      <a>1</a>
      <a>2</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
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
      console.log(event.target);
      console.log(attr);
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
.selected {
  background-position: -101px -254px !important;
}
.my_order_r {
  height: 900px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}
.rt{
  float: right;
}
i {
  vertical-align: text-bottom;
  background: url("../../assets/images/Sprite.png");
  display: inline-block;
  width: 18px;
  height: 18px;
}
.container{
  margin-bottom: 20px;
  .item{
    margin-bottom: 20px;
  }
}
.block-hori {
  padding: 0 15px;
}
.block-nav-1{
  width: 300px;
}
.block-1 {
  width: 370px;
  overflow: hidden;
  border-right: 1px solid $border-dark;
  .img {
    margin-right: 20px;
  }
  .header {
    font-size: 14px;
    width: 200px;
  }
}
.block-2 {
  width: 54px;
}
.block-3 {
  width: 35px;
}
.block-4 {
  width: 70px;
}
.btn-danger {
  width: 90px;
  height: 30px;
  background-color: $btn-danger;
  outline: none;
  border: none;
  color: $white;
  border-radius: 3px;
  margin: 10px 0;
  &:hover {
    background-color: $btn-danger-hover;
  }
}
.right-cut{
  margin-right: 60px;
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
.my_order_r .ul02 {
  height: 35px;
  width: 100%;
  background: #ddd;
  margin: 14px 0;
  .li01{
    margin-left: 13px;
    i{
      background-position: -101px -284px;
      margin-right: 10px;
    }
  }
}
.ul03 .li01{
  font-size: 14px;
  margin-left: 13px;
  i{
    background-position:-101px -350px;
  }
}
.my_order_r .ul02 li {
  text-align: center;
  font-size: 14px;
  color: #333;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03 .li01 {
  border: 0 none;
}

.my_order_r .ul03 .li01 i {
  margin-right: 5px;
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
.ul {
  border: 1px solid $border-dark;
  overflow: hidden;
  .lf {
    float: left;
  }
  .block {
    padding: 13px;
  }
  .block-1,
  .block-2,
  .block-3,
  .block-4 {
    border-right: 1px solid $border-dark;
    height: 68px;
  }
  .block-1,.block-2,.block-3{
    line-height: 65px;
  }
  .block-4 p{
    text-align: center;
    line-height: 25px;
  }
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
  margin: 0 5px 0 13px;
  background-position: -101px -284px;
}
</style>
