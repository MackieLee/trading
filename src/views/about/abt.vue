<template>
  <div class="abt">
    <div class="container">
      <h2 class="title">
        <i></i>关于我们
      </h2>
      <div class="content">
        <!--<img src="../../assets/images/us_企业.png" />-->
        <p>
          神州九鼎财税咨询（北京）公司，简称九鼎财税，是国内新锐的房地产财税咨询机构，总部位于北京海淀学院路，在天津、青岛设有分支机构。
        </p>
        <p>咨询团队由国内著名的房地产税收筹划专家、被誉为“房地产财税女王”的孙炜老师担纲领衔，团队成员均有着丰富的房地产财税实战经验。</p>
        <p>我们愿用专业的知识、丰富的经验、娴熟的技能、成熟的服务模式，在遵循法律法规的前提下，为企业提供靠谱的财税解决方案，帮助企业化解涉税风险、合法节税，与企业共同成长。</p>
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
import { loginUserUrl } from '@/api/api'
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  created () {
    let res = loginUserUrl('getAbout_Us',{
      username: "niuhongda",
      password: "123123q"
    }).then((res)=>{
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.abt {
  width:890px;
  margin: 0 auto;
  .bold-title{
    font-size: 16px;
  }
  i {
    display: inline-block;
    width: 26px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
    background-position: -13px -349px;
    margin-right: 5px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right:10px;
    }
  }
  .container {
    margin-top: 26px;
    h2[class="title"] {
      width: 670px;
      background-image: url('../../assets/images/about01.png');
      text-align: center;
      background-repeat: no-repeat;
      margin: 26px auto;
      font-size:18px;
      background-position: 0 5px;
    }
    .content {
      overflow: hidden;
      img {
        float: left;
        margin:10px 30px 0px;
      }
      p {
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
         font-size: 14px;
      }
      p[class="copr"]{
        line-height: 36px; font-size: 14px;
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
