<template>
  <div class="detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;图书
      </p>
    </div>
    <div class="item">
      <div class="lf-content">
        <magnifier></magnifier>
        <ul>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
          <li>
            <img src="../../assets/images/jitax_图书details_07.png" />
          </li>
        </ul>
      </div>
      <div class="rt-content">
        <p class="title">【自营】土地增值税实战与案例精解</p>
        <p class="price"><span>￥</span>51.00
          <del>￥62.56</del>
        </p>
        <p>作 者：北京中经阳光税收筹划事务所</p>
        <p>出 版 社：中国市场出版社</p>
        <p>出版时间：2012年07月</p>
        <p>适合人群：备考CPA审计的学员看官方教材云里雾里的学员</p>
        <p class="btn">
          <button>立即购买</button>
          <button><i></i>加入购物车</button>
        </p>
      </div>
    </div>
    <div class="comment">
      <p @click="toggle()">
        <span data-ref='1' class="cur">图书详情</span>
        <span data-ref='2'>图书目录</span>
        <span data-ref='3'>评论(189)</span>
      </p>
      <div class="content" v-if="part=='1'">
        本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。 本报告讲解：财务分析方法简要介绍及财务分析案例剖析；销售收入和销售费用分析思路案例分析；生产成本分析思路分析；课程总结。
      </div>
      <div v-if="part=='2'">2</div>
      <div v-if="part=='3'">3</div>
    </div>
  </div>
</template>
<script>
import magnifier from './Magnifier'
export default {
  components:{ magnifier },
  data(){
    return{
      part:'1'
    }
  },
  methods:{
    toggle(){
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class','cur')
      let ref = event.target.dataset.ref
      this.part = ref
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.detail {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid #fdddbc;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    margin-bottom: 26px;
    i {
      background-position: -56px -82px;
      margin-right: 6px;
    }
  }
  .item {
    height: 460px;
    display: flex;
    .lf-content {
      margin: 0 172px 0 56px;
      li {
        margin: 20px 30px 0 0;
        cursor: pointer;
      }
    }
    .rt-content {
      width: 472px;
      p {
        margin: 18px 0;
      }
      .title {
        padding-bottom: 18px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid $rice;
      }
      .price {
        height: 56px;
        background-color: #ddd;
        line-height: 56px;
        font-size: 22px;
        color: red;
        padding-left: 20px;
        margin: 10px 0 25px 0;
        del {
          font-size: 16px;
          color: #666;
          margin-left: 5px;
        }
         span {
          font-size: 16px;
          color: #666;
          margin-left: 5px;
        }
      }
      button{
        background-color: $red;
        border-radius: 3px;
        outline: none;
        border: none;
        color: $white;
        margin-top: 30px;
        padding: 0px 13px;
        cursor: pointer;
        line-height: 34px;
        margin-right: 10px;
      }
      i {
      background-position: -88px -170px;
      margin-right: 6px;
      position: relative;
      top: 2px;
    }
    }
  }
  .comment {
    p {
      border-bottom: 1px solid $rice;
      overflow: hidden;
      span {
        float: left;
        color: $black;
        padding: 10px 16px;
        cursor: pointer;
      }
      span[class="cur"] {
        background-color: $red;
        color: $white;
      }
    }
    .content {
      text-indent: 32px;
      line-height: 35px;
      font-size: 16px;
      padding: 30px 10px;
    }
  }
}
</style>
