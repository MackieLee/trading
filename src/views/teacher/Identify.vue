<template>
	<div class="my_order_r">
		<p class="sum_of_class">老师认证</p>
		<div class="txt">
			<img src="../../assets/images/336438490428669734.png">通过身份验证将提升你在九鼎财税平台上的权威性，增加学生对你的信任度，九鼎官方也会给予你更多的宣传和推广。
九鼎财税承诺，认证过程中填写的身份证号与上传的证明材料只做认证使用，不会用做其他任何用途。
		</div>

		<div class="container div01">	
			<h3>基本资料</h3>
 			 <p class="item"><i>*</i>真实姓名 <input ></p>
	      
	  </div>
    

			
	</div>
</template>

<script>
import Modal from "../vip/Qa_Modal"
export default {
  name: 'youhuiquan',
    components: { Modal },
  data(){
    return{
      part:'1',
      modal:false,
      series: true
    }
  },
  methods:{
    toggle(){
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class','cur')
      let ref = event.target.dataset.ref
      this.part = ref
    },
    closeModal: function() {
      this.modal = false
    },
  }
}
</script>

 <style lang="scss" scoped>
@import '../../assets/style/base.scss';
 .my_order_r {
  height: 900px;width: 811px; margin-left: 55px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;  
.sum_of_class{background-color: #468ee3; border: none;height: 40px;
line-height: 40px;font-size: 16px; text-align: center;color: #fff; }
.txt{font-size: 14px;
border: 1px solid #ddd;line-height: 34px; padding: 10px 15px 10px 60px; position: relative;
img{
  display: inline-block;
  width: 30px; position: absolute; left: 15px; top:25px;
  height: 30px;}
}      
.div01{ border: 1px solid #ddd; margin: 20px 0; 
padding:10px 10px; overflow:hidden;
.item{
	i{color: #e7141a;}
	
}

} 




}



</style>
