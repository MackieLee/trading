<template>
  <div class="app-header">
    <div class="header-container">
      <div class="header-nav">
        <ul>
          <li>
            <router-link :to="{name: 'home'}" tag="span">
              <i class="logo"></i>
            </router-link>
          </li>
          <li v-for="item in navItems" :key="item.name" :class="{'active':item.link === activeItem }" @click=" getItem(item) ">
            <router-link :to="{ name: item.link }">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div>
      </div>
      <div class="user-info">
        <ul>
          <li>
            <a>
              <i class="tel"></i>
              <font>010-62311360</font>
            </a>
          </li>
          <li>
            <router-link :to="{name:'login'}">
              <i class="login"></i>
              <font>登录</font>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'register'}">
              <i class="register"></i>
              <font>注册</font>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-herader',
  data(){
    return{
      navItems:[
        { name:'首页',link:'home'},
        { name:'线上课程',link:'online'},
        { name:'线下课程',link:'offline'},
        { name:'讲师',link:'teacher'},
        { name:'问答',link:'faq'},
        { name:'图书',link:'book'},
        { name:'定制课程',link:'customize'},
        { name:'会员中心',link:'vip'},
        { name:'关于我们',link:'abt'}
      ],
      activeItem:''
    }
  },
  computed: {
    toJoin () {
      return {
        name: 'join',
        query: this.$route.fullPath
      }
    }
  },
  methods:{
    getItem : function(item){
      // this.activeItem = item.link
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base-conf.scss';
@import '../../assets/style/base.scss';

.app-header {
  border-bottom: 2px solid $border-rice;
  height: 49px;
  margin-bottom: 27px;
  .header-container{
    width: $width;
    margin:15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      padding: 18px 71px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: 424px 59px;
    }
    li{
      margin: 0 1px;
      padding: 5px;
      a{
        &:hover{
          color: $red;
        }
      }
    }
    form{
      position: relative;
      input{
        height: 26px;
        border: 1px solid $red;
        border-radius: 15px;
        outline: none;
        padding: 0 10px 0 35px;
        line-height: 12px;
        font-size: 12px;
      }
      i{
        display: block;
        position: absolute;
        top: 4px;
        left: 6px;
        width: 21px;
        height: 21px;
        background-image: url('../../assets/images/Sprite.png');
        background-position: -57px -224px;
      }
    }
    .active{
      a{
        color: $red;

      }
    }
    .user-info{
      a{
        display: flex;
        align-items: center;
      }
    }
    .tel,.register,.login{
      display: inline-block;
      width: 27px;
      height: 25px;
      background-image: url('../../assets/images/Sprite.png');
    }
    .tel{
      background-position: -20px -78px;
    }
    .login{
      background-position: -60px -41px;
    }
    .register{
      background-position: -60px -74px;
    }
  }
}
</style>
