<template>
  <div class="app-nav">
      <div class="nav-container">
        <ul>
            <li v-for="item in nav" :key="item.name"><a :href="item.link">{{ item.name }}</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          nav:[
            { name:'首页',link:'home'},
            { name:'账号交易',link:''},
            { name:'金币交易',link:''},
            { name:'装备交易',link:''},
            { name:'玩家留言',link:''},
            { name:'游戏代练',link:''},
            { name:'游戏陪玩',link:''},
            { name:'点卡交易',link:''},
            { name:'账号租赁',link:''},
            { name:'热门页游',link:''}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
    .app-nav{
        padding: 10px 0;
        margin-bottom: 20px;
        width: 100%;
        background-color: #0275d8;
        .nav-container{
            width: 1080px;
            margin: auto;
            ul{
                display: flex;
                justify-content: space-between;
                a{
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
</style>


