<template>
  <div class="home">
    <first-glance></first-glance>
    <select-box></select-box>
    <hot-forum></hot-forum>
  </div>
</template>

<script>
import FirstGlance from './FirstGlance'
import SelectBox from './SelectBox'
import HotForum from './HotForum'

export default {
  name: 'home',
  components: { FirstGlance,SelectBox,HotForum }
}
</script>

<style lang="scss" scoped>
.home {

}
</style>
