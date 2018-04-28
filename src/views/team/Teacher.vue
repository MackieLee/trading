<template>
  <div class="teacher">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;专家团队</p>
    </div>
    <div style="min-height:400px;width:100%;position:relative;">
      <!--<router-link tag="div" v-for="(item,index) in teacherList" :key="item.id" :to="{path:'tdetail',query:{id:item.id}}" class="item">-->
        <!--<div class="hd-pic">-->
          <!--<img :src="src[index]" style="width:132px;" alt="孙玮">-->
        <!--</div>-->
        <!--<div class="short-msg">-->
          <!--<p class="name">{{item.name.substring(0,6)}}</p>-->
          <!--<div class="short-intro">-->
            <!--{{item.intro}}-->
          <!--</div>-->
          <!--<p class="more">更多>></p>-->
        <!--</div>-->
      <!--</router-link>-->
      <!--<div v-if="s_spin" class="s_spin">-->
        <!--<div>-->
          <!--<p>加载中</p>-->
          <!--<Spin size="large"></Spin>-->
        <!--</div>-->
      <!--</div>-->
      <router-link tag="div" v-for="(item,index) in tl" :key="item.id" :to="{ path:'/t/tdetail/',query:{ id:index } }" class="item">
        <div class="hd-pic">
          <img :src=" src[index] " style="width:132px;" :alt=" item.name ">
        </div>
        <div class="short-msg">
          <p class="name">{{ item.name }}</p>
          <div class="short-intro">
            {{ item.intro }}
          </div>
          <p class="more">更多>></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import jpg from '../../assets/images/team/t1.png'
import jpg2 from '../../assets/images/team/t2.jpg'
import jpg3 from '../../assets/images/team/t3.jpg'
import jpg4 from '../../assets/images/team/t4.jpg'
import jpg5 from '../../assets/images/team/t5.jpg'
import jpg6 from '../../assets/images/team/t6.jpg'

export default {
  name:'teacher',
  data(){
    return{
      teacherList:[],
      src:[jpg,jpg2,jpg3,jpg4,jpg5,jpg6],
      s_spin: true,
      tl: [
        {
          name: '孙玮',
          intro: '注册会计师、注册税务师；东北财经大学财政专业硕士；现任青岛大学经济学院副教授，硕士生导师；自2001年开始，在全国巡回做财税培训讲座，是我国第一批在全国做税务公开课培训的老师之一，拥有17年财税培训经历，被誉为财税培训界的“常青树”、“房地产财税女王”。自1997年开始至今，在企业和事务所兼职从事财税实务工作，做过国企、大型民营企业、跨国公司的审计工作；至今已经为多家房地产企业 ... （包括上市公司、大型民营企业、央企国企）提供常年财税顾问服务，并成功运作过若干税务筹划方案，深受企业家推崇。',
        },
        {
          name: '牛鲁鹏',
          intro: '清华大学总裁班客座教授\n' +
          '曾在某税收筹划事务所担任筹划部负责人多年；\n' +
          '曾在某新三板财税咨询公司担任咨询部总经理；\n' +
          '长期活跃在房地产财税咨询一线，参与主持的房地产税收筹划、土地增值税清算项目达数十个，代表企业有万科、首开置业、鲁商置业、四川蓝光发展、河南建业、国华置业、奥伦达特色小镇、广州富港集团、江苏新能源置业集团等。服务的项目业态涵盖住宅、商业、城市综合体、旅游地产、养 ... ... ... ...老地产等。\n' +
          '出版有《土地增值税实战与案例精解》、《房地产九大税种操作实务》、《房地产经济合同范本与签订技巧》，并参与《房地产企业全称会计核算与税务处理》等多部房地产财税著作编写。\n'
        },
        {
          name: '宋雯',
          intro: '高级会计师、工商管理硕士\n' +
          '曾在某知名大型房地产集团任财务总监十余年，集团业务涵盖房地产整个链条；\n' +
          '精通房地产财务管理、预算，资金管理、资本运营、企业并购重组等工作；\n' +
          '擅长建立房地产财务管理模型，能够快速全面梳理、整合财务管理流程；\n' +
          '拥有重大投资项目投资、融资和并购以及财务风险评估、审核实战经验；拥有房地产全方位税务管理经验，曾亲自成功操盘多个大型项目土地增值税清算。\n'
        },{
          name: '赫阳',
          intro: '注册会计师、税务师、律师。\n' +
          '南开大学MPACC硕士\n' +
          '曾在税务机关工作，负责国税系统稽查综合管理工作，主要负责稽查对象选案、查前分析、案例总结工作等；\n' +
          '曾参与多个房地产项目企业所得税的稽查工作；\n' +
          '专长于理解税务机关执法理念、税务风险关注点和处理涉税行为的法律程序，对企业预防、规避和化解税务风险的具体防范措施有独到的见解。\n' +
          '曾参与鲁商置业、河南昌建集团、山东东海集团、奥伦达特色 ... 小镇、天津某房地产等多个房地产企业的税务咨询、税收筹划工作。\n'
        },{
          name: '吕亚娟',
          intro: '中级会计师\n' +
          '毕业于知名211院校会计学专业；               \n' +
          '曾在北京住总集团财务部工作；\n' +
          '后在瑞华会计师事务所从事多年审计工作，参与、主持过多家房地产企业的税务审计、年报审计、经济责任审计、专项审计等。\n' +
          '曾参与鲁商置业、河南昌建集团、山东东海集团、奥伦达特色小镇、山西某房地产等多个房地产企业的税务咨询、税收筹划工作。 \n'
        },{
          name: '庞沛沣',
          intro: '毕业于国内知名财经院校会计学专业；               \n' +
          '曾在北京某知名会计师事务所工作，负责会计代理记账、报税工作近两年，熟悉多种行业类型的会计账务处理与税务申报工作；\n' +
          '曾参与会计事务所税务审计，负责出具税审报告；\n' +
          '曾参与鲁商置业、山东东海集团、奥伦达特色小镇房地产企业等项目，负责助理工作。\n'
        },
      ]
    }
  },
  mounted () {
    let _self = this
    let res = loginUserUrl('getTeacherList',{
      username: "niuhongda",
      password: "123123q"
    }).then((res)=>{
      // if(res.data){
      //   _self.teacherList = res.data
      //   this.s_spin = false
      // }
      console.log('.....')
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/base.scss';
  .teacher{
    width: $width;
    margin: 0 auto;
    padding-top: 20px;
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
    .item{
      width: $width;
      display: flex;
      background-color:$bg-light-dark;
      margin: 26px 0 20px 0;
      border: 1px solid $border-rice;
      &:hover{
        background-color: #fff;
      }
      .hd-pic{
        margin: 15px 38px 15px 15px; cursor: pointer;
      }
      .short-msg{
        margin-top: 29px;
        width: 80%;
        p[class="name"]{
          font-size: $lg-title;
          margin-bottom:10px;
        }
        .short-intro{
          font-size: $normal;
          line-height: 35px;
          height: 110px;
          overflow: hidden;
          width: 870px;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .more{
          float: right;
          color: $blue;
          cursor: pointer;
        }
      }
    }
  }

</style>
