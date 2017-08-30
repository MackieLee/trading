<template>
  <div class="online">
    <div class="container">
      <div class="cur-posi">
        <p><i></i>当前位置:<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;线上课程</p>
      </div>
      <div>
        <p><span>课程体系：</span><ul><li v-for="item in topics" :key="item">{{ item }}</li></ul></p>
      </div>
      <div>
        <p><span>讲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;师：</span><ul><li v-for="item in leaders" :key="item">{{ item }}</li></ul></p>
      </div>
      <div>
        <p><span>适宜人群：</span><ul><li v-for="item in easy" :key="item">{{ item }}</li></ul></p>
      </div>
      <div class="sorts">
        <p><span>综&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合：</span><ul><li v-for="item in sorts" :key="item">{{ item }}</li></ul></p><p>共找到12个课程</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'courses',
  data(){
    return{
      topics:['全部','土地增值税','营改增','收并购重组','税务战略与管理'],
      leaders:['牛鲁鹏','王志国'],
      easy:['全部会计专员','财务经理','总监'],
      sorts:['最新','最热','好评','免费']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.container{
  width:$width;
  margin: 0 auto;
  div{
    height: 50px;
    border-bottom: 1px dotted $black;
    line-height: 50px;
    span{
      display: inline-block;
    }
    ul{
      display: inline-block;
      li{
        margin:0 28px;
        cursor: pointer;
      }
    }
  }
  .cur-posi{
    border-bottom: none;
  }
  .sorts{
    border-bottom: 1px solid $rice;
    display: flex;
    justify-content: space-between;
    li{
      margin:0 12px;
    }
  }
}
</style>
