<template>
  <div class="q-detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/Faq">问答</router-link>
        &nbsp;&gt;&nbsp;个人问答
      </p>
    </div>
    <div class="item">
      <div class="container">
        <div class="left lf">
          <div class="head lf">
            <img src="../../assets/images/jitax_问答_01.png" />
          </div>
          <div class="content lf">
            <div class="first-glance">
              <span class="name">{{ intro.name }}</span>
              <p class="watch default" v-if="guanzhu" @click="onWatch('watch')">
                <i></i>取消收藏
              </p>
              <p class="cancel-watch default" v-if="!guanzhu" @click="onWatch('cancel')">
                <i></i>添加收藏
              </p>
              <span class="price">￥{{ intro.money }}/次</span>
            </div>
            <div class="tag-box">
              <span class="shanchang">
                <i></i>擅长领域
              </span>
            </div>
            <div class="tags">
              <ul>
                <li v-for="item in labels" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right rt">
          <div>
            <div class="tag-box">
              <span>
                <p>
                  课程
                </p>
                <font>{{ intro.goods_count }}</font>
              </span>
              <span>
                <p>回答</p>
                <font>{{ intro.question_count }}</font>
              </span>
              <span class="last">
                <p>荣誉值</p>
                <font>{{ intro.grade }}%</font>
              </span>
            </div>
          </div>
          <div class="btn-group rt">
            <i @click="modal = true" class="ask-icon"></i>
          <router-link tag='button' class="ask-input" type="button" value="点我提问"  to="/TiwenMore">
       		 点我提问
        </router-link>
            <span>没有找到问题？点击上方直接提问</span>
          </div>
        </div>
      </div>
    </div>
    <div class="all">
      <p class="title"><span>所有回答</span></p>
      <div class="list">
        <div v-for="item in qslst" :key="item.id" class="list-item">
          <p><span class="question">{{ item.name }}</span><span class="date rt">4天前</span></p>
          <div v-if="item.value !== null && item.value !== ''" class="ask ansr">{{ item.value === null ?'':(item.value.substring(0,15)+'...') }}
            <router-link tag="span" :to="{name:'pay'}" class="more" >查看更多&gt;&gt;</router-link>
          </div>
          <div v-else>
            暂无回答
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
import { getCookie } from "@/util/cookie"
import FrequentlyAskedQuestions from "../modal/FrequentlyAskedQuestions"
export default {
  components: { FrequentlyAskedQuestions },
  data() {
    return {
      guanzhu: false,
      content: "",
      intro:"",
      qslst:[],
      labels:[],
      editorOption: {
        placeholder: "规则"
      },
      modal: false
    };
  },
  methods: {
    onWatch: function(state) {
      if(this.guanzhu){
        // 取消关注
      }else{
        loginUserUrl('getTeacher_Attention',{
          username: "niuhongda",
          password: "123123q",
          uid:getCookie('u_name'),
          sid:this.$route.query.id,
          type:1
        }).then((res)=>{

        })
      }
    },
    onload(){
      let _self = this
      // 获取讲师信息
      let res = loginUserUrl('getTeacher_Info',{
        username: "niuhongda",
        password: "123123q",
        tid:this.$route.query.id
      }).then((res)=>{
        _self.intro = res.data
        this.labels = res.data.laber[0].label.split('"')[1].split(',')
      })
      // 获取讲师的问题列表
      let qls = loginUserUrl('getQuestions_list',{
        username: "niuhongda",
        password: "123123q",
        tid:this.$route.query.id
      }).then((qls)=>{
        _self.qls = qls.data
      })
      // 获取老师是否已被关注
      let wch = loginUserUrl('getTeacher_AttentionList',{
        username: "niuhongda",
        password: "123123q",
        uid:getCookie("u_name"),
        type:'1'
      }).then((wch)=>{
        if(wch.code && wch.code !=null){
          console.log('//----')
          console.log(wch.code)
          console.log('----//')
          for (let i = 0; i < wch.code.length; i++) {
            wch.code[i].sid === this.$route.query.id
              ? (this.guanzhu = true)
              : this.guanzhu;
          }
        }
      })
    }
  },
  computed: {
  },
  mounted() {
    this.onload()
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.q-detail {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  i {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
  .cur-posi {
    padding: 0 0 26px 0;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .item {
    .container {
      border: 1px solid $border-dark;
      padding: 20px;
      overflow: hidden;
      .left {
        .content {
          margin-left: 50px;
          .first-glance {
            padding-left: 20px;
            .name {
              font-size: 14px;
              font-weight: bold;
            }
            .price {
              color: $blue;
              margin-left: 30px;
              font-size: 14px;
            }
          }
          .default {
            width:100px;
            border: 1px solid $blue;
            font-size: 12px;
            border-radius: 4px;
            cursor: pointer;
            line-height: 26px;
            padding: 0px 7px;
            display: inline-block;
            margin-left:30px;
          }
          .watch i {
            background-position: -140px -192px;
          }
          .cancel-watch i {
            background-position: -237px -378px;
          }
          .tags {
            margin:0px 17px;
            li {
              padding: 3px 15px;
              border: 1px solid $border-blue;
              margin: 35px 9px 0 0;
            }
          }
          .tag-box {
            position: relative;
            width: 200px;
             height: 50px;
            margin: 0 auto;
            border-bottom: 1px solid $black;
            span[class="shanchang"] {
              font-size: 16px;
              display: block;
              width: 120px;
              height: 20px;
              text-align: center;
              background-color:#fff;
              position: absolute;
              bottom: -7px;
              left: 20%;
              i {
                background-position: -18px -224px;
                margin-right: 6px;
              }
            }
          }
        }
      }
      .right {
        float: right;
        margin-right: 30px;
        .tag-box {
          overflow: hidden;
          margin-bottom: 10px;
          .last {
            margin: 0;
          }
          span {
            float: left;
            margin-right: 25px;
            p {
              width: 80px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              border-radius: 2px;
              margin-bottom: 15px;
              background: $bg-blue;
              color: $white;
            }
            font {
              display: block;
              text-align: center;
            }
          }
        }
        .btn-group {
          position: relative; margin-right:50px;
          .ask-icon {
            position: absolute;
            background-position: -388px -83px;
            left: 30px;
            top: 5px;
          }
          .ask-input:hover{background-color: #e7141a;}
          .ask-input {
            display: block;
            margin: 0 auto;
            height: 36px;
            line-height: 36px;
            width: 150px;
            border: none;
            background-color: $btn-danger;
            color: $white;
            outline: none;
            cursor: pointer;
            margin-bottom: 10px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
  .all {
    margin-top:40px;
    .title {
      border-bottom: 1px solid $red;
      span {
        display: inline-block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        background-color: $red;
        color: $white;
        text-align: center;
      }
    }
    .list {
      border: 1px solid $border-dark;
      padding:10px 20px 0;
      min-height: 150px;
      margin-top: 20px;
      .list-item {
        border-bottom: 1px solid $border-dark; margin-bottom:5px; padding-bottom:5px;
        p,
        span {
          line-height: 30px;
        }
        .question {
          display: inline-block;
          width: 95%; font-size: 14px;
        }
        .indent {
          text-indent: 2em;
        }
        .tchr {
          color: $dark;
        }
        .more {
          color: $blue;
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
