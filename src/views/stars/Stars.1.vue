<template>
  <div class="stars">
    <div class="star_bg">
      <div class="blank"></div>
      <ul>
        <li v-for="item in score" :key="item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      score: 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .star_bg{
    position: relative;
    .blank{
      background-image: url('../../assets/images/star.png');
      background-repeat: repeat-x;
      background-position: 0 -21px;
      height: 15px;
      width: 72px;
      margin: 0 auto;
    }
    ul{
      position: absolute;
      top: 0;
      li{
        display: inline-block;
        height: 15px;
        width: 15px;
        background-image: url('../../assets/images/star.png');
        background-position: 0 0;
      }
    }
  }
</style>
