<template>
  <div class="my_qianb_r">
    <Modal v-model="cz" :mask-closable='false'>
      <div slot="header">充值</div>
      <cz ref="childcz"></cz>
      <div slot="footer">
        <Button type="primary" @click="czsub">确定</Button>
        <Button type="default" @click="czCancle">取消</Button>
      </div>
    </Modal>
    <div class="div01">
      <p class="p_le">我的可用余额<br>0.00</p>
      <p class="p_ri">
        <button @click="cz = true">充值</button>
        <button>提现</button>
      </p>
       <p class="fr">
        <span>可用积分<br/><i>40</i></span>
        <span>即将过期<br/><i>0</i></span>
        <span>快去兑换<br/><router-link :to="{ name:'jifenmall' }" class="fr_">兑换</router-link></span>
      </p>
    </div>
    <p class="p02">
      <span class="cur" data-ref='1' @click="toggle()">近三个月收支明细</span>|
      <span data-ref='2' class="" @click="toggle()">三个月前收支明细</span>
    </p>
    <table v-if="!show">
      <tr height="38">
        <th width="160" class="span01">时间</th>
        <th width="100" class="span02"> 金额</th>
        <th width="100" class="span03">操作</th>
        <th width="340" class="span04">备注</th>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
    </table>
    <table v-if="show">
      <tr height="38">
        <th width="160" class="span01">时间</th>
        <th width="100" class="span02"> 金额</th>
        <th width="100" class="span03">操作</th>
        <th width="340" class="span04">备注</th>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
      <tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr><tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989退货返款:订单号:62437427989退货返款:订单号:62437427989退货返款:订单号:62437427989</td>
      </tr><tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr><tr height="42">
        <td class="span01">2017-10-18 18:35:11</td>
        <td class="span02"> 100</td>
        <td class="span03">收入</td>
        <td class="span04">退货返款:订单号:62437427989</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Cz from './CzModal'
export default {
  name: "qianbao",
  components: {
    Cz
  },
  data() {
    return {
      show: false,
      cz: false,
    };
  },
  methods: {
    toggle: function() {
      document.getElementsByClassName("cur")[0].className = ""
      event.target.setAttribute("class", "cur")
      this.show = !this.show
    },
    czsub:function(){
      this.$refs.childcz.czje()
    },
    czCancle:function(){
      this.cz = false
      this.$refs.childcz.block = true
      this.$refs.childcz.jine = 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_qianb_r {
  height: auto;
  width: 700px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ddd;
}
.my_qianb_r .div01 {
  height: 110px;
  width: 100%;
  margin: 0px 0px 30px;
 .fr{ width:50%;margin-left:15px;
  	span{font-size:18px;line-height:40px; float: left; margin:0px 15px;}
  	i{font-style: normal;margin-top: 10px; color: #117cee;}
  		.fr_:hover{background: #E7141A;}
  	.fr_{font-size:14px; display: block;margin-top: 10px;width: 80px;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #f84141;}

  }
  p {
    width:25%;
    text-align: center;
    height: 110px;
    font-size: 20px;
    color: #333;
    float: left;margin-right:10px;
    button {
      width: 80px;margin-bottom: 10px;
      border-radius: 3px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: $white;
      font-size: 14px;
      background: #f84141;
      border: none;
      outline: none;
      &:hover {background: #e7141a;}
    }
  }
  .p_ri {float: left;width:15%;}
}

.my_qianb_r .div01 .li01 {
  color: $red;
  border-left: 0 none;
}
.my_qianb_r .p02 {
  height: 50px;
  font-size: 14px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  span {
    height: 50px;
    width: 200px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
  }
  .cur {border-bottom: 1px solid $red;color: $red;}
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
table{
  margin-top: 10px;
  th,td{
    text-align: center;
  }
  th{
    font-size: 14px;
    color: $white;
    background-color: $bg-blue;
  }
  td{
    border-bottom: 1px solid $border-dark;
  }
}
</style>
