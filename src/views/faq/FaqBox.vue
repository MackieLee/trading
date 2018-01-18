<template>
  <div class="faq-box">
    <div class="title">
      <span></span>
      <font>最新问答</font>
    <!--  <a>更多>></a>-->
    </div>
    <div class="container">
      <div>{{ data }}</div>
      <div class="floor">
        <div v-for="item in newAnsr" :key="item.id" class="item">
          <div>
            
            <div class="item-container">
            	<div class="wen lf">问 :&nbsp;</div>
              <div class="ask">{{ item.name }}</div>
            </div>
          </div>
          <div>            
            <div class="item-container">
            	<div class="wen">答 :&nbsp;</div>
              <div class="ask ansr">{{ item.value.substring(0,15) }}
              	<span class="more">查看更多&gt;&gt;</span></div>
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
      "http://aip.kehu.zaidayou.com/api/execute/getQuestions_list",
      {
        username: "niuhongda",
        password: "123123q"
      }
    ).then((res)=>{
      console.log(res === '暂无数据')
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
    border-bottom: 1px solid $border-rice;
    span {
      padding: 9px 14px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-position: -98px -84px;
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
  .container {
    overflow: hidden;
    .floor {
      overflow: hidden;
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
        margin: 10px 0px 0px;
        padding-right: 50px;
        width:100%;float: left;
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
            margin-bottom: 10px;float: left;
          }
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
</style>
