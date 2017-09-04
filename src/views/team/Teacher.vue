<template>
  <div class="teacher">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;专家团队</p>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/tdetail" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/home" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/home" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/home" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/home" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授 <i></i></p>
        <router-link to="/home" tag="p">
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'teacher'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/base.scss';
  .teacher{
    width: $width;
    margin: 0 auto;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      padding: 26px 0;
      border-bottom:1px solid $rice;
      i{
        background-position: -106px -204px;
        margin-right: 6px;
      }
    }
    .item{
      width: $width;
      height: 155px;
      border-bottom:1px dotted $black;
      display: flex;
      .hd-pic{
        margin: 12px 34px 20px 10px;
      }
      .short-msg{
        margin: 12px 0 20px 0;
        width: 750px;
        p[class="name"]{
          font-size: $lgtitle;
          margin-bottom:35px;
        }
        p{
          font-size: $normal;
          line-height: 30px;
          cursor: pointer;
          i{
            background-position: -56px -62px;
          }
        }
      }
    }
  }

</style>
