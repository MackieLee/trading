<template>
  <div class="book">
    <div class="container">
      <div class="cur-posi">
        <p>
          <i></i>当前位置 : &nbsp;
          <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;图书</p>
      </div>
      <div>
        <p>
          <span>出&nbsp;&nbsp;版&nbsp;&nbsp;社：</span>
          <ul>
            <li data-name="publish" @click="getItem(item)" :class="{ 'active':p === item }" v-for="item in publish" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
          <ul>
            <li data-name="topics" @click="getItem(item)" :class="{ 'active':t === item }" v-for="item in topics" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装：</span>
          <ul>
            <li data-name="leaders" @click="getItem(item)" :class="{ 'active':l === item }" v-for="item in leaders" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>适宜人群：</span>
          <ul>
            <li data-name="easy" @click="getItem(item)" :class="{ 'active':e === item }" v-for="item in easy" :key="item">{{ item }}</li>
          </ul>
        </p>
      </div>
      <div>
        <p>
          <span>价格范围：</span>
          <ul>
            <li data-name="fee" @click="getItem(item)" :class="{ 'active':f === item }" v-for="item in fee" :key="item">{{ item }}</li>
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
            <li class="sorts-items" data-name="sorts"
            	 @click="getItem(item)" :class="{ 'active':s === item}"
            	  v-for="item in sorts" 
            	 :key="item">{{ item }}</li>
          </ul>
        </p>
        <p>共找到12本图书</p>
      </div>
    </div>
    <div class="video-boxes">
      <router-link to="/item" tag="div" class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </router-link>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
      <div class="item">
        <div>
          <a class="video-cover"><img src="../../assets/images/jitax_图书.png" />
            <span class="new">NEW</span>
          </a>
        </div>
        <p class="book-name">
          <a>土地增值税实战与案例</a>
        </p>
        <p class="buss-info">￥
          <span class="current-price">51.00</span>
          <span class="grey">￥</span>
          <del class="grey origin-price">62.56</del>
          <a class="im-buy">购买</a>
        </p>
      </div>
    </div>
    <div class="modals">
      <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
        <div class="modal-cover">
          <div>
            <p>税务咨询师是怎么炼成的？</p>
            <span>How did the tax consultant make it?</span>
          </div>
        </div>
        <div>
          <router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_45.png" /></router-link>
        </div>
      </div>
      <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
        <div class="modal-cover">
          <div>
            <p>会计师成长之路</p>
            <span>The path of Accountant's growth</span>
          </div>
        </div>
        <div>
          <router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_47.png" /></router-link>
        </div>
      </div>
      <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
        <div class="modal-cover">
          <div>
            <p>公司财务大杂烩</p>
            <span>A Hodgepodge of corporate finace</span>
          </div>
        </div>
        <div>
          <router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_50.png" /></router-link>
        </div>
      </div>
      <div class="item" @mouseenter="modalBlock" @mouseleave="modalHide">
        <div class="modal-cover">
          <div>
            <p>企业应避免哪些陷阱？</p>
            <span>What traps should be avoided in enterprise finace</span>
          </div>
        </div>
        <div>
          <router-link :to="{ name:'home'}" class="video-cover"><img src="../../assets/images/九鼎财税01_52.png" /></router-link>
        </div>
      </div>
    </div>
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
  name: "book",
  data() {
    return {
      publish: ["全部", "中国市场出版社", "中国税务出版社", "中国财政经济出版社", "机械工业出版社"],
      topics: ["全部", "土增税", "增值税"],
      leaders: ["全部", "平装", "精装", "简装"],
      easy: ["全部", "会计专员", "财务经理", "总监"],
      fee: ["全部"],
      sorts: ["综合", "最新", "最热", "好评", "免费"],
      current: 1,
      p: "",
      t: "",
      l: "",
      e: "",
      f: "",
      s: ""
    };
  },
  methods: {
    getItem: function(item) {
      let name = event.target.dataset.name;
      this[name.slice(0, 1)] = item;
    },
    modalBlock(e) {
      e.target.firstChild.style.display = "none";
    },
    modalHide(e) {
      e.target.firstChild.style.display = "flex";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.container {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
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
        &:hover {
          color: $red;
        }
      }
      .sorts-items {
        font-size: 14px;
        line-height: 45px;
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
      height: 22px;
      width: 58px;
      background-color: $btn-default;
      color: $white;
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
      background-image: url("../../assets/images/Sprite.png");
      background-position: -18px -106px;
      vertical-align: text-bottom;
      margin-right: 6px;
    }
  }
  .price-in {
    color: $blue;
    input {
      outline: none;
      border: 1px solid $border-blue;
      width: 52px;
      padding: 1px 0px;
      border-radius: 3px;}
    &:hover {color: $blue;}}
  .sorts {
    border-bottom: 1px solid $red; 
    display: flex;
    justify-content: space-between;
      p {float: left;line-height: 44px;
          li {
      margin: 0 12px;
    }
 }}
  .active {color: $red;}
}
.video-boxes {
  width: $width;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .video-cover {position: relative;}
  .item {
    border: 1px solid $red;
    padding: 8px;
    margin-bottom: 32px;
    position: relative;
    .new {
      padding: 2px 4px;
      background-color: $red;
      color: $white;
      font-size: 10px;
      position: absolute;
      right: 0;
      bottom: 3px;
    }
    .book-name {
      margin: 15px 0 20px 0;
      a { margin-right: 30px;
        font-size: 16px;}
    }
    .buss-info {
      font-size: 14px;
      color: $red;
      .current-price {
        font-size: 22px;
        margin-right: 10px;
      }
      .grey {
        color: $dark;
      }
      .im-buy {
        padding: 8px 12px;
        background-color: $red;
        color: $white;
        font-size: 10px;
        position: absolute;
        right: 15px;
      }
    }
  }
}
.title {
  width: $width;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid $border-rice;
  span {padding: 4px 19px;
    margin-right: 10px;
    background-image: url("../../assets/images/Sprite.png");
    background-position: -5px -253px;}
  font {font-size: 18px;
    font-weight: 450;}
  a {font-size: 14px;
    position: absolute;
    right: 0;}
}
.modals {
  width: $width;
  display: flex;
  justify-content: space-between;
  margin: 35px auto 60px auto;
  .item {
    position: relative;
  }
  .modal-cover {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    span,
    p {
      color: $white;
      text-align: center;
    }
    span {
      display: block;
      font-size: 12px;
    }
    p {
      font-size: 14px;
    }
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
