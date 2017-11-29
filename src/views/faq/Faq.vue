<template>
  <div class="faq">
    <teacher-box></teacher-box>
    <faq-box></faq-box>
  </div>
</template>

<script>
import TeacherBox from "./TeacherBox"
import FaqBox from "./FaqBox"
import { quillEditor } from "vue-quill-editor"
export default {
  name: "faq",
  components: {
    TeacherBox,
    FaqBox,
    quillEditor
  },
  data() {
    return {
      content:''
    };
  },
  methods: {
    onWatch: function(state) {
      state === "watch" ? (this.guanzhu = false) : (this.guanzhu = true);

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.faq {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  .main-srch {
    // border: 1px solid $border-rice;
    margin-bottom: 42px;
    .main-srch-input {
      width: 606px;
      height: 36px;
      margin: 24px 12px 0 28px;
      outline: none;
      border: 1px solid $border-rice;
      padding-left: 10px;
    }
    button {
      width: 100px;
      height: 40px;
      background-color: $border-orange;
      color: $white;
      outline: none;
      border: none;
    }
    p {
      margin-left: 28px;
      span {
        line-height: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>
