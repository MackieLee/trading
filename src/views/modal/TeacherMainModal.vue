<template>
  <div class="modal">
    <div class="container">
      <div class="fixed">
        <div class="content">
          <h2>视频上传</h2>
          <div class="close" @click="closeModal"></div>
          <div class="tab-container" v-if="contentSeries === 'bodan'">
            <table>
              <tr>
                <th>创建播单</th>
              </tr>
              <tr>
                <th>标题</th>
                <td colspan="3"><input type="text" placeholder="请输入邮箱"/></td>
              </tr>
              <tr class="split">
                <td colspan="4"></td>
              </tr>
              <tr>
                <th>简介</th>
                <td colspan="3"><textarea placeholder="请输入邮箱"></textarea></td>
              </tr>
              <tr class="split">
                <td colspan="4"></td>
              </tr>
              <tr class="split">
                <td colspan="4"></td>
              </tr>
              <tr>
                <th width="100"></th>
                <td width="100"><input type="button" value="确 定"/></td>
                <td width="100"><input type="button" value="确 定"/></td>
                <td width="100"></td>
              </tr>
            </table>
          </div>
          <div v-else class="identify">
            <img src="../../assets/images/336438490428669734.png"/>
            <h3>未实名认证</h3>
            <p>尊敬的用户，为了保证您的内容安全，请先对账号做实名信息认证。</p>
            <router-link tag="input" class="btn" value="立即实名认证" :to="{ name : 'identify'}" type="button"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  props: {
    // 子组件接收数据
    contentSeries: {
      default: ""
    }
  },
  methods: {
    //子组件触发父组件事件
    closeModal: function() {
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit("closeModal");
    },
    submitCommit: function() {
      //vue-resource....
      this.$emit("closeModal");
    }
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
.content {
  width: 700px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  h2 {
    background-color: #468ee3;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
    background-image: url("../../assets/images/Sprite.png");
    background-position: 168px -166px;
    height: 20px;
    width: 20px;
  }
  .title {
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: $bg-nav;
  }
  .container {
    .tab-container {
      padding-bottom: 30px;
      table {
        border-collapse: collapse;
        margin: 0 auto;
        tr {
          height: 30px;
          th {
            text-align: right;
            padding-right: 10px;
          }
          input,
          select {
            height: 30px;
            border-radius: 3px;
            outline: none;
          }
          select {
            width: 100%;
            cursor: pointer;
          }
          input[type="text"] {
            width: 95%;
            border: 1px solid $border-dark;
            padding-left: 5%;
          }
          input[type="button"] {
            width: 60%;
            border: none;
            background-color: $red;
            color: $white;
            cursor: pointer;
          }
          textarea {
            width: 300px;
            height: 80px;
            resize: none;
            outline: none;
            border-radius: 3px;
            padding: 10px;
          }
          .check-code {
            padding-left: 20px;
          }
        }
        .split {
          height: 2 0px;
        }
        u {
          color: #15bed2;
          cursor: pointer;
        }
      }
    }
    .identify {
      padding: 20px 0;
      h3,
      p {
        text-align: center;
        line-height: 30px;
      }
      img,
      input {
        display: block;
        margin: 20px auto;
      }
      h2 {
        font-size: 18px;
      }
      input {
        background-color: $red;
        color: $white;
        border: none;
        outline: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
      }
    }
  }
}
</style>
