<template>
  <div class="my_order_r">
    <h2>发票索取</h2>
    <div class="22">
      <ul class="ul03">
        <li class="li01">
          <i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选 </li>
        <li>合并发票</li>
        <li>删除订单</li>
      </ul>
      <ul class="ul02">
        <li class="li01">订单详情</li>
        <li>状态</li>
        <li>发票类型</li>
        <li>操作</li>
      </ul>
      <p class="p01">
        <i @click="change()" data-ref='0' :class="{ selected: num1}"></i>2017-08-31订单号: 53196839876687913
        <span>[未开票]</span>
        <span>2017-11-31</span>
      </p>
      <ul class="ul05">
        <li class="li01">服务项目 </li>
        <li>服务内容<br>正常</li>
        <li> 订单金额<br>￥
          <span>1253.77</span>
        </li>
        <li>申请发票</li>
      </ul>
      <p class="p01">
        <i @click="change()" data-ref='1' :class="{ selected: num2}"></i>2017-08-31订单号: 53196839876687913
        <span>[未开票]</span>
        <span>2017-11-31</span>
      </p>
      <ul class="ul05">
        <li class="li01">服务项目 </li>
        <li>服务内容<br>正常</li>
        <li> 订单金额<br>￥
          <span>1253.77</span>
        </li>
        <li>申请发票</li>
      </ul>
      <p class="p01">
        <i @click="change()" data-ref='2' :class="{ selected: num3}"></i>2017-08-31订单号: 53196839876687913
        <span>[未开票]</span>
        <span>2017-11-31</span>
      </p>
      <ul class="ul05">
        <li class="li01">服务项目 </li>
        <li>服务内容<br>正常</li>
        <li> 订单金额<br>￥
          <span>1253.77</span>
        </li>
        <li>申请发票</li>
      </ul>
      <ul class="ul06">
        <li class="li01">
          <i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选 </li>
        <li>申请发票</li>
        <li class="li03"> 发票总额：0 元</li>
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
      num1: false,
      num2: false,
      num3: false,
      all: false,
      part: "1"
    };
  },
  methods: {
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
    },
    toggle() {
      document.getElementsByClassName("li01")[0].className = "";
      let attr = event.target.getAttribute("class");
      console.log(event.target);
      console.log(attr);
      if (attr != "ul03") {
        event.target.setAttribute("class", "li01");
      }
      let ref = event.target.dataset.ref;
      this.part = ref;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.selected {
  background-position: -106px -364px !important;
}

i {
  margin-right: 15px;
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 1px solid $border-dark;
  background: url("../../assets/images/Sprite.png");
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
  background: $bg-blue;
  margin: 14px 0 ;
}

.my_order_r .ul02 li {
  width: 175px;
  text-align: center;
  font-size: 14px;
  color: $white;
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
  background-position: -59px -396px;
}

.my_order_r .p01 {
  width: 100%;
  background: $bg-blue;
  line-height: 35px;
  font-size: 14px;
  color: $white;
}

.my_order_r .p01 i {
  margin: 0 15px 0 20px;
  background-position: -59px -396px;
}

.my_order_r .p01 span {
  margin-left: 150px;
  display: inline-block;
}

.my_order_r .ul05 {
  height: 100px;
  width: 100%;
  border-bottom: 1px solid $border-dark;
  margin-bottom: 10px;
}
.my_order_r .ul05 li {
  width: 150px;
  height: 70px;
  line-height: 24px;
  padding-top: 30px;
  text-align: center;
  font-size: 14px;
  color: $black;
  float: left;
  border-left: 1px solid $border-dark;
}

.my_order_r .ul05 .li01 {
  border-left: 0 none;
  width: 200px;
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
