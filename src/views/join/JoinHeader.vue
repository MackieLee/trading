<template>
  <div class="join-header">
    <router-link :to="{ name: 'home'}">
      <img src="../../assets/img/logo.png" class="logo" />
    </router-link>
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
  }
</style>


