<template>
  <div class="my_order_r">
    <h2>我的发票</h2>
    <div class="22">
      <ul class="ul02">
        <li class="head">
        	<i @click="change()" data-ref='all' :class="{ selected: all}"></i>全选
        	<select v-model="type" class="sel"><option>商品类型</option><option>线上课</option><option>答疑</option><option>图书</option><option>线下课</option></select></li>
        <li>状态</li>
        <li><select v-model="taxType" class="sel"><option>发票类型</option>
        	<option>普通发票</option><option>电子发票</option><option>专用发票</option></select></li>
        <li>操作</li>
      </ul>
      <p class="p01">
        <!-- <i @click="change()" data-ref='0' :class="{ selected: num1}"></i> -->
        <i @click="change()" data-ref="1" :class="{ selected: num2}"></i>
        <span class="span01">2017-08-31</span><span>订单号: 53196839876687913</span>
      </p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png"/><p>
        	企业所得税年度纳税申报表中隐藏的稽查陷阱</p></li>
        <li class="li02">已开</li>
        <li>
          <span>专用发票</span>
        </li>
        <li><router-link :to="{ name:'fapiao-detail' }">发票信息</router-link></li>
      </ul>
      <p class="p01">
        <!-- <i @click="change()" data-ref='1' :class="{ selected: num2}"></i> -->
        <i @click="change()" data-ref="1" :class="{ selected: num2}"></i><span class="span01">
        	2017-08-31</span><span>订单号: 53196839876687913</span>
      </p>
      <ul class="ul05">
        <li class="li01"><img src="../../assets/images/huanyuanzx02.png"/><p>
        	企业所得税年度纳税申报表中隐藏的稽查陷阱</p></li>
        <li>未开</li>
        <li><span>专用发票</span>
        </li>
        <li class="sqfp"><router-link :to="{ name:'fapiaoapp' }">申请发票</router-link></li>
      </ul>
      <div class="div_btn">
      	<i @click="change()" data-ref="1" :class="{ selected: num2}"></i>全选
        <input type="button" class="btn btn-1" value="删除订单"/>
        <input type="button" class="btn btn-2" value="去结算"/>
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
export default {
  name: "fapiao",
  data() {
    return {
      type: "商品类型",
      taxType: "发票类型",
      num2: "",
      all: "false"
    };
  },
  // 全选逻辑重新布局
  // 发票详情页面，带参(发票类型)跳转
  methods: {
    change: function() {
      let ref = event.target.dataset.ref;
      if (ref === "all") {
        if (this.num1 == this.num2 && this.num2 == this.num3) {
          this.num1 = !this.num1;
          this.num2 = !this.num2;
          this.num3 = !this.num3;
          this.all = !this.all;
        } else {
          this.num1 = true;
          this.num2 = true;
          this.num3 = true;
          this.all = true;
        }
      } else if (ref === "0") {
        this.num1 = !this.num1;
      } else if (ref === "1") {
        this.num2 = !this.num2;
      } else {
        this.num3 = !this.num3;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.selected {
  background-position: -101px -286px !important;
}
.sel {
  outline: none;
  border: none;
  width: 100px;
  height: 30px;
  margin-left: 20px;  
  background-color: #f0f0f0;
}
i {
  background-position:-177px -390px;
  margin-right: 5px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}
.btn {
  outline: none;
  width: 80px;
  height: 30px;
  cursor: pointer;
}
.div_btn{margin-top: 20px;
.btn-1 {
  border: 1px solid $border-dark;
  margin-left: 20px;
  background-color: $white;
}
.btn-2 {
  border: none;
  float: right;
  background-color: $btn-danger;
  color: $white;
  &:hover {
    background-color: $btn-danger-hover;
  }
}
}
.my_order_r {
  height: 900px;
  width: 800px;
  margin: 0 auto;
  background-color: $white;
  h2 {
    width: 100%;
    background: $bg-blue;
    height: 40px;
    font-weight: normal;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border: none;
    color: $white;
  }
}

.my_order_r .ul01 {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid $red;
  li {
    width: 128px;
    text-align: center;
    font-size: 18px;
    color: $black;
    float: left;
    padding: 20px 0 15px;
    cursor: pointer;
  }
  .li01 {
    color: $red;
    border-left: 0 none;
  }
}
.my_order_r .ul02{
  height: 35px;
  width: 100%;
  background: $bgcolor;
  margin: 14px 0;
  .head {
    width: 400px;
    text-align: left;
    margin-left: 10px;
    background-position: -101px -349px;
  }
  li {	
    width: 120px;
    text-align: center;
    font-size: 14px;
    float: left;
    line-height: 35px;
  }
}
.my_order_r .ul03,
.my_order_r .ul06 {
  height: 35px;
  width: 100%;
  margin: 26px 0 20px;
}

.my_order_r .ul03 li,
.my_order_r .ul06 li {
  padding: 0 15px;
  border-radius: 3px;
  margin: 0 20px;
  border: 1px $border-blue solid;
  text-align: center;
  font-size: 14px;
  color: $blue;
  float: left;
  line-height: 35px;
}

.my_order_r .ul03 .li01,
.my_order_r .ul06 .li01 {
  border: 0 none;
  padding: 0 15px 0 0;
}

.my_order_r .ul06 .li03 {
  color: $red;
  border: 0 none;
  padding: 0 0 0 290px;
}

.my_order_r .ul03 .li01 i,
.my_order_r .ul06 .li02 i {
  background-position: -101px -349px;
}

.my_order_r .p01 {
  width: 100%;
  background:#39f;
  line-height: 36px;
  color: $white;
  i {
    margin-left: 10px;
  background-position:-177px -388px;
  }
.span01 { margin-right: 5px; display: inline-block;
      color: $grey-white;
    }
}
.my_order_r .ul05 {
  height: 85px;
  width: 100%;
  border: 1px solid $border-dark;
  margin-bottom: 10px;
  box-sizing: border-box;
  .li02 {
    color: red;
  }
  .li01 {
    border-left: 0 none;
    width: 400px;
    text-align: left;
    margin-left: 10px;
    padding: 10px 0;
    img {
      float: left;
      padding: 5px;
      border: 1px solid $border-dark;
      float: left;
      width: 92px;
      height: 62px;
    }
    p {
      float: left;
      width: 270px;
      font-size: 14px;
      margin-left: 15px;
      display: inline-block;
    }
  }
  li.sqfp a{color: #4683EE;}
  li {
    width: 120px;
    line-height: 95px;
    text-align: center;
    color: $black;
    float: left;
    border-left: 1px solid $border-dark;
    a:hover {
      color: red;
    }
  }
}

.my_order_r .number {
  height: 34px;
  width: 80px;
  margin: 40px auto 0;
}

.my_order_r .number a {
  height: 34px;
  width: 34px;
  display: inline-block;
  text-align: center;
  line-height: 34px;
  color: $white;
  font-size: 14px;
  background: $btn-default;
  cursor: pointer;
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
</style>
