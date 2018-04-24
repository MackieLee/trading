<template>
  <div class="carsol-loop">
    <div class="title">
      <span></span>
      <font>合作伙伴</font>
    </div>
    <div class="cover" @mouseenter = 'pause' @mouseleave = 'goon' >
      <div class="vessal">
        <img v-for="item in imgs" :style="{ left: loop + 'px' }" :key="item" :src="item" class="items" />
      </div>
      <div class="vessal">
        <img v-for="item in imgs2" :style="{ left: loop + 'px' }" :key="item" :src="item" class="items" />
      </div>
    </div>
  </div>
</template>

<script>
  import img1 from '../../assets/images/kehu/1.png'
  import img2 from '../../assets/images/kehu/2.png'
  import img3 from '../../assets/images/kehu/3.png'
  import img4 from '../../assets/images/kehu/4.png'
  import img5 from '../../assets/images/kehu/5.png'
  import img6 from '../../assets/images/kehu/6.png'
  import img7 from '../../assets/images/kehu/7.png'
  import img8 from '../../assets/images/kehu/8.png'
  import img9 from '../../assets/images/kehu/9.png'
  import img10 from '../../assets/images/kehu/10.png'
  import img11 from '../../assets/images/kehu/11.png'
  import img12 from '../../assets/images/kehu/12.png'
  import img13 from '../../assets/images/kehu/13.png'
  import img14 from '../../assets/images/kehu/14.png'
  import img15 from '../../assets/images/kehu/15.png'
  import img16 from '../../assets/images/kehu/16.png'
  import img17 from '../../assets/images/kehu/17.png'
  import img18 from '../../assets/images/kehu/18.png'
  import img19 from '../../assets/images/kehu/19.png'
  import img20 from '../../assets/images/kehu/20.png'

  export default {
    data(){
      return{
        imgs:[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,],
        imgs2:[img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,],
        loop: 0,
        intval:null,
      }
    },
    methods: {
      autoRun(){
        this.intval = setInterval(() => {
          this.loop -= 1
          if(this.loop === -190){
            let imgs1 = this.imgs[0]
            let imgs2 = this.imgs2[0]
            this.imgs.shift()
            this.imgs.push(imgs1)
            this.imgs2.shift()
            this.imgs2.push(imgs2)
            this.loop = 0
          }
        },20)
      },
      pause() {
        if(this.intval !== null){
          clearInterval(this.intval)
        }
      },
      goon() {
        this.autoRun()
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
  }
  .vessal{
    overflow: hidden;
    white-space: nowrap;
  }
  .items{
    width: 170px;
    position: relative;
    margin-right: 20px;
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
      padding: 6px 14px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-repeat: no-repeat;
      background-position: -345px -390px;
    }
  }
</style>
