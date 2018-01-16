<template>
  <div class="detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税&nbsp;&gt;</router-link>&nbsp;
        <router-link to="/jfsc">积分商城&nbsp;&gt;</router-link>&nbsp;兑换详情
      </p>
    </div>
    <div class="product-msg">
      <div class="lf-content">
        <magnifier></magnifier>
        <ul>
          <li>
             <img src="../../assets/images/jifen02.jpg" />
          </li>
          <li>
            <img src="../../assets/images/jifen02.jpg" />
          </li>
          <li>
           <img src="../../assets/images/jifen02.jpg" />
          </li>
          <li>
            <img src="../../assets/images/jifen02.jpg" />
          </li>
          <li>
            <img src="../../assets/images/jifen02.jpg" />
          </li>
        </ul>
      </div>
      <div class="rt-content">
        <p class="title">DP久量可折叠LED护眼台灯685</p>
        <p class="tip">重要提示：产品如有质量问题或使用咨询，请联系第三方</p>
        <p class="pjf">积 &nbsp;&nbsp;&nbsp;分：<span class="price">11250</span></p>
        <p>配 送 至：
          <select v-model="provId" @click="selectProvince(provId)">
            <option v-for="(item,index) in province" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select v-model="areaId" @click="selectArea(areaId)">
            <option v-for="(item,index) in area" :key="item.name" :value="index">
              {{ item.name }}
            </option>
          </select>
          <select>
            <option v-for="item in city" :key="item.name">
              {{ item.name }}
            </option>
          </select>
        </p>
        <p>

          <input v-show="false" id="mingxi" v-model="mingxi" value="mingxi" type="radio"/>
        </p>
        <p>选择颜色：
          <label :class="{'rd-border':mingxi === 'mingxi' }" class="mingxi border" for="mingxi">
            黑色
            <i></i>
          </label>
          <label :class="{'rd-border':mingxi === 'baise' }" class="mingxi border" for="mingxi">
            白色
            <i></i>
          </label>
        </p>
        <p>数 &nbsp;&nbsp;&nbsp;&nbsp;  量：<span class="block" @click="count>1?count--:count">-</span><span class="block ctr">{{ count }}</span><span @click="count++" class="block">+</span></p>
        <p class="btn">
          <router-link tag="button" :to="{name:'pay'}" class="a" >兑 &nbsp;换</router-link>
        </p>
      </div>
      <div  class="rtt-content">
      		<h3>相关推荐</h3>
      	 <div class="div">      	 
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>5元充值卡</p>
      	 <p class="price"><span>积分</span>1000
        </p>
      	 </div>
      	  <div class="div">      	 
      	 	<img src="../../assets/images/huanyuanzx02.png">
					<p>5元充值卡</p>
      	 <p class="price"><span>积分</span>1000
        </p>
      	 </div>
      </div>
    </div>
    <div class="comment">    
      <div class="content" v-if="part=='1'">
      	 <p @click="toggle()">
        <span data-ref='1' class="cur">商品介绍</span>
      </p>
      <div class="content_div">
		      <div class="div01">
		      		<h3>基础信息</h3>
		      	<ul class="li01">
		      		<li>产品名称：DP久量可折叠LED护眼台灯685</li>
		      		<li>光源功率：1.8W</li>
		      		<li>充电时间：2H</li>
		      		<li>产品品牌：久量</li>
		      		<li>额定电压：16开</li>
		      		<li>使用时间：12H</li>
		      		<li>电池容量：700AH</li>
		      		<li>电流额定：否</li>
		      		<li>LED灯数：9787119111612</li>
		      	</ul>
		      	<h3>产品详情</h3>
						 <p class="p">《注册会计师法》规定，国家实行注册会计师全国统一考试制度。注册会计师全国统一考试制度已经成为注册会计师行业资格准人的重要环节，在引导会计专业人才健康成长、评价会计专业人才资质能力、建设会计专业人才队伍等方面发挥了不可替代的作用。
						    注册会计师全国统一考试分为专业阶段和综合阶段两个阶段。专业阶段主要测试考生是否具备注册会计师执业所需要的专业知识，是否掌握基本的职业技能和职业道德规范，设会计、审计、财务成本管理、公司战略与风险管理、经济法、税法6科。综合阶段主要测试考生是否具备在职业环境中综合运用专业学科知识，坚守职业价值观、遵循职业道德、坚持职业态度，有效解决实务问题的能力，设职业能力综合测试科目，分成试卷一和试卷二。
						    为有效指导考生进行复习备考，我们组织专家编写了专业阶段6个科目的考试辅导教材和《经济法规汇编》；同时，分科汇编了近5年专业阶段和综合阶段的考试试题。本套教材作为注册会计师考试质量保证体系改革的重要成果，按照理论性、科学性、全面性、实践性、可读性的质量要求进行了全面修订，旨在帮助考生系统理解和掌握基本原理，培养考生的专业思维和分析问题、解决问题的能力。本套教材以读者掌握大学会计等相关专业本科以上专业知识为基准，力求体现注册会计师考试制度改革的总体目标。
						</p>
						      		<p>第一章税法总论<br>
						第一节税法的概念<br>
						第二节税法原则<br>
						第三节税法要素<br>
						第四节税收立法与我国现行税法体系<br>
						第五节税收执法<br>
						第六节税务机关和纳税人的权利与义务<br>
						第七节国际税收关系<br>
						第二章增值税法<br>
						第一节征税范围与纳税义务人<br>
						第二节一般纳税人、小规模纳税人的资格登记及管理<br>
						第三节税率与征收率<br>
						第四节增值税的计税方法<br>
						第五节一般计税方法应纳税额的计算
						</p>	
		      	<img src="../../assets/images/jifen01.png">
		      	<a href="###" class="a">查看更多>></a>
		      </div>
       </div> 
      </div>
      <div class="content01" v-if="part=='1'">
      	 <p @click="toggle()">
        <span data-ref='1' class="cur">相关推荐</span>
      </p>
      <div class="div01">
      	<a class="a01">
          <img src="../../assets/images/jifen02.jpg"/>
            <h4>DP久量可折叠LED护眼台灯685</h4>
            <h4><span class="rd">11250</span>积分</h4>
        </a>
        <a class="a01">
          <img src="../../assets/images/jifen02.jpg"/>
            <h4>DP久量可折叠LED护眼台灯685</h4>
            <h4><span class="rd">11250</span>积分</h4>
        </a>
        <a class="a01">
          <img src="../../assets/images/jifen02.jpg"/>
            <h4>DP久量可折叠LED护眼台灯685</h4>
            <h4><span class="rd">11250</span>积分</h4>
        </a>
      </div>       
      </div>
       
    </div>
  </div>
</template>
<script>
import magnifier from "../magnifier/Magnifier_c";
const PROVINCE = require("../../assets/全国省市.json");
export default {
  components: { magnifier },
  data() {
    return {
      part: "1",
      count: 1,
      mingxi: "mingxi",
      province: PROVINCE,
      provId: "0",
      areaId: "0",
      area: [{ name: "请选择" }],
      city: [{ name: "请选择" }]
    };
  },
  methods: {
    toggle() {
      document.getElementsByClassName("cur")[0].className = "";
      event.target.setAttribute("class", "cur");
      let ref = event.target.dataset.ref;
      this.part = ref;
    },
    selectProvince: function(value) {
      this.area = this.province[value].sub;
    },
    selectArea: function(value) {
      if (this.area[value]) {
        this.city = this.area[value].sub;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.detail {width:1090px;
  margin:0 auto;
  // border-top: 1px solid $border-rice;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .cur-posi {
    border-bottom: none;  margin: 20px 0;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .border {
    display: inline-block;
    border: 1px solid $border-dark;
    height: 25px;
    line-height: 25px;
    text-align: center;
    position: relative;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .product-msg {
    height:auto; margin-bottom: 20px;
    display: flex;
   .lf-content{
      margin-right:70px;
      ul{
      	li {
       margin-top: 10px; border: 1px solid #ddd;
       margin-right: 6px;cursor: pointer;
       img{width: 50px;}
      }
      }
      
    }
     .rtt-content {
      margin-left: 90px;
       width: 160px;text-align: center;
       h3{ height: 40px; 
    line-height: 40px; border-bottom: 1px solid #ccc;
    font-size: 12px; margin-bottom:10px;
    font-weight: bold;
       }
       .div{border: 1px solid #ccc; padding: 8px; margin:10px 0;
       	p{margin: 5px 0; }
       	.price{font-size: 16px;color: #e7141a;margin:0;}
       	span{font-size: 12px;color: #333;}
       }
      img{
        width:140px; height:80px;
      }
    }
    .rt-content {
      width: 400px;
      .block {
        display: inline-block;
        width: 25px;
        line-height: 25px;
        border: 1px solid $border-dark;
        text-align: center;
        cursor: pointer;
        & + .ctr {
          border-left: none;
          border-right: none;
          cursor: auto;
        }
      }
      p {
        margin-bottom: 18px;
      }
      .pjf{ height: 56px;
    background-color: #eaeaea;
    line-height: 56px;
    padding-left: 20px;
    margin: 10px 0 25px 0;}
      .price {
        font-size: 22px;
        color: red;
      }
      button {
        background-color: $red;
        border-radius: 3px;
        outline: none;
        border: none;
        color: $white;
        margin-top: 24px;
        padding: 0px 13px;
        cursor: pointer;
        line-height: 34px;
      }
      i[class="shopping"] {
        background-position: -185px -195px;
        margin-right: 6px;
        position: relative;
      }
      .mingxi {
        padding: 0 10px;
        cursor: pointer;
        margin-right: 5px;
        i {
          display: none;
        }
      }
      .rd-border {
        border: 1px solid $red;
        i {
          display: block;
          position: absolute;
          height: 20px;
          width: 20px;
          background-image: url("../../assets/images/Sprite.png");
          background-position: 45px -82px;
          bottom: -1px;
          right: -1px;
        }
      }
    }
  }
  .tip {
    padding-bottom: 10px;
    border-bottom: 1px solid #fbc081;
  }
  select {
    width: 70px;
    height: 25px;
    margin-right: 14px;
  }
  .title {
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    position: relative;
    font-size: 16px;
    span {
      padding: 4px 19px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-position: -5px -253px;
    }
    font {
      font-size: 18px;
      font-weight: 450;
    }
    a {
      font-size: 14px;
      position: absolute;
      right: 0;
    }
  }
  .video-boxes {
    width: $width;
    margin: 35px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-cover {
      position: relative;
    }
    .item {
      border: 1px solid $red;
      padding: 8px;
      margin-bottom: 32px;
      position: relative;
      .new {
        padding: 2px 4px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 0;
        bottom: 3px;
      }
      .book-name {
        margin: 15px 0 20px 0;
        a {
          margin-right: 30px;
          font-size: 16px;
        }
      }
      .buss-info {
        font-size: 14px;
        color: $red;
        .current-price {
          font-size: 22px;
          margin-right: 10px;
        }
        .grey {
          color: $dark;
        }
        .im-buy {
          padding: 8px 12px;
          background-color: $red;
          color: $white;
          font-size: 10px;
          position: absolute;
          right: 15px;
        }
      }
    }
  }
  .comment {
  	width:100%; overflow: hidden;
    .content{float: left; width:800px;
      p {
      border-bottom: 1px solid $red;
      overflow: hidden;
      span {
        float: left; background-color: $red;
        color: $white;
        padding: 11px 16px;
        cursor: pointer;
    }
    }
     .content_div{ border: 1px solid #fbc081; 
     overflow:hidden ; 
      line-height: 35px;
      font-size: 14px;
      padding: 15px 10px 20px;
      border: 1px solid $border-rice;
      margin-top: 15px;
      .li01{width: 100%;overflow: hidden;
       li{ padding-left:10px;
    width: 33%;
    float: left;
    line-height: 26px;
    height: 26px;
    }
      }
      .div01{
      	h3{ border-bottom: 2px solid #e5e5e5;  margin:10px 0;
    height: 22px;
    border-left: 2px solid #ff2832;
    padding: 0 30px 0 6px;}
    .p{text-indent: 32px;}
     p{ border: none; color: #656565;line-height: 32px;
    padding: 5px 10px; font-size: 14px;}
    .a{color: #117cee;float: right;}
      }
     }
    }
    .content01{float: left; width:160px;margin-left: 70px;
    .div01{
   overflow: hidden;
    line-height: 35px;
    font-size: 14px;
    margin-top: 15px;
    .a01{
        float: left;
        width:158px;
        height: 235px; margin:8px 0;
        border: 1px solid $border-dark;
        position: relative;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        h4{margin:8px;font-size: 12px;}
        .rd {
        color: red;font-size: 14px;margin-right: 5px;
    font-weight: bold;
      }
        img {
          width: 140px;
          height: 140px;
        }
      
    }
    	}
      p {
      border-bottom: 1px solid $red;
      overflow: hidden;
      span {
        float: left; background-color: $red;
        color: $white;
        padding: 11px 16px;
        cursor: pointer;
      }
    }
    }
    
  }
}
</style>
