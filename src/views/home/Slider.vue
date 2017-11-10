<template>
  <div class="vue-slider">
    <slider
    :pagination-visible="true"
    :slides="slides"
    :repeating="true"
    :auto="5000"
    @slide-change-start="onSlideChangeStart"
    @slide-change-end="onSlideChangeEnd"
    @slide-revert-start="onSlideRevertStart"
    @slide-revert-end="onSlideRevertEnd"
    @slider-move="onSliderMove">

    <div v-for="(slide,index) in slides" :key="index">
      <a :href="slide.value">
        <img width="100%" height="100%" :src="slide.image" />
      </a>
    </div>
  </slider>
</div>
</template>
<script>
  import slider from './vue-slider'
  import img1 from '../../assets/images/banner1.png'
  import img2 from '../../assets/images/banner2.png'
  import img3 from '../../assets/images/banner3.png'
  import img4 from '../../assets/images/banner4.png'
  export default {
    components: {
      slider
    },
    data(){
      return {
        slides: [{
          "title": "",
          "value": "",
          "image": img1
        },
        {
          "title": "",
          "value": "",
          "image": img2
        },
        {
          "title": "",
          "value": "#",
          "image": img3
        },
        {
          "title": "",
          "value": "#",
          "image": img4
        }]
      }
    },
    methods: {
      onSlideChangeStart: function (currentPage) {
        // console.log('onSlideChangeStart', currentPage);
      },
      onSlideChangeEnd: function (currentPage) {
        // console.log('onSlideChangeEnd', currentPage);
      },
      onSlideRevertStart: function (currentPage) {
        // console.log('onSlideRevertStart', currentPage);
      },
      onSlideRevertEnd: function (currentPage) {
        // console.log('onSlideRevertEnd', currentPage);
      },
      onSliderMove: function (offset) {
        // console.log('onSliderMove', offset);
      },
      prev: function () {
        // console.log('prev click');
        window.t=this;
        this.$refs.test_prev_next.prev();
      },
      next: function () {
        console.log('next click');
        window.t=this;
        this.$refs.test_prev_next.next();
      }
    }
  }
</script>

<style>
</style>
