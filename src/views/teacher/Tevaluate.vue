<template>
	<div class="my_order_r">
		<div class="sum_of_class">学员评价</div>
			<p class="p02">
        <span @click="toggle()" data-ref='1' class="cur">综合评价</span>|
        <span @click="toggle()" data-ref='2'>课程评分</span>|
        <span @click="toggle()" data-ref='3'>答疑评分</span>|
        <span @click="toggle()" data-ref='4'>订单评分</span>
      </p>
		<div class="container div01" v-if="part=='1'">
			<ul class="ul01">
				<li>
					<h4>课程设置是否合理</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>政策更新是否及时</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>课程是否实用</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>老师授课水平</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>课程设置是否合理</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

			</ul>

			<ul class="ul01">
				<li>
					<h4>回答是否准确</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>回答是否完整</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>答案是否实用</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>政策是否过时</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

				<li>
					<h4>对您是否有用</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

			</ul>

			<ul class="ul01">
				<li>
					<h4>商品是否满意</h4>
					<p>
					<i class="p_i"></i>
					</p>
					<span>4.5</span>
				</li>

			</ul>

	  </div>

    <div class="container div02" v-if="part=='2'">
    	<h3>课程评分<span>5.0</span><i></i></h3>
    	<p class="p1">
    		<span class="span1">分数/周期</span>
    		<span>最近一周</span>
    		<span>最近一个月</span>
    		<span>最近六个月</span>
    		<span>六个月以前</span>
    		<span>总计</span>
    	</p>
     	<p class="p1">
    		<span class="span1">5</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">4</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">3</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">2</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">1</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">总计</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>

    </div>
    <div class="container div02" v-if="part=='3'">
    	<h3>答疑评分<span>5.0</span><i></i></h3>
    	<p class="p1">
    		<span class="span1">分数/周期</span>
    		<span>最近一周</span>
    		<span>最近一个月</span>
    		<span>最近六个月</span>
    		<span>六个月以前</span>
    		<span>总计</span>
    	</p>
     	<p class="p1">
    		<span class="span1">5</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">4</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">3</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">2</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">1</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">总计</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>

    </div>
    <div class="container div02" v-if="part=='4'">
    	<h3>订单评分<span>5.0</span><i></i></h3>
    	<p class="p1">
    		<span class="span1">分数/周期</span>
    		<span>最近一周</span>
    		<span>最近一个月</span>
    		<span>最近六个月</span>
    		<span>六个月以前</span>
    		<span>总计</span>
    	</p>
     	<p class="p1">
    		<span class="span1">5</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">4</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">3</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">2</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
      	<p class="p1">
    		<span class="span1">1</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>
    	<p class="p1">
    		<span class="span1">总计</span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    		<span></span>
    	</p>

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
      series: true
    };
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
		margin: 10px 0 20px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    .cur {
      border-bottom: 1px solid #e7151b;
      color: #e7151b;
    }
    span {
      width: 80px;
      display: inline-block;
      text-align: center;
      line-height: 30px;
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
      width: 90%;
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
    .p1 {
      border-left: 1px solid #ddd;
      overflow: hidden;
      span {
        display: block;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        width: 140px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        float: left;
      }
      .span1 {
        width: 104px;
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
