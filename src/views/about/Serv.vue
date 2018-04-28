<template>
  <div class="serv">
    <div class="container">
      <div class="cur-posi">
        <p>
          <i></i>当前位置 : &nbsp;
          <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;机构简介
        </p>
      </div>
      <div class="glance glance1">
        <p class="p"><span>我们的服务</span></p>
        <div class="circles">
          <div class="in-block">
            <div class="ball">
              <div class="shadow"></div>
              <div class="circle first-color"></div>
            </div>
            <div class="tail tail-l">
              咨询团队深入企业审核资料访谈人员发现企业潜在风险指导企业化险为夷
            </div>
            <div class="stars">
              <span v-for="i in 2"><img src="../../assets/images/star_full.svg" /></span>
              <span v-for="i in 3">
                <img width="15px" src="../../assets/images/star_empty.svg"/>
              </span>
            </div>
          </div>
          <div class="in-block">
            <div class="ball">
              <div class="shadow"></div>
              <div class="circle double-color"></div>
            </div>
            <div class="tail tail-l">
              指导企业准备资料比对各种合理方法测算选出最优方案协助企业完美收官
            </div>
            <div class="stars">
              <span v-for="i in 3"><img src="../../assets/images/star_full.svg" /></span>
              <span v-for="i in 2">
                <img width="15px" src="../../assets/images/star_empty.svg"/>
              </span>
            </div>
          </div>
          <div class="in-block">
            <div class="ball"><div class="shadow"></div>
              <div class="circle third-color"></div>
            </div>
            <div class="tail tail-r">
              专家团队提供服务涵盖涉税咨询答疑远程为主现场为辅帮助企业节税避险
            </div>
            <div class="stars">
              <span v-for="i in 4"><img src="../../assets/images/star_full.svg" /></span>
              <span v-for="i in 1">
                <img width="15px" src="../../assets/images/star_empty.svg"/>
              </span>
            </div>
          </div>
          <div class="in-block">
            <div class="ball"><div class="shadow"></div>
              <div class="circle fourth-color"></div>
            </div>
            <div class="tail tail-r">
              专家团队全程服务提供靠谱纳税方案指导企业落地实施规避风险合法节税
            </div>
            <div class="stars">
              <span v-for="i in 5"><img src="../../assets/images/star_full.svg" /></span>
              <span v-for="i in 0">
                <img width="15px" src="../../assets/images/star_empty.svg"/>
              </span>
            </div>
          </div>
          <div class="in-block">
            <div class="ball"><div class="shadow"></div>
              <div class="circle five"></div>
            </div>
            <div class="tail tail-r">
              专家团队提供服务涵盖涉税咨询答疑远程为主现场为辅帮助企业节税避险
            </div>
            <div class="stars">
              <span v-for="i in 5"><img src="../../assets/images/star_full.svg" /></span>
              <span v-for="i in 0">
                <img width="15px" src="../../assets/images/star_empty.svg"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="glance glance2">
        <p class="p"><span>税收筹划流程</span></p>
        <div class="flex">
          <div class="card">
            <img src="../../assets/images/index_品牌服务切图_22.jpg" alt="">
            <div>
              审核项目前期资料，检查企业财务账簿，审核企业经济合同重要条款，对于发现的显性问题和隐含的风险，指导企业立即纠正。
            </div>
            <p><span>一、健康体检</span></p>
          </div>
          <div class="card">
            <img src="../../assets/images/index_品牌服务切图_24.jpg" alt="">
            <div>
              根据企业目前预售价格、结合工程预算，做好增值税、土增税、企业所得税等税负测算，为营销定价提供合理依据。
            </div>
            <p><span>二、税负测算</span></p>
          </div>
          <div class="card">
            <img src="../../assets/images/index_品牌服务切图_26.jpg" alt="">
            <div>
              根据税负测算情况，为企业做好全流程的纳税规划方案，并充分利用项目特点做好特殊事项的筹划，以保证企业税收成本合理合法降低。
            </div>
            <p><span>三、筹划实施</span></p>
          </div>
          <div class="card">
            <img src="../../assets/images/index_品牌服务切图_28.jpg" alt="">
            <div>
              服务期内，指导企业落实、推进方案；根据项目情况和政策变化，对纳税规划方案不断进行完善，以保证落地；帮助企业协调税务关系。
            </div>
            <p><span>四、跟踪辅导</span></p>
          </div>
        </div>
      </div>
      <div class="glance glance3">
        <p class="p"><span>日常服务</span></p>
        <div class="flex">
          <div>
            <img src="../../assets/images/index_品牌服务切图_36.jpg" alt="">
            <div>
              乙方在每次进场时对企业当前的日常工作进行指导，包括但不限于抽查凭证、指导账务处理、审核重大合同、指导纳税征管。
            </div>
          </div>
          <div>
            <img src="../../assets/images/index_品牌服务切图_39.jpg" alt="">
            <div>
              乙方通过电话、微信、电邮方式远程指导企业及时解决委托项目中到的日常涉税问题。
            </div>
          </div>
          <div>
            <img src="../../assets/images/index_品牌服务切图_42.jpg" alt="">
            <div>
              指导企业与税务机关沟通。
            </div>
          </div>
          <div>
            <img src="../../assets/images/index_品牌服务切图_45.jpg" alt="">
            <div>
              企业发生重大经营决策时，或临时遇到税务稽查等事务，可以紧急要求乙方进场指导。
            </div>
          </div>
        </div>
      </div>
      <div class="glance glance4">
        <p class="p"><span>成功案例</span></p>
        <div class="flex_align_justify border_red">
          <img src="../../assets/images/index_品牌服务切图_51.jpg" alt="">
          <div>
            山东某房地产集团公司，聘请我们指导其综合体开发项目中，根据我们为其设计的《财税优化方案》，使整个房地产开发项目达到税收最优，节约土地增值税、所得税共计3200万元。
          </div>
        </div>
        <div class="flex_align_justify border_red">
          <img src="../../assets/images/index_品牌服务切图_51.jpg" alt="">
          <div>
            北京某房地产开发公司，在项目清盘时，聘请我们为其筹划，从账务清理入手，在土地增值税、所得税两项纳税中，合理运用成本分摊技巧，依法节税5000多万元。
          </div>
        </div>
        <div class="flex_align_justify border_red">
          <img src="../../assets/images/index_品牌服务切图_51.jpg" alt="">
          <div style="width:947px">
            北京某特色小镇，在全程开发业务中，聘请我们进行综合筹划，结果仅此一项业务节税约8000多万。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  i{
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi{
    margin-top: 30px;
    i{
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .p{
    text-align: center;
    margin-bottom: 20px;
    span{
      display: inline-block;
      border-bottom: 2px solid red;
      color: red;
      font-size: 18px;
      padding: .3rem 1rem;
      margin: 1rem;
    }
  }
  .container {
    width: 1090px;
    margin: auto;
  }
  .circles{
    display: flex;
    justify-content: space-between;
  }
  .in-block{
    display: inline-block;
    max-width:136px;
    .ball{
      position: relative;
      height: 160px;
      width: 136px;
      overflow: hidden;
      .circle{
        border-radius: 50%;
        height: 136px;
        width: 136px;
        color: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 20px;
        padding: 20px;
        position: absolute;
        text-shadow: 0.1em 0.1em 0.2em black;
      }
      .shadow{
        width: 78px;
        height: 48px;
        position: absolute;
        right: 26px;
        top: 115px;
        border-radius: 50%;
        background: radial-gradient(#a4a4a4, #fff);
        /*background: #7e7e7e;*/
        transform: perspective(200px) rotateX(70deg) rotateZ(-6deg);
      }
    }
    .first-color{
      background: radial-gradient(at 30px 30px, #fff, #f56773, #ef2630, #3d3d3d);
      &:before{
        content: '房地产\a健康体检';
        white-space: pre;
      }
    }
    .double-color{
      background: radial-gradient(at 30px 30px, #fff,#d133b1,#B72997,#3d3d3d);
      &:before{
        content: '土增税\A模拟清算';
        white-space: pre;
      }
    }
    .third-color{
      /*background-color: #1EB4C5;*/
      background: radial-gradient(at 30px 30px, #fff,#1123fd,#0c1ff7, #3d3d3d);
      &:before{
        content:'房地产\A常年顾问';
        white-space: pre;
      }
    }
    .fourth-color{
      background: radial-gradient(at 30px 30px, #fff, #fff74d,#ffc60f, #3d3d3d);
      &:before{
        content: '房地产\a税务规划';
        white-space: pre;
      }
    }
    .five{
      background: radial-gradient(at 30px 30px, #fff, #1fee24, #05c909, #3d3d3d);
      &:before{
        content:'特色小镇\A专项筹划';
        white-space: pre;
      }
    }
    .tail{
      font-size: 13px;
      line-height: 2rem;
      margin-top: 2rem;
      width: 104px;
      margin-right: auto;
      margin-left: auto;
    }
    .stars{
      display: flex;
      justify-content: space-between;
      width: 104px;
      margin: auto;
    }
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .glance2{
    .card{
      width: 269px;
      height: 387px;
      padding: 0px 35px 20px 30px;
      background: url('../../assets/images/index_品牌服务切图_19.png') 100% no-repeat;
      div{
        line-height: 1.5rem;
        font-size: 13px;
      }
      img{
        display: block;
        margin: 30px auto;
      }
      p{
        text-align: center;
        margin-top: 1.5rem;
        span{
          display: inline-block;
          padding: .3rem 1rem;
          background-color: red;
          color: #fff;
        }
      }
    }
  }
  .glance3 .flex{
    div {
      width: 200px;
      img {
        display: block;
        margin: 20px auto;
      }
      div{
        line-height: 1.5rem;
      }
    }
  }
  .glance4{
    .flex_align_justify{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .border_red{
      border: 1px solid red;
      margin: 20px 0;
      padding: 10px;
      div{
        padding: 0 3rem;
      }
    }
  }
</style>
