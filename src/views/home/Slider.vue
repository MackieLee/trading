<template>
<div class="sl" @mouseover="auto = false" @mouseout="auto = true">
  <Carousel :autoplay-speed="5000" :autoplay="auto" v-model="value" loop>
    <CarouselItem>
      <div width="100%">
        <img style="width:100%;" src="../../assets/images/banner1.png"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div width="100%">
        <img style="width:100%;" src="../../assets/images/banner2.png"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div width="100%">
        <img style="width:100%;" src="../../assets/images/banner3.png"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div width="100%">
        <img style="width:100%;" src="../../assets/images/banner4.png"/>
      </div>
    </CarouselItem>
  </Carousel>
</div>
</template>
<script>
  export default {
    data(){
      return {
        value:0,
        auto:true
      }
    }
  }
</script>

<style>
</style>
