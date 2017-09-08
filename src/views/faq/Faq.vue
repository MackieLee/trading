<template>
  <div class="faq">
    <teacher-box></teacher-box>
    <faq-box></faq-box>
  </div>
</template>

<script>
import TeacherBox from './TeacherBox'
import FaqBox from './FaqBox'
export default {
  name:'faq',
  components:{
    TeacherBox,FaqBox
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/base.scss';
  .faq{
    width: $width;
    margin: 0 auto;
  }
</style>
