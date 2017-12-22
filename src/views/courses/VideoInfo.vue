<template>
  <div id="xxkc_xq">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        <router-link :to="{ name: 'offline' }">&nbsp;&gt;&nbsp;线上课程</router-link>&nbsp;&gt;&nbsp;土地增值税清算技巧[专题]</p>
    </div>
    <div id="xxkc_xq01">
			<router-link tag="div" :to="{path:'./video'}" class="xq01_shit">
				<img src="../../assets/images/jdtax_线下_01.png">
				  <a target="_blank" class="shit" data-trace="518" href="###"
				data-trace-type="免费试听" data-trace-position="封面">免费试听</a>
			</router-link>
      <div class="xq01_r">
        <h2>【自营】土地增值税实战与案例精解
      	  <span>年终盛典，限时6折，领券再减100</span>
        </h2>
        <P class="p"> <b>￥</b> 2294.2<del>￥3962.56</del></P>
        <P class="share-in">课程状态：正在报名
          <a @click="share"><i></i>分享</a><div class="share-box" v-show="showShare"><i class="arrow"></i><i class="weibo"></i><i class="wechat"></i><i class="qq"></i></div></P>
        <P>课程数量：5 节</P>
        <p>适合人群：学 员</p>
        <p class="p01">
        	<span @click='cur01=true' v-bind:class="{'red':!cur01}">系列</span>
        	<span @click='cur01=false' v-bind:class="{'red':cur01}">小节</span>
        </p>
        <ul>
          <li>
            <a  class="a">
              <i></i>加入购物车</a>
          </li>
          <li class="r">
            <router-link tag="div" :to="{name:'pay'}" class="a" >立即购买</router-link>
          </li>
        </ul>
      </div>
       <div  class="rt">
      		<h3>相关推荐</h3>
      	 <div class="div">
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解
      	 </p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      	  <div class="div">
      	 	<img src="../../assets/images/huanyuanzx02.png">
      	 <p>【自营】土地增值税实战与案例精解</p>
      	 <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
      	 </div>
      </div>
    </div>


   <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <!-- .............................. -->
          <span @click="cur = true" :class="{'cur-active' : cur}">课程介绍</span>
          <span @click="cur = false" :class="{'cur-active' : !cur}">讲师介绍</span>
        </h2>
        <div v-if="cur">
          <P>
         本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。
本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；
课程总及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。<br>
【课程内容】<br>
模块一： 2017智能征管时代下汇算清缴主要风险点梳理<br>
（一）在企业财务上未反映的“视同销售”，而在汇算清缴被忽略不计。<br>
（二）对“股权捐赠收益确认”新政不理解，而在汇算清缴被忽略不计。<br>
（三）企业“开办费”的财税处理，对国税函（2009）98号通知与税总（2012）15号公告理解不全面、执行不准确，隐含纳税风险。<br>
（四）因向“非金融企业借贷资金利息”扣除缺乏合规合法的证据支持，被税务稽查作纳税调增处理。<br>
（五）因“固定资产发生改扩建后”的折旧年限和计税基础确定不准确，被税务稽查作纳税调增处理。<br>
（六）对“资产损失扣除”中净损失的确认、实际损失扣除时点的确定、实际资产损失追补确认期限、法定损失确认的条件等不合规不合法；被税务稽查作纳税调增处理。<br>
（七）企业认定为高新技术企业后，为满足研发费用税前扣除的条件，有些财务改账后修改申报表，增加汇算年度的研发费用。但是在金税三期上线后，所有报表的改动税务机关都有信息，不会把原信息覆盖掉，很难向税务机关解释清楚。为税务稽查埋下了风险。<br>
（八）税务机关在征管中发现纳税人对研发费加计扣除事项处理上，有的陷入了“人员工资费用、固定资产折旧、财政资金收入、预缴加计扣除”四项误区，隐含纳税风险。<br>
（九）汇算清缴时忽视了营改增对应纳税所得额的影响，被税务稽查作纳税调增处理。<br>
（十）有的企业财务对全面营改增后增值税与企业所得税纳税义务确认的差异不清楚，被税务稽查作纳税调增处理。<br>
（十一）有的企业财务对新会计准则实施后税会差异不清楚，被税务稽查作纳税调增处理。<br>
模块二：2017汇算清缴收入确认环节的税会处理、风险揭示及申报关注点<br>
（一）所得税收入确认的原则把控<br>
（二）企业年底前收入税会处理风险排查与防控<br>
（三）价格明显偏低的收入风险排查与防控<br>
（四）企业商品销售收入税会处理风险排查与防控<br>
（五）提供劳务收入税会处理风险排查与防控<br>
（六）租金收入和使用权收入税会处理风险排查与防控<br>
（七）利息收入税会处理风险排查与防控<br>
（八）销售退回和销售折让税会处理风险排查与防控<br>
（九）建造合同收入税会处理风险排查与防控<br>
（十）政府补助收入税会处理风险排查与防控<br>
（十一）房地产企业预售业务的税会处理风险排查与防控<br>
（十二）企业特殊交易或事项税会处理风险排查与防控<br>
（十三）视同销售业务财税处理及A105010报表填报<br>
（十四）政府补助业务财税处理及A105040等报表填报<br>
（十五）未按权责发生制确认收入及A105020报表填报<br><br>

模块三：2017汇算清缴成本费用扣除环节的税会处理、风险揭示及申报关注点（一）工资薪酬支出和社会保险费税的会处理风险排查与防控<br>
（二）职工福利费的税会处理风险排查与防控<br>
（三）劳动保护支出和防暑降温支出的税会处理风险排查与防控<br>
<a href="###" class="a">查看更多>></a>
          </P>

        </div>
        <div v-else class="xq02_r"> <P>
         孙老师是国内著名税务专家；  注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士生导师；自1993年6月至今在青岛大学经济学院工作，讲授《中国税制》、《国际税收》、《税务检查》、
         《外国税制》、《税务会计》等课程；自2001年开始至今在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的……
        </P>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "odetail",
  data() {
    return {
      showShare: false,
      cur:true,
      cur01:false,
    };
  },
  methods: {
    share: function() {
      this.showShare = !this.showShare;
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
  height: 23px;
  background-image: url("../../assets/images/Sprite.png");
}
.cur-posi {
  margin: 0px 0 26px 0;
  p {
    height: 20px;
    line-height: 20px;
  }
  i {
    background-position: -18px -97px;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
}
.share-in {
  position: relative;
  .share-box {
    position: absolute;
    bottom: -20px;
    left: 200px;
    width: 108px;
    height: 40px;
    background-color: #ddd;
    border-radius: 3px;
    cursor: pointer;
    .arrow {
      width: 15px;
      height: 13px;
      position: absolute;
      top: -14.5px;
      left: 37%;
      background-position: -105px -130px;
    }
    i {
      margin: 5px 5px;
    }
    .weibo {
      background-position: -339px -13px;
      &:hover {
        background-position: -184px -88px;
      }
    }
    .wechat {
      background-position: -339px -46px;
      &:hover {
        background-position: -184px -120px;
      }
    }
    .qq {
      background-position: -339px -83px;
      &:hover {
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
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  overflow: hidden;
  .xq01_shit{
    width: 35%;
    float: left;
    position: relative;
    img {
      width: 100%; height:400px
    }
    .shit:hover {
      background-image: url(../../assets/images/hovershit_12_6.png);
    }
    .shit {
      position: absolute;
      background-image: url(../../assets/images/shit_12_6.png);
      left: 50%;
      top: 50%;
      cursor: pointer;
      width: 132px;
      height: 44px;
      line-height: 44px;
      text-align: right;
      padding-right: 20px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      box-sizing: border-box;
      margin-top: -22px;
      margin-left: -66px;
    }
  }
       .rt{
       margin-left: 70px; float: right;
       width: 160px;text-align: center;
       h3{ height: 40px;
    line-height: 40px; border-bottom: 1px solid #ccc;
    font-size: 12px; margin-bottom:10px;
    font-weight: bold;
       }
       .div{border: 1px solid #ccc; padding: 8px; margin: 5px 0;
       p{margin: 5px 0; }
       	.price{font-size: 16px;color: #e7141a;margin:0;}
       	del,span{font-size: 12px;color: #333;}
       }
      img{
        width:140px; height:70px; margin-bottom: 5px;
      }
    }
  .xq01_r {
    width: 35%;
    float: left;margin-left: 70px;
    h2 {
      font-size: 18px;
      padding-bottom:10px;
      border-bottom:1px solid #fbc081;
      span{font-size:14px;
      display: block;
      margin-left: 10px;
      line-height: 36px;}
    }
    .p01{
    	.red{border: 1px solid red;}
  	span{border: 1px solid #ddd; display: inline-block;cursor: pointer;
  	 height: 30px; width: 60px; text-align: center; line-height: 30px;}
  	}
    .p{
      height: 56px;
      background-color: #eaeaea;
      line-height: 56px;
      font-size: 22px;
      color: #e7141a;
      padding-bottom: 0px;
      padding-left: 20px;
      margin: 20px 0;
      b,del {
        font-size: 16px;
        color: #999;
        margin-left: 5px;
      }
    }
    p {
      padding-bottom:23px;
      font-size: 14px;
      span {
        width: 15px;
        height: 20px;
        display: inline-block;
      }
      a {
        color: $dark;
        cursor: pointer;
        margin-left: 30px;
        &:hover {
          color: $red;
        }
        i {
          background-position: -385px -6px;
          vertical-align: text-bottom;
          &:hover {
            background-position: -385px -42px;
          }
        }
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
  li {
    float: left;
    color: $red;
    margin-right: 15px;
    .a:hover {
      background: #e7141a;
    }
    .a {
      height: 34px;
      width: 100px;
      padding: 0 10px;
      background: #f84141;
      color: $white;
      font-size: 14px;
      display: block;
      border-radius: 3px;
      text-align: center;
      line-height: 34px;
      cursor: pointer;
      i {
        background-position: -185px -200px;
        position: relative;
        top: 7px;
      }
    }
    b {
      font-size: 16px;
    }
    del {
      color: $black;
      font-size: 14px;
    }
  }
}
/*课程目录有简介*/
#xxkc_xq02 {
  width: 100%;
  height: auto;
  margin-top: 20px;
  overflow: hidden;
  // .xq02_r {
  //   width: 45%;
  //   float: right;
  // }
  // .xq02_l {
  //   width: 100%;
  //   float: left;
  // }
  h2 {
    width: 100%;
    height: 32px;
    margin-bottom: 15px;
    border-bottom: 1px solid $red;
    span {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      font-weight: normal;
      font-size: 14px;
      cursor: pointer;
    }
    .cur-active{
      background-color: $red;
      color: $white;
    }
  }
  .txt {
    padding-top: 20px;
    text-indent: 2em;
  }
  p {
    line-height: 36px;
 overflow: hidden;
   width: 96%; line-height: 32px;
    font-size: 14px;
    padding: 15px 18px 20px;
    border: 1px solid #fbc081;
    margin:15px 0;
    color: #656565;
    .a{color: #117cee;float: right;}


  }
}
</style>
