<template>
  <div class="hot-forum">
    <div v-for="item in content" :key="item.id" class="comment">
      <div class="author">隔壁老王</div>
      <div class="content">
        <h2>{{ item.title }}</h2>
        <div class="collapsed-content">
          很简单哒。 先用「疑问」的语气，从她的话题上扣一个点回复； 再用「陈述」的语气，阐述自己在做什么。 感情里最怕的就是，你一个答复我等了一整天，收到的内容却与我的话题全然无关。 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var latest = require('../../latest.json')
export default {
  data(){
    return{
      content:''
    }
  },
  mounted:function(){
    this.content = latest.stories
  }
}
</script>
<style lang="scss" scoped>
    .comment{
      width: 700px;
      padding:16px 20px;
      margin: 10px;
      background-color: #f3f3f2;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      box-sizing:border-box;
      .author{
        font-size: 15px;
        font-weight: 600;
        line-height: 16.5px;
      }
      .content{
        margin-top: 14px;
        h2{
          font-size: 18px;
          line-height: 28px;
        }
        .collapsed-content{
          margin:9px 0;
          font-size: 15px;
          line-height: 1.67;
        }
      }
    }
</style>


