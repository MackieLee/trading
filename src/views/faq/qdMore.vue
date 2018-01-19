<template>
  <div class="q-detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/Faq">问答</router-link>
        &nbsp;&gt;&nbsp;最新问答列表
      </p>
    </div>

    <div class="all">
      <p class="title"><span>最新问答列表</span></p>
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
  
  .all {
    .title {
      border-bottom: 1px solid $red;
      span {
        display: inline-block;
        width: 120px;
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
