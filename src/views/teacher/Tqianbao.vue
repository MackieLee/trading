<template>
  <div class="my_qianb_r">
    <div class="div01">
      <p class="p_le">我的可用余额<br>0.00 </p>
      <p class="p_ri">
        <button>立即提取</button>
      </p>
      <div class="fr">
        <h2 style="font-size:18px;line-height:40px;">绑定银行卡哦~</h2>
        <p style="font-size:12px;line-height:30px;color:#666;">绑定一张银行卡用于随时提现，课程交易便捷。</p>
        <router-link :to="{ name:'bindcredit' }" style="font-size:14px;line-height:40px;color:#117cee;">立即绑定银行卡></router-link>
      </div>
    </div>
    <p class="p02">
      <span class="cur" data-ref='1' @click="toggle()">近三个月收支明细</span>|
      <span data-ref='2' class="" @click="toggle()">三个月前收支明细</span>
    </p>
    <div class="div02" v-if="!show">
      <p class="p03">
        <span>时间</span>
        <span> 收入金额</span>
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
        <span> 收入金额</span>
        <span>状态</span>
        <span>备注</span>
      </p>
      <p class="p04">
        <span>2018.3.1</span>
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
  name: 't-qianbao',
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
.fr{
  float: right; margin-top: 50px;
}
.my_qianb_r {
  height: auto;
  width: 700px;
  margin: 0 auto;
  padding: 0 50px;
 border: 1px solid #ddd;
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
  float: left;
}
.my_qianb_r .div01 .p_ri button {
  width: 100px;
  border: none;
  border-radius: 3px;
  margin-top: 50px;
  text-align: center;
  height: 35px;
  line-height: 35px;
  color: $white;
  font-size: 16px;
  background: #468EE3;
  outline: none;
}
.my_qianb_r .div01 .p_le {
  padding-top: 26px;
}
.my_qianb_r .div01 .li01 {
  color: #e7151b;
  border-left: 0 none;
}
.my_qianb_r .p02 {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #468EE3;
}
.my_qianb_r .p02 span {
  height: 50px;
  width: 200px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
}
.my_qianb_r .p02 .cur {
  border-bottom: 1px solid #e7151b;
  color: #e7151b;
}
.my_qianb_r .div02,
.div03 {
  margin-top: 14px;
}
.my_qianb_r .p03 {
  height: 46px;
  width: 100%;
  background: #ddd;
  margin-bottom: 10px;
}
.my_qianb_r .p03 span {
  width: 128px;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  color: #333;
  height: 46px;
  line-height: 46px;
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
  background: #468EE3;
}
</style>
