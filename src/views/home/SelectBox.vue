<template>
  <div class="select-box">
    <ul class="letter-title">
      <li>推荐游戏</li>
      <li v-for="item in letters" :key="item">
        {{item}}
      </li>
    </ul>
    <div class="games-container">
      <ul v-for="items in games" :key="items">
        <li v-for=" item in items.a" :key="item">
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
      letters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      games : [
        {
          a : [
            { name : '英雄联盟', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        },
        {
          a : [
            { name : '英雄联盟', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        },
        {
          a : [
            { name : '英雄联盟', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '坦克世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '魔兽世界', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '老王卖屁股', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : '刀塔2', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'},
            { name : 'ABCD', icon : 'https://static.jiaoyimao.com/resource/public/shop/2016/12/27/77154ded-e68e-4bc1-903b-7f9350f9fdf7.png', link : '#'}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .letter-title{
    display: flex;
    justify-content: space-between;
    li{
      padding: 3px 15px;
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
</style>


