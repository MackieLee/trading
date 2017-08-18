<template>
  <div class="join">
    <div class="header">
      <join-header></join-header>
    </div>
    <div class="split"></div>
    <div class="form-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import JoinHeader from './JoinHeader'
import JoinForm from './JoinForm'

export default {
  name: 'join',
  components: { JoinForm,JoinHeader }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: center;
  .join-header{
    width: 1000px;
  }
}
.split{
  height: 5px;
  background-color: #0275d8;
}
.form-container{
  display: flex;
  width: 1000px;
  margin: auto;
  justify-content: center;
}
</style>
