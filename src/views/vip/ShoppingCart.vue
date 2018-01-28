<template>
  <div class="my_order_r">
    <h2>购物车</h2>
    <div class="head">
      <div class="all">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
        <!-- <span>删除</span> -->
      </div>
      <div class="title">
        <span class="fl">播单</span>
        <span class="fr" style="text-align:center">操作</span>
        <span class="fr">视频数</span>
      </div>
      <div style="height:20px;"></div>
    </div>
    <div class="upload-box">
      <CheckboxGroup v-model="bodanDel" @on-change="bodanDelChange">
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'1'"><span style="display:none"></span></Checkbox><span class="date">2017-08-31</span> 订单号:324151234134132</th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
          <td width="300">秃顶增值税清算土地增值税清算</td>
          <td width="100">￥4588.00</td>
          <td width="100">视频</td>
          <td width="100">应付 ￥4588.00</td>
          <td width="120"><Button type="error">立即付款</Button></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'1'"><span style="display:none"></span></Checkbox><span class="date">2017-08-31</span> 订单号:324151234134132</th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
          <td width="300">秃顶增值税清算土地增值税清算</td>
          <td width="100">￥4588.00</td>
          <td width="100">视频</td>
          <td width="100">应付 ￥4588.00</td>
          <td width="120"><Button type="error">立即付款</Button></td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'1'"><span style="display:none"></span></Checkbox><span class="date">2017-08-31</span> 订单号:324151234134132</th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
          <td width="300">秃顶增值税清算土地增值税清算</td>
          <td width="100">￥4588.00</td>
          <td width="100">视频</td>
          <td width="100">应付 ￥4588.00</td>
          <td width="120"><Button type="error">立即付款</Button></td>
        </tr>
      </table>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
  data() {
    return {
      classes:['1'],//全部数据
      bodanDel:[],
      blankChoosen:['1'],//全部数据的id
      indeterminate:false,
      checkAll:false,
    }
  },
  methods: {
    shoucang:function(){
      // axios 获取收藏状态
    },
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.bodanDel = this.blankChoosen
      } else {
        this.bodanDel = []
      }
    },
    bodanDelChange (data) {
      if (data.length === this.classes.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    onload(){
      // let res = loginUserUrl('getOnline_Courses',{
      //   username: "niuhongda",
      //   password: "123123q",
      //   page:this.pageNum,
      //   num:8
      // }).then((res)=>{
      //   let obj = Object.entries(res.data).slice(0,-2)
      //   this.classes = obj
      //   this.total = parseInt(res.data.counts)
      //   for(let i = 0;i<obj.length;i++){
      //     this.blankChoosen.push(obj[i][1].id)
      //   }
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_order_r{
  h2{
    background-color: $blue;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
  }
}
.head {
  .title {
    background-color: $bg-nav;
    line-height: 35px;
    overflow: hidden;
    span {
      width:105px;
      text-align: center;
    }
  }
}
.all{
  line-height:35px;
  margin: 15px 0;
  label{
    margin:0 15px 0 10px;
  }
  span{
    padding: 5px 15px;
    margin-left: 10px;
    border: 1px solid $border-dark;
  }
}
.upload-box {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  .ivu-checkbox-inner{
    border-color:#fff !important;
  }
  table {
    th {
      font-weight: bold;
      color: #fff;
      text-align: left;
      background-color: #308CEE;
      line-height: 30px;
      padding-left: 10px;
      .date {
        color: $dark;
        margin: 36px 20px;
      }
    }
    td {
      text-align: center;
      border-right: 1px solid #ddd;
      p {
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
