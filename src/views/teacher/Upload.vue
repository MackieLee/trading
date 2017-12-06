<template>
  <div class="upload">
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">视频</span><span class="rt">视频上传</span></div>
      </div>
      <div class="video-loader">
        <div class="center">
          <p>您还没有上传过视频！</p>
          <input type="button" value="立即上传" class="btn main-btn"/>
        </div>
      </div>
    </div>
    <div class="bodan">
      <div class="head">
        <div class="title"><span class="lf">播单</span><span class="rt">创建播单</span></div>
      </div>
      <div class="video-loader">
        <div class="center">
          <p>这个播单内容不多哦 快丰富一下吧~</p>
          <input type="button" value="创建播单" @click="showModal" class="btn main-btn"/>
        </div>
      </div>
    </div>
    <div class="modal-outer" v-show="modal">
      <modal @closeModal="closeModal" :content-series="series"></modal>
    </div>
  </div>
</template>

<script>
import Modal from "../modal/TeacherMainModal";
export default {
  components: { Modal },
  data() {
    return {
      modal: false,
      series: true
    };
  },
  methods: {
    showModal: function() {
      console.log("show");
      this.modal = true;
    },
    closeModal: function() {
      this.modal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.active {
  border-bottom: 1px solid $red;
}
.upload-box,
.bodan {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  .head {
    .lf {
      float: left;
    }
    .rt {
      float: right;
    }
    .title {
      background-color: $bg-nav;
      line-height: 35px;
      overflow: hidden;
      span {
        width: 70px;
        text-align: center;
      }
    }
  }
  .video-loader {
    height:200px;
  }
}
.btn {
  padding: 10px;
  color: $white;
  background-color: $red;
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}
.center {
  position: relative;
  top: 20%;
  p {
    text-align: center;
    margin-bottom: 10px;
  }
}
.modal {
  height: 176%;
}
</style>
