<template>
  <div class="join">
    <div class="header">
      <join-header></join-header>
    </div>
    <div class="join-form">
      <join-form></join-form>
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
  background-color: #f8f8f8;
  .join-header{
    width: 1000px;
  }
}
.join-form {
  display: flex;
  width: 1000px;
  margin: auto;
  justify-content: center;
}
</style>
