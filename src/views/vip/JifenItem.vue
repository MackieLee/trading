<template>
  <div class="detail">
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
        </ul>
      </div>
      <div class="rt-content">
        <p class="title">美的Midea电饼铛JHN30F家用双面加热煎饼机</p>
        <p class="tip">重要提示：产品如有质量问题或使用咨询，请拨打售后服务热线：4000 359 159</span></p>
        <p>积 &nbsp;&nbsp;&nbsp;  分：<span class="price">5000</span></p>
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
          选择型号：
          <label :class="{'rd-border':mingxi === 'mingxi' }" class="mingxi border" for="mingxi">
            厉害了我的煎饼机
            <i></i>
          </label>
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
          <router-link tag="button" :to="{name:'pay'}" class="a" >立即购买</router-link>
          <button><i class="shopping"></i>加入购物车</button>
        </p>
      </div>
    </div>
    <div class="comment">
      <p @click="toggle()">
        <span data-ref='1' class="cur">商品介绍</span>
        <span data-ref='2'>规格参数</span>
        <span data-ref='3'>评论(189)</span>
      </p>
      <div class="content" v-if="part=='1'">
        本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。
      </div>
      <div v-if="part=='2'">2</div>
      <div v-if="part=='3'">3</div>
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
.detail {
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
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
    height: 460px;
    display: flex;
    .lf-content {
      // margin: 0 172px 0 56px;
      margin-right: 20px;
      li {
        margin-top: 10px;
        cursor: pointer;
      }
    }
    .rt-content {
      width: 472px;
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
      .price {
        font-size: 22px;
        color: #e40077;
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
    color: #e40077;
    padding-bottom: 5px;
    border-bottom: 1px solid #f0f0f0;
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
    p {
      border-bottom: 1px solid $red;
      overflow: hidden;
      span {
        float: left;
        color: $black;
        padding: 10px 16px;
        cursor: pointer;
      }
      span[class="cur"] {
        background-color: $red;
        color: $white;
      }
    }
    .content {
      text-indent: 32px;
      line-height: 35px;
      font-size: 14px;
      padding: 15px 10px 20px;
      border: 1px solid $red;
    }
  }
}
</style>
