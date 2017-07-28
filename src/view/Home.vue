<template>
  <div class="content">
    <first-glance></first-glance>
    <second-glance></second-glance>
    <charts></charts>
  </div>
</template>
<script>
  import FirstGlance from './home.components/FirstGlance'
  import SecondGlance from './home.components/SecondGlance'
  import Charts from './home.components/Charts'

  export default{
    components : { FirstGlance,SecondGlance,Charts }
  }
</script>
<style lang="scss" scoped>
  .content{
    width: 1200px;
    margin: auto;
  }
</style>
