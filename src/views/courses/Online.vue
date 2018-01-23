<template>
  <div class="online">
    <div class="container">
      <div class="cur-posi">
        <p>
          <i></i>当前位置 : &nbsp;
          <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;线上课程</p>
      </div>
      <div>
        <p>
          <span>适用行业：</span>
          <ul>
            <li data-name="industry" @click="getItem(item)" :class="{ 'active':i === item}"
            	v-for="item in industry" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>课程体系：</span>
          <ul>
            <li data-name="topics" @click="getItem(item)" :class="{ 'active':t === item}"
            	v-for="item in topics" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>讲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;师：</span>
          <ul>
            <li data-name="leaders" @click="getItem(item)" :class="{ 'active':l === item}"
            	 v-for="item in leaders" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>适宜人群：</span>
          <ul>
            <li data-name="easy" @click="getItem(item)" :class="{ 'active':e === item}"
            	v-for="item in easy" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>价格范围：</span>
          <ul>
            <li data-name="fee" @click="getItem(item)" :class="{ 'active':f === item}"
            	v-for="item in fee" :key="item">{{ item }}</li>
            <li class="price-in">
              <input type="tel" maxlength="6" placeholder="￥"/> &nbsp;一&nbsp;
              <input type="tel" maxlength="6" placeholder="￥"/>
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
        <p class="p">共找到12门课程</p>
      </div>
    </div>
    <online-courses></online-courses>
    <!-- 触发子组件的数据刷新，传递页码给子组件 -->
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
import OnlineCourses from './OnlineCourses'
export default {
  name: 'online',
  components:{ OnlineCourses },
  data() {
    return {
      industry:['房地产','建筑安装'],
      topics: ['全部', '土地增值税', '营改增', '收并购重组', '税务战略与管理'],
      leaders: ['牛鲁鹏', '王志国'],
      easy: ['全部会计专员', '财务经理', '总监'],
      fee: ['全部'],
      sorts: ['最新', '最热', '好评', '免费'],
      current: 1,
      i: '',
      t: '',
      l: '',
      e: '',
      s: '',
      f: ''
    }
  },
  mounted() {

  },
  created(){

  },
  computed: {

  },
  methods: {
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
  padding-top: 20px;
  // border-top: 2px solid $border-rice;
  div {
    height: 36px;
    border-bottom: 1px solid $border-dark;
    span {
      display: inline-block;
      background-color: $bg-nav;
      width: 106px;
      text-align: center;
      line-height: 34px;
    }
    ul {
      display: inline-block;
      li {
        margin: 0 8px;
        cursor: pointer;
        font-size: 12px;
        color: $dark-blue;
        &:hover {
          color: $red;
        }
      }
      .sorts-items {
        font-size: 14px;
      }
    }
  }
  div[class="cur-posi"] {
    height: auto;
    line-height: 0;
    margin-bottom: 26px;
  }
  .outer-conf {
    margin-left: 0px;
    .confirm {
      height: 20px;
      width: 58px;
      background-color: $btn-default;
      color: $white;
      line-height: 20px;
      text-align: center;
      border-radius: 4px;
      &:hover{
        background-color: $btn-default-hover;
      }
    }
  }
  .cur-posi {
    border-bottom: none;
    i {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      background-position: -18px -100px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .price-in {
    color: $border-blue;
    input {
      outline: none;
      border: 1px solid $border-blue;
      width: 52px;
      border-radius: 3px;
    }
    &:hover{
      color: $border-blue;
    }
  }
  .sorts {
    border-bottom: 1px solid $border-orange;
    display: flex;
    justify-content: space-between;
   p{line-height: 37px;}
   .p{ padding-right: 20px;}
    li {
      margin: 0 12px;
    }
  }
  .active {
    color: $red;
  }
}
</style>
