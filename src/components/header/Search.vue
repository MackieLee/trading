<template>
  <!--联级选择框容器-->
  <div class="multi-select">
    <!--搜索框主题-->
    <div class="multi-search">
        <ul>
          <li><a href="#">游戏名称</a></li>
          <li><a href="#">游戏区</a></li>
          <li><a href="#">游戏服务器</a></li>
          <li><a href="#">全部分类</a></li>
          <li><input class="input-search" type="text"placeholder="search..."/></li>
          <li class="multi-search-btn"><button class="btn btn-primary">搜索</button></li>
        </ul>
    </div>
    <!--下拉选择面板(游戏分类选择面板)-->
    <div v-show="selectPanel" class="select-panel"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPanel: true,
      childSelect: false,
      chars: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      games: [
        {name: '地下城与勇士'},
        {name: '新天龙八部'},
        {name: '剑侠情缘Ⅲ'},
        {name: '英雄联盟'},
        {name: '地下城与勇士'},
        {name: '新天龙八部'},
        {name: '剑侠情缘Ⅲ'},
        {name: '英雄联盟'},
        {name: '地下城与勇士'},
        {name: '新天龙八部'},
        {name: '剑侠情缘Ⅲ'},
        {name: '英雄联盟'},
        {name: '地下城与勇士'},
        {name: '新天龙八部'},
        {name: '剑侠情缘Ⅲ'},
        {name: '英雄联盟'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .multi-select{
    height: 65px;
    line-height: 65px;
    input{
      height: 30px;
      line-height: 30px;
    }
    li{
      margin: 0 10px;
    }
  }
  .input-search{
    height: 30px;
    width: 250px;
  }
  .select-panel{
    height: 100px;
    width: 100px;
    display: absolute;
    background: #f8f8f8;
  }
</style>
