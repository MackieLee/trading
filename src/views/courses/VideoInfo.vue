<template>
  <div id="xxkc_xq">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        <router-link :to="{ name: 'offline' }">&nbsp;&gt;&nbsp;线上课程</router-link>&nbsp;&gt;&nbsp;{{ course.name }}</p>
    </div>
    <div id="xxkc_xq01">
			<div :to="{name:'video-page'}" class="xq01_shit">
				<img src="../../assets/images/jdtax_线下_01.png">
				  <router-link :to="{ name : 'video-page'}" class="shit" data-trace="518"
				data-trace-type="免费试听" data-trace-position="封面">免费试听</router-link>
			</div>
      <div class="xq01_r">
        <h2>
          {{ course.name }}
      	  <span>{{ course.intro }}</span>
        </h2>
        <P class="p"> <b>￥</b> {{ course.money }} —— {{ length*50 }}.00<del>￥{{ course.money_marketing }}</del></P>
        <P class="share-in">课程状态：热播
          <a @click="share"><i></i>分享</a><div class="share-box" v-show="showShare"><i class="arrow"></i><i class="weibo"></i><i class="wechat"></i><i class="qq"></i></div></P>
        <P>课程数量：{{ length }}</P>
        <p>适合人群：{{ course.crowd }}</p>
        <p class="p01">
        	<span @click='cur01=true' v-bind:class="{'red':cur01}">系列</span>
        	<span @click='cur01=false' style="border:none">
            <Select v-model="jie" style="width:80px">
              <Option v-for=" item in course.catalogue" :key="item.id" :value="item.id">{{ item.name }}</Option>
            </Select>
          </span>
        </p>
        <ul>
          <li>
            <a  class="a">
              <i></i>加入购物车</a>
          </li>
          <li class="r">
            <router-link tag="div" :to="{name:'pay'}" class="a" >立即购买</router-link>
          </li>
        </ul>
      </div>
       <div  class="rt">
      		<h3>相关推荐</h3>
      	 <div class="div">
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解
      	 </p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      	  <div class="div">
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解</p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      </div>
    </div>
    <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <!-- .............................. -->
          <span @click="cur = true" :class="{'cur-active' : cur}">课程介绍</span>
          <span @click="cur = false" :class="{'cur-active' : !cur}">讲师介绍</span>
        </h2>
        <div v-html="course.value" v-if="cur">
          {{ course.value }}
        </div>
        <div v-else v-html="course.teacher_info" class="xq02_r"> <P>
          {{ course.teacher_info }}
        </P>

        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  name: "odetail",
  data() {
    return {
      showShare: false,
      cur:true,
      cur01:false,
      jie:'',
      course:{},
      length:0
    }
  },
  methods: {
    share: function() {
      this.showShare = !this.showShare;
    }
  },
  mounted () {
    let res = loginUserUrl('http://aip.kehu.zaidayou.com/api/execute/getOnline_Courses_details',{
      username: "niuhongda",
      password: "123123q",
      gid:1192
    }).then((res)=>{
      console.log(res)
      this.course = res.data
      this.length = res.data.catalogue.length

    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
* {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0 none;
}
i {
  display: inline-block;
  width: 26px;
  height: 23px;
  background-image: url("../../assets/images/Sprite.png");
}
.cur-posi {
  margin: 0px 0 26px 0;
  p {
    height: 20px;
    line-height: 20px;
  }
  i {
    background-position: -18px -97px;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
}
.share-in {
  position: relative;
  .share-box {
    position: absolute;
    bottom: -20px;
    left: 200px;
    width: 108px;
    height: 40px;
    background-color: #ddd;
    border-radius: 3px;
    cursor: pointer;
    .arrow {
      width: 15px;
      height: 13px;
      position: absolute;
      top: -14.5px;
      left: 37%;
      background-position: -105px -130px;
    }
    i {
      margin: 5px 5px;
    }
    .weibo {
      background-position: -339px -13px;
      &:hover {
        background-position: -184px -88px;
      }
    }
    .wechat {
      background-position: -339px -46px;
      &:hover {
        background-position: -184px -120px;
      }
    }
    .qq {
      background-position: -339px -83px;
      &:hover {
        background-position: -182px -46px;
      }
    }
  }
}
#xxkc_xq {
  height: auto;
  width: 1090px;
  margin: 0 auto;
  color: $black;
  font-family: "微软雅黑";
  font-size: 16px;
  // border-top: 1px solid $border-rice;
  padding-top: 20px;
}
#xxkc_xq01 {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  overflow: hidden;
  .xq01_shit{
    width: 35%;
    float: left;
    position: relative;
    img {
      width: 100%; height:400px
    }
    .shit:hover {
      background-image: url(../../assets/images/hovershit_12_6.png);
    }
    .shit {
      position: absolute;
      background-image: url(../../assets/images/shit_12_6.png);
      left: 50%;
      top: 50%;
      cursor: pointer;
      width: 132px;
      height: 44px;
      line-height: 44px;
      text-align: right;
      padding-right: 20px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      box-sizing: border-box;
      margin-top: -22px;
      margin-left: -66px;
    }
  }
       .rt{
       margin-left: 70px; float: right;
       width: 160px;text-align: center;
       h3{ height:30px;border-bottom: 1px solid #ccc;
    font-size: 12px; margin-bottom:10px;
    font-weight: bold;
       }
       .div{border: 1px solid #ccc; padding: 8px; margin: 5px 0;
       p{margin: 5px 0; }
       	.price{font-size: 16px;color: #e7141a;margin:0;}
       	del,span{font-size: 12px;color: #333;}
       }
      img{
        width:140px; height:82px;
      }
    }
  .xq01_r {
    width: 35%;
    float: left;margin-left: 70px;
    h2 {
      font-size: 18px;
      padding-bottom:10px;
      border-bottom:1px solid #fbc081;
      span{font-size:14px;
      display: block;
      line-height: 36px;}
    }
    .p01{
    	.red{border: 1px solid red;}
  	span{border: 1px solid #ddd; display: inline-block;cursor: pointer;
  	 height: 32px; width: 60px; text-align: center; line-height: 30px;
     border-radius: 5px;}
  	}
    .p{
      height: 56px;
      background-color: #eaeaea;
      line-height: 56px;
      font-size: 22px;
      color: #e7141a;
      padding-bottom: 0px;
      padding-left: 20px;
      margin: 20px 0;
      b,del {
        font-size: 16px;
        color: #999;
        margin-left: 5px;
      }
    }
    p {
      padding-bottom:23px;
      font-size: 14px;
      span {
        width: 15px;
        height: 20px;
        display: inline-block;
      }
      a {
        color: $dark;
        cursor: pointer;
        margin-left:120px; top: 20px;
        &:hover {
          color: $red;
        }
        i {
          background-position: -385px -6px;
          vertical-align: text-bottom;
          &:hover {
            background-position: -385px -42px;
          }
        }
      }
    }
  }
}
#xxkc_xq01 .xq01_r p strong {
  width: 116px;
  height: 20px;
  display: inline-block;
}
#xxkc_xq01 .xq01_r ul {
  height: auto;
  width: 100%;
  overflow: hidden;
  li {
    float: left;
    margin-right: 15px;
    .a:hover {
      background: #e7141a;
    }
    .aa{width: 126px;}
    .a {
      height: 34px;
      width: 100px;
      padding: 0 10px;
      background: #f84141;
      color: $white;
      font-size: 14px;
      display: block;
      border-radius: 3px;
      text-align: center;
      line-height: 34px;
      cursor: pointer;
      i {
        background-position: -185px -200px;
        position: relative;
        top: 7px;
      }
    }
    b {
      font-size: 16px;
    }
    del {
      color: $black;
      font-size: 14px;
    }
  }
}
/*课程目录有简介*/
#xxkc_xq02 {
  width: 100%;
  height: auto;
  margin-top: 20px;
  overflow: hidden;
  // .xq02_r {
  //   width: 45%;
  //   float: right;
  // }
  // .xq02_l {
  //   width: 100%;
  //   float: left;
  // }
  h2 {
    width: 100%;
    height: 32px;
    margin-bottom: 15px;
    border-bottom: 1px solid $red;
    span {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      font-weight: normal;
      font-size: 14px;
      cursor: pointer;
    }
    .cur-active{
      background-color: $red;
      color: $white;
    }
  }
  .txt {
    padding-top: 20px;
    text-indent: 2em;
  }
  p {
    line-height: 36px;
 overflow: hidden;
   width: 96%; line-height: 32px;
    font-size: 14px;
    padding: 15px 18px 20px;
    border: 1px solid #fbc081;
    margin:15px 0;
    color: #656565;
    .a{color: #117cee;float: right;}


  }
}
</style>
