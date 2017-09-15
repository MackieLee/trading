<template>
  <div class="faq-box">
    <div class="title">
      <span></span>
      <font>最新团队</font>
      <a>更多>></a>
    </div>
    <div class="container">
      <div class="item">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
      </div>
      <div class="item">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
      </div>
      <div class="item board">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
      </div>
      <div class="item">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
      </div>
      <div class="item">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
      </div>
      <div class="item board">
        <div>
          <div class="wen">问 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div>
          <div class="wen">答 :&nbsp;</div>
          <div class="item-container">
            <div class="ask">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</div>
          </div>
        </div>
        <div class="more">查看更多&gt;&gt;</div>
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
  .board{
    margin-right: 0 !important;
  }
  .title {
    width: $width;
    margin: auto;
    margin-bottom: 42px;
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
    .item {
      margin:0 100px 100px 0;
      float: left;
      overflow: hidden;
      .wen {
        color: $red;
        padding-top: 3px;
        font-size: 20px;
        float: left;
      }
      .item-container {
        float: left;
        width: 250px;
        color: $black;
        font-size: 16px;
        line-height: 35px;
        .ask {
          margin-bottom: 15px;
        }
      }
      .more {
        text-align: right;
        color: $red;
        cursor: pointer;
      }
    }
  }
  .click-more {
    width: 230px;
    border-radius: 10px;
    background-color: $red;
    font-size: 18px;
    color: $white;
    padding: 13px 0;
    text-align: center;
    margin: 50px auto 200px auto;
    cursor: pointer;
  }
}
</style>
