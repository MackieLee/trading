<template>
  <div class="vip">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;会员中心
      </p>
    </div>
    <div class="container">
      <div class="lf">
        <div class="flex">
          <router-link :to="{ name: 'initdata'}" class="head" tag="div"></router-link>
          <div class="name">
            <p class="p1">在树下听歌</p>
            <p class="p2">普通会员</p>
          </div>
        </div>
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
  name:'vip',
  data(){
    return{
      tags:[
        {
          name:'我的学习',
          router:'study'
        },
        {
          name:'我的收藏',
          router:'shoucang'
        },
        {
          name:'我的问答',
          router:'qa'
        },
        {
          name:'我的购物车',
          router:'shopping-cart'
        },
        {
          name:'我的订单',
          router:'dingdan'
        },
        {
          name:'我的钱包',
          router:'qianbao'
        },
        {
          name:'我的优惠券',
          router:'youhuiquan'
        },
        {
          name:'发票索取',
          router:'fapiao'
        },
        {
          name:'个人资料',
          router:'initdata'
        },
        {
          name:'账号安全',
          router:'initpwd'
        },
        {
          name:'账号绑定',
          router:'bind'
        }
      ]
    }
  },
  methods:{
  },
  created () {
    let cookieName = getCookie('u_name')
    if(cookieName !== '' && cookieName !== 'undefined' ){
    }else{
      this.$router.push({name:'login'})
    }
  }

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
    width: 22px;
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
      margin-right: 44px;
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
      .flex {display: flex;}
      .head {
        width: 60px;
        height: 60px;
        background-image: url('../../assets/images/huanyuanzx01.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        border-radius: 50%;
        cursor: pointer;
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
          i{margin-right:20px;}
        }
        .study {
          background-position: -58px -220px;
        }
        .shoucang {
          height: 18px;
          background-position: -142px -198px;
        }
        .qa {
          background-position: -143px -228px;
        }
        .shopping-cart {
          background-position: -288px -10px;
        }
        .dingdan {
          background-position: -144px -289px;
        }
        .qianbao {
          background-position: -142px -136px;
        }
        .youhuiquan {
          background-position: -142px -164px;
        }
        .fapiao {
          background-position: -146px -258px;
        }
        .initdata {
          height: 18px;
          background-position: -145px -292px;
        }
        .initpwd {
          background-position: -236px -156px;
        }
        .bind {
          background-position: -233px -83px;
        }
      }
    }
    .rt{
      width: 811px;
      margin-left: 55px;
    }
  }
}
</style>
