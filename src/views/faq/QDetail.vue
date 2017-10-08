<template>
  <div class="q-detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        &nbsp;&gt;&nbsp;问答
      </p>
    </div>
    <div class="item">
      <div class="left">
        <div class="flex">
          <div class="head-128">
            <img src="../../assets/images/jitax_问答_01.png"/>
          </div>
          <div class="name">
            <div>
              <p>孙老师</p>
              <span>已解答27个问题</span>
            </div>
            <div class="price">
              ￥50.00元/次
            </div>
          </div>
        </div>
        <div class="flex tags">
          <span>擅长回答：</span>
          <ul>
            <li>税收筹划</li>
            <li>土地税清算</li>
            <li>营改增</li>
            <li>税务健康体检</li>
          </ul>
        </div>
        <div class="flex content">
          <div class="jianjie">讲师简介 : </div>
          <div class="info">
            九鼎财税专家委员会专家； 注册会计师、注册税务师；东北财经大学财政专业硕士； 现任青岛大学经济学院副教授，硕士生导师；自1993年6月至今在青岛大学经济学院工作， 讲授《中国税制》、《国际税收》、《税务检查》、《外国税制》、《税务会计》等课程； 自2001年开始至今在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的 老师之一，17年财税培训经历，被称为财税培训界的“常青树”。
          </div>
        </div>
      </div>
      <div class="right">
        <div class="container">
          <div class="tag-box">
            <span>
              <p>
                课程
              </p>
              <font>10</font>
            </span>
            <span>
              <p>回答</p>
              <font>17</font>
            </span>
            <span>
              <p>荣誉值</p>
              <font>99%</font>
            </span>
          </div>
          <div class="ansr-list">
            <p>
              <i></i>他回答过的问题</p>
            <ul>
              <li>• 请问营改增后装饰公司营业额大，但不想成为一般...</li>
              <li>• 首先，个人所得税法中规定，在中国境内有住所而在</li>
              <li>• 您好！根据描述，看起来是个海外工程的EPC（设计</li>
              <li>• 管理费主要指其他企业分摊的管理费用，这部分费用</li>
              <li>• 请问营改增后装饰公司营业额大，但不想成为一般</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="ques-discr">
      <div class="container">
        <h3>问题描述 : </h3>
        <textarea></textarea>
        <router-link to="/home" tag="p">提交问题</router-link>
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
.q-detail {
  width: $width;
  margin: 0 auto;
  i {
    display: inline-block;
    width: 30px;
    height: 21px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    padding: 0 0 26px 0;
    border-bottom: 1px solid $rice;
    i {
      background-position: -51px -82px;
      margin-right: 6px;
    }
  }
  .item {
    display: flex;
    .flex {
      display: flex;
      .head-128{
        height: 128px;
        width: 128px;
        margin: 10px 30px 0 37px;
      }
      .name {
        margin: 35px 0 40px 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        P {
          font-size: $lgtitle;
          margin-bottom: 16px;
        }
        .price {
          color: #137584;
          font-size: $normal;
        }
      }
    }
    .tags {
      margin: 20px 0 30px 44px;
      span {
        color: $red;
      }
    }
    .content {
      margin-left: 44px;
      .info {
        line-height: 35px;
        width: 500px;
        text-indent: 32px;
      }
      .jianjie {
        color: $red;
        width: 70px;
        padding-top: 6px;
      }
    }
    .right {
      margin-left: 37px;
      width: 100%;
      .container {
        margin: 34px 30px 0 0;
        padding-bottom: 5px;
        border-left: 1px solid #ddd;
        .tag-box {
          display: flex;
          width: 250px;
          justify-content: space-between;
          margin: 0 auto;
          span {
            p {
              width: 50px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              border-radius: 5px;
              margin-bottom: 20px;
              background: -webkit-linear-gradient(#fdb483, #ff84f3);
              background: -o-linear-gradient(#fdb483, #ff84f3);
              background: -moz-linear-gradient(#fdb483, #ff84f3);
              background: linear-gradient(#fdb483, #ff84f3);
            }
            font {
              display: block;
              text-align: center;
            }
          }
          span[class='shanchang'] {
            font-size: 16px;
            display: block;
            width: 120px;
            height: 20px;
            text-align: center;
            background-color: $white;
            position: absolute;
            bottom: -10px;
            left: 25%;
            i {
              background-position: 2px -209px;
              margin-right: 6px;
            }
          }
        }
        .ansr-list {
          width: 335px;
          margin: 54px 32px 0 65px;
          p {
            color: $red;
            i {
              background-position: -148px -71px;
              margin-right: 6px;
            }
          }
          ul {
            margin: 25px 0 0 0;
            li {
              margin: 10px 0;
            }
          }
        }
      }
    }
  }
  .ques-discr {
    width: 100%;
    margin-bottom: 100px;
    .container {
      margin: 30px 35px;
      h3{
        margin-left: 23px;
        color: $red;
        font-size: 16px;
      }
      textarea {
        resize: none;
        width: 964px;
        height: 90px;
        overflow: hidden;
        outline: none;
        text-indent: 32px;
        padding: 13px 28px;
        margin: 23px 0;
      }
      p{
        color: $white;
        margin: 0 0 26px 23px;
        background-color: $red;
        width: 126px;
        padding: 8px 0;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
}
</style>
