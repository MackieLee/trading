<template>
  <div class="video-list">
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">视频</span><span class="rt">视频上传</span></div>
      </div>
      <div>
        <img src=""/>
        <h1>企业所得税年度纳税申报表中隐藏的稽查陷阱</h1>
        <p>2017-11-28</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.active {
  border-bottom: 1px solid $red;
}
.upload-box{
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
    height: 300px;
  }
}
</style>
