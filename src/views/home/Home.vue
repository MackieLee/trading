<template>
  <div class="home">
    <slider></slider>
    <!-- <teacher-box></teacher-box> -->
    <!--<tax-box></tax-box>-->
    <!--<tax-box-sed></tax-box-sed>-->
    <!--<tax-box-trd></tax-box-trd>-->
    <com-info></com-info>
    <tea-loop></tea-loop>
    <!--<carol-loop></carol-loop>-->
    <!--<bottom-ad></bottom-ad>-->
    <last-module></last-module>
  </div>
</template>

<script>
import Slider from './Slider'
import TeacherBox from './TeacherBox'
import TeaLoop from './TeaLoop'
import LastModule from './LastModule'
// import TaxBox from './TaxBox'
// import TaxBoxSed from './TaxBoxSed'
// import TaxBoxTrd from './TaxBoxTrd'
import Company from './Company'
import ComInfo from './ComInfo'
// import BottomAd from './BottomAd'
// import CarolLoop from './CarsolLoop'
export default {
  components:{
    Slider,
    TeacherBox,
    // TaxBox,
    Company,
    ComInfo,
    TeaLoop,
    LastModule,
    // BottomAd,
    // TaxBoxSed,
    // TaxBoxTrd,
    // CarolLoop
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.carsol-loop{
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
