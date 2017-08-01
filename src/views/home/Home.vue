<template>
  <div class="home">
    <first-glance></first-glance>
    <select-box></select-box>
  </div>
</template>

<script>
import FirstGlance from './FirstGlance'
import SelectBox from './SelectBox'

export default {
  name: 'home',
  components: { FirstGlance,SelectBox }
}
</script>

<style lang="scss" scoped>
.home {

}
</style>
