<template>
  <div class="teacher-box">
    <!-- 修改 -->
    <div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
    </div>
    <div class="head-content lf">
      <div class="search lf">
        <div class="c">
          <input type="text"/>
          <select style="position:absolute;right:0px;top:0px;height:30px;width:100px;border:1px solid #ff7f00;outline:none;border:none;border-left:1px solid #ff7f00;">
            <option>企业所得税</option>
            <option>土地增值税</option>
            <option>个人所得税</option>
            <option>税收征管</option>
          </select>
        </div>
        <router-link tag="button" to="/qdMore" class="search-btn">
      	  搜一下</router-link>
      </div>
      <div class="btn-group rt">
        <i @click="askIfLogined" class="ask-icon"></i>
        <button class="ask-input" type="button" value="点我提问" @click="askIfLogined">
          点我提问
        </button>
        <span>没有找到问题？点击上方直接提问</span>
      </div>
    </div>
    <!-- 类名数组 ＋ 条件循环 -->
    <div style="overflow:hidden;min-height:400px;width:100%; position:relative;">
      <div v-for="(item,index) in teachers" :key="item.id" :class="[{'m_r': (index+1) % 3 === 0},'item','lf']">
        <div class="flex">
          <div>
            <img src="../../assets/images/jitax_问答_01.png" />
          </div>
          <div class="name">
            <p>{{ item.name.substring(0,6) }}</p>
            <span>{{ item.intro.substring(0,10) }}</span>
          </div>
        </div>
        <div class="tag-box">
          <span>
            <p>
              课程
            </p>
            <font>{{ item.count_kecheng }}</font>
          </span>
          <span>
            <p>回答</p>
            <font>{{ item.count_wenda }}</font>
          </span>
          <span>
            <p>荣誉值</p>
            <font>{{ item.grade }}</font>
          </span>
          <span class="shanchang">
            <i></i>擅长领域</span>
        </div>
        <div class="tags">
          <ul>
            <!-- <li v-if="item.laber !== 0 " v-for="t in (item.laber=== 0?'':item.laber).split(',')" :key="t.s">{{ t }}</li> -->
          </ul>
        </div>
        <div class="ask">
          <router-link :to="{ name : 'qdetail',query:{id:item.id}}" tag="p" class="ask-btn">
            我要提问</router-link>
          <p>已解决27个问题</p>
        </div>
      </div>
      <div v-if="s_spin" class="s_spin">
        <div>
          <p>加载中</p>
          <Spin size="large"></Spin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
import { getCookie } from "@/util/cookie"
export default {
  data() {
    return {
      teachers:[],
      tags:[],
      s_spin: true,
    }
  },
  methods:{
    submit:function(){
      let faqModal = this.$refs.faqModal
      let name = faqModal.ask.title
      let intro = faqModal.ask.content
      let teacher_id = faqModal.ask.teacher
      let choose = faqModal.ask.choose
      let uid = getCookie('u_name')
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
            this.$Message.success('提问成功')
          }else{
            this.$Message.error('返回值错误，提问失败')
          }
        })
      }else{
        this.$message.error('表单为空，提问失败')
      }
    },
    askIfLogined:function(){
      let cookieName = getCookie('u_name')
      if(cookieName !== '' && cookieName !== 'undefined' ){
        this.$router.push({name:'TiwenMore'})
      }else{
        this.$router.push({name:'login'})
      }
    },
  },
  created() {
    let res = loginUserUrl("getTeacherList",{}).then((res)=>{
      if(res.data){
        this.teachers = res.data
        console.log(this.teachers)
        this.s_spin = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.teacher-box {
  overflow: hidden;
}
.head-content {
  width: 100%;margin-bottom:10px;
  overflow: hidden;
  .c{
    width: 500px;
    height: 32px;
    position: relative;
    border: 1px solid $border-orange;
    float: left;
  }
  input[type="text"] {
    width: 100%;
    height: 100%;
    line-height: 30px;
    outline: none;
    padding-left: 10px;
    border:none;
  }
  option{
   border: 1px solid #ff7f00;
  }
  .search-btn {
    height: 32px;
    line-height: 32px;
    border: none;
    background-color: $border-orange;
    width: 100px;
    color: $white;
  }
  span {
    display: inline-block;
    margin:15px 5px 5px;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-group {
    position: relative;margin-left: 20%;
    .ask-icon {
      position: absolute;
      background-position: -388px -83px;
      left: 35px;top: 8px;}
    .ask-input:hover{background-color: #e7141a;}
    .ask-input {
      height: 40px;
      line-height: 40px;
      width:100%;font-size: 14px;
      border: none;
      background-color:#f84141;
      color: $white;
      outline: none;
      cursor: pointer;
    }
  }
  .ask-input {
    height: 30px;
    line-height: 30px;
    width: 150px;
    border: none;
    background-color: $btn-danger;
    color: $white;
    outline: none;
    cursor: pointer;}
}
i {
  display: inline-block;
  width: 20px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}

.cur-posi {
  padding: 0 0 26px 0;
  width: 100%;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.lf,.rt{
  float: left;
}

.m_r{margin:0 !important;}
.item {
  width: 330px;
  background: $white;
  margin: 0 46px 20px 0;
  overflow: hidden;
  border: 1px solid $border-rice;
   .flex {
    display: flex;
    height: auto;
    margin: 10px 35px 18px 15px;
    img{width: 80px;}
    .name {
      margin: 10px 20px 0px;
      p {font-size: $lg-title;
        margin-bottom: 16px;
      }
      span{font-size: 14px;}
    }
  }
  .tag-box {
    position: relative;
    display: flex;
    width: 250px;
    justify-content: space-between;
    padding-bottom: 28px;
    margin: 0 auto;
    border-bottom: 1px solid $black;
    span {
      p {
        width: 50px;
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
    span[class="shanchang"] {
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
        background-position: -15px -224px;width: 26px;
        margin-right: 6px;
      }
    }
  }
  .tags {
    margin: 17px;
    li {
      padding: 3px 15px;
      border: 1px solid $border-blue;
      margin: 10px 9px 0 0;
    }
  }
  .ask {
    text-align: center;
    margin-bottom:10px;
    p[class="ask-btn"] {
      width: 107px;
      height: 33px;
      margin: 20px auto;
      line-height: 33px;
      border-radius: 5px;
      color: $white;
      background-color: $btn-danger;
      cursor: pointer;
      &:hover {
        background-color: $btn-danger-hover;
      }
    }
  }
}
</style>
