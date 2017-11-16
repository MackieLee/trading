<template>
  <div id="xxkc_xq">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        <router-link :to="{ name: 'offline' }">&nbsp;&gt;&nbsp;线下课程</router-link>&nbsp;&gt;&nbsp;土地增值税清算技巧[专题]</p>
    </div>
    <div id="xxkc_xq01">
      <img src="../../assets/images/jitax_线下课程_xq01.png" height="300">
      <div class="xq01_r">
        <h2>【自营】土地增值税实战与案例精解</h2>
        <P class="share-in">课程状态：正在报名
          <span></span>所属类别：公开课<span></span><a @click="share"><i></i>分享</a><div class="share-box" v-show="showShare"><i class="arrow"></i><i class="weibo"></i><i class="wechat"></i><i class="qq"></i></div></P>
        <P>举办时间：2017年-11月17日 08:30-17:00</P>
        <P>举办地点：北京，北京工人体育馆</P>
        <p>参会价格：2800元/人 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIP会员参会价格请参考<a style="color:red;cursor:pointer;">会员权益</a></p>
        <ul>
          <!-- <li>
            <b>￥</b>51.00
            <del>￥62.56</del>
          </li> -->
          <li>
            <A>
              <i></i>加入收藏</A>
          </li>
          <li class="r">
            <A href="###">立即购买</A>
          </li>

        </ul>
      </div>
    </div>
    <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <span>课程介绍</span>
        </h2>
        <P>
          本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。本 报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。本报告讲解： 财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。本报告讲解：财务分析方 法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。本报告讲解：财务分析方法简要介绍及 财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。
        </P>
      </div>

      <div class="xq02_r">
        <h2>
          <span>讲师介绍</span>
        </h2>
        <ul>
          <li><img src="../../assets/images/jitax_线下课程_xq02.png" height="96"></li>
          <li class="li01">
            <span> 孙玮</span><br>著名财税专家</li>
        </ul>
        <P>
          孙老师是国内著名税务专家； 注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士生导师；自1993年6月至今在 青岛大学经济学院工作，讲授《中国税制》、《国际税收》、.......
        </P>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "odetail",
  data(){
    return{
      showShare:false
    }
  },
  methods:{
    share:function(){
      this.showShare = !this.showShare
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
* {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0 none;
}

i {
  display: inline-block;
  width: 26px;
  height: 25px;
  background-image: url("../../assets/images/Sprite.png");
}

.cur-posi {
  margin: 20px 0 26px 0;
  i {
    background-position: -18px -106px;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
}
.share-in{
  position: relative;
  .share-box{
    position: absolute;
    bottom:-20px;
    right:0;
    width: 108px;
    height: 40px;
    background-color: #989898;
    border-radius: 3px;
    cursor: pointer;
    .arrow{
      width: 15px;
      height: 13px;
      position: absolute;
      top:-14.5px;
      left:37%;
      background-position: -105px -130px;
    }
    i{
      margin: 5px 5px;
    }
    .weibo{
      background-position: -339px -13px;
      &:hover{
        background-position: -184px -88px;
      }
    }
    .wechat{
      background-position:  -339px -46px;
      &:hover{
        background-position: -184px -120px;
      }
    }
    .qq{
      background-position:  -339px -83px;
      &:hover{
        background-position: -182px -46px;
      }
    }
  }
}
#xxkc_xq {
  height: auto;
  width: 1090px;
  margin: 0 auto;
  color: $black;
  font-family: "微软雅黑";
  font-size: 16px;
  // border-top: 1px solid $border-rice;
  padding-top: 20px;
}
#xxkc_xq01 {
  width: 88%;
  height: 356px;
}

#xxkc_xq01 img {
  float: left;
  margin-left: 6px;
}

#xxkc_xq01 .xq01_r {
  float: right;
}

#xxkc_xq01 .xq01_r h2 {
  font-size: 18px;
  padding-bottom: 45px;
}

#xxkc_xq01 .xq01_r p {
  padding-bottom: 26px;
  font-size: 14px;
}

#xxkc_xq01 .xq01_r p {
  span {
    width: 15px;
    height: 20px;
    display: inline-block;
  }
  a{
    color: $dark;
    cursor: pointer;
    &:hover{
      color: $red;
    }
    i{
      background-position: -385px -6px;
      vertical-align: text-bottom;
      &:hover{
        background-position: -385px -42px;
      }
    }
  }
}

#xxkc_xq01 .xq01_r p strong {
  width: 116px;
  height: 20px;
  display: inline-block;
}

#xxkc_xq01 .xq01_r ul {
  height: auto;
  width: 100%;
  overflow: hidden;
}

#xxkc_xq01 .xq01_r ul li {
  float: left;
  color: $red;
  font-size: 28px;
  margin-right: 15px;
}

#xxkc_xq01 .xq01_r ul li b {
  font-size: 16px;
}

#xxkc_xq01 .xq01_r ul li del {
  color: $black;
  font-size: 14px;
}

#xxkc_xq01 .xq01_r ul li a {
  height: 34px;
  width: 100px;
  padding: 0 10px;
  background: $red;
  color: $white;
  font-size: 16px;
  display: block;
  border-radius: 3px;
  line-height: 34px;
  text-align: center;
  line-height: 34px;
  cursor: pointer;
  i {
    background-position: -185px -195px;
    position: relative;
    top: 7px;
  }
}

#xxkc_xq #xxkc_xq02 {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

#xxkc_xq02 {
  overflow: hidden;
}

#xxkc_xq02 .xq02_l {
  width: 564px;
  float: left;
}

#xxkc_xq02 .xq02_l h2 {
  width: 100%;
  height: 32px;
  border-bottom: 1px solid $red;
}

#xxkc_xq02 .xq02_l h2 span {
  width: 100px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  background: $red;
  color: $white;
  display: block;
  font-weight: normal;
  font-size: 16px;
}

#xxkc_xq02 .xq02_l p {
  text-indent: 2em;
  line-height: 36px;
  padding-top: 20px;
  width: 98%;
}

#xxkc_xq02 .xq02_r {
  width: 410px;
  float: right;
}

#xxkc_xq02 .xq02_r h2 {
  width: 100%;
  height: 32px;
  border-bottom: 1px solid $red;
}

#xxkc_xq02 .xq02_r h2 span {
  width: 100px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  background: $red;
  color: $white;
  display: block;
  font-weight: normal;
  font-size: 16px;
}

#xxkc_xq02 .xq02_r ul {
  padding-top: 20px;
  height: auto;
  width: 98%;
  overflow: hidden;
  li {
    float: left;
    font-size: 14px;
  }
}

#xxkc_xq02 .xq02_r ul .li01 {
  margin: 5px 0 0 30px;
  span {
    font-size: 18px;
    line-height: 40px;
  }
}

#xxkc_xq02 .xq02_r p {
  text-indent: 2em;
  line-height: 36px;
  padding-top: 20px;
  width: 98%;
}
</style>
