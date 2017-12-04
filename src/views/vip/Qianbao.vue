<template>
  <div class="my_qianb_r">
    <div class="div01">
      <p class="p_le">我的可用余额<br>0.00 </p>
      <p class="p_ri">
        <button>充值</button>
        <button>提现</button>
      </p>
    </div>
    <p class="p02">
      <span class="cur" data-ref='1' @click="toggle()">近三个月收支明细</span>|
      <span data-ref='2' class="" @click="toggle()">三个月前收支明细</span>
    </p>
    <div class="div02" v-if="!show">
      <p class="p03">
        <span class="span01">时间</span>
        <span class="span02"> 充值金额</span>
        <span class="span03">状态</span>
        <span class="span04">备注</span>
      </p>
      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

    </div>
    <div class="div03" v-if="show">
      <p class="p03">
        <span class="span01">时间</span>
        <span class="span02"> 充值金额</span>
        <span class="span03">状态</span>
        <span class="span04">备注</span>
 
      </p>
      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 102.00</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 100</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 10200</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:62437427989</span>
      </p>

      <p class="p04">
        <span class="span01">2017-10-18 18:35:11</span>
        <span class="span02"> 10</span>
        <span class="span03">收入</span>
        <span class="span04">退货返款:订单号:退货返款:订单号:62437427989</span>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'qianbao',
  data() {
    return {
      show:false
    }
  },
  methods: {
    toggle: function() {
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class', 'cur')
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.my_qianb_r {
  height: auto;
  width: 700px;
  margin: 0 auto;
  padding:30px 20px;
 border: 1px solid #ddd;
}
.my_qianb_r .div01 {
  height: 110px;
  width: 100%;
  margin: 0px 0 50px;
   p{
  width: 188px;
  text-align: center;
  height: 110px;
  font-size: 20px;
  color: #333; float: left;
  button {
  width: 80px;
  border-radius: 3px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: $white;
  font-size: 14px;
  background: $btn-default;
  border: none;
  outline: none;
  &:hover{
    background-color: $white;
    color: $black;
    border: 1px solid $border-blue;
  }
}
}
.p_ri{
  float: right;
  margin-right: 200px;
}
}
.my_qianb_r .div01 .p_le {
  padding-top: 26px;
}

.my_qianb_r .div01 .li01 {
  color: $red;
  border-left: 0 none;
}

.my_qianb_r .p02 {
  height: 50px; font-size: 14px;
  width: 100%;
  border-bottom:1px solid #ddd;
  span {
  height: 50px;
  width: 200px;
  display: inline-block;
  text-align: center;
  line-height: 50px;}
.cur {border-bottom: 1px solid $red;color: $red;}

}
.my_qianb_r .div02,
.div03 {
  margin-top: 14px;
   .p03 {
  height: 40px;
  width: 100%;
  background: $bg-blue;
  margin-bottom: 10px;
.span01{  width:28%;text-align: left; margin-left:2%; }
.span02{  width:12%; }
.span03{  width:12%;  }
.span04{  width:40%;margin-left:2%;}
  span {
  text-align: center;
  font-size: 14px;
  display: inline-block;
  color: $white;
  height: 40px;
  line-height: 40px;  
}
}
.p04 {
  height: 46px;
  width: 100%;
.span01{  width:28%;text-align: left; margin-left:2%; }
.span02{  width:12%; }
.span03{  width:12%;  }
.span04{  width:40%;margin-left:2%;}
  span {
  font-size: 14px;
  display: inline-block;text-align: center;
  color: #333;
  height: 46px;
  line-height: 46px;
}
}
}
.my_qianb_r .number {
  height: 34px;
  width: 80px;
  margin: 40px auto 0;
}
.my_qianb_r .number a {
  height: 34px;
  width: 34px;
  display: inline-block;
  text-align: center;
  line-height: 34px;
  color: $white;
  font-size: 14px;
  background: #838383;
}
</style>
