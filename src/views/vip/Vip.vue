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
          <div class="head"></div>
          <div class="name">
            <p class="p1">
              在树下听歌</p>
            <p class="p2">普通会员</p>
          </div>
        </div>
        <div class="nav">
          <router-link tag="p" v-for="(item,index) in tags" :key="item.name" :to="{ name : item.router }">
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
      background-position: -18px -106px;
      margin-right: 6px;
    }
  }
  .container {
    margin-top: 26px;
    display: flex;
    .lf {
      width: 224px;
      padding-bottom: 90px;
      p {
        margin: 15px 10px;
      }
      .p1{
        margin-top: 15px;
        i{
          background-position: -115px -35px;
        }
      }
      .flex {
        display: flex;
      }
      .head {
        width: 82px;
        height: 82px;
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
          width: 224px;
          color: #333;
          text-align: left;
          cursor: pointer;
        }
        .study {
          background-position: -58px -222px;
          margin-right: 6px;
        }
        .shoucang {
          height: 18px;
          background-position: -142px -199px;
          margin-right: 6px;
        }
        .qa {
          background-position: -146px -228px;
          margin-right: 6px;
        }
        .shopping-cart {
          background-position: -298px -10px;
          margin-right: 6px;
        }
        .dingdan {
          background-position: -146px -289px;
          margin-right: 6px;
        }
        .qianbao {
          background-position: -144px -136px;
          margin-right: 6px;
        }
        .youhuiquan {
          background-position: -142px -164px;
          margin-right: 6px;
        }
        .fapiao {
          background-position: -146px -258px;
          margin-right: 6px;
        }
        .initdata {
          height: 18px;
          background-position: -145px -292px;
          margin-right: 6px;
        }
        .initpwd {
          background-position: -238px -156px;
          margin-right: 6px;
        }
        .bind {
          background-position: -235px -83px;
          margin-right: 6px;
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
