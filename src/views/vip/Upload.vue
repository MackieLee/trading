<template>
  <div class="upload">
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">课程(0)</span><span class="rt">视频管理</span></div>
      </div>
      <div>111111111111111111111111111111111111111111111<br>111111111111111111111111111111111111111111</div>
    </div>
    <div class="bodan">
      <div class="head">
        <div class="title"><span class="lf">课程(2)</span><span class="rt">视频管理</span></div>
      </div>
      <div>111111111111111111111111111111111111111111</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/style/base.scss";
.upload-box,
.bodan {
  border: 1px solid $border-dark;
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
  .upload-box {
    border: 1px solid $border-dark;
  }
}
</style>
