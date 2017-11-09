<template>
  <div class="modal">
    <!-- stars -->
    <div class="content">
      <div class="close" @click="closeModal"></div>
      <!-- vue-resource 传递问答详情到box中 -->
      <div class="ctr">
        <div class="box">
          <p class="question">一般纳税人销售自行开发的房地产项目，在营改增之前已经申报了营业税，但是没有开具发票，营改增之后怎么处理？</p>
          <p class="answer">一般纳税人销售自行开发的房一般纳税人销售自行开发的房一般纳税人销售自行开发的房一般纳税人销售自行开发的房一般纳税人销售自行开发的房</p>
        </div>
        <div class="star">
          分数:
          <input style="height:15px;width:15px" name="score" type="radio" /> 5分
          <input style="height:15px;width:15px" name="score" type="radio" /> 4分
          <input style="height:15px;width:15px" name="score" type="radio" /> 3分
          <input style="height:15px;width:15px" name="score" type="radio" /> 2分
          <input style="height:15px;width:15px" name="score" type="radio" /> 1分
        </div>
        <div class="sub-btn">
          <input type="button" class="submit" @click="submitCommit" value="确定">
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  props:{
    // 子组件接收数据
    contentSeries:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    //子组件触发父组件事件
    closeModal:function(){
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit('closeModal')
    },
    submitCommit:function(){
      //vue-resource....
      console.log(this.contentSeries)
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.content {
  width: 700px;
  height: 450px;
  background-color: $white;
  margin: auto;
  margin-top: 50%;
  display: flex;
  // justify-content: center;
  align-items: center;
  position: relative;
  .close{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/images/close.png');
  }
  .ctr {
    // border: 1px solid $red
    margin-left: 50px;
    .box{
      margin:0 50px 30px 0;
      p{
        line-height: 30px;
        text-indent: 1.5rem;
      }
      p[class="question"]{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      p[class="answer"]{
        font-size: 12px;
      }
    }
    .star{
      margin-bottom: 30px;
      font-size: 14px;
      input{
        margin-left: 15px;
        outline: none;
      }
    }
    .note-title{
      margin-bottom: 30px;
      font-size: 14px;
      height: 35px;
      width: 560px;
      outline: none;
      border-radius: 5px;
      border: 1px solid silver;
      padding-left: 10px;
    }
    textarea {
      resize: none;
      width: 550px;
      height: 120px;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      font-size: 14px;
      border: 1px solid silver;
    }
    .sub-btn{
      .submit{
        padding: 7px 40px;
        cursor: pointer;
        outline: none;
        margin-top: 25px;
      }
    }
  }
}
</style>
