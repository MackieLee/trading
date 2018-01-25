<template>
  <div class="detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/book">图书</router-link>&nbsp;&gt;&nbsp;图书详情 b         
      </p>
    </div>
    <div class="product-msg">
      <div class="lf-content">
        <magnifier></magnifier>
        <ul>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
        </ul>
      </div>
      <div class="rc-content">
        <p class="title">【自营】土地增值税实战与案例精解</p>
        <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
        <p>作 &nbsp;&nbsp;&nbsp;  者：北京中经阳光税收筹划事务所</p>
        <p><span>出 版 社：中国市场出版社</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>出版时间：2012年07月</span></p>
        <p>适合人群：备考CPA审计的学员看官方教材云里雾里的学员</p>
        <p>数 &nbsp;&nbsp;&nbsp;&nbsp;  量：<span class="block" @click="count>1?count--:count">-</span><span class="block ctr">{{ count }}</span><span @click="count++" class="block">+</span></p>
        <p class="btn">
          <router-link tag="button" :to="{name:'pay'}" class="a" >立即购买</router-link>
          <button><i></i>加入购物车</button>
        </p>
      </div>
      <div  class="rt-content">
      		<h3>相关推荐</h3>
      	 <div class="div">      	 
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解</p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      	  <div class="div">      	 
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解</p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      </div>
    </div>
    <div class="book-box">
      <div class="title">
        <span></span>
        <font>相关视频</font>
        <a>更多>></a>
      </div>
      <div class="book-container">
        <div class="video-boxes">
          <div class="item">
            <div>
              <a class="video-cover"><img src="../../assets/images/九鼎财税01_33.png" />
                <span class="new">NEW</span>
              </a>
            </div>
            <p class="book-name">
              <a>土地增值税实战与案例</a>
              <span></span>
            </p>
            <p class="buss-info">￥
              <span class="current-price">51.00</span>
              <span class="grey">￥</span>
              <del class="grey origin-price">62.56</del>
              <a class="im-buy">购买</a>
            </p>
          </div>
          <div class="item">
            <div>
              <a class="video-cover"><img src="../../assets/images/九鼎财税01_35.png" />
                <span class="new">NEW</span>
              </a>
            </div>
            <p class="book-name">
              <a>土地增值税实战与案例</a>

            </p>
            <p class="buss-info">￥
              <span class="current-price">51.00</span>
              <span class="grey">￥</span>
              <del class="grey origin-price">62.56</del>
              <a class="im-buy">购买</a>
            </p>
          </div>
          <div class="item">
            <div>
              <a class="video-cover"><img src="../../assets/images/九鼎财税01_37.png" />
                <span class="new">NEW</span>
              </a>
            </div>
            <p class="book-name">
              <a>土地增值税实战与案例</a>
            </p>
            <p class="buss-info">￥
              <span class="current-price">51.00</span>
              <span class="grey">￥</span>
              <del class="grey origin-price">62.56</del>
              <a class="im-buy">购买</a>
            </p>
          </div>
          <div class="item">
            <div>
              <a class="video-cover"><img src="../../assets/images/九鼎财税01_39.png" />
                <span class="new">NEW</span>
              </a>
            </div>
            <p class="book-name">
              <a>土地增值税实战与案例</a>
            </p>
            <p class="buss-info">￥
              <span class="current-price">51.00</span>
              <span class="grey">￥</span>
              <del class="grey origin-price">62.56</del>
              <a class="im-buy">购买</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <p @click="toggle()">
        <span data-ref='1' class="cur">图书详情</span>
      </p>
      <div class="content" v-if="part=='1'">
      	<ul class="li01">
      		<li>版 次：1页</li>
      		<li>页 数：569</li>
      		<li>字 数：1页</li>
      		<li>印刷时间：2017年11月01日</li>
      		<li>开 本：16开</li>
      		<li>纸 张：胶版纸</li>
      		<li>包 装：平装-胶订</li>
      		<li>是否套装：否</li>
      		<li>国际标准书号ISBN：9787119111612</li>
      	</ul>
      	<div class="div01">
      		<h3>作者简介</h3>
      		<p class="p">《注册会计师法》规定，国家实行注册会计师全国统一考试制度。注册会计师全国统一考试制度已经成为注册会计师行业资格准人的重要环节，在引导会计专业人才健康成长、评价会计专业人才资质能力、建设会计专业人才队伍等方面发挥了不可替代的作用。
    注册会计师全国统一考试分为专业阶段和综合阶段两个阶段。专业阶段主要测试考生是否具备注册会计师执业所需要的专业知识，是否掌握基本的职业技能和职业道德规范，设会计、审计、财务成本管理、公司战略与风险管理、经济法、税法6科。综合阶段主要测试考生是否具备在职业环境中综合运用专业学科知识，坚守职业价值观、遵循职业道德、坚持职业态度，有效解决实务问题的能力，设职业能力综合测试科目，分成试卷一和试卷二。
    为有效指导考生进行复习备考，我们组织专家编写了专业阶段6个科目的考试辅导教材和《经济法规汇编》；同时，分科汇编了近5年专业阶段和综合阶段的考试试题。本套教材作为注册会计师考试质量保证体系改革的重要成果，按照理论性、科学性、全面性、实践性、可读性的质量要求进行了全面修订，旨在帮助考生系统理解和掌握基本原理，培养考生的专业思维和分析问题、解决问题的能力。本套教材以读者掌握大学会计等相关专业本科以上专业知识为基准，力求体现注册会计师考试制度改革的总体目标。
</p>
		<h3>目 录</h3>
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
<a href="###" class="a">查看更多>></a>
      	</div>
      </div>
    </div>
  
  </div>
</template>
<script>
import magnifier from "../magnifier/Magnifier";
export default {
  components: { magnifier },
  data() {
    return {
      part: "1",
      count: 1
    };
  },
  methods: {
    toggle() {
      document.getElementsByClassName("cur")[0].className = "";
      event.target.setAttribute("class", "cur");
      let ref = event.target.dataset.ref;
      this.part = ref;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.detail {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .cur-posi {
    margin-bottom: 26px;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .product-msg {
    height: auto; margin-bottom: 20px;
    display: flex;
    .lf-content {
      margin-right: 70px;
      li {
        margin-top: 10px;margin-right: 8px;
        cursor: pointer;
        img{width: 50px;height: 50px; }
      }
    }
     .rt-content {
      margin-left: 70px;
       width: 160px;text-align: center;
       h3{ height: 40px; 
    line-height: 40px; border-bottom: 1px solid #ccc;
    font-size: 12px; margin-bottom:10px;
    font-weight: bold;
       }
       .div{border: 1px solid #ccc; padding: 8px; margin: 5px 0;
       	p{margin: 5px 0; }
       	.price{font-size: 16px;color: #e7141a;margin:0;}
       	del,span{font-size: 12px;color: #333;}
       }
      img{
        width:140px; height:70px;
      }
    }
    .rc-content {
      width: 460px;
      .block{
        display: inline-block;
        width: 25px;
        line-height: 25px;
        border: 1px solid $border-dark;
        text-align: center;
        cursor: pointer;
        &+.ctr{
          border-left: none;
          border-right: none;
          cursor: auto;
        }
      }
      p {
        margin-bottom: 18px; font-size: 14px;
      }
      .title {
        padding-bottom: 18px;
        font-size: 16px;
        border-bottom: 1px solid $border-rice;
      }
      .price {
        height: 56px;
        background-color: $bg-nav;
        line-height: 56px;
        font-size: 22px;
        color: $red;
        padding-left: 20px;
        margin: 10px 0 25px 0;
        del,span {
          font-size: 16px;
          color:#999;
          margin-left: 5px;
        }
       
      }
      button {
        background-color: $red;
        border-radius: 3px;
        outline: none;
        border: none;
        color: $white;
        margin-top: 30px;
        padding: 0px 13px;
        cursor: pointer;
        line-height: 34px;
        margin-right: 10px;
      }
      i {
        background-position: -185px -195px;
        margin-right: 6px;
        position: relative;
        top: 2px;
      }
    }
  }
  .title {
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid $border-rice;
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
      right: 0; padding-right: 10px;
    }
  }
  .video-boxes {
    width: $width;
    margin: 35px auto 0px;
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
    p {
      border-bottom: 1px solid $red;
      overflow: hidden;
      span {
        float: left;
        color: $black;
        padding:9px 16px;
        cursor: pointer;
      }
      span[class="cur"] {
        background-color: $red;
        color: $white;
      }
    }
    .content {  overflow:hidden ; 
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
    height: 26px;}
      }
      .div01{ margin: 10px 0;
      	h3{ border-bottom: 2px solid #e5e5e5;
    height: 22px;
    border-left: 2px solid #ff2832;
    padding: 0 30px 0 6px;}
    .p{text-indent: 32px;}
     p{  margin:10px 0; border: none; color: #656565;line-height: 32px;
    padding: 5px 10px; font-size: 14px;}
    .a{color: #117cee;float: right;}
      }
    }
  }
}
</style>
