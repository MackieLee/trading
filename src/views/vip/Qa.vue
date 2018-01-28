
<template>
 <div class="my_qianb_r">
    <Modal
      :width = '850'
      v-model="modal"
      :closable = "false"
      :mask-closable="false">
    </Modal>
    <p class="p01">共7个回答</p>
    <div class="my_qianb_cotainer">
      <p class="p02">
        <span @click="toggle()" data-ref='1' class="cur">全部</span>
        <span @click="toggle()" data-ref='2'>待回答</span>
        <span @click="toggle()" data-ref='3'>已回答</span>
      </p>
      <ul class="div01" v-if="part=='1'">
        <li v-for="item in fqList" :key="item.id">
	        <div class="l">
	        	<h2>{{ item.name }}</h2>
	        		<p class="phui">指定回答者：孙炜老师</p>
						<p class="pshui" v-show="showAll !== 'show'+item.id">{{ item.value === ''|| item.value === null?'暂无回答':item.value === null ?'':(item.value.substring(0,5)+'……')}}<span v-show="item.value !=='' && item.value !== null" class="more"  @click="showAll = 'show'+item.id">查看全部>></span>
						</p>
            <p class="pshui" v-show="showAll === 'show'+item.id">{{ item.value }}</p>
						<img src="../../assets/images/wendavip.png">
	        </div>
	        <div class="r">
	         	<h3>{{ new Date(parseInt(item.time)*1000).toLocaleDateString() }}</h3>
	        	<!--<p class="red" @click="modal=!modal,series=true">立即评价</p>-->
	        	<!--<router-link tag='p' to="/TiwenMore" class="red"></router-link>-->
	        	<router-link :to="{path:'qamodal'}" tag="p">立即评价</router-link>
	        </div>
	       </li>
      </ul>

     <ul class="div01" v-if="part=='2'">
        <li v-if="item.value === ''||item.value === null" v-for="item in fqList" :key="item.id">
	        <div class="l">
	        	<h2>{{ item.name }}</h2>
	        	<p>还没有答案！</p>
	        </div>
	        <div class="r">
	         	<h3>{{ new Date(parseInt(item.time)*1000).toLocaleDateString() }}</h3>
	        	<p>指定回答</p>
	        </div>
	       </li>
      </ul>
      <ul class="div01" v-if="part=='3'">
        <li v-if="item.value !== '' && item.value != null" v-for="item in fqList" :key="item.id">
          <div class="l">
            <h2>{{ item.name }}</h2>
              <p class="phui">指定回答者：孙炜老师</p>
            <p class="pshui" v-show="showAll !== 'show'+item.id">{{ (item.value === null ?'':item.value).substring(0,5)+'……' }}<span class="more" @click="showAll = 'show'+item.id">查看全部>></span>
            </p>
            <p class="pshui" v-show="showAll === 'show'+item.id">{{ item.value }}</p>
            <img src="../../assets/images/wendavip.png">
          </div>
          <div class="r">
            <h3>{{ new Date(parseInt(item.time)*1000).toLocaleDateString() }}</h3>
           <router-link :to="{path:'qamodal'}" tag="p">立即评价</router-link>
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
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"

export default {

  data() {
    return {
      part: "1",
      modal: false,
      series: true,
      fqList:[],
      showAll:''
    }
  },
  methods: {
    toggle() {
      document.getElementsByClassName("cur")[0].className = ""
      event.target.setAttribute("class", "cur")
      let ref = event.target.dataset.ref
      this.part = ref
    }
  },
  mounted () {
    let res = loginUserUrl('getQuestions_list',{
      username: "niuhongda",
      password: "123123q",
      uid:getCookie("u_name")
    }).then((res)=>{
      console.log(res)
      this.fqList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
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
  padding-bottom: 5px;
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
  height: 30px;
  width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid #ddd;
   span {
  width: 100px;
  line-height: 30px;
  text-align: center;
  border-right: 0.5px solid #999;
  color: $black;
  float: left;
  cursor: pointer;
}
	.cur {
  border-bottom: 2px solid #e7151b;
  color: $red;;
	}
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
  width: 85%;
  position: relative;
}
.my_qianb_r .div01 .l h2{
  font-size: 14px;
  line-height: 30px;
}
.my_qianb_r .div01 .r h3 {
  color: #999;font-size: 12px;line-height: 30px;
}
.my_qianb_r .div01 li p {
  line-height: 30px;
}
.div01 {
  .r {
    width: 15%;
  }
  .red {
    color: #e7141a;
    cursor: pointer;
  }
  .phui {
    color: #999;
  }
}
.my_qianb_r .div01 .l p .more {
  color: #468ee3;
  cursor: pointer;
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
