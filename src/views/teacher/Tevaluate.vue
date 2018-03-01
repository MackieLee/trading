<template>
	<div class="my_order_r">
		<div class="sum_of_class">学员评价</div>
			<p class="p02">
        <span @click="toggle()" data-ref='1' class="cur">综合评价</span>
        <span @click="toggle()" data-ref='2'>课程评分</span>
        <span @click="toggle()" data-ref='3'>答疑评分</span>
        <span @click="toggle()" data-ref='4'>订单评分</span>
      </p>
		<div class="container div01" v-if="part=='1'">
			<ul class="ul01">
				<li>
					<h4>课程设置是否合理</h4>
					<p>
					<i class="p_i" :style="'width:' + (score/5)*100 + '%'"></i>
					</p>
					<span>{{ score }}分</span>
				</li>
			</ul>
	  </div>
    <div class="container div02" v-if="part=='2'">
    	<h3>课程评分<span>5.0</span><i></i></h3>
    	<table>
        <tr>
          <th v-for="item in titles" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(index,item) in 5" :key="item">
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
        </tr>
      </table>
    </div>
    <div class="container div02" v-if="part=='3'">
    	<h3>答疑评分<span>5.0</span><i></i></h3>
      <table>
        <tr>
          <th v-for="item in titles" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(index,item) in 5" :key="item">
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
        </tr>
      </table>
    </div>
    <div class="container div02" v-if="part=='4'">
    	<h3>订单评分<span>5.0</span><i></i></h3>
    	<table>
        <tr>
          <th v-for="item in titles" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(index,item) in 5" :key="item">
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
          <td>{{index}}</td>
        </tr>
      </table>
    </div>
	</div>
</template>

<script>
import Modal from "../vip/Qa_Modal";
export default {
  name: "youhuiquan",
  components: { Modal },
  data() {
    return {
      part: "1",
      modal: false,
      series: true,
      score:2,
      titles:['分数/周期','最近一周','最近一个月','最近六个月','六个月以前','总计']
    }
  },
  methods: {
    toggle() {
      document.getElementsByClassName("cur")[0].className = "";
      event.target.setAttribute("class", "cur");
      let ref = event.target.dataset.ref;
      this.part = ref;
    },
    closeModal: function() {
      this.modal = false;
    }
  }
};
</script>

 <style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_order_r {
  height: 900px;
  width: 811px;
  margin-left: 55px;
  margin: 0 auto;
  background-color: $white;
  .p02 {
	height: 50px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    .cur {
      border-bottom:2px solid #e7141a ;
      color: #e7141a ;
    }
    span {
      width: 100px;
      font-size: 14px;
      display: inline-block;
      text-align: center;
      line-height:50px;
	 cursor: pointer;
    }
  }
  .sum_of_class {
    background-color: #468ee3;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .div01 {
    border: 1px solid #ddd;
    margin: 20px 0;
    padding: 10px 10px;
    overflow: hidden;
    i {
      height: 30px;
    }
    ul {
      border-bottom: 1px dashed #ddd;
      margin-bottom: 10px;
    }
    li {
      margin: 10px 0;
    }
    li h4,
    li p,
    li span {
      font-size: 14px;
      float: left;
    }
    h4 {
      width: 130px;
      padding-left: 5px;
    }
    p {
      position: relative;
      height: 16px;
      width: 550px;
      margin: 0 10px;
      margin-top: 3px;
      background: #ddd;
      border-radius: 10px;
    }
    .p_i {
      background: #46dde3;
      height: 100%;
      border-radius: 10px;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    span {
      width: 70px;
      text-align: center;
    }
  }
  .div02 {
    margin: 20px 0;
    table{
      th,td{
        width: 140px;
        line-height: 40px;
        border: 1px solid #eee;
        text-align:center;
      }
    }
    h3 {
      background-color: #468ee3;
      border: none;
      height: 40px;
      padding-left: 15px;
      line-height: 40px;
      font-size: 14px;
      color: #fff;
      span {
        margin: 0 10px;
      }
      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url("../../assets/images/Sprite.png") -524px -331px;
        vertical-align: text-bottom;
      }
    }
  }
}
</style>
