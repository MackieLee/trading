.ivu-form-item.ivu-form-item<template>
  <div class="fagui">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/fagui-search">法规</router-link>
        &nbsp;&gt;&nbsp;法规列表
      </p>
    </div>
    <div class="main-title">
      {{ title }}
    </div>
    <div class="th">
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="xuhao ctr" style="width: 40px;">序号</td>
            <td class="biaoti" style="text-align:center;">标题</td>
            <td class="fahao ctr">文号</td>
            <td class="riqi ctr">发文日期</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="td">
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <router-link v-for="(item,index) in list" :key="item[1].id" tag="tr" :to="{ name:'fdetail',query:{ id:item[1].id }}">
            <td class="xuhao pointer ctr">{{parseInt(index)+1}}</td>
            <td class="biaoti pointer">{{item[1].name}}</td>
            <td class="fahao pointer ctr">{{item[1].reference}}</td>
            <td class="riqi pointer ctr">{{ new Date(parseInt(item[1].date_posted)*1000).toLocaleDateString() }}</td>
          </router-link>
          <!-- 按照分类获得的列表 -->
          <router-link v-for="(item,index) in cateLst" :key="item.id" tag="tr" :to="{ name:'fdetail',query:{ id:item.id }}">
            <td class="xuhao pointer ctr">{{index+1}}</td>
            <td class="biaoti pointer">{{item.name}}</td>
            <td class="fahao pointer ctr">{{item.reference}}</td>
            <td class="riqi pointer ctr">{{ new Date(parseInt(item.date_posted)*1000).toLocaleDateString() }}</td>
          </router-link>
        </tbody>
      </table>
      <div style="display:flex;justify-content:center;margin:80px 0 30px 0;">
        <Page :total="total" @on-change="page($event)" :page-size="20" show-elevator show-total>
				</Page>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  name: "fagui",
  data(){
    return{
      list:[],
      cateLst:[],
      title:'法规列表',
      total:0,
      pageNum:1
    }
  },
  created () {
    this.onload()
    // 按照分类获取列表
    if(this.$route.query.form_id){
      let res = loginUserUrl('getlaws_category',{
        username: "niuhongda",
        password: "123123q",
        id:this.$route.query.form_id
      }).then((res)=>{
        this.cateLst = res.data
        this.total = res.data.length
      })
    }
  },
  methods:{
    onload:function(){
      let obj = this.$route.query
      console.log('地区:'+obj.area)
      console.log('类别:'+obj.form_id)
      let _self = this
      let res = loginUserUrl('getlaws_Search',{
        username: "niuhongda",
        password: "123123q",
        laws_area:obj.area,
        name:obj.name,
        reference:obj.reference,
        date_posted:obj.date_posted,
        department:obj.department,
        begin_time:obj.begin_time,
        end_time:obj.end_time,
        laws:obj.laws,
        form_id:obj.form_id,
        page:this.pageNum,
        number:20
      }).then((res)=>{
        console.log(res)
        this.total = parseInt(res.data.counts)
        this.list = Object.entries(res.data).slice(0,-1)
      })
    },
    page:function(num){
      this.pageNum = num
      this.onload()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.fagui {
  width: $width;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
    background-position: 0px 30px;
    margin-right: 11px;
  }
  .jingxuan{
    width: 60px;
    height: 22px;
    background-position: 339px -12px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .main-title {
    line-height: 30px;
    font-size: 24px;
    color: $red;
    text-align: center;
 	margin-top: 30px;
 	margin-bottom: 10px;
  }
  .ctr {
    text-align: left;
  }
  .xuhao {
    width: 20px;
  }
  .fahao {
    width: 230px;
  }
  .riqi {
    width: 130px; padding-left: 20px;
  }
  .biaoti{width: 600px;
  margin-right:10px;
   white-space: nowrap;
   overflow: hidden;
    text-overflow: ellipsis;}
  .red {
    color: $red;
  }
  .pointer {
    cursor: pointer;
  }
  .th {
    height: 42px;
    font-weight: bold;
    background-color: $bg-blue;
    table {
      table-layout: fixed;
      border-collapse: separate;
      width: 96%; margin: 0px auto;
      .biaoti{
    }
      td {
        display: table-cell;
        line-height: 42px;
        font-size: 14px;
        color: $white;
      }
    }
  }
  .td {
    font-weight: bold;
    border: 1px solid $border-blue;
    table {
      table-layout: fixed;
      border-collapse: separate;
      width: 96%; margin: 0 auto;
      tr:hover{
      	td{color: red;}
      }
      td {
        display: table-cell;
        line-height: 42px;
        font-size: 14px;
            overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
      }
      .separate{
        border-bottom: 1px solid $border-dark;
      }
    }
  }
}
</style>
