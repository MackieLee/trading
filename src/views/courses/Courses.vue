<template>
  <div class="online">
        <div class="container">
      <div class="cur-posi">
        <p>
          <i></i>当前位置 : &nbsp;
          <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;图书</p>
      </div>
      <div>
        <p>
          <span>课程体系：</span>
          <ul>
            <li data-name="topics" @click="getItem(item)" :class="{ 'active':t === item}" v-for="item in topics" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>讲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;师：</span>
          <ul>
            <li data-name="leaders" @click="getItem(item)" :class="{ 'active':l === item}" v-for="item in leaders" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>适宜人群：</span>
          <ul>
            <li data-name="easy" @click="getItem(item)" :class="{ 'active':e === item}" v-for="item in easy" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>价格范围：</span>
          <ul>
            <li data-name="fee" @click="getItem(item)" :class="{ 'active':f === item}" v-for="item in fee" :key="item">{{ item }}</li>
            <li class="price-in">
              <input type="number" /> &nbsp;一&nbsp;
              <input type="number" />
            </li>
            <li class="outer-conf">
              <span class="confirm">确定</span>
            </li>
          </ul>
        </p>
      </div>
      <div class="sorts">
        <p>
          <ul>
            <li class="sorts-items" data-name="sorts" @click="getItem(item)" :class="{ 'active':s === item}" v-for="item in sorts" :key="item">{{ item }}</li>
          </ul>
        </p>
        <p>共找到12本图书</p>
      </div>
    </div>
    <router-view></router-view>
    <div class="pgs">
      <router-link tag="li" to="/home" class="prev">上一页&gt;</router-link>
      <router-link tag="li" to="/home" :class="{ 'current ': current === 1}">1</router-link>
      <router-link tag="li" to="/home">2</router-link>
      <router-link tag="li" to="/home">3</router-link>
      <router-link tag="li" to="/home">4</router-link>
      <router-link tag="li" to="/">...</router-link>
      <router-link tag="li" to="/home" class="last">末尾</router-link>
      <router-link tag="li" to="/home" class="next">下一页&gt;</router-link>
    </div>
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
      fee: ['全部'],
      sorts:['最新','最热','好评','免费'],
      current: 1,
      t:'',
      l:'',
      e:'',
      s:'',
      f:''
    }
  },
  methods:{
    // getItem:function(e){
    //   this.topics.indexOf(e) > -1? this.t = e :
    //     this.leaders.indexOf(e) > -1? this.l = e :
    //       this.easy.indexOf(e) > -1? this.es = e :
    //         this.sorts.indexOf(e) > -1 ? this.s = e : ''
    // }
    getItem: function(item) {
      let name = event.target.dataset.name
      this[name.slice(0, 1)] = item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.container {
  width: $width;
  margin: 0 auto;
  div {
    height: 45px;
    border-bottom: 1px solid #ddd;
    line-height: 45px;
    span {
      display: inline-block;
      background-color: #eaeaea;
      width: 106px;
      text-align: center;
    }
    ul {
      display: inline-block;
      li {
        margin: 0 8px;
        cursor: pointer;
        font-size: 12px;
        &:hover{
          color: $red;
        }
      }
      .sorts-items{
        font-size: 14px;
      }
    }
  }
  div[class="cur-posi"]{
    height: auto;
    line-height: 0;
    margin-bottom: 20px;
  }
  .outer-conf {
    margin-left: 0px;
    .confirm {
      height: 22px;
      width: 58px;
      background-color: #9e9999;
      color: #fff;
      line-height: 22px;
      text-align: center;
      border-radius: 4px;
    }
  }
  .cur-posi {
    border-bottom: none;
    i {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: -106px -204px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .price-in {
    color: $red;
    input {
      outline: none;
      border: 1px solid $red;
      width: 52px;
      padding: 1px 0px;
      border-radius: 3px;
    }
  }
  .sorts {
    border-bottom: 1px solid $rice;
    display: flex;
    justify-content: space-between;
    li {
      margin: 0 12px;
    }
  }
  .active {
    color: $red;
  }
}
.pgs{
  width: 415px;
  margin:70px auto 70px auto;
  li{
    width: 33px;
    padding: 4px 0;
    line-height: 20px;
    text-align: center;
    border:1px solid $rice;
    border-right: none;
    margin-right: -4px;
    cursor: pointer;
  }
  .prev{
    width: 97px;
    color: $red;
  }
  .next{
    width: 96px;
    border: 1px solid $rice;
    color: $red;
  }
  .last{
    width: 50px;
  }
  .current{
    background-color: $red;
    color: $white;
  }
}
</style>
