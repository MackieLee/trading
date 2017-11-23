<template>
  <div class="min-650 dayi">
    <quill-editor v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quill-editor>
    <input value="提交问题" type="button" class="submit" />
    <!-- 第一个问答 -->
    <div class="item">
      <!-- 标题 -->
      <div class="thumb-nail fl">
        <router-link :to="{name: 'vip'}">
          <img class="user-thumb-nail" src="../../assets/images/huanyuanzx01.png"/>
        </router-link>
      </div>
      <div class="content fl">
        <p class="ask">我拿中注协的机考模拟系统练习，点击主观题上面的蓝色的CH输入法按钮，无法切换输入法，怎么回事？是因为是模拟系统所以中注协没安装输入法么？考试时候怎么办？谢谢老师。</p>
        <p class="date">2017-11-23</p>
        <p class="toggle"><span class="ansr">正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，您试着换台电脑或者浏览器试试，考试的时候是不会出现这样的问题的，祝备考顺利！ 每个努力学习的小天使都会有收获的，加油</span>
          <span class="blue" @click="toggle">展开</span>
          <span class="blue" @click="toggle" style="display:none;">收起</span>
        </p>
      </div>
    </div>
    <div class="item">
      <!-- 标题 -->
      <div class="thumb-nail fl">
        <router-link :to="{name: 'vip'}">
          <img class="user-thumb-nail" src="../../assets/images/huanyuanzx01.png"/>
        </router-link>
      </div>
      <div class="content fl">
        <p class="ask">我拿中注协的机考模拟系统练习，点击主观题上面的蓝色的CH输入法按钮，无法切换输入法，怎么回事？是因为是模拟系统所以中注协没安装输入法么？考试时候怎么办？谢谢老师。</p>
        <p class="date">2017-11-23</p>
        <p class="toggle"><span @click="toggle" class="ansr">正常情况下，直接点击CH输入法即可切换输入法，可能是您浏览器的问题，您试着换台电脑或者浏览器试试，考试的时候是不会出现这样的问题的，祝备考顺利！ 每个努力学习的小天使都会有收获的，加油</span>
          <span class="blue" @click="toggle">展开</span>
          <span class="blue" @click="toggle" style="display:none;">收起</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
export default {
  components: { quillEditor },
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "请在此处输入您的问题",
        theme: "bubble"
      }
    };
  },
  methods: {
    onEditorBlur(editor) {},
    onEditorFocus(editor) {},
    onEditorReady(editor) {},
    toggle:()=>{
      // VUE 操作 DOM 。我TM也是服了 。这种情况如何事件驱动？
      event.target.innerText === '展开'?
      (event.target.parentNode.firstChild.className = 'ansr-show',event.target.style.display = 'none',event.target.parentNode.children[2].style.display = 'block'):
      (event.target.parentNode.firstChild.className = 'ansr',event.target.style.display = 'none',event.target.parentNode.children[1].style.display = 'block')
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/base.scss";
.dayi {
  .fl {
    float: left;
  }
  .item {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid $border-dark;
    .user-thumb-nail {
      width: 40px;
    }
    .content {
      width: 420px;
      margin-left: 15px;
      p {
        line-height: 25px;
      }
      span{
        display: inline-block;
      }
      .blue{
        color: $blue;
        cursor: pointer;
      }
      .ask {
        text-indent: 2em;
      }
      .date {
        color: $dark;
      }
      .ansr {
        text-indent: 2em;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 420px;
        height: 25px;
      }
      .ansr-show{
        text-indent: 2em;
      }
    }
  }
  .quill-editor {
    border: 1px solid $border-dark;
  }
  .submit {
    margin: 10px 0;
    height: 25px;
    width: 80px;
    border: none;
    background-color: $btn-danger-hover;
    outline: none;
    color: $white;
    cursor: pointer;
    &:hover {
      background-color: $btn-danger;
    }
  }
}
</style>
