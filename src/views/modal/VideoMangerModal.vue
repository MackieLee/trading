<template>
  <div class="modal">
    <!-- stars -->
    <div class="fixed">
      <div class="content">
        <div class="close" @click="closeModal"></div>
        <div class="ctr" v-show="contentSeries">
          <form @submit.prevent = "submit">
            <table v-for="(item,index) in exams" :key="item">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="title" colspan="3">第 {{ index+1 }} 道题</td>
                <td></td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>题目:</th>
                <td colspan="6">
                  <input type="text" placeholder="请输入练习题目" />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>练习题类型:</th>
                <td>
                  <label :for="index+'1'">单选</label>
                </td>
                <td><input type="radio" :id="index+'1'" :name="index" /></td>
                <td><label :for="index+'2'">多选</label></td>
                <td><input type="radio" :id="index+'2'" :name="index"/></td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>题目:</th>
                <td>
                  A
                </td>
                <td colspan="5">
                  <input />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>题目:</th>
                <td>
                  B
                </td>
                <td colspan="5">
                  <input />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>题目:</th>
                <td>
                  C
                </td>
                <td colspan="5">
                  <input />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>题目:</th>
                <td>
                  D
                </td>
                <td colspan="5">
                  <input />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>正确答案:</th>
                <td>
                  A
                  <input type="checkbox" />
                </td>
                <td>
                  B
                  <input type="checkbox" />
                </td>
                <td>
                  C
                  <input type="checkbox" />
                </td>
                <td>
                  D
                  <input type="checkbox" />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>解析:</th>
                <td colspan="6"><textarea></textarea></td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <td width="100"></td>
                <td width="50"></td>
                <td width="30"></td>
                <td width="50"></td>
                <td width="30"></td>
                <td width="100"><p @click="docCancel('exams')" v-show="index === exams-1" class="cursor btn-sm">取消</p></td>
                <td width="100"><p @click="exams++" class="cursor btn-sm">增加</p></td>
              </tr>
              <tr class="splite"></tr>
            </table>
          </form>
          <input type="button" class="submit" value="确定"/>
        </div>
        <div class="ctr" v-show="!contentSeries">
          <form @submit.prevent = "submit">
            <table v-for="(item,index) in docCount" :key="item">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td class="title" colspan="3">第 {{ index+1 }} 段文档</td>
                <td></td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>标题:</th>
                <td colspan="6">
                  <input type="text" placeholder="请输入文档标题" />
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th>文档内容:</th>
                <td colspan="6"><textarea></textarea></td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <th width="100">对应视频断点:</th>
                <td width="50">
                  <input class="time" type="number" />
                </td>
                <td width="30">分</td>
                <td width="50">
                  <input class="time" type="number" />
                </td>
                <td width="30">
                  秒
                </td>
                <td width="100">
                </td>
                <td width="100">
                </td>
              </tr>
              <tr class="splite"></tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><p @click="docCancel('docCount')" v-show="index === docCount-1" class="cursor btn-sm">取消</p></td>
                <td><p @click="docCount++" class="cursor btn-sm">增加一段</p></td>
              </tr>
              <tr class="splite"></tr>
            </table>
          </form>
          <input type="button" class="submit" value="确定"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docCount: 1,
      exams:1
    };
  },
  components: {},
  computed: {},
  props: {
    // 子组件接收数据
    contentSeries: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    //子组件触发父组件事件
    closeModal: function() {
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit("closeModal");
    },
    submitCommit: function() {
      //axios
      this.$emit("closeModal");
    },
    docCancel:function(arg){
      this[arg] === 1? this.closeModal():this[arg]--
    },
    submit: function() {}
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.fixed {
  overflow: hidden;
  position: fixed;
  top: 20%;
  width: 100%;
}
.fr {
  float: right;
}
.cursor {
  cursor: pointer;
}
.btn-sm {
  padding: 4px;
  background-color: $border-dark;
  color: $black;
  width: 60%;
}
.content {
  width: 700px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .close {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    background-color: black;
    background-image: url("../../assets/images/Sprite.png");
    background-position: -522px -126px;
  }
  .ctr {
    padding: 20px;
    height: 405px;
    overflow: scroll;
    form {
      overflow: hidden;
      table {
        border-collapse: collapse;
        margin: 0 auto;
        tr[class="splite"] {
          height: 20px;
        }
        th {
          text-align: right;
          padding-right: 15px;
        }
        td {
          text-align: center;
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
            height: 100px;
            resize: none;
          }
        }
        td[class="title"]{
          text-align: center;
        }
      }
    }
    .submit {
      text-align: center;
      border-radius: 3px;
      height: 36px;
      cursor: pointer;
      width: 80px;
      line-height: 36px;
      outline: none;
      color: $white;
      background-color: #e7141a;
      margin: 15px auto;
      border: none;
      display: block;
    }
  }
}
</style>
