<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;关于我们</p>
    </div>
    <div class="container">
      <p class="title">
        <i></i>ABOUT US
      </p>
      <div class="content">
        <img src="../../assets/images/us_企业.png" />
        <p>
          神州九鼎财税咨询（北京）公司，是国内专业的房地产财税咨询机构，总部位于北京海淀学院路。
        </p>
        <p>我们的服务宗旨是“为开发商排忧解难，为房地产企业保驾护航”。我们的咨询团队成员都有着丰富的执业经验：有的有深厚的房地产财税咨询经历，有的是长期活跃在房地产、建筑安装培训讲台一线讲师；有的有多年的房地产税务稽查经验，有的来自国内知名的会计师事务所。</p>
        <p>咨询团队参与主持的房地产税收筹划、土地增值税清算项目达五十多个，代表企业有万科、首开置业、鲁商置业、四川蓝光发展、河南建业、国华置业、江苏新能源置业集团等；服务项目业态涵盖住宅、商业、城市综合体、旅游地产、养老地产等。</p>
        <p>我们愿用我们的专业知识，丰富的经验，娴熟的技能，成熟的服务模式，在遵循法律法规的前提下，为企业与企业家规避涉税风险，最大程度降低企业税负，与企业一起共同成长。</p>
      </div>
      <div class="info">
        <p class="copr">神州九鼎财税咨询（北京）有限公司</p>
        <p class="copr">China Jiuding Finance & taxation consulting (Beijing) Co., Ltd</p>
        <div class="connect">
          <div>
            <p><span class="bold-title">电　　话：</span> 010-62311360</p>
            <p><span class="bold-title">传　　真：</span> 010-62311360 </p>
            <p><span class="bold-title">邮　　编：</span> 100083 </p>
          </div>
          <div class="adress">
            <p><span class="bold-title">地　　址：</span>北京市海淀区志新东路5号鸿基世业商务酒店A座5层</p>
            <p class="jiaotong">
              <span class="fujin bold-title">附近交通：</span>
              <span>公交志新北里站,有16路,425路,508路,635路,751路,运通109线;附近地铁15号线北沙滩站和10号线牡丹园站。</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.about {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid $border-rice;
  .bold-title{
    font-size: 16px;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
    background-position: 0px 30px;
    margin-right: 11px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -56px -82px;
      margin-right: 6px;
    }
  }
  .container {
    margin-top: 26px;
    p[class="title"] {
      width: 686px;
      background-image: url('../../assets/images/about01.png');
      text-align: center;
      background-repeat: no-repeat;
      margin: 26px auto;
      font-size: 16px;
      background-position: 0 5px;
    }
    .content {
      overflow: hidden;
      img {
        float: left;
        margin: 15px 60px 65px 30px;
      }
      p {
        margin: 0 45px 20px 60px;
        line-height: 40px;
        text-indent: 32px;
        font-size: 16px;
      }

    }
    .info {
      width: 990px;
      margin: 20px auto 40px auto;
      p {
        line-height: 42px;
      }
      p[class="copr"]{
        line-height: 36px;
      }
      .connect {
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-top: 10px;
        font-size: 14px;
        div {
          width: 230px;
        }
        .adress {
          width: 600px;
          .jiaotong {
            display: flex;
            .fujin {
              width:112px;
            }
          }
        }
      }
    }
  }
}
</style>
