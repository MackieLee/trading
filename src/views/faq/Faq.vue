<template>
  <div class="faq">
    <teacher-box></teacher-box>
    <div class="main-srch">
      <input class="main-srch-input" />
      <button>搜一下</button>
      <p>
        <span>
          全部
        </span>
        <span>
          财务
        </span>
        <span>
          税收
        </span>
        <span>
          会计
        </span>
      </p>
    </div>
    <faq-box></faq-box>
  </div>
</template>

<script>
import TeacherBox from './TeacherBox'
import FaqBox from './FaqBox'
export default {
  name: 'faq',
  components: {
    TeacherBox, FaqBox
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.faq {
  width: $width;
  margin: 0 auto;
  .main-srch {
    border: 1px solid #9e9e9e;
    margin-bottom: 42px;
    .main-srch-input {
      width: 606px;
      height: 36px;
      margin: 24px 12px 0 28px;
      outline: none;
    }
    button{
      width: 122px;
      height: 40px;
      border: 1px solid #a1a1a1;
      border: none;
    }
    p{
      margin-left: 28px;
      span{
        line-height: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>
