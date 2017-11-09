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
        <span>时间</span>
        <span> 充值金额</span>
        <span>状态</span>
        <span>备注</span>
      </p>
      <p class="p04">
        <span>2017.12.18</span>
        <span> 100</span>
        <span>收入</span>
        <span>无</span>
      </p>
      <p class="p04">
        <span>2017.12.18</span>
        <span> 100</span>
        <span>收入</span>
        <span>无</span>
      </p>
      <p class="p04">
        <span>2017.12.18</span>
        <span> 100</span>
        <span>收入</span>
        <span>无</span>
      </p>
    </div>
    <div class="div03" v-if="show">
      <p class="p03">
        <span>时间</span>
        <span> 充值金额</span>
        <span>状态</span>
        <span>备注</span>
      </p>
      <p class="p04">
        <span>2018.1.1</span>
        <span> 500</span>
        <span>收入</span>
        <span>无</span>
      </p>
      <p class="p04">
        <span>2018.1.1</span>
        <span> 500</span>
        <span>收入</span>
        <span>无</span>
      </p>
      <p class="p04">
        <span>2018.1.1</span>
        <span> 500</span>
        <span>收入</span>
        <span>无</span>
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
  height: 900px;
  width: 700px;
  margin: 0 auto;
  padding: 0 50px;
  background-color: $white;
}

.my_qianb_r .div01 {
  height: 110px;
  width: 100%;
  margin: 0px 0 50px;
}

.my_qianb_r .div01 .p_le,
.my_qianb_r .div01 .p_ri {
  width: 188px;
  text-align: center;
  height: 110px;
  font-size: 20px;
  color: #333;
}
.p_le{
  float: left;
}
.p_ri{
  float: right;
  margin-right: 200px;
}
.my_qianb_r .div01 .p_ri button {
  width: 100px;
  border-radius: 3px;
  margin-top: 20px;
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

.my_qianb_r .div01 .p_le {
  padding-top: 26px;
}

.my_qianb_r .div01 .li01 {
  color: $red;
  border-left: 0 none;
}

.my_qianb_r .p02 {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid $border-blue;
}

.my_qianb_r .p02 span {
  height: 50px;
  width: 200px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
}

.my_qianb_r .p02 .cur {
  border-bottom: 1px solid $red;
  color: $red;
}

.my_qianb_r .div02,
.div03 {
  margin-top: 14px;
}
.my_qianb_r .p03 {
  height: 42px;
  width: 100%;
  background: $bg-blue;
  margin-bottom: 10px;
}

.my_qianb_r .p03 span {
  width: 128px;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  color: $white;
  height: 42px;
  line-height: 42px;
}

.my_qianb_r .p04 {
  height: 46px;
  width: 100%;
}

.my_qianb_r .p04 span {
  width: 128px;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  color: #333;
  height: 46px;
  line-height: 46px;
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
