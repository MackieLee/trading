<template>
  <div class="qa">
    <p class="sum_of_class">共1个课程</p>
    <div class="container">
      <div class="item">
        <div class="title"><i></i><span>房地产开发企业销售精装修房所含装饰、设备是否视同销售？</span></div>
        <div class="ansr">
          <p class="rd">答：</p>
          <p class="content">《营业税改征增值税试点实施办法》第十四条第二款规定，视同销售不动产的范围是：“单位或者个人向其他单位或者个人无偿转让无形资产或者不动产，但用于公益事业或者以社会公众为对象的除外。”</p>
          <p class="more-sm">更多&gt;&gt;</p>
        </div>
      </div>
      <div class="item">
        <div class="title"><i></i><span>房地产开发企业预收款范围是什么以及开票申报问题如何处理？</span></div>
        <div class="ansr">
          <p class="rd">答：</p>
          <p class="content">预收款包括分期取得的预收款（首付+按揭+尾款）、全款取得的预收款。定金属于预收款；诚意金、认筹金和订金不属于预收款。房地产开发企业收到预收款时，未达到纳税义务发生时间，不开具发票，应按照销售额的3%预缴增值税，填报《增值税预缴税款表》。</p>
          <p class="more-sm">更多&gt;&gt;</p>
        </div>
      </div>
    </div>
    <div class="more">更多&gt;&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'qa'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.qa {
  background-color: #fff;
  overflow: hidden;
  i{
    display: inline-block;
    height: 30px;
    width: 30px;
    background-image: url('../../assets/images/Sprite.png');
  }
  .sum_of_class {
    background-color: $silver;
    padding: 15px;
    border-radius: 3px;
    text-align: center;
    color: #fff;
  }
  .container {
    width: 728px;
    margin: 47px auto 12px auto;
    i{
      background-position: 118px -168px;
    }
    .item{
      margin-bottom: 50px;
      .title{
        font-size: 18px;
      }
      .ansr{
        border: 1px solid $silver;
        padding: 15px;
        margin-top: 25px;
        overflow: hidden;
        .rd{
          color:$red;
        }
        .content{
          text-indent: 32px;
        }
        .more-sm{
          width: 94px;
          height: 35px;
          margin-top: 37px;
          float: right;
          color: $white;
          background-color: $silver;
          line-height: 35px;
          text-align: center;
          border-radius: 3px;
        }
      }
    }
  }
  .more {
    width: 124px;
    height: 44px;
    color: #fff;
    line-height: 44px;
    text-align: center;
    margin: 44px;
    border-radius: 3px;
    font-size: 16px;
    background-color: $silver;
  }
}
</style>
