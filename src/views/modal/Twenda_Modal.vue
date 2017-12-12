<template>
  <div class="modal">
    <!-- stars -->
    <div class="fixed">
      <div class="content">
        <div class="close" @click="closeWendaModal"></div>
        <div class="ctr">
          <textarea placeholder=""/>
          <div class="sub-btn">
            <input type="button" class="submit" @click="submitCommit" value="确   定">
            <!-- vue-resource 传递事件给父组件，然后在文档中添加笔记标题 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  props: {
    // 子组件接收数据
  },
  methods: {
    //子组件触发父组件事件
    closeWendaModal: function() {
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit("closeWendaModal");
    },
    submitCommit: function() {
      //vue-resource....
      this.$emit("closeWendaModal");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.fixed {
  overflow: hidden;
  position: fixed;
  top: 20%;
  width: 100%;
}
.content {
  width: 700px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .close {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/images/Sprite.png');
    background-position: -390px -208px;
  }
  .ctr {
    textarea {
      display: block;
      margin-left: 64px;
      resize: none;
      width: 550px;
      height: 120px;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      font-size: 14px;
      border: 1px solid silver;
      margin: 60px auto;
    }
    .sub-btn {
      .submit {
        text-align: center;
        border-radius: 3px;
        height: 36px;
        cursor: pointer;
        width: 80px;
        line-height: 36px;
        outline: none;
        color: $white;
        background-color: #e7141a;
        margin: 15px auto;
        border: none;
        display: block;
      }
    }
  }
}
</style>
