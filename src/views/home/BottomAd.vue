<template>
  <div class="bottom-ad">
    <div class="bottom-warp">
      <router-link :to="{ name:'home' }">
        <div class="item item01">
          <p>企业该如何纳税，节水？</p>
        </div>
      </router-link>
      <router-link :to="{ name:'home' }">
        <div class="item item02">
          <p>讲师均来自一线城市经验丰富</p>
        </div>
      </router-link>
      <router-link :to="{ name:'home' }">
        <div class="item item03">
          <p>带着问题学习</p>
        </div>
      </router-link>
      <router-link :to="{ name:'home' }">
        <div class="item item04">
          <p>线下专题</p>
        </div>
      </router-link>
      <router-link :to="{ name:'home' }">
        <div class="item item05">
          <p>视频分段碎片化学习</p>
        </div>
      </router-link>
      <router-link :to="{ name:'home' }">
        <div class="item item06">
          <p>一对一问题答疑</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .bottom-ad{
    overflow: hidden;
    .bottom-warp{
      position: relative;
      height: 464px;
      background: url('../../assets/images/底部海报.png') center center;
      p{
        color: $white;
        line-height: 30px;
        font-size: 16px;
        text-align: center;
        margin: 10px;
      }
      .item{
        display: flex;
        align-items: center;
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.6);
        border: 10px solid rgba(0,0,0,0.1);
      }
      .item01,.item02,.item05,.item06{
        width: 100px;
        height: 100px;
      }
      .item01{
        top: 12%;
        left: 25%;
      }
      .item02{
        top: 67%;
        right: 60%;
      }
      .item03,.item04{
        width: 80px;
        height: 80px;
      }
      .item03{
        top: 14%;
        right: 49%;
      }
      .item04{
        top: 74%;
        right: 43%;
      }
      .item05{
        top: 13%;
        right: 34%;
      }
      .item06{
        top: 63%;
        right: 26%;
      }
    }
  }
</style>
