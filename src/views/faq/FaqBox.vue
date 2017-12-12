<template>
  <div class="faq-box">
    <div class="modal-outer" v-show="modal">
      <modal @closeModal="closeModal" :content-series="series"></modal>
    </div>
    <div class="title">
      <span></span>
      <font>最新问答</font>
    <!--  <a>更多>></a>-->
    </div>
    <div class="container">
      <div class="floor">
        <div class="item lf lf-part">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ask ansr">一般纳税人销售自行开发的房...<span class="more">查看更多&gt;&gt;</span></div>
            </div>
          </div>
        </div>
        <div class="item rt">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container lf">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ask ansr">一般纳税人销售自行开发的房...<span class="more">查看更多&gt;&gt;</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor">
        <div class="item lf lf-part">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ask ansr">一般纳税人销售自行开发的房...<span class="more">查看更多&gt;&gt;</span></div>
            </div>
          </div>
        </div>
        <div class="item rt">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container lf">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ansr">一般纳税人销售自行开发的房...<span class="more">查看更多&gt;&gt;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="click-more">点击查看更多</div>
  </div>
</template>

<script>
import modal from "./Modal";
export default {
  components: { modal },
  data() {
    return {
      modal: false,
      series: true
    };
  },
  methods: {
    closeModal: function() {
      this.modal = false;
    },
    showDetail: function() {
      this.modal = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.faq-box {
  .modal-outer {
    width: 100%;
    height: 240%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    .close {
      position: absolute;
      top: 15%;
      left: 60%;
    }
  }
  .board {
    margin-right: 0 !important;
  }
  .title {
    width: $width;
    margin: auto;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid $border-rice;
    span {
      padding: 9px 14px;
      margin-right: 10px;
      background-image: url("../../assets/images/Sprite.png");
      background-position: -98px -84px;
    }
    font {
      font-size: 18px;
      font-weight: 450;
    }
    a {
      font-size: 14px;
      position: absolute;
      right: 0;
    }
  }
  .container {
    overflow: hidden;
    .floor {
      overflow: hidden;
      border-bottom: 1px dashed $border-orange;
      .lf {
        float: left;
      }
      .rt {
        float: right;
      }
      .lf-part {
        border-right: 1px dashed $border-orange;
      }
      .item {
        margin: 24px 0;
        padding-right: 50px;
        div {
          overflow: hidden;
        }
        width: 478px;
        .wen {
          color: $red;
          padding-top: 3px;
          font-size: 16px;
          float: left;
        }
        .item-container {
          float: left;
          color: $black;
          font-size: 12px;
          line-height: 35px;
          width: 432px;
          .ask {
            margin-bottom: 10px;
          }
        }
        .more {
          text-align: right;
          color: $blue;
          cursor: pointer;
          font-size: 12px;
          margin-left: 10px;
        }
      }
    }
  }
  .click-more {
    width: 180px;
    border-radius: 3px;
    background-color: $btn-danger;
    font-size: 16px;
    color: $white;
    padding: 5px 0;
    text-align: center;
    margin: 76px auto 108px auto;
    cursor: pointer;
    &:hover {
      background-color: $btn-danger-hover;
    }
  }
}
</style>
