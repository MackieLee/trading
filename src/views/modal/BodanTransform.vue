<template>
  <div class="modal">
    <!-- stars -->
    <div class="fixed">
      <div class="content">
        <div class="close" @click="closeModal"></div>
        <div class="select">
          <select>
            <option>
              播单1
            </option>
            <option>
              播单2
            </option>
            <option>
              播单3
            </option>
          </select>
        </div>
        <div>
          <input type="button" class="submit" value="确定"/>
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
    closeModal: function() {
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit("closeModal");
    },
    submitCommit: function() {
      //vue-resource....
      this.$emit("closeModal");
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
    background-image: url("../../assets/images/Sprite.png");
    background-position: -522px -126px;
  }
  .select{
    margin: 30px auto;
    width: 160px;
    select{
      width: 100%;
      height: 30px;
    }
  }
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
</style>
