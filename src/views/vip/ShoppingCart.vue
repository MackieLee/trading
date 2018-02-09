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
        <span class="fl">商品信息</span>
         <span class="fr">单价（元）</span>
         <span class="frr">数量</span>
         <span class="fr">实付金额（元）</span>
        <span class="fr" style="text-align:center">操作</span>
      </div>
      <div style="height:20px;"></div>
    </div>
    <div class="upload-box">
      <CheckboxGroup v-model="bodanDel" @on-change="bodanDelChange">
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'1'"><span style="display:none"></span></Checkbox>
          			订单号:324151234134132<span class="date">2017-08-31</span>
          			<span style="cursor:pointer; float: right; margin-right: 20px;">删除</span>
          </th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
          <td width="310" style="text-align:left; text-indent:1em;">2016国家税务总局42号公告解读之关联申报管理</td>
          <td width="110">￥4588.00</td>
          <td width="60">1</td>
          <td width="110">￥4088.00</td>
          <td width="110"><Button type="error">立即付款</Button></td>

          <!-- 函数传参item.id -->
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'2'"><span style="display:none"></span></Checkbox>
          			订单号:324151234134132<span class="date">2017-08-31</span>
          			<span style="cursor:pointer; float: right; margin-right: 20px;">删除</span>
          </th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
          <td width="310" style="text-align:left; text-indent:1em;">2016国家税务总局42号公告解读之关联申报管理</td>
          <td width="110">￥4588.00</td>
          <td width="60">1</td>
          <td width="110">￥4088.00</td>
          <td width="110"><Button type="error">立即付款</Button></td>

          <!-- 函数传参item.id -->
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="6"><Checkbox :label="'3'"><span style="display:none"></span></Checkbox>
          			订单号:324151234134132<span class="date">2017-08-31</span>
          			<span style="cursor:pointer; float: right; margin-right: 20px;">删除</span>
          </th>
        </tr>
        <tr>
          <td><img src="../../assets/images/huanyuanzx02.png"/></td>
           <td width="310" style="text-align:left; text-indent:1em;">2016国家税务总局42号公告解读之关联申报管理</td>
          <td width="110">￥4588.00</td>
          <td width="60">1</td>
          <td width="110">￥4088.00</td>
          <td width="110"><Button type="error">立即付款</Button></td>

          <!-- 函数传参item.id -->
        </tr>
      </table>
      <Button type="error" class="jiesuan">去结算</Button>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/util/cookie"
import { loginUserUrl } from '@/api/api'
export default {
  name: "shopping-cart",
  data() {
    return {
      classes:['1','2','3'],//全部数据
      bodanDel:[],
      blankChoosen:['1','2','3'],//全部数据的id
      indeterminate:false,
      checkAll:false,
      pageNum:1
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
    payNow(id){

    },
    onload(){
      let res = loginUserUrl('getShopcar_List',{
        username: "niuhongda",
        password: "123123q",
        uid:parseInt(getCookie('u_name')),
        genre:1,
        page:this.pageNum,
        num:8
      }).then((res)=>{
        console.log(res)
        // let obj = Object.entries(res.data).slice(0,-2)
        // this.classes = obj
        // this.total = parseInt(res.data.counts)
        // for(let i = 0;i<obj.length;i++){
        //   this.blankChoosen.push(obj[i][1].id)
        // }
      })
    },
  },
  created () {
    this.onload()
  }
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
	  overflow: hidden;
	  height:50px;
	.all{
		float: left;
    line-height:50px;
  label{
    margin:0 15px 0 10px;
  }
  span{
    padding: 5px 15px;
    margin-left: 10px;
    border: 1px solid $border-dark;
  }
}
  .title {
  	float: left;
    line-height:50px;
    overflow: hidden;
    .fl{ width:366px;}
    .fr{ width:100px;}
    .frr{ width:60px;}
    span{
      text-align: center;
      display: inline-block;
    }
  }
}
.upload-box {
	width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  .ivu-checkbox-inner{
    border-color:#fff !important;
  }
    .jiesuan{ float: right;
      width: 120px;
      margin: 20px;
    }
  table {
  	width: 100%;
  	border: 1px solid #ddd;
  	margin-bottom: 30px;
    th {
      color: #fff;
      text-align: left;
      background-color: #39f;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      .date {
        margin: 36px 5px;
      }
    }
    td {
       text-align: center;
      border-right: 1px solid #ddd;
       img{margin:5px 5px 5px 0;}
     button{ padding: 5.5px;}
      p {
         line-height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
