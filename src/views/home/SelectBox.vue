<template>
  <div class="select-box">
    <ul class="letter-title">
      <li v-for="item in letters" :key="item" @click="getLetter(item)" :class="{ 'active' : item.toLowerCase()===letter}">
        {{item}}
      </li> 
    </ul>
    <div class="games-container">
       <ul v-for="items in games">
        <li v-for=" item in items[letter]" :key="item.name">
          <a :href=" item.link ">
            <img :src=" item.icon " />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      letters : ['推荐游戏','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      letter : 'a',
      games : [
        {
          intro : [
            { name : 'all', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        },
        {
          a : [
            { name : 'a', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        },
        {
          b : [
            { name : 'b', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        },
        {
          c : [
            { name : 'c', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        }
      ]
    }
  },
  methods:{
    getLetter:function(item){
      item === '推荐游戏'? this.letter = 'intro':this.letter = item.toLowerCase()
      console.log(this.letter)
    }
  }
}
</script>

<style lang="scss" scoped>
  .letter-title{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    li{
      font-size: 14px;
      padding: 5px 13px;
      border: 1px solid #fff;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        border-color: #0275D8;
        color: #0275D8;
        font-weight: bold;
      }
    }
  }
  .games-container{
    a{
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      img{
        height: 90px;
        width:90px;
      }
      span{
        text-align: center;
      }
    }
  }
  .active{
    color: #0275D8;
    font-weight: bold;
  }
</style>


