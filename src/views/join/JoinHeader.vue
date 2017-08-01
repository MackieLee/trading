<template>
  <div class="join-header">
    <router-link :to="{ name: 'home'}">
      <img src="../../assets/logo.png" class="logo" />
    </router-link>
    <span>账号注册</span>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .join-header{
    width: 1000px;
    height: 100px;
    display: flex;
    align-items: center;
    img{
      height: 80px;
    }
    span{
      margin-left: 50px;
      font-size: 24px;
      color: #686868;
      font-weight: bold;
    }
  }
</style>


