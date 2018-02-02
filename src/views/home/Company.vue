<template>
  <div class="company">
    <div class="scroll">
     <!-- <transition-group name="scroll">
        <img v-for="img in imgs" :key="img" :src="img"/>
      </transition-group>-->
      <div class="title">
      <span></span>
      <font>合作伙伴</font>
    </div>
        <span class="span_img">
        	<img src="../../assets/images/youqlj (1).png" />
        	<img src="../../assets/images/youqlj (2).png" />
        	<img src="../../assets/images/youqlj (3).png" />
        	<img src="../../assets/images/youqlj (4).png" />
        	<img src="../../assets/images/youqlj (5).png" />
        	<img src="../../assets/images/youqlj (6).png" />
        	<img src="../../assets/images/youqlj (7).png" />
        	<img src="../../assets/images/youqlj (7).png" />
        </span>
        <div class="jiant">
        	<a class="left"></a>
        	<a class="right"></a>
        </div>
    </div>
  </div>
</template>

<script>
//import img1 from '../../assets/images/youqinnlianjie (1).png'
//import img2 from '../../assets/images/youqinnlianjie (2).png'
//import img3 from '../../assets/images/youqinnlianjie (3).png'
//import img4 from '../../assets/images/youqinnlianjie (4).png'
//import img5 from '../../assets/images/youqinnlianjie (5).png'
//import img6 from '../../assets/images/youqinnlianjie (6).png'
//import img7 from '../../assets/images/youqinnlianjie (7).png'
//import img8 from '../../assets/images/youqinnlianjie (8).png'
//import img9 from '../../assets/images/youqinnlianjie (8).png'
//import img10 from '../../assets/images/youqinnlianjie (10).png'
//import img11 from '../../assets/images/youqinnlianjie (11).png'
//import img12 from '../../assets/images/youqinnlianjie (12).png'
//import img13 from '../../assets/images/youqinnlianjie (13).png'
//import img14 from '../../assets/images/youqinnlianjie (14).png'
//import img15 from '../../assets/images/youqinnlianjie (15).png'

export default {
  data(){
    return{
      // imgs:[img1,img13,img10,img7,img4,img11]
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
    width: $width;height: 173px;
    margin: 0 auto;
    overflow: hidden;position: relative;
    .scroll{
    	.title {
  width: $width;
  margin-bottom: 20px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid $red;
  span {
    padding: 6px 14px;
    margin-right: 10px;
    background-image: url("../../assets/images/Sprite.png");
    background-repeat: no-repeat;
    background-position: -343px -387px;
  }
  font {
    font-size: 18px;
    font-weight: 450;
    display: inline-block;
    padding-left: 5px;
  }
  a {
    font-size: 14px;
    position: absolute;
    right: 0;
  }
}
      	width:4000px;
      margin-bottom: 30px;
      .jiant a {
      	position: absolute;
      	cursor: pointer;
      	background-repeat: no-repeat;
      	width: 30px;
      	height: 40px;
      	top: 80px;
      }
      
      .left {
      	left: 2px;
      	background-image: url("../../assets/images/Sprite.png");
      	background-position: -392px -344px;
      }
      
      .right {
      	right: 2px;
      	background-image: url("../../assets/images/Sprite.png");
      	background-position: -378px -292px;
      }
      
      .span_img {
      	overflow: hidden;
      	width: 1090px;
      	height: 88px;
      	display: inline-block;
      	padding: 0px 30px;
      	img {
      		float: left;
      		margin: 0px 10px 20px;
      	}
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
