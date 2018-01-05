<template>
  <div class="q-detail">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        &nbsp;&gt;&nbsp;问答
      </p>
    </div>
    <Modal
      :width="700"
      v-model="modal"
      :closable="false"
      :mask-closable="false">
      <frequently-asked-questions></frequently-asked-questions>
    </Modal>
    <div class="item">
      <div class="container">
        <div class="left lf">
          <div class="head lf">
            <img src="../../assets/images/jitax_问答_01.png" />
          </div>
          <div class="content lf">
            <div class="first-glance">
              <span class="name">孙老师</span>
              <p class="watch default" v-if="guanzhu" @click="onWatch('watch')">
                <i></i>取消关注
              </p>
              <p class="cancel-watch default" v-if="!guanzhu" @click="onWatch('cancel')">
                <i></i>添加关注
              </p>
              <span class="price">￥50.00/次</span>
            </div>
            <div class="tag-box">
              <span class="shanchang">
                <i></i>擅长领域
              </span>
            </div>
            <div class="tags">
              <ul>
                <li>税收筹划</li>
                <li>税收筹划</li>
                <li>税收筹划</li>
                <li>税收筹划</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right rt">
          <div>
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
              <span class="last">
                <p>荣誉值</p>
                <font>99%</font>
              </span>
            </div>
          </div>
          <div class="btn-group rt">
            <i @click="modal = true" class="ask-icon"></i><input class="ask-input" @click="modal = true" type="button" value="点我提问" /><br>
            <span>没有找到问题？点击上方直接提问</span>
          </div>
        </div>
      </div>
    </div>
    <div class="all">
      <p class="title"><span>所有回答</span></p>
      <div class="list">
        <div class="list-item">
          <p><span class="question">您好孙老师您好孙老师您好孙老师您好孙老师您好根据贵公司的资料</span><span class="date rt">4天前</span></p>
          <p class="indent tchr">回答者：孙玮老师</p>
          <p class="indent">根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料....<span class="more">查看全部&gt;&gt;</span></p>
        </div>
        <div class="list-item">
          <p><span class="question">您好孙老师您好孙老师您好孙老师您好孙老师您好根据贵公司的资料</span><span class="date rt">4天前</span></p>
          <p class="indent tchr">回答者：孙玮老师</p>
          <p class="indent">根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料，根据贵公司的资料....<span class="more">查看全部&gt;&gt;</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import FrequentlyAskedQuestions from "../modal/FrequentlyAskedQuestions"
export default {
  components: { quillEditor, FrequentlyAskedQuestions },
  data() {
    return {
      guanzhu: false,
      content: "",
      editorOption: {
        placeholder: "规则"
      },
      modal: false
    };
  },
  methods: {
    onEditorBlur(editor) {},
    onEditorFocus(editor) {},
    onEditorReady(editor) {},
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    onWatch: function(state) {
      state === "watch" ? (this.guanzhu = false) : (this.guanzhu = true);
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.q-detail {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  i {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
  .cur-posi {
    padding: 0 0 26px 0;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .item {
    .container {
      border: 1px solid $border-dark;
      padding: 20px;
      overflow: hidden;
      .left {
        .content {
          margin-left: 50px;
          .first-glance {
            padding-left: 20px;
            .name {
              font-size: 14px;
              font-weight: bold;
            }
            .price {
              color: $blue;
              margin-left: 70px;
              font-size: 14px;
            }
          }
          .default {
            width: 73px;
            border: 1px solid $blue;
            font-size: 12px;
            border-radius: 4px;
            cursor: pointer;
            line-height: 26px;
            padding: 0 7px;
            display: inline-block;
            margin-left: 50px;
          }
          .watch i {
            background-position: -239px -255px;
          }
          .cancel-watch i {
            background-position: -143px -192px;
          }
          .tags {
            margin: 17px;
            li {
              padding: 3px 15px;
              border: 1px solid $border-blue;
              margin: 10px 9px 0 0;
            }
          }
          .tag-box {
            position: relative;
            width: 200px;
            padding-bottom: 28px;
            margin: 0 auto;
            border-bottom: 1px solid $black;
            span[class="shanchang"] {
              font-size: 16px;
              display: block;
              width: 120px;
              height: 20px;
              text-align: center;
              background-color:#fff;
              position: absolute;
              bottom: -7px;
              left: 20%;
              i {
                background-position: -18px -224px;
                margin-right: 6px;
              }
            }
          }
        }
      }
      .right {
        float: right;
        margin-right: 30px;
        .tag-box {
          overflow: hidden;
          margin-bottom: 10px;
          .last {
            margin: 0;
          }
          span {
            float: left;
            margin-right: 25px;
            p {
              width: 80px;
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
        }
        .btn-group {
          position: relative;
          .ask-icon {
            position: absolute;
            background-position: -388px -83px;
            left: 30px;
            top: 5px;
          }
          .ask-input:hover{background-color: #e7141a;}
          .ask-input {
            display: block;
            margin: 0 auto;
            height: 36px;
            line-height: 36px;
            width: 150px;
            border: none;
            background-color: $btn-danger;
            color: $white;
            outline: none;
            cursor: pointer;
            margin-bottom: 10px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
  .all {
    margin-top: 50px;
    .title {
      border-bottom: 1px solid $red;
      span {
        display: inline-block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background-color: $red;
        color: $white;
        text-align: center;
      }
    }
    .list {
      border: 1px solid $border-dark;
      padding: 20px;
      min-height: 150px;
      margin-top: 20px;
      .list-item {
        border-bottom: 1px solid $border-dark;
        p,
        span {
          line-height: 30px;
        }
        .question {
          display: inline-block;
          width: 95%;
        }
        .indent {
          text-indent: 2em;
        }
        .tchr {
          color: $dark;
        }
        .more {
          color: $blue;
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
