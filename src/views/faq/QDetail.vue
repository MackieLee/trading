<template>
  <div class="q-detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        &nbsp;&gt;&nbsp;问答
      </p>
    </div>
    <Modal
      :width="700"
      v-model="modal"
      :closable="false"
      :mask-closable="false"
    >
      <div slot="footer">
        <Button type="primary" @click="submit">提交</Button>
        <Button type="ghost" @click="handleReset" style="margin-left: 8px">取消</Button>
      </div>
      <frequently-asked-questions ref="faqModal"></frequently-asked-questions>
    </Modal>
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
                <i></i>取消关注
              </p>
              <p class="cancel-watch default" v-if="!guanzhu" @click="onWatch('cancel')">
                <i></i>添加关注
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
                <li v-for="item in intro.laber" :key="item">{{ item }}</li>
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
            <i @click="modal = true" class="ask-icon"></i><input class="ask-input" @click="modal = true" type="button" value="点我提问" /><br>
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
          <p class="indent tchr">回答者：{{ intro.name }}</p>
          <p class="indent">{{ item.value === ''?'暂无回答':(item.value === null ?'':item.value).substring(0,5)+'……'}}
            <!-- 如何传递价格到支付页面？？同时携带问题id以及开放答案并在支付成功后重新返回此页面(此时渲染完整答案 v-if) -->
            <span v-show="item.value !==''" class="more">查看全部&gt;&gt;</span>
          </p>
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
      editorOption: {
        placeholder: "规则"
      },
      modal: false
    };
  },
  methods: {
    submit:function(){
      let faqModal = this.$refs.faqModal
      let name = faqModal.ask.title
      let intro = faqModal.ask.content
      let teacher_id = faqModal.ask.teacher
      let choose = faqModal.ask.choose
      let uid = getCookie('u_name')
      console.log('uid:'+uid)
      console.log('teacher_id:'+teacher_id)
      if(name!==''&& intro!==''){
        let res = loginUserUrl(
          "getQuestions_add",
          {
            username: "niuhongda",
            password: "123123q",
            name:name,
            intro:intro,
            teacher_id:teacher_id,
            choose:!choose,
            uid:uid
          }
        ).then((res)=>{
          if(res.error_code === 0){
            // console.log(res.data)
            this.handleReset()
            this.$message.success('提问成功')
          }else{
            this.$message.error('提问失败')
          }
        })
      }else{
        this.$message.error('表单为空，提问失败')
      }
    },
    openModal:function(){
      let cookieName = getCookie('u_name')
      if(cookieName !== '' && cookieName !== undefined ){
        this.modal = true
      }else{
        this.$router.push({name:'login'})
      }
    },
    handleReset:function(){
      this.$refs.faqModal.handleReset()
      this.modal=false
    },
    onWatch: function(state) {
      state === "watch" ? (this.guanzhu = false) : (this.guanzhu = true);
    }
  },
  computed: {
  },
  mounted() {
    let _self = this
    // 获取讲师信息
    let res = loginUserUrl('getTeacher_Info',{
      username: "niuhongda",
      password: "123123q",
      tid:this.$route.query.id
    }).then((res)=>{
      _self.intro = res.data
      console.log(res.data)
    })
    // 获取讲师的问题列表
    let qslst = loginUserUrl('getQuestions_list',{
      username: "niuhongda",
      password: "123123q",
      teacher_id:this.$route.query.id
    }).then((qslst)=>{
      _self.qslst = qslst.data
    })
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
            background-position: -239px -255px;
          }
          .cancel-watch i {
            background-position: -143px -192px;
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
