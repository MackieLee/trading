
<template>
 <div class="my_qianb_r">
    <Modal v-model="modal">
      okokok
    </Modal>
    <!-- 回答 -->
    <Modal v-model="modal2" width="450">
        <p slot="header" style="color:#f60;text-align:center">
          <span>回答</span>
        </p>
        <div style="text-align:center">
          <Input v-model="ansr" type="textarea" :rows="4" placeholder="请输入答案"></Input>
        </div>
        <div slot="footer">
          <Button type="primary" @click="subAnsr">确定</Button>
          <Button type="ghost" @click="modal2 = false">取消</Button>
        </div>
    </Modal>
    <p class="p01">共7个回答</p>
    <div class="my_qianb_cotainer">
      <p class="p02">
        <span data-ref='1' @click="toggle()" :class="{ 'cur': part === '1' }">全部</span>|
        <span data-ref='2' @click="toggle()" :class="{ 'cur': part === '2' }">待回答</span>|
        <span data-ref='3' @click="toggle()" :class="{ 'cur': part === '3' }">已回答</span>
      </p>
      <ul class="div01" v-if="part=='1'">
        <li v-for="item in fqList" :key="item.id">
          <div class="l">
            <h2>{{ item.name }}</h2>
            <div class="div">
              <p class="phui">提问者：提问者的名字</p>
              <p class="pshui">{{ item.value === ''?'暂无回答':(item.value === null ?'':item.value).substring(0,5)+'……'}}<span v-show="item.value !==''" class="more">查看全部>></span></p>
              <img src="../../assets/images/wendavip.png">
            </div>
          </div>
          <div class="r">
            <h3> {{ new Date(parseInt(item.time)*1000).toLocaleDateString() }}</h3>
            <p v-if="item.value === ''||item.value === null" class="red" @click="showAnsr(item.id,item.uid,item.teacher_id)">回答</p>
            <p v-else class="hui" @click="showPingjia(item.id,item.uid,item.teacher_id)">查看评价</p>
          </div>
        </li>
      </ul>
      <ul class="div01" v-if="part=='2'">
        <li v-if="item.value === ''" v-for="item in fqList" :key="item.id">
	        <div class="l">
	        	<h2>{{ item.name }}</h2>
            <div class="div">
              <p class="phui">提问者：提问者的名字</p>
              <p class="pshui">暂无回答</p>
              <img src="../../assets/images/wendavip.png">
            </div>
	        </div>
	        <div class="r">
	         	<h3>{{ new Date(parseInt(item.time)*1000).toLocaleDateString() }}</h3>
	        	<p class="red" @click="modal2=true">回答</p>
	        </div>
	       </li>
      </ul>
      <ul class="div01" v-if="part=='3'">
        <li v-if="item.value !== ''" v-for="item in fqList" :key="item.id">
	        <div class="l">
	        	<h2>{{ item.name }}</h2>
	        	<div class="div">
	        		<p class="phui">提问者: 提问者的name </p>
              <p class="pshui">{{ (item.value === null ?'':item.value).substring(0,5)+'……' }}<span class="more">查看全部>></span></p>
              <img src="../../assets/images/wendavip.png">
            </div>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"
import WendaModal from "../modal/Twenda_Modal";
export default {
  name: "youhuiquan",
  components: { WendaModal },
  data() {
    return {
      part: "1",
      modal: false,
      modal2: false,
      ansr:'',
      fqList:[],
      args:{}
    };
  },
  methods: {
    toggle: function(){
      this.part = event.currentTarget.dataset.ref
    },
    // 提交回答
    subAnsr:function(){
      let res = loginUserUrl('getQuestions_answer',{
        username: "niuhongda",
        password: "123123q",
        value:this.ansr,
        form_id:this.args.id,
        uid:this.args.uid,
        teacher_id:this.args.teacher_id
      }).then((res)=>{
        console.log(res)
        this.ansr = ''
        if(res && res.error_code === 0){
          this.modal2 = false
          this.$Message.success('回答成功')
        }else{
          this.$Message.error('回答失败')
        }
      })
    },
    // 打开回答对话框
    showAnsr:function(id,uid,teacher_id){
      this.args = {
        id:id,
        uid:uid,
        teacher_id:teacher_id
      }
      this.modal2 = true
    },
    showPingjia:function(){

    }
  },
  mounted () {
    let res = loginUserUrl('getQuestions_list',{
      username: "niuhongda",
      password: "123123q",
      tid:'531'
    }).then((res)=>{
      console.log(res)
      this.fqList = res.data
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_qianb_r {
  width: 810px;
  margin: 0 auto;
  background-color: $white;
}
.my_qianb_cotainer {
  padding-bottom: 65px;
}
.my_qianb_r .p01 {
  color: $white;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 100%;
  background: $bg-blue;
  text-align: center;
}
.my_qianb_r .p02 {
  margin: 10px 0 20px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.my_qianb_r .p02 span {
  width: 80px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.my_qianb_r .p02 .cur {
  border-bottom: 1px solid #e7151b;
  color: #e7151b;
}
.my_qianb_r .div01 {
  height: auto;
  width: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  padding-bottom: 10px;
}
.my_qianb_r .div01 li {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 10px 15px;
}
.my_qianb_r .div01 .l,
.my_qianb_r .div01 .r {
  font-size: 16px;
  color: #333;
  float: left;
}
.my_qianb_r .div01 .l {
  width: 83%;
  margin-right: 5%;
  .div{position: relative;}
}
.my_qianb_r .div01 .l h2,
.my_qianb_r .div01 .r h3 {
  font-size: 14px;
  line-height: 33px;
}
.my_qianb_r .div01 li p {
  line-height: 33px;
}
.div01 {
  .r {
    width: 11%;
  }
  .red {
    color: #e7141a;
    cursor: pointer;
  }
  .hui {
    cursor: pointer;
  }
}
.phui {
  color: #999;
}
.my_qianb_r .div01 .r .phui,
.my_qianb_r .div01 .r h3 {
  color: #999;
}
.my_qianb_r .div01 .l p .more {
  color: #468ee3;
}
.my_qianb_r .div01 .l .pshui,
.my_qianb_r .div01 .l .phui {
  padding-left: 50px;
}
.my_qianb_r .div01 .l img {
  position: absolute;
  left: 0px;
  top: 8px;
}
</style>
