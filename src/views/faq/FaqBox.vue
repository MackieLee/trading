<template>
  <div class="faq-box">
    <div class="title">
       <!-- 切换-->
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
          最热
        </MenuItem>
        <MenuItem name="2">
          最新
        </MenuItem>
        <MenuItem name="3">
           待回答
        </MenuItem>
        <router-link tag='span' to="/Leibiebox">税收类别</router-link>
				<router-link to="/qdMore">更多>></router-link>
    </Menu>
    <!-- 切换-->    
    </div>
    <div class="container">
      <div>{{ data }}</div>
      <div class="floor">
        <div v-for="item in newAnsr" :key="item.id" class="item">
          <div>
            <div class="item-container">
            	<div class="wen lf">问 :&nbsp;</div>
              <div class="ask">{{ item.name }} <span class="date_rt">20181.19</span></div>
            </div>
          </div>
          <div>
            <div class="item-container">
            	<div class="wen">答 :&nbsp;</div>
              <div v-if="item.value !== null && item.value !== ''" class="ask ansr">
              	{{ item.value === null ?'':(item.value.substring(0,15)+'...') }}
              	<router-link tag="span" :to="{name:'pay'}" class="more" >查看更多&gt;&gt;</router-link>
              </div>
              <div v-else>
                暂无回答
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
export default {
  data() {
    return {
    	theme1: 'light',
      newAnsr:[],
      data:''
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    let res = loginUserUrl(
      "getQuestions_list",
      {
        username: "niuhongda",
        password: "123123q"
      }
    ).then((res)=>{
      if(res === '暂无数据'){
        this.data = res
      }else{
        this.newAnsr = res.data
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.faq-box {
	
  .board {
    margin-right: 0 !important;
  }
  .title {
    width: $width;
    margin: auto;
    padding-bottom: 10px;
    position: relative;
    border-top: 1px solid #ddd;
    span{margin-left: 15px;}
    a {
      font-size: 14px;
      position: absolute;
      right: 0;
    }
  }
  .container {
    overflow: hidden;
    .floor {
      overflow: hidden;
      height: 520px;
      // border-bottom: 1px dashed $border-orange;
      // .lf {
      //   float: left;
      // }
      // .rt {
      //   float: right;
      // }
      // .lf-part {
      //   border-right: 1px dashed $border-orange;
      // }
      .item {
        margin-bottom: 20px;
        padding-right: 20px;
        width: 100%; float: left;
        border-bottom: 1px dashed $border-orange;
        .item-container {
          float: left;
          color: $black;
          font-size: 12px;
          line-height: 35px;
          width: 100%;
          .wen {
          color: $red;
          font-size: 16px;
          float: left;
        }
          .ask {
            margin-bottom: 10px;
            .date_rt{
            	float: right;
            }
            .more {
          text-align: right;
          color: $blue;
          cursor: pointer;
          font-size: 12px;
          margin-left: 10px;
       				 }
          }
        }

      }
    }
  }
}
</style>
