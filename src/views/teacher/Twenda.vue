
<template>
 <div class="my_qianb_r">
  	<div class="modal-outer" v-show="modal">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <modal @closeModal="closeModal"></modal>
    </div>
		<div class="modal-outer" v-show="wendaModal">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <wenda-modal @closeWendaModal="closeWendaModal"></wenda-modal>
    </div>
    <p class="p01">共7个回答</p>
    <div class="my_qianb_cotainer">
      <p class="p02">
        <span data-ref='1' @click="toggle()" :class="{ 'cur': part === '1' }">全部</span>|
        <span data-ref='2' @click="toggle()" :class="{ 'cur': part === '2' }">待回答</span>|
        <span data-ref='3' @click="toggle()" :class="{ 'cur': part === '3' }">已回答</span>
      </p>
      <ul class="div01" v-if="part=='1'">
        <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui">根据贵公司提供的资料理公司打算收购甲企……  <span class="more">查看全部>></span>
						</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui">根据贵公司提供的资料理公司打算收购甲企业的债务包，收购价……  <span class="more">查看全部>></span>
						</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
       <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui">根据贵公司提供的资料理公司打算收购甲企业的债务包，收购价……  <span class="more">查看全部>></span>
						</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	       </li>

      </ul>

      <ul class="div01" v-if="part=='2'">
        <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>
	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>

	      <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="red" @click="wendaModal=!wendaModal">回答</p>
	        </div>
	       </li>

      </ul>

      <ul class="div01" v-if="part=='3'">
        <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui">根据贵公司提供的资料理公司打算收购甲企业的债务包，收购价……  <span class="more">查看全部>></span>
						</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	       </li>
	       <li>
	        <div class="l">
	        	<h2>孙老师，您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui">根据贵公司提供的资料理公司打算收购甲企业的债务包，收购价……  <span class="more">查看全部>></span>
						</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3> 2018-2-12</h3>
	        	<p class="hui" @click="modal=!modal">查看评价</p>
	        </div>
	      </li>
      </ul>
      </div>
			<div class="pgs">
        <li class="prev">&lt;上一页</li>
        <li class="current">1</li>
        <li class="custom">2</li>
        <li class="custom">3</li>
        <li class="custom">4</li>
        <li class="points">...</li>
        <li class="jump"><input type="tel" maxlength="3"> /40页</li>
        <li class="submit">确定</li>
        <li class="next">下一页&gt;</li>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../modal/Qa_Modal";
import WendaModal from "../modal/Twenda_Modal";
export default {
  name: "youhuiquan",
  components: { Modal, WendaModal },
  data() {
    return {
      part: "1",
      modal: false,
      wendaModal: false
    };
  },
  methods: {
    closeModal: function() {
      this.modal = false;
    },
    closeWendaModal: function() {
      this.wendaModal = false;
    },
    toggle: function(){
      this.part = event.currentTarget.dataset.ref
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.modal-outer {
  width: 100%;
  height: 173%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .modal {
    height: 110%;
  }
  .close {
    position: absolute;
    top: 15%;
    left: 60%;
  }
}
.pgs {
  width: 525px;
  margin: 60px auto;
  li {
    width: 33px;
    padding: 4px 0;
    line-height: 20px;
    text-align: center;
    margin-right: 2px;
    cursor: pointer;
    border: 1px solid $border-dark;
    color: $black;
  }
  .prev {
    width: 73px;
    color: $blue;
  }
  .next {
    width: 96px;
    color: $blue;
  }
  .points {
    border: none;
  }
  .submit {
    background-color: $btn-default;
    color: $white;
    width: 44px;
    border: none;
  }
  .jump {
    width: 80px;
    border: 1px solid $border-dark;
    color: #333;
    input {
      width: 30px;
      border: 1px solid $border-dark;
      outline: none;
    }
  }
  .current {
    background-color: $btn-default;
    color: $white;
  }
}
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
  width: 96%;
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
  width: 80%;
  position: relative;
  margin-right: 5%;
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
    width: 15%;
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
  top: 40px;
}
</style>
