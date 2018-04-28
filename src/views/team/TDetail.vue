<template>
  <div class="tdetail">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;
      	<router-link to="/t/teacher/">专家团队 &gt;</router-link><span v-html="tl[i].name">{{ tl[i].name }}</span></p>
    </div>
    <div class="detail">
      <div class="imgbox">
        <img :src=" img[i] " alt="孙玮教授">
        <p class="redname" v-html="tl[i].name">
          {{ tl[i].name }}
        </p>
      </div>

      <h1 style="color: red;">{{ tl[i].award }}</h1>
      <div class="content" v-html=" tl[i].intro ">
        {{ tl[i].intro }}
      </div>
    </div>
    <!--<div class="book-box">-->
      <!--<div class="title">-->
        <!--<span></span>-->
        <!--<font>主讲课程</font>-->
      <!--</div>-->
      <!--<div class="video-boxes">-->
        <!--<div class="item">-->
          <!--<div><a class="video-cover"><img src="../../assets/images/九鼎财税01_33.png"/><span class="new">NEW</span></a></div>-->
          <!--<p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>-->
          <!--<p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>-->
        <!--</div>-->
        <!--<div class="item">-->
          <!--<div><a class="video-cover"><img src="../../assets/images/九鼎财税01_35.png"/><span class="new">NEW</span></a></div>-->
          <!--<p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>-->
          <!--<p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>-->
        <!--</div>-->
        <!--<div class="item">-->
          <!--<div><a class="video-cover"><img src="../../assets/images/九鼎财税01_37.png"/><span class="new">NEW</span></a></div>-->
          <!--<p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>-->
          <!--<p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>-->
        <!--</div>-->
        <!--<div class="item">-->
          <!--<div><a class="video-cover"><img src="../../assets/images/九鼎财税01_39.png"/><span class="new">NEW</span></a></div>-->
          <!--<p class="book-name"><a>土地增值税实战与案例</a><span>精解</span></p>-->
          <!--<p class="buss-info">￥<span class="current-price">51.00</span><span class="grey">￥</span><del class="grey origin-price">62.56</del><a class="im-buy">立即购买</a></p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>

</template>

<script>
  import jpg from '../../assets/images/team/t1.png'
  import jpg2 from '../../assets/images/team/t2.jpg'
  import jpg3 from '../../assets/images/team/t3.jpg'
  import jpg4 from '../../assets/images/team/t4.jpg'
  import jpg5 from '../../assets/images/team/t5.jpg'
  import jpg6 from '../../assets/images/team/t6.jpg'

import { loginUserUrl } from '@/api/api'
export default {
  name:'tdetail',
  data(){
    return{
      tl: [
        {
          name: '孙 &nbsp;&nbsp;炜',
          award: '著名税收筹划专家、九鼎财税首席专家',
          intro: '注册会计师、注册税务师;<br>东北财经大学财政专业硕士；<br>现任青岛大学经济学院副教授，硕士生导师；<br>自2001年开始，在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的老师之一，拥有17年财税培训经历，被誉为财税培训界的“常青树”、“房地产财税女王”。<br>自1997年开始至今，在企业和事务所兼职从事财税实务工作，做过国企、大型民营企业、跨国公司的审计工作；<br>至今已经为多家房地产企业包括上市公司、大型民营企业、央企国企）提供常年财税顾问服务，并成功运作过若干税务筹划方案，深受企业家推崇。',
        },
        {
          name: '牛鲁鹏',
          award:'房地产税务咨询专家',
          intro: '清华大学总裁班客座教授;<br>曾在某税收筹划事务所担任筹划部负责人多年；<br>' +
          '曾在某新三板财税咨询公司担任咨询部总经理；<br>' +
          '长期活跃在房地产财税咨询一线，参与主持的房地产税收筹划、土地增值税清算项目达数十个，代表企业有万科、首开置业、鲁商置业、四川蓝光发展、河南建业、国华置业、奥伦达特色小镇、广州富港集团、江苏新能源置业集团等。服务的项目业态涵盖住宅、商业、城市综合体、旅游地产、养老地产等。<br>' +
          '出版有《土地增值税实战与案例精解》、《房地产九大税种操作实务》、《房地产经济合同范本与签订技巧》，并参与《房地产企业全称会计核算与税务处理》等多部房地产财税著作编写。<br>'
        },
        {
          name: '宋 &nbsp;&nbsp;雯',
          award:'知名财务实战专家',
          intro: '高级会计师、工商管理硕士;<br>曾在某知名大型房地产集团任财务总监十余年，集团业务涵盖房地产整个链条；<br>' +
          '精通房地产财务管理、预算，资金管理、资本运营、企业并购重组等工作；<br>' +
          '擅长建立房地产财务管理模型，能够快速全面梳理、整合财务管理流程；<br>' +
          '拥有重大投资项目投资、融资和并购以及财务风险评估、审核实战经验；拥有房地产全方位税务管理经验，曾亲自成功操盘多个大型项目土地增值税清算。<br>'
        },{
          name: '赫 &nbsp;&nbsp;阳',
          award: '税务咨询师',
          intro: '注册会计师、税务师、律师;<br>南开大学MPACC硕士<br>' +
          '曾在税务机关工作，负责国税系统稽查综合管理工作，主要负责稽查对象选案、查前分析、案例总结工作等；<br>' +
          '曾参与多个房地产项目企业所得税的稽查工作；<br>' +
          '专长于理解税务机关执法理念、税务风险关注点和处理涉税行为的法律程序，对企业预防、规避和化解税务风险的具体防范措施有独到的见解。<br>' +
          '曾参与鲁商置业、河南昌建集团、山东东海集团、奥伦达特色小镇、天津某房地产等多个房地产企业的税务咨询、税收筹划工作。<br>'
        },{
          name: '吕亚娟',
          award: '税务咨询师',
          intro: '中级会计师;<br>毕业于知名211院校会计学专业；<br>' +
          '曾在北京住总集团财务部工作；<br>' +
          '后在瑞华会计师事务所从事多年审计工作，参与、主持过多家房地产企业的税务审计、年报审计、经济责任审计、专项审计等。<br>' +
          '曾参与鲁商置业、河南昌建集团、山东东海集团、奥伦达特色小镇、山西某房地产等多个房地产企业的税务咨询、税收筹划工作。 <br>'
        },{
          name: '庞沛沣',
          award: '咨询助理',
          intro: '毕业于国内知名财经院校会计学专业<br>曾在北京某知名会计师事务所工作，负责会计代理记账、报税工作近两年，熟悉多种行业类型的会计账务处理与税务申报工作；<br>' +
          '曾参与会计事务所税务审计，负责出具税审报告；<br>' +
          '曾参与鲁商置业、山东东海集团、奥伦达特色小镇房地产企业等项目，负责助理工作。<br>'
        },
      ],
      img: [jpg,jpg2,jpg3,jpg4,jpg5,jpg6],
      i: 0,
    }
  },
  mounted () {
    // let _self = this
    // let res = loginUserUrl('getTeacher_Info',{
    //   username: "niuhongda",
    //   password: "123123q",
    //   tid:this.$route.query.id
    // }).then((res)=>{
    //   _self.intro = res.data
    //   console.log(res.data)
    // })
    this.i = this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
  .tdetail{
    width: $width;
    margin: 0 auto;
    padding-top: 20px;
    // border-top: 1px solid $border-rice;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      i{
        background-position: -18px -100px;
        margin-right: 6px;
      }
    }
    .detail{
      margin: 26px 90px 45px 0;
      overflow: hidden;
      h1{
        font-size: 18px;
        margin-bottom: 8px;
      }
      p{
        font-size: 14px;
        line-height: 35px;
        text-indent: 32px;;
      }
      .imgbox{
        float: left;
        margin: 0 50px 25px 0;
        img{
          width: 210px;
          height: 266px;
        }
        .redname{
          background-color: red;
          color: #fff;
          text-align: center;
          text-indent: 0;
        }
      }
      .content{
        font-size: 1rem;
        line-height: 2.5rem;
      }
    }




    .book-box{
      .title{
        width: $width;
        margin: auto;
        margin-bottom: 28px;
        padding-bottom: 10px;
        position: relative;
        border-bottom: 1px solid $border-red;
        span{
          padding: 3px 19px;
          margin-right: 14px;
          background-image: url('../../assets/images/Sprite.png');
          background-position: -3px -314px;
        }
        font{
          font-size: 18px;
          font-weight: 450;
        }
        a{
          font-size: 14px;
          position: absolute;
          right: 0;
        }
      }
      .video-boxes{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .video-cover{
          position: relative;
        }
        .item{
          border: 1px solid $red;
          padding: 6px 10px 12px 10px;
          margin-bottom: 10px;
          position: relative;
          &:hover{
            box-shadow: 1px 1px 3px 5px #eee;
          }
          .new{
            padding: 2px 4px;
            background-color: $red;
            color: $white;
            font-size: 10px;
            position: absolute;
            right: 0;
            bottom: 4px;
          }
          .book-name{
            margin: 5px 0 20px 0;
            span{color: #e7141a;}
            a{
              margin-right: 15px;
            }
          }
          .buss-info{
            font-size: 12px;
            color: $red;
            .current-price{
              font-size: 18px;
              margin-right: 10px;
            }
            .grey{
              color: $black;
            }
            .im-buy{
              padding: 5px 19px;
              background-color: $red;
              color: $white;
              font-size: 10px;
              position: absolute;
              right: 36px;
            }
          }
        }
      }
    }
  }
</style>
