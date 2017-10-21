<template>
  <div class="company">
    <div class="scroll">
      <transition-group name="scroll">
        <img v-for="img in imgs" :key="img" :src="img"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import img1 from '../../assets/images/youqinnlianjie (1).png'
import img2 from '../../assets/images/youqinnlianjie (2).png'
import img3 from '../../assets/images/youqinnlianjie (3).png'
import img4 from '../../assets/images/youqinnlianjie (4).png'
import img5 from '../../assets/images/youqinnlianjie (5).png'
import img6 from '../../assets/images/youqinnlianjie (6).png'
import img7 from '../../assets/images/youqinnlianjie (7).png'
import img8 from '../../assets/images/youqinnlianjie (8).png'
import img9 from '../../assets/images/youqinnlianjie (8).png'
import img10 from '../../assets/images/youqinnlianjie (10).png'
import img11 from '../../assets/images/youqinnlianjie (11).png'
import img12 from '../../assets/images/youqinnlianjie (12).png'
import img13 from '../../assets/images/youqinnlianjie (13).png'
import img14 from '../../assets/images/youqinnlianjie (14).png'
import img15 from '../../assets/images/youqinnlianjie (15).png'

export default {
  data(){
    return{
      imgs:[img1,img13,img10,img7,img4,img11]
    }
  },
  mounted(){

  },
  methods:{
    start:function(){
      timer = setInterval(()=>{

      },3000)
    },
    stop:function(){
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .company{
    width: $width;
    margin: 0 auto;
    overflow: hidden;
    .scroll{
      width:4000px;
      overflow: hidden;
      margin-bottom: 30px;
      img{
        float: left;
        margin-right: 36px;
      }
    }
  }
  .scroll-enter-to{
    transform: translateX(219px);
  }
  .scroll-leave-to{
    transform: translateX(219px);
  }
  .scroll-into-active,.scroll-leave-active{
    transition: transform 1s ease-in-out;
  }
  .scroll-enter{
    transform: translate(0px)
  }
</style>
