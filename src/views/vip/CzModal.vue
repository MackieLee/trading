<template>
  <div>
    <div v-show="block">
      <Col>
        <Row></Row>
      </Col>
      <Row>
        <Col span="3"><span style="line-height:32px;">充值金额</span></Col>
        <Col span="8"><Input v-model="jine"></Input></Col>
      </Row>
      <div style="width:100%;height:20px;"></div>
      <Row>
        <Col span="6"><Button :type="wechat" @click="wechat='primary';alipay='default';s=2" shape="circle">微信支付</Button></Col>
        <Col span="6"><Button :type="alipay" @click="alipay='primary';wechat='default';s=1" shape="circle">支付宝支付</Button></Col>
      </Row>
    </div>
    <div v-show="!block">
      <img :src="qUri" />
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      block: true,
      qUri:'',
      jine:0,
      s:0,
      wechat:'default',
      alipay:'default',
    }
  },
  methods: {
    czje:function(){
      if(this.jine <= 0){
        return false
      }else{
        let res = this.loginUserUrl('myrecharge',{
          username:'niuhongda',
          password:'123123q',
          // uid: this.getCookie('u_name'),
          uid:41,
          money: parseInt(this.jine),
          type: parseInt(this.s)
        }).then((res)=>{
          this.block = false
          this.qUri = res.intro
          console.log(res.order_pay.order_id)
          this.ifpayed(res.order_pay.order_id)
        })
      }
    },
    ifpayed(order_id) {
      let int = setInterval(() => {
        let res = this.loginUserUrl("getShopcar_WeiXinPayOK", {
          username: "niuhongda",
          password: "123123q",
          order_id: order_id
        }).then(res => {
          if (res.status === 1) {
            this.payed = true;
            this.$Message.success("充值成功");
          }
          clearInterval(int);
        });
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
