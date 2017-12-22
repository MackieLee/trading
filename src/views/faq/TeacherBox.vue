<template>
  <div class="teacher-box">
    <div class="modal-outer" v-show="modal">
      <modal @closeModal="closeModal"></modal>
    </div>
    <div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;问答</p>
    </div>

    <div class="head-content lf">
      <div class="search lf">
        <input type="text"/><input class="search-btn" type="button" value="搜一下"/><br>
        <span>全部</span><span>房地产</span><span>个税</span><span>咨询</span><span>会计</span>
      </div>
      <div class="btn-group rt">
        <i @click="showModal" class="ask-icon"></i><input class="ask-input" @click="showModal" type="button" value="点我提问" /><br>
        <span>没有找到问题？点击上方直接提问</span>
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
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">我要提问</router-link>
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
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">我要提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
    <div class="item lf m_r">
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
        <router-link :to="{ name : 'qdetail' }" tag="p" class="ask-btn">我要提问</router-link>
        <p>已解决27个问题</p>
      </div>
    </div>
 
  </div>
</template>

<script>
import Modal from "./Modal"
export default {
  components: { Modal },
  data() {
    return {
      modal: false
    };
  },
  methods: {
    closeModal: function() {
      this.modal = false;
    },
    showModal:function(){
      this.modal = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.teacher-box {
  overflow: hidden;
}
.modal {
  height: 224%;
}
.head-content {
  width: 100%;
  overflow: hidden;
  input[type="text"] {
    width: 500px;
    height: 30px;
    line-height: 30px;
    border: 1px solid $border-orange;
    outline: none;
    padding-left: 10px;
    margin-left: 10px;
  }
  .search-btn {
    height: 32px;
    line-height: 32px;
    border: none;
    background-color: $border-orange;
    width: 100px;
    color: $white;
  }
  span {
    display: inline-block;
    margin:10px 5px 10px;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-group {
    position: relative;margin-left: 20%;
    .ask-icon {
      position: absolute;
      background-position: -388px -83px;
      left: 35px;top: 8px;}
    .ask-input:hover{background-color: #e7141a;}
    .ask-input {
      height: 40px;
      line-height: 40px;
      width:100%;font-size: 14px;
      border: none;
      background-color:#f84141;
      color: $white;
      outline: none;
      cursor: pointer;
    }
  }
  .ask-input {
    height: 30px;
    line-height: 30px;
    width: 150px;
    border: none;
    background-color: $btn-danger;
    color: $white;
    outline: none;
    cursor: pointer;}
}
i {
  display: inline-block;
  width: 20px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}

.cur-posi {
  padding: 0 0 26px 0;
  width: 100%;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.lf,.rt{
  float: left;
}

.m_r{margin:0 !important;}
.item {
  width: 330px;
  background: $white;
  margin: 0 46px 53px 0;
  overflow: hidden;
  border: 1px solid $border-rice;
   .flex {
    display: flex;
    height: auto;
    margin: 10px 35px 28px 15px;
    img{width: 80px;}
    .name {
      margin: 10px 38px 28px;
      p {font-size: $lg-title;
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
        border-radius: 2px;
        margin-bottom: 15px;
        background: $bg-blue;
        color: $white;
      }
      font {
        display: block;
        text-align: center;
      }
    }
    span[class="shanchang"] {
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
        background-position: -15px -224px;width: 26px;
        margin-right: 6px;
      }
    }
  }
  .tags {
    margin: 17px;
    li {
      padding: 3px 15px;
      border: 1px solid $border-blue;
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
      background-color: $btn-danger;
      cursor: pointer;
      &:hover {
        background-color: $btn-danger-hover;
      }
    }
  }
}
</style>
