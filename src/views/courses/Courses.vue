<template>
  <div class="online">
    <div class="container">
      <div class="cur-posi">
        <p>
          <i></i>当前位置 : &nbsp;
          <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;{{ curPath }}</p>
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
        <p>共找到12本图书</p>
      </div>
    </div>
    <router-view></router-view>
    <!-- 触发子组件的数据刷新，传递页码给子组件 -->
    <div class="pgs">
      <li class="prev">&lt;上一页</li>
      <li class="current ">1</li>
      <li class="custom">2</li>
      <li class="custom">3</li>
      <li class="custom">4</li>
      <li class="points">...</li>
      <li class="jump"><input type="tel" maxlength="3"> /40页</li>
      <li class="submit">确定</li>
      <li class="next">下一页&gt;</li>
    </div>
  </div>
</template>

<script>

export default {
  name: 'courses',
  data() {
    return {
      topics: ['全部', '土地增值税', '营改增', '收并购重组', '税务战略与管理'],
      leaders: ['牛鲁鹏', '王志国'],
      easy: ['全部会计专员', '财务经理', '总监'],
      fee: ['全部'],
      sorts: ['最新', '最热', '好评', '免费'],
      current: 1,
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
    curPath: function() {
      if (this.$route.path === '/courses/online'){
        return '线上课程'
      } else if (this.$route.path === '/courses/offline') {
        return '线下课程'
      }
    }
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
    height: 34px;
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
      background-position: -18px -106px;
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
    p{
      line-height: 45px;
    }
    li {
      margin: 0 12px;
    }
  }
  .active {
    color: $red;
  }
}
.pgs {
    width: 525px;
    margin: 60px auto;
    li {
      width: 33px;
      padding: 4px 0;
      line-height: 20px;
      text-align: center;
      margin-right: 2px;
      cursor: pointer;
      border: 1px solid $border-dark;
      color: $black;
    }
    .prev {
      width: 73px;
      color: $blue;
    }
    .next {
      width: 96px;
      color: $blue;
    }
    .points {
      border: none;
    }
    .submit {
      background-color: $btn-default;
      color: $white;
      width: 44px;
      border: none;
    }
    .jump {
      width: 80px;
      border: 1px solid $border-dark;
      color: #333;
      input {
        width: 30px;
        border: 1px solid $border-dark;
        outline: none;
      }
    }
    .current {
      background-color: $btn-default;
      color: $white;
    }
  }
</style>
