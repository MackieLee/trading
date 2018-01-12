<template>
  <div id="divcss5">
    <div class="small_pic" @mousemove="mag" @mouseout="magOff">
      <span class="float_layer"></span>
      <img src="../../assets/images/jifen02.jpg" width=300px height=300px />
    </div>
    <div class="big_pic"><img id="lg-img" src="../../assets/images/jifen02.jpg" width=1024px height=768px /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentX:'',
      percentY:''
    }
  },
  mounted: function() {

  },
  computed: {
    floatLayer: () => document.getElementsByClassName('float_layer'),
    bigPic: () => document.getElementsByClassName('big_pic'),
    container: () => document.getElementById('divcss5'),
    smPic: () => document.getElementsByClassName('small_pic'),
    lgImg:() => document.getElementById('lg-img')
  },
  methods: {
    mag: function() {
      this.bigPic[0].style.display = 'block'
      this.floatLayer[0].style.display = 'block'
      var offX = event.pageX - this.container.offsetLeft - this.smPic[0].offsetLeft - this.floatLayer[0].offsetWidth / 2
      var offY = event.pageY - this.container.offsetTop - this.smPic[0].offsetTop - this.floatLayer[0].offsetHeight / 2
      if (offX < 0) {
        offX = 0
      } else if (offX > 250) {
        offX = 250
      }
      if (offY < 0) {
        offY = 0
      }
      else if (offY > 250) {
        offY = 250
      }
      this.floatLayer[0].style.top = offY + 'px'
      this.floatLayer[0].style.left = offX + 'px'
      this.percentX = offX / 250;
      this.percentY = offY / 250;
      this.lgImg.style.left = -this.percentX * (this.lgImg.offsetWidth - 354) + 'px';
      this.lgImg.style.top = -this.percentY * (this.lgImg.offsetHeight - 354) + 'px';
    },
    magOff: function() {
      this.bigPic[0].style.display = ''
      this.floatLayer[0].style.display = ''
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/base.scss';
#divcss5 {
  width: 300px;
  height: 300px;
  position: relative;
}

#divcss5 .small_pic {
  width: 120px;
  height: 90px;
  background: $dark;
  position: relative;
}

#divcss5 .float_layer {
  width: 50px;
  height: 50px;
  border: 1px solid $black;
  background: $white;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

#divcss5 .big_pic {
  position: absolute;
  top: -1px;
  left: 350px;
  width: 350px;
  height: 350px;
  overflow: hidden;
  border: 2px solid $dark;
  display: none;
  z-index: 1;
}

#divcss5 .big_pic img {
  position: absolute;
  top: -30px;
  left: -80px;
}
</style>
