<template>
  <div class="slider" @mouseover="onmouseover" @mouseleave="onmouseleave">
    <transition-group class="wrapper" tag="ul" :name="transName">
      <li v-for="(img, index) in imgs" :key="img" v-if="index===cur" ref="container">
        <router-link :to="{ name : 'home' }"><img width="" :src="img" alt="" ref="img"></router-link>
      </li>
    </transition-group>
    <div class="arrow"></div>
    <ul class="dots">
      <li
        v-for="(img, index) in imgs"
        :key="img"
        :class="['dot', index===cur?'active':'']"
        @click="clickDot(index)"></li>
    </ul>
  </div>
</template>

<script>
import img1 from '../../assets/images/banner1.png'
import img2 from '../../assets/images/banner2.png'
import img3 from '../../assets/images/banner3.png'
import img4 from '../../assets/images/banner4.png'
const TO_LEFT = 'slide-left'
const TO_RIGHT = 'slide-right'
export default {
  name: 'slider',
  data () {
    return {
      transName: TO_LEFT,
      imgs: [img1, img2, img3,img4],
      cur: 0,
      timer: null,
    }
  },
  mounted () {
    this.start()
  },
  computed:{

  },
  methods: {
    start () {
      if (!this.timer) {
        this.transName = TO_LEFT
        this.timer = setInterval(() => {
          this.cur++
          this.cur %= 4
        }, 3000)
      }
    },
    stop () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    onmouseover () {
      this.stop()
    },
    onmouseleave () {
      this.start()
    },
    clickDot (index) {
      const lis = this.$refs.container
      for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.length !== 0) {
          return
        }
      }
      if (index > this.cur) {
        this.transName = TO_LEFT
        this.cur = index
      } else
      if (index < this.cur) {
        this.transName = TO_RIGHT
        this.cur = index
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
$width: 100%;
.slider {
  width: 100%;
  overflow: hidden;
  margin: 20px auto;
  position: relative;
  .wrapper {
    height: 300px;
    display: flex;
    align-items: center;
  }
  .dots {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $white;
      margin: 5px 20px;
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-color: $red;
      }
      &.active {
        background: $red;
      }
    }
  }
  .slide-left-enter-to {
    transform: translateX(-$width);
  }
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 1s ease-in-out;
  }
  .slide-left-leave-to {
    transform: translateX(-$width);
  }

  .slide-right-enter {
    transform: translateX(-2*$width);
  }
  .slide-right-enter-to {
    transform: translateX(-$width);
  }
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 1s ease-in-out;
  }
  .slide-right-leave-to {
    transform: translateX($width);
  }
}
</style>
