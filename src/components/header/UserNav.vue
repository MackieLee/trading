<template>
  <ul class="user-nav">
     <li v-if="!user"><router-link :to="toLogin">登录</router-link></li> 
    <li v-if="!user"><router-link :to="toJoin">注册</router-link></li>
    <template v-else>
      <li>
        <a>欢迎回来</a>
        <div class="user-panel">
          {{ user}}
          <ul v-show="userPanel"></ul>
        </div>
      </li>
    </template>
    <li><a>买家中心</a></li>
    <li><a>卖家中心</a></li>
    <li><a>充值</a></li>
    <li><a>提现</a></li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-nav',
  props: {
    toJoin: {
      type: [Object, String],
      required: true
    },
    toLogin: {
      type: [Object, String],
      required: true
    }
  },
  data() {
    return {
      userPanel: false
    }
  },
  computed: mapGetters({
    user: 'getUser'
  }),
  created () {
    // console.log(this.user)
  }
}
</script>

<style lang="scss" scoped>
.user-nav {
  text-align: right;
  height: 35px;
  font-size: 12px;
  line-height: 35px;
  li{
    margin: 0 10px;
  }
}
</style>
