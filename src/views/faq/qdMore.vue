<template>
  <div class="faq-box">
    <div class="separate"></div>
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
              <div v-if="item.value !== null && item.value !== ''" class="ask ansr">{{ item.value === null ?'':(item.value.substring(0,15)+'...') }}
              	<span class="more">查看更多&gt;&gt;</span>
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
  .separate{
    height: 50px;
  }
  .container {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    .floor {
      overflow: hidden;
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
