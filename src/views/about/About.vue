<template>
  <div class="vip">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;关于我们
      </p>
    </div>
    <div class="container">
      <div class="lf">
        <div class="nav">
          <router-link tag="p" v-for="item in tags" :key="item.name" :to="{ name : item.router }">
            <i :class="item.router"></i>{{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="rt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import { getCookie } from "@/util/cookie"
export default {
  name:'about',
  data(){
    return{
      tags:[
        {
          name:'关于我们',
          router:'abt'
        },
        {
          name:'课程说明',
          router:'kechengsm'
        },
        {
          name:'答疑说明',
          router:'dayism'
        },
        {
          name:'帮助中心',
          router:'Help'
        },
        {
          name:'市场合作',
          router:'shichanghz'
        },
        {
          name:'版权声明',
          router:'copy'
        },
        {
          name:'服务条款',
          router:'fuwutk'
        },
        {
          name:'意见反馈',
          router:'yijianfk'
        }        
      ]
    }
  },
  methods:{
  },
//created () {
//  let cookieName = getCookie('u_name')
//  if(cookieName !== '' && cookieName !== 'undefined' ){
//  }else{
//    this.$router.push({name:'login'})
//  }
//}
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.vip {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  .active{
    color: $red !important;
  }
  i {
    display: inline-block;
    width: 28px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .container {
    margin-top: 26px;
    display: flex;
    .lf {
      width:180px;
      padding-bottom: 90px;
			.name{margin-left: 10px;
				      p {
        margin: 5px 0 10px 0;
      }
      .p1{
        font-size: 14px;
        i{
          background-position: -115px -35px;}}
			}
			
      .head {
        width: 60px;
        height: 60px;
        background-image: url('../../assets/images/huanyuanzx01.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        border-radius: 50%;
        margin: 0px 10px;
      }
      .nav {
        p {
          margin:15px 0;
          padding: 5px 30px;
          width: 100%;
          color: #333;
          text-align: left;
          font-size: 13px;
          cursor: pointer;
          i{margin-right:8px;}
        }

			 .abt {
          background-position:-13px -346px;
        }
         .kechengsm {
          background-position:-15px -388px;
        }
         .dayism {
          background-position:-143px -228px;
        }
         .Help {
          background-position:-527px -381px;
        }
         .shichanghz {
          background-position:-346px -386px;
        }
         .copy {
          background-position:-466px -381px;
        }
         .fuwutk {
          background-position:-495px -382px;;
        }
        .yijianfk {
          background-position: -59px -129px;
        }
      }
    }
    .rt{
      width: 910px;
    }
  }
}
</style>
