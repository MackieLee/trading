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
      <div class="div01">
      	<img src="../../assets/images/jifen01.png">
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
import magnifier from "../magnifier/Magnifier";
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
       margin-top: 10px;margin-right: 8px;cursor: pointer;
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
    .div01{
    margin-top:20px;
    line-height: 35px;
    font-size: 14px;
    padding: 15px 10px 20px;
    border: 1px solid #fbc081;
    margin-top: 15px;   
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
