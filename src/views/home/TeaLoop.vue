<template>
  <div class="carsol-loop">
    <div class="title">
      <span></span>
      <font>专家团队</font>
    </div>
    <div style="position: relative;width: 1220px; margin: auto;">
      <div class="cover" @mouseenter = 'pause' @mouseleave = 'goon' >
        <div class="vessal">
          <img v-for="item in imgs" :style="{ left: loop + 'px' }" :key="item.s" :src="item" class="items" />
        </div>
      </div>
      <div class="direction dir-left" @click="toLeft"></div>
      <div class="direction dir-right" @click="toRight"></div>
    </div>
  </div>
</template>

<script>
  import img1 from '../../assets/images/index_首页切图_03.jpg'
  import img2 from '../../assets/images/index_首页切图_05.jpg'
  import img3 from '../../assets/images/index_首页切图_07.jpg'
  import img4 from '../../assets/images/index_首页切图_09.jpg'
  import img5 from '../../assets/images/index_首页切图_11.jpg'
  import img6 from '../../assets/images/index_首页切图_13.jpg'
  import img7 from '../../assets/images/index_首页切图_09.jpg'


  export default {
    data(){
      return{
        imgs:[img7,img1,img2,img3,img4,img5,img6,],
        loop: 0,
        interval:null,
        interval2: null,
        timer: 0,
      }
    },
    methods: {
      //图片移动
      transform() {
        this.interval = setInterval(() => {
          this.loop--
          if(this.loop%223 === 0){
            this.imgs.push(this.imgs[0])
            this.imgs.shift()
            this.loop = 0
            clearInterval(this.interval)
          }
        }, 10)
      },
      autoRun(){
        //图片停留
        this.interval2 = setInterval(() => {
          clearInterval(this.interval)
          this.transform()
        }, 5000)
      },
      pause() {
        clearInterval(this.interval2)
      },
      goon() {
        this.autoRun()
      },
      toLeft(){
        clearInterval(this.interval2)
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.loop--
          if(this.loop%223 === 0){
            this.imgs.push(this.imgs[0])
            this.imgs.shift()
            this.loop = 0
            clearInterval(this.interval)
          }
        }, 10)
        this.autoRun()
      },
      toRight(){
        clearInterval(this.interval2)
        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.loop++
          if(this.loop%223 === 0 || this.loop === 0){
            this.imgs.splice(0,0,this.imgs[this.imgs.length-1])
            this.imgs.splice(this.imgs.length-1,1)
            this.loop = 0
            clearInterval(this.interval)
          }
        }, 10)
        if(!this.interval2) this.autoRun()
      }
    },
    created(){
      this.autoRun()
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/base.scss";
  .cover{
    width: 1090px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .direction{
    position: absolute;
    top: 120px;
    display: block;
    width: 65px;
    height: 65px;
    cursor: pointer;
  }
  .dir-left{
    left: -10px;
    background-image: url('../../assets/images/to_left.jpg');
  }
  .dir-right{
    right: -10px;
    background-image: url('../../assets/images/to_right.jpg');
  }
  .vessal{
    white-space: nowrap;
    width: 2000px;
    position: relative;
    right: 223px;
  }
  .items{
    width: 204px;
    position: relative;
    margin-right: 19px;
  }
  .title {
    width: $width;
    margin: auto;
    margin-bottom: 20px;
    padding-bottom: 5px;
    position: relative;
    border-bottom: 1px solid $red;
    font {
      font-size: 18px;
      font-weight: 400;
      display: inline-block;
      padding-left: 5px;
    }
    span {
      padding: 10px 14px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-repeat: no-repeat;
      background-position: -299px -386px;
    }
  }
</style>
