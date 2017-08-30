<template>
  <div class="home">
    <slider></slider>
    <teacher-box></teacher-box>
    <tax-box></tax-box>
    <tax-box-sed></tax-box-sed>
    <!-- <book-box></book-box> -->
    <bottom-ad></bottom-ad>
  </div>
</template>

<script>
import Slider from './Slider'
import TeacherBox from './TeacherBox'
import TaxBox from './TaxBox'
import TaxBoxSed from './TaxBoxSed'
// import BookBox from './BookBox'
import BottomAd from './BottomAd'
export default {
  name: 'home',
  components:{
    Slider,
    TeacherBox,
    TaxBox,
    // BookBox,
    BottomAd,
    TaxBoxSed
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';

</style>
