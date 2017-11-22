<template>
  <div class="offline">
    <div class="items">
      <div class="item">
        <div class="col col-1">
          <router-link to="/odetail">
            <img class="img" src="../../assets/images/jdtax_线下_01.png">
            <span class="tag tag-01">正在报名</span>
          </router-link>
        </div>
        <div class="col col-2">
          <p class="title">
            税收筹划案例精解-3
          </p>
          <p>金税三期大数据下，税务稽查新模式及企业应对策略（克拉玛依）</p>
          <p>2017-09-07 至 09-08 <span class="position">地点: 具体位置待定</span>
            <i></i>
          </p>
          <p class="tag tag-02">公开课</p>
          <p>讲师：孙 炜 教授 九鼎财税专家委员会专家；注册会计师、注册税务师；</p>
        </div>
        <div class="col col-3">
          <router-link class="tag tag-03" to="/home" tag="p">立即报名</router-link>
          <i></i>
          <p>
            资料下载
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.offline {
  width: $width;
  margin: 0 auto;
  .items{
    .item {
      border: 1px solid $red;
      margin-top: 20px;
      padding: 10px 0 10px 10px;
      display: flex;
      i{
        width: 20px;
        height: 20px;
        background-image: url('../../assets/images/Sprite.png');
        vertical-align: text-bottom;
      }
      a {
        display: block;
        position: relative;
        overflow: hidden;
      }
      .tag {
        display: block;
        text-align: center
      }
      .position{
        margin-left: 20px;
      }
      .tag-01 {
        width: 80px;
        height: 27px;
        line-height: 27px;
        color: $white;
        text-align: center;
        background-color: $red;
        position: absolute;
        bottom: 5px;
        left: 0;
      }
      .tag-02 {
        width: 70px;
        height: 24px;
        line-height: 24px;
        border: 1px solid $border-blue;
        border-radius: 5px;
      }
      .tag-03 {
        width: 90px;
        height: 30px;
        border: 1px solid $border-blue;
        line-height: 30px;
        border-radius: 5px;
        font-size: 14px;
        color: $black !important;
        // &:hover{
        //   background-color: $btn-danger-hover;
        // }
      }
      .col-2 {
        margin: 0 115px 0 30px;
        .title {
          margin-top: 0;
          color: $blue;
          font-size: 16px;
        }
        p {
          margin-top: 14px;
          font-size: 14px;
        }
        i{
          display: inline-block;
          background-position: -61px -253px;
        }
      }
      .col-3 {
        margin: 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          text-align: center;
          color: $blue;
          cursor: pointer;
        }
        i{
          display: block;
          margin:20px auto 5px;
          background-position: -59px -315px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
