<template>
  <div class="modal">
    <!-- stars -->
    <div class="fixed">
      <div class="content">
				<div class="close" @click="closeModal"></div>
        <div class="ctr" v-show="contentSeries">
					<h2>视频上传</h2>
					<div class="center">
						<div class="rates">
							<h3>dasf76fads6af78df6adf.mp4</h3>
							<div class="clearfix">
								<span class="fl">已上传 : 59.53% 0.31MB/0.52MB 上传速度 : 141.26KB/s 剩余时间 : 2秒</span><span class="fr orange">取消上传</span>
							</div>
							<h4 class="rate-bar rate-below"></h4>
							<h4 class="rate-bar rate-cover"></h4>
						</div>
						<p class="sub-title"><span class="orange underline">基本信息</span></p>
						<table>
							<tr>
								<th>
									<font class="star">*</font><label for="pro-registed-phone">标题：</label>
								</th>
								<td colspan="4">
									<input id="title" placeholder="请填写标题" type="text" />
								</td>
							</tr>
							<tr class="splite">
								<td width="50"></td>
								<td width="120"></td>
								<td width="120"></td>
								<td width="120"></td>
								<td width="120"></td>
							</tr>
							<tr>
								<th>
									<font class="star">*</font><label for="title">播单：</label>
								</th>
								<td colspan="2">
									<select>
										<option>播单1</option>
										<option>播单2</option>
										<option>播单3</option>
										<option>播单4</option>
									</select>
								</td>
							</tr>
							<tr class="splite"></tr>
							<tr>
								<th>
									<font class="star">*</font><label for="tags">标签：</label>
								</th>
								<td colspan="4">
									<input id="tags" placeholder="请填写复合视频内容的标签，你的视频更容易被搜到。用回车完成输入。" type="text" />
								</td>
							</tr>
							<tr class="splite"></tr>
							<tr>
								<th>
									<font class="star">*</font><label for="pro-registed-phone">简介：</label>
								</th>
								<td colspan="4">
									<textarea placeholder="请填写简介，简单介绍一下你的视频"></textarea>
								</td>
							</tr>
							<tr class="splite"></tr>
							<tr>
								<th></th>
								<td>
									<div class="sub-btn">
										<input type="button" class="submit" @click="submitCommit" value="确   定">
										<!-- vue-resource 传递事件给父组件，然后在文档中添加笔记标题 -->
									</div>
								</td>
							</tr>
							<tr class="splite"></tr>
						</table>
					</div>
        </div>
        <div class="ctr" v-show="!contentSeries">
					<h2>编辑信息</h2>
          <div class="tab-container">
            <table>
              <tr>
                <th> </th>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "../stars/Stars";
export default {
  data() {
    return {};
  },
  components: {
    Stars
  },
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
.fr {
  float: right;
}
.fl {
  float: left;
}
.clearfix {
  overflow: hidden;
  margin-bottom: 10px;
}
.content {
  width: 700px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .center {
    width: 72%;
    margin: 0 auto;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    background-image: url("../../assets/images/Sprite.png");
    background-position: -522px -126px;
  }
  .ctr {
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
    span {
      color: $dark;
    }
    .orange {
      color: $border-orange;
    }
    .underline {
      border-bottom: 1px solid $border-orange;
    }
    .rates {
      h3 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .rate-bar {
        position: relative;
        width: 100%;
        height: 10px;
      }
      .rate-below {
        background-color: $bg-nav;
      }
      .rate-cover {
        background-color: lightgreen;
        width: 30%;
        top: -10px;
      }
    }
    .sub-title {
      border-bottom: 1px solid $border-dark;
      margin: 20px 0;
      span {
        display: inline-block;
        line-height: 20px;
      }
    }
    label {
      display: inline-block;
    }
    table,
    tr,
    td {
      text-align: left;
      padding-left: 10px;
      // border:1px solid $border-dark;
    }
    table {
      border-collapse: collapse;
      th {
        text-align: right;
      }
      .splite {
        height: 10px;
      }
      .star {
        color: $red;
        margin-right: 10px;
      }
      .btn-group td {
        text-align: right;
      }
      .btn-group {
        input,
        span {
          cursor: pointer;
        }
      }
      input,
      select {
        width: 94%;
        height: 25px;
        outline: none;
        padding: 0 10px;
        border: 1px solid $border-dark;
      }
      textarea {
        width: 94%;
        resize: none;
        height: 70px;
        outline: none;
        border: 1px solid $border-dark;
        padding: 10px;
      }
      .btn {
        display: inline-block;
        width: 100px;
        height: 27px;
        outline: none;
        line-height: 25px;
      }
      .btn-danger {
        border: none;
        color: $white;
        background-color: $red;
      }
      .cancel {
        border: 1px solid $border-dark;
        box-sizing: border-box;
        background-color: #fff;
      }
      .border {
        display: inline-block;
        border: 1px solid $border-dark;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100px;
        position: relative;
      }
      .mingxi {
        width: 100px;
        cursor: pointer;
      }
      .rd-border {
        border: 1px solid $red;
        i {
          position: absolute;
          height: 20px;
          width: 20px;
          background-image: url("../../assets/images/Sprite.png");
          background-position: 45px -82px;
          bottom: 0;
          right: 0;
        }
      }
      .warning {
        p {
          background-color: #fffdee;
          line-height: 30px;
          padding-left: 20px;
          i {
            background-image: url("../../assets/images/Sprite.png");
            background-position: 44px -12px;
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: text-bottom;
            margin-right: 8px;
          }
        }
      }
    }
    .sub-btn {
      .submit {
        text-align: center;
        border-radius: 3px;
        height: 25px;
        cursor: pointer;
        width: 80px;
        line-height: 25px;
        outline: none;
        color: $white;
        background-color: #e7141a;
        border: none;
        display: block;
      }
    }
  }
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
}
</style>
