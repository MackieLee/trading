<template>
  <div class="faq-box">
    <div class="title">
      <span></span>
      <font>最新团队</font>
      <a>更多>></a>
    </div>
    <div class="container">
      <div class="floor">
        <div class="item lf">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ask ansr">一般纳税人销售自行开发的房...</div>
            </div>
          </div>
          <div class="more">查看更多&gt;&gt;</div>
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
              <div class="ask ansr">一般纳税人销售自行开发的房...</div>
            </div>
          </div>
          <div class="more">查看更多&gt;&gt;</div>
        </div>
      </div>
      <div class="floor">
        <div class="item lf">
          <div>
            <div class="wen lf">问 :&nbsp;</div>
            <div class="item-container">
              <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
            </div>
          </div>
          <div>
            <div class="wen">答 :&nbsp;</div>
            <div class="item-container">
              <div class="ask ansr">一般纳税人销售自行开发的房...</div>
            </div>
          </div>
          <div class="more">查看更多&gt;&gt;</div>
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
              <div class="ask ansr">一般纳税人销售自行开发的房...</div>
            </div>
          </div>
          <div class="more">查看更多&gt;&gt;</div>
        </div>
      </div>
    </div>
    <div class="click-more">点击查看更多</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.faq-box {
  .board {
    margin-right: 0 !important;
  }
  .title {
    width: $width;
    margin: auto;
    margin-bottom: 10px;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid $rice;
    span {
      padding: 9px 19px;
      margin-right: 10px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: 12px -158px;
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
      margin-top: 24px;
      overflow: hidden;
      border-bottom: 1px solid #FDDDBC;
      .lf {
        float: left;
      }
      .rt {
        float: right;
      }
      .item {
        margin-bottom: 24px;
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
          .ansr{
            margin-bottom: 10px;
          }
        }
        .more {
          text-align: right;
          color: $red;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
  .click-more {
    width: 180px;
    border-radius: 10px;
    background-color: $red;
    font-size: 18px;
    color: $white;
    padding: 10px 0;
    text-align: center;
    margin: 76px auto 108px auto;
    cursor: pointer;
  }
}
</style>
