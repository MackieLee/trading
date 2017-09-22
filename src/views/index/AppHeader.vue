<template>
  <div class="app-header">
    <div class="header-container">
      <div class="header-nav">
        <ul>
          <li>
            <router-link :to="{name: 'home'}" tag="span" class="no-active">
              <i class="logo"></i>
            </router-link>
          </li>
          <router-link v-for="item in navItems" :key="item.name" :to="{ name:item.link }" tag="li">{{ item.name }}</router-link>
        </ul>
      </div>
      <div>
        <form action="">
          <input placeholder="请输入您的搜索" />
          <i></i>
        </form>
      </div>
      <div class="user-info">
        <ul>
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
  data() {
    return {
      navItems: [
        { name: '首页', link: 'home' },
        { name: '线上课程', link: 'online' },
        { name: '线下课程', link: 'offline' },
        { name: '专家团队', link: 'teacher' },
        { name: '问答', link: 'faq' },
        { name: '图书', link: 'book' },
        { name: '定制课程', link: 'customize' },
        { name: '会员中心', link: 'vip' },
        { name: '关于我们', link: 'about' }
      ],
      activeItem: 'home'
    }
  },
  computed: {
    toJoin() {
      return {
        name: 'join',
        query: this.$route.fullPath
      }
    }
  },
  methods: {
    getItem: function(item) {
      this.activeItem = item.link
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base-conf.scss';
@import '../../assets/style/base.scss';

.app-header {
  border-bottom: 1px solid $rice;
  height: 49px;
  margin-bottom: 38px;
  .header-container {
    width: $width;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding: 18px 71px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: 140px 0px;
    }
    li {
      margin: 0 1px;
      padding: 5px;
    }
    form {
      position: relative;
      input {
        height: 26px;
        border: 1px solid $red;
        border-radius: 15px;
        outline: none;
        padding: 0 10px 0 35px;
        line-height: 12px;
        font-size: 12px;
      }
      i {
        display: block;
        position: absolute;
        top: 4px;
        left: 6px;
        width: 21px;
        height: 21px;
        background-image: url('../../assets/images/Sprite.png');
        background-position: -58px 0px;
      }
    }
    .header-nav {
      li{
        cursor: pointer;
      }
      .active {
        border-bottom: 2px solid $red;
        color:$red;
      }
      .no-active {
        border: none;
      }
    }
    .register,
    .login {
      display: inline-block;
      width: 27px;
      height: 25px;
      background-image: url('../../assets/images/Sprite.png');
    }
    .login {
      background-position: -30px 0px;
    }
    .register {
      background-position: -30px -26px;
    }
  }
}
</style>
