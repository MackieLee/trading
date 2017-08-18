<template>
  <!--联级选择框容器-->
  <div class="multi-select">
    <!--搜索框主题-->
    <div class="multi-search">
        <ul>
          <li><a href="#" @click="clear">游戏名称</a></li>
          <li><a href="#">游戏区</a></li>
          <li><a href="#">游戏服务器</a></li>
          <li><a href="#">全部分类</a></li>
          <li><input class="input-search" type="text"placeholder="search..."/></li>
          <li class="multi-search-btn"><button class="btn btn-primary">搜索</button></li>
        </ul>
    </div>
    <!--下拉选择面板(游戏分类选择面板)-->
    <div v-show="selectPanel" class="select-panel">
      <ul class="select-title" v-show="!name">
        <li v-for="item in chars" :key="item" @click="getLetter(item)" :class="{'active':item.toLowerCase()===letter}">{{ item }}</li>
      </ul>
      <ul class="select-content" v-for="items in games">
        <li v-for="(item,index) in items[letter]" :key="item.name" @click="getItem(item.name,index)">
           <span v-show="!name">{{ item[key] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPanel: false,
      childSelect: false,
      letter:'a',
      key:'name',
      name:'',
      area:'',
      server:'',
      chars: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      games: [
        {
          a : [
            { name : 'a',area :['beijing','shanghai','guangdong','hebei']},
            { name : '坦克世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '魔兽世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '老王卖屁股',area :['beijing','shanghai','guangdong','hebei']},
            { name : '刀塔2',area :['beijing','shanghai','guangdong','hebei']},
            { name : 'ABCD',area :['beijing','shanghai','guangdong','hebei']}
          ]
        },
        {
          b : [
            { name : 'b',area :['beijing','shanghai','guangdong','hebei']},
            { name : '坦克世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '魔兽世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '老王卖屁股',area :['beijing','shanghai','guangdong','hebei']},
            { name : '刀塔2',area :['beijing','shanghai','guangdong','hebei']},
            { name : 'ABCD',area :['beijing','shanghai','guangdong','hebei']}
          ]
        },
        {
          c : [
            { name : 'c',area :['beijing','shanghai','guangdong','hebei']},
            { name : '坦克世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '魔兽世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '老王卖屁股',area :['beijing','shanghai','guangdong','hebei']},
            { name : '刀塔2',area :['beijing','shanghai','guangdong','hebei']},
            { name : 'ABCD',area :['beijing','shanghai','guangdong','hebei']}
          ]
        },
        {
          d : [
            { name : 'd',area :['beijing','shanghai','guangdong','hebei']},
            { name : '坦克世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '魔兽世界',area :['beijing','shanghai','guangdong','hebei']},
            { name : '老王卖屁股',area :['beijing','shanghai','guangdong','hebei']},
            { name : '刀塔2',area :['beijing','shanghai','guangdong','hebei']},
            { name : 'ABCD',area :['beijing','shanghai','guangdong','hebei']}
          ]
        }
      ],
      area:[
        {
          a:[]
        }
      ]
    }
  },
  methods: {
    clear:function(){ 
      this.name=''
      !this.selectPanel?this.selectPanel = true :this.selectPanel = false
    },
    getLetter:function(item){
      this.letter = item.toLowerCase()
    },
    getItem:function(item,index){
      this.name = item
      console.log(this.games[this.letter][index])
      //error：index 0 undefined
      //如何根据index取到对象数组中的一项
    }
  }
}
</script>

<style lang="scss">
  .multi-select{
    input{
      height: 30px;
      line-height: 30px;
    }
    .multi-search{
      li{
        margin: 0 12px;
      }
    }
  }
  .input-search{
    height: 30px;
    width: 250px;
  }
  .select-panel{
    position: absolute;
    background: #fff;
    border: 2px solid #4D90FE;
    padding: 10px;
    width: 533px;
    margin-top: 15px;
    z-index: 1000;
    .select-title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      li{
        padding: 5px;
        cursor: pointer;
        &:hover{
          color: #0275D8;
          font-weight: bold;
        }
      }
    }
    .select-content{
      li{
        cursor: pointer;
        margin:0 10px
      }
    }
    .active{
      color: #0275D8;
      font-weight: bold;
      font-size: 14px;
    }
  }
</style>
