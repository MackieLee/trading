<template>
  <div class="teacher-box">
    <div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
    </div>
    <div class="item lf">
      <div class="flex">
        <div>
          <img src="../../assets/images/jitax_问答_01.png" />
        </div>
        <div class="name">
          <p>孙老师</p>
          <span>九鼎财税资深讲师</span>
        </div>
      </div>
      <div class="tag-box">
        <span>
          <p>
            课程
          </p>
          <font>10</font>
        </span>
        <span>
          <p>回答</p>
          <font>17</font>
        </span>
        <span>
          <p>荣誉值</p>
          <font>99%</font>
        </span>
        <span class="shanchang">
          <i></i>擅长领域</span>
      </div>
      <div class="tags">
        <ul>
          <li>税收筹划</li>
          <li>税收筹划</li>
          <li class="board">税收筹划</li>
          <li>税收筹划</li>
        </ul>
      </div>
      <div class="ask">
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
    <div class="item lf">
      <div class="flex">
        <div>
          <img src="../../assets/images/jitax_问答_01.png" />
        </div>
        <div class="name">
          <p>孙老师</p>
          <span>九鼎财税资深讲师</span>
        </div>
      </div>
      <div class="tag-box">
        <span>
          <p>
            课程
          </p>
          <font>10</font>
        </span>
        <span>
          <p>回答</p>
          <font>17</font>
        </span>
        <span>
          <p>荣誉值</p>
          <font>99%</font>
        </span>
        <span class="shanchang">
          <i></i>擅长领域</span>
      </div>
      <div class="tags">
        <ul>
          <li>税收筹划</li>
          <li>税收筹划</li>
          <li class="board">税收筹划</li>
          <li>税收筹划</li>
        </ul>
      </div>
      <div class="ask">
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
    <div class="item lf board">
      <div class="flex">
        <div>
          <img src="../../assets/images/jitax_问答_01.png" />
        </div>
        <div class="name">
          <p>孙老师</p>
          <span>九鼎财税资深讲师</span>
        </div>
      </div>
      <div class="tag-box">
        <span>
          <p>
            课程
          </p>
          <font>10</font>
        </span>
        <span>
          <p>回答</p>
          <font>17</font>
        </span>
        <span>
          <p>荣誉值</p>
          <font>99%</font>
        </span>
        <span class="shanchang">
          <i></i>擅长领域</span>
      </div>
      <div class="tags">
        <ul>
          <li>税收筹划</li>
          <li>税收筹划</li>
          <li class="board">税收筹划</li>
          <li>税收筹划</li>
        </ul>
      </div>
      <div class="ask">
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.teacher-box {
  overflow: hidden;
}

i {
  display: inline-block;
  width: 30px;
  height: 22px;
  background-image: url('../../assets/images/Sprite.png');
  vertical-align: text-bottom;
}

.cur-posi {
  padding:0 0 26px 0;
  border-bottom: 1px solid $rice;
  width: 100%;
  i {
    background-position: -51px -82px;
    margin-right: 6px;
  }
}

.lf {
  float: left;
}
.board{
  margin-right: 0 !important;
}
.item {
  width: 330px;
  background: $white;
  margin: 36px 46px 53px 0;
  overflow: hidden;
  .flex {
    display: flex;
    height: 117px;
    margin: 20px 35px 28px 35px;
    .name {
      margin: 25px 30px 50px 28px;
      P {
        font-size: $lgtitle;
        margin-bottom: 16px;
      }
    }
  }
  .tag-box {
    position: relative;
    display: flex;
    width: 250px;
    justify-content: space-between;
    padding-bottom: 28px;
    margin: 0 auto;
    border-bottom: 1px solid $black;
    span {
      p {
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 15px;
        background: -webkit-linear-gradient(#fdb483, #ff84f3);
        background: -o-linear-gradient(#fdb483, #ff84f3);
        background: -moz-linear-gradient(#fdb483, #ff84f3);
        background: linear-gradient(#fdb483, #ff84f3);
      }
      font {
        display: block;
        text-align: center;
      }
    }
    span[class='shanchang'] {
      font-size: 16px;
      display: block;
      width: 120px;
      height: 20px;
      text-align: center;
      background-color: $white;
      position: absolute;
      bottom: -10px;
      left: 25%;
      i {
        background-position: 2px -361px;
        margin-right: 6px;
      }
    }
  }
  .tags {
    margin: 17px;
    li {
      padding: 3px 15px;
      border: 1px solid #ddd;
      margin: 10px 9px 0 0;
    }
    .board {
      margin: 0;
    }
  }
  .ask {
    text-align: center;
    margin-bottom: 20px;
    p[class="ask-btn"] {
      width: 107px;
      height: 33px;
      margin: 25px auto;
      line-height: 33px;
      border-radius: 5px;
      color: $white;
      background-color: $red;
      cursor: pointer;
    }
  }
}
</style>
