<template>
  <div class="teacher-box">
    <!-- 修改 -->
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
    <div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
    </div>
    <div class="head-content lf">
      <div class="search lf">
        <input type="text"/><input class="search-btn" type="button" value="搜一下"/><br>
        <span>全部</span><span>房地产</span><span>个税</span><span>咨询</span><span>会计</span>
      </div>
      <div class="btn-group rt">
        <i @click="openModal" class="ask-icon"></i><input  @click="openModal" class="ask-input" type="button" value="点我提问" /><br>
        <span>没有找到问题？点击上方直接提问</span>
      </div>
    </div>
    <!-- 类名数组 ＋ 条件循环 -->
    <div v-for="(item,index) in teachers" :key="item.id" :class="[{'m_r': (index+1) % 3 === 0},'item','lf']">
      <div class="flex">
        <div>
          <img src="../../assets/images/jitax_问答_01.png" />
        </div>
        <div class="name">
          <p>{{ item.name }}</p>
          <span>九鼎财税资深讲师</span>
        </div>
      </div>
      <div class="tag-box">
        <span>
          <p>
            课程
          </p>
          <font>10</font>
        </span>
        <span>
          <p>回答</p>
          <font>17</font>
        </span>
        <span>
          <p>荣誉值</p>
          <font>99%</font>
        </span>
        <span class="shanchang">
          <i></i>擅长领域</span>
      </div>
      <div class="tags">
        <ul>
          <li>税收筹划</li>
          <li>税收筹划</li>
          <li class="board">税收筹划</li>
          <li>税收筹划</li>
        </ul>
      </div>
      <div class="ask">
        <router-link :to="{ name : 'qdetail',query:{id:item.id}}" tag="p" class="ask-btn">我要提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
import { getCookie } from "@/util/cookie"
import FrequentlyAskedQuestions from "../modal/FrequentlyAskedQuestions"
export default {
  components:{ FrequentlyAskedQuestions },
  data() {
    return {
      modal:false,
      teachers:[]
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
          "http://aip.kehu.zaidayou.com/api/execute/getQuestions_add",
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
            this.$message.error('返回值错误，提问失败')
          }
        })
      }else{
        this.$message.error('表单为空，提问失败')
      }
    },
    openModal:function(){
      let cookieName = getCookie('u_name')
      if(cookieName !== '' && cookieName !== 'undefined' ){
        this.modal = true
      }else{
        this.$router.push({name:'login'})
      }
    },
    handleReset:function(){
      this.$refs.faqModal.handleReset()
      this.modal=false
    }
  },
  mounted () {
    let res = loginUserUrl("http://aip.kehu.zaidayou.com/api/execute/getTeacherList",{
      username: "niuhongda",
      password: "123123q"
    }).then((res)=>{
      // 遍历id ，根据id往卡片上填充老师信息！！！！！！important-------------------------------！！！！！！！！！！--------------------
      this.teachers = res.data
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
  input[type="text"] {
    width: 500px;
    height: 30px;
    line-height: 30px;
    border: 1px solid $border-orange;
    outline: none;
    padding-left: 10px;
    margin-left: 10px;
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
  margin: 0 46px 45px 0;
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
    .board {
      margin: 0;
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
