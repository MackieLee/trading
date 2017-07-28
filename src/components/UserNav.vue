<template>
  <ul class="nav-user">
    <template v-if="!user">
      <li><router-link :to="{ name : 'regist' }"></router-link></li>
      <li><a>注册</a></li>
    </template>
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
  data() {
    return {
      userPanel: false
    }
  },
  computed: mapGetters({
    user: 'getUser'
  }),
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .nav-user{
    height: 35px;
    font-size: 12px;
    line-height: 35px;
    li{
      margin: 0 10px;
    }
  }
</style>
