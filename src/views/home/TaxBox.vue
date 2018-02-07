<template>
  <div class="tax-box">
    <div class="title">
      <span></span>
      <font>土地增值税</font>
      <a>更多>></a>
    </div>
    <div class="tax-container">
      <div class="side-ad"></div>
        <div class="video-boxes">
		      <div class="item" v-for="item in classes" :key="item[1].title">
		        <div><router-link :to="{name: 'videoinfo',query:{ id:item[1].id}}" class="video-cover">
		        	<img src="../../assets/images/九鼎财税01_10.png"/><span class="new">NEW</span></router-link></div>
		        <div class="video-title"><a :title="item[1].name">{{ item[1].name }}</a></div>
		        <div class="buss-info"><span class="score"><i></i><font>{{ item[1].grade }}</font>分</span>
		        	<span class="person-current"><i></i><font>{{ item[1].quantity }}</font>人</span> 	
		        	<span>孙炜老师</span>
		        </div>
		        <div class="price"><span>价格:<font class="rd">￥{{ item[1].money }}</font></span>
		        		/<font>{{ item[1].period }}&nbsp;</font><span>节</span>
		        	<router-link :to="{name: 'videoinfo',query:{ id:item[1].id}}"
		        		v-if="item[1].audition === '1'" class="free">试听</router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  data(){
    return{
      classes:[],
      form_id:null,
      crowd:null,
      lecturer:null,
      begin_money:null,
      end_money:null,
      order:1, //最新
      pageNum:1,
      total:null
    }
  },
  mounted () {
    this.onload()
  },
  methods: {
    onload(){
      let res = loginUserUrl('getOnline_Filtrate',{
        username: "niuhongda",
        password: "123123q",
        page:this.pageNum,
        number:12
      }).then((res)=>{
        console.log(res.data.counts)
        this.total = parseInt(res.data.counts)
        this.classes = Object.entries(res.data).slice(0,-2)
      })
    },
    page:function(num){
      this.pageNum = num
      this.onload()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.tax-box {
  margin-top: 30px;
}
.title {
  width: $width;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid $red;
  font {
    font-size: 18px;
    font-weight: 450;
    display: inline-block;
    padding-left: 5px;
  }
  span {
    padding: 6px 12px;
    margin-right: 10px;
    background-image: url("../../assets/images/Sprite.png");
    background-repeat: no-repeat;
    background-position: -340px -213px;
  }
  a {
    font-size: 14px;
    position: absolute;
    right: 0;
  }
}
.tax-container {
  display: flex;
  flex-direction: row;
  width: $width;
  margin: auto;
  .side-ad {margin-right: 15px;
    width: 259px;
    height: 506px;
    background-image: url("../../assets/images/九鼎财税01_077.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .video-boxes {
    width: 821px;
    overflow: hidden;
    i {
      background-image: url("../../assets/images/Sprite.png");
    }
    .rd {
      color: $red;
    }
    .video-cover {
      position: relative;
    }
    .item {
      border: 1px solid $border-red;
      padding: 5px 10px 10px 10px;
      float: left;
      margin: 0 13px 18px 13px;
      position: relative;
      &:hover {
        box-shadow: 1px 1px 4px 5px #eee;
      }
      .new {
        padding: 2px 4px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 0;
        bottom: 3px;
      }
      .video-title {
        margin: 5px 0;
        font-size: 14px;
      }
      .buss-info {
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 10px;
        span {
          margin-right: 10px;
        }
        .score i {
          display: inline-block;
          height: 20px;
          width: 15px;
          background-position: -240px -287px;
          vertical-align: text-bottom;
        }
        .person-current i {
          display: inline-block;
          height: 20px;
          width: 25px;
          background-position: -344px -285px;
          vertical-align: text-bottom;
        }
      }
      .price {
        .free {
          padding: 2px 15px;
          background-color: $red;
          color: $white;
          font-size: 12px;
          position: absolute;
          right: 15px;
          cursor: pointer;
        }
        font {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
