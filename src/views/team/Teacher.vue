<template>
  <div class="teacher">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;专家团队</p>
    </div>
    <router-link tag="div" to="/tdetail" class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授</p>
        <p>
          九鼎财税专家委员会专家；注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士 生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、...
          【<span>详细</span>】
        </p>
      </div>
    </router-link>
    <div class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">孙玮 教授</p>
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
        <p class="name">孙玮 教授</p>
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
        <p class="name">孙玮 教授</p>
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
        <p class="name">孙玮 教授</p>
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
    padding-top: 20px;
    // border-top: 2px solid $border-rice;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      i{
        background-position: -18px -106px;
        margin-right: 6px;
      }
    }
    .item{
      width: $width;
      display: flex;
      background-color:$bg-light-dark;
      margin: 26px 0 38px 0;
      border: 1px solid $border-rice;
      &:hover{
        background-color: #fff;
      }
      .hd-pic{
        margin: 15px 38px 15px 15px;
      }
      .short-msg{
        margin-top: 29px;
        width: 750px;
        p[class="name"]{
          font-size: $lg-title;
          margin-bottom:32px;
        }
        p{
          font-size: $normal;
          line-height: 30px;
          cursor: pointer;
          i{
            background-position: -56px -56px;
          }
          span{
            color: $red;
          }
        }
      }
    }
  }

</style>
