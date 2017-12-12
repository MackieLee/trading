<template>
  <div class="stars">
    <div class="star_bg">
      <input type="radio" :id="'starScore1'+sequence" class="score score_1" value="1" :name="'score'+sequence">
      <a class="star star_1" title="1分"><label :for="'starScore1'+sequence" @click="check">1</label></a>
      <input type="radio" :id="'starScore2'+sequence" class="score score_2" value="2" :name="'score'+sequence">
      <a class="star star_2" title="2分"><label :for="'starScore2'+sequence" @click="check">2</label></a>
      <input type="radio" :id="'starScore3'+sequence" class="score score_3" value="3" :name="'score'+sequence">
      <a class="star star_3" title="3分"><label :for="'starScore3'+sequence" @click="check">3</label></a>
      <input type="radio" :id="'starScore4'+sequence" class="score score_4" value="4" :name="'score'+sequence">
      <a class="star star_4" title="4分"><label :for="'starScore4'+sequence" @click="check">4</label></a>
      <input type="radio" :id="'starScore5'+sequence" class="score score_5" value="5" :name="'score'+sequence">
      <a class="star star_5" title="5分"><label :for="'starScore5'+sequence" @click="check">5</label></a>
    </div>
  </div>
</template>

<script>
export default {
  props:['sequence'],
  data(){
    return{
      score:''
    }
  },
  methods:{
    check:function(){
      this.score = parseInt(event.currentTarget.innerText)
      this.$emit('check',this.sequence,this.score)
    }
  }
};
</script>

<style lang="scss" scoped>
.star_bg {
  width: 72px;
  height: 16px;
  background: url('../../assets/images/star.png') 0 -20px repeat-x;
  position: relative;
  overflow: hidden;
}
.star {
  height: 100%;
  width: 14px;
  line-height: 6em;
  position: absolute;
  z-index: 3;
}
.star:hover {
  background: url('../../assets/images/star.png') repeat-x !important;
  left: 0;
  z-index: 2;
}
.star_1 {
  left: 0;
}
.star_2 {
  left: 14px;
}
.star_3 {
  left: 28px;
}
.star_4 {
  left: 42px;
}
.star_5 {
  left: 56px;
}
.star_1:hover {
  width: 14px;
}
.star_2:hover {
  width: 28px;
}
.star_3:hover {
  width: 42px;
}
.star_4:hover {
  width: 57px;
}
.star_5:hover {
  width: 72px;
}
label {
  display: block;
  _display: inline;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
/* 幕后的英雄，单选按钮 */
.score {
  position: absolute;
  clip: rect(0 0 0 0);
}
.score:checked + .star {
  background: url('../../assets/images/star.png') repeat-x;
  left: 0;
  z-index: 1;
}
.score_1:checked ~ .star_1 {
  width: 14px;
}
.score_2:checked ~ .star_2 {
  width: 28px;
}
.score_3:checked ~ .star_3 {
  width: 42px;
}
.score_4:checked ~ .star_4 {
  width: 57px;
}
.score_5:checked ~ .star_5 {
  width: 72px;
}
.star_bg:hover .star {
  background-image: none;
}
/* for IE6-IE8 JS 交互 */
.star_checked {
  background: url('../../assets/images/star.png') repeat-x;
  left: 0;
  z-index: 1;
}
</style>
