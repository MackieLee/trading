<template>
  <div class="my_order_r">
  	<div class="modal-outer" v-show="pingjia">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <modal @showTip="showTip" @closeModal="closeModal"></modal>
    </div>
    <div v-show="tip" class="tip">
      谢谢你的评价
    </div>
    <h2>我的订单</h2>
    <ul class="ul01">
      <li @click="toggle()" class="li01" data-ref="1">所有订单</li>
      <li @click="toggle()" data-ref="2">待付款(1)</li>
      <li @click="toggle()" data-ref="3"> 已完成</li>
      <li @click="toggle()" data-ref="4"> 待评价(5)</li>
    </ul>
    <ul class="ul02">
      <li class="li01">报名信息 </li>
      <li class="li02">单价</li>
      <li class="li03">类型</li>
      <li class="li04">实付款</li>
      <li class="li05">交易状态</li>
      <li class="li06">操作</li>
    </ul>
   <div class="container" v-if="part=='1'">
   	<div class="item">
        <p class="p01">订单号: 53196839876687913<i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">等待付款</span>
          <router-link :to="{ name:'dingdanxq' }" git="p" class="jindu">订单详情 </router-link>
         </li>
         <li class="li06">
         	<span class="zcgm">付款</span>
          <p class="jindu">取消订单 </p>
         </li>
        </ul>
      </div>
   	  <div class="item">
        <p class="p01">订单号: 53196839876687913<i>2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">已取消</span>
          <router-link :to="{ name:'dingdanxq' }" git="p" class="jindu">订单详情 </router-link>
         </li>
         <li class="li06">
         	<span class="zcgm">立即购买</span>
          <p class="jindu"> </p>
         </li>
        </ul>
      </div>
   	  <div class="item">
        <p class="p01">订单号: 53196839876687913<i >2017-08-31</i></p>
        <ul>
          <li class="li01">
          	<img src="../../assets/images/huanyuanzx02.png">
          	 <span>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
          	 </span>
         </li>
         <li class="li02">¥988.00</li>
         <li class="li03">视频</li>
         <li class="li04">¥588.00</li>
         <li class="li05">
         	<span class="zcgm">已付款</span>
          <router-link :to="{ name:'dingdanxq' }" git="p" class="jindu">订单详情 </router-link>
         </li>
         <li class="li06">
         	<span class="zcgm">已付款</span>
          <p class="jindu" @click="pingjia=!pingjia">立即评价</p>
         </li>
        </ul>
      </div>
   </div>
   <div class="container" v-if="part=='2'">
    <div>
      <el-table
        :data="tableData6"
        :span-method="arraySpanMethod"
        :row-style="subTitle"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          sortable
          label="数值 1">
        </el-table-column>
        <el-table-column
          prop="amount2"
          sortable
          label="数值 2">
        </el-table-column>
        <el-table-column
          prop="amount3"
          sortable
          label="数值 3">
        </el-table-column>
      </el-table>
    </div>
   </div>
    <div class="container" v-if="part=='3'"></div>
    <div class="container" v-if="part=='4'"></div>

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
import Modal from "./dingd_modal";
export default {
  name: "dingdan",
  components: { Modal },
  data() {
    return {
      num1: false,
      num2: false,
      num3: false,
      all: false,
      part: "1",
      pingjia: false,
      series: true,
      tip: false,
      tipMsg: "",
      tableData6: [{
        id: '12987122'
      }, {
        id: '12987123',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124'
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126'
      }]
    };
  },
  methods: {
    toggle() {
      document.getElementsByClassName("li01")[0].className = "";
      let attr = event.target.getAttribute("class");
      if (attr != "ul01") {
        event.target.setAttribute("class", "li01");
      }
      let ref = event.target.dataset.ref;
      this.part = ref;
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 5];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    subTitle({row,rowIndex}){
      if(rowIndex % 2 === 0){
        return {
          'backround-color': 'red'
        }
      }else{
        return ''
      }
    },
    showTip: function() {
      this.pingjia = false;
      this.tip = true;
      setTimeout(() => {
        this.tip = false;
      }, 1500);
    },
    closeModal: function() {
      this.pingjia = false;
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.sub-title{
  background-color: red;
}
.tip {
  width: 100px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(0, 0, 0, 0.9);
  color: $white;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 36%;
}
.fixed {
  overflow: hidden;
  position: fixed;
  top: 20%;
  width: 100%;
}
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

.my_order_r {
  height: auto;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
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
.my_order_r h2 {
  widows: 100%;
  background: $bg-blue;
  height: 40px;
  font-weight: normal;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: $white;
}

.my_order_r .ul01 {
  height: 30px;
  line-height: 30px;
  width: 100%;
  border-bottom: 1px solid $red;
  padding-top: 10px;
}

.my_order_r .ul01 li {
  width: 100px;
  text-align: center;
  border-right: 1.5px solid #999;
  color: $black;
  float: left;
  cursor: pointer;
}
.my_order_r .ul01 .li01 {
  color: $red;
}
.my_order_r .ul02 {
  height: 36px;
  width: 100%;
  background: #ddd;
  margin: 14px 0;
  li {
    width: 12%;
    text-align: center;
    font-size: 14px;
    color: #333;
    float: left;
    line-height: 36px;
  }
  .li01 {
    width: 46%;
  }
  .li02 {
    width: 11%;
  }
  .li03 {
    width: 8%;
  }
  .li05 {
    width: 10%;
  }
}
.my_order_r .number {
  height: 36px;
  width: 80px;
  margin: 40px auto 0;
}

.my_order_r .number a {
  height: 36px;
  width: 34px;
  display: inline-block;
  text-align: center;
  line-height: 36px;
  color: $white;
  font-size: 14px;
  background: $btn-default;
}
/*   */
.container {
  margin-bottom: 20px;
  .item {
    margin-bottom: 20px;
    .p01 {
      background-color: $bg-blue;
      border: none;
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      text-indent: 1em;
      color: $white;
      i {
        color: #e8e8e8;
        font-style: normal;
        padding-left: 10px;
      }
    }
    ul {
      overflow: hidden;
      border: 1px solid #ddd;
      li {
        float: left;
        border-right: 1px solid #ddd;
        height: 76px;
        padding: 10px 10px;
      }
      .li01 {
        width: 44%;
        img {
          float: left;
          width: 92px;
          padding: 5px;
          height: 62px;
          border: 1px solid #ddd;
        }
        span {
          width: 56%;
          line-height: 30px;
          float: left;
          font-size: 14px;
          margin: 5px 10px 0;
          display: block;
          span {
            display: block;
            font-weight: normal;
          }
        }
      }
      .li02,
      .li03,
      .li04 {
        width: 8%;
        line-height: 80px;
        text-align: center;
      }
      .li03 {
        width: 6%;
      }
      .li05 {
        line-height: 30px;
        text-align: center;
        width: 8%;
        .zcgm {
          display: block;
          margin: 10px 0;
          color: #e7141a;
        }
        .jindu {
          color: $light-blue;
        }
      }
      .li06 {
        border: 0 none;
        .zcgm {
          display: block;
          margin: 5px 0 15px;
          color: #fff;
          width: 80px;
          text-align: center;
          border-radius: 3px;
          height: 30px;
          line-height: 30px;
          background-color: #f84141;
          cursor: pointer;
        }
        span:hover {
          background-color: #e7141a;
        }
        .jindu {
          color: $light-blue;
          text-indent: 1em;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
