<template>
  <div class="bodan-mager">
    <div class="modal-outer" v-show="modal">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <modal @closeModal="closeModal" :content-series="series"></modal>
    </div>
    <div>
      <div class="clearfix">
        <div class="fl">
          <img src="../../assets/images/huanyuanzx02.png" alt="" />
        </div>
        <div class="fl h-100">
          <div class="title">
            <p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p>
          </div>
          <p>简介</p>
          <p class="date">2017-12-5 17:09:51</p>
        </div>
      </div>
      <ul class="sm-tags">
        <li style="border:none"><input type="checkbox" id="all"><label for="all" style="margin-left:10px">全部</label></li>
        <li @click="modal = true;series = false">添加课件</li>
        <li @click="modal = true;series = true">添加试题</li>
        <li>删除</li>
      </ul>
    </div>
    <div class="head">
      <p>
        <span @click="cur = 'shiti'" :class="{'red': cur === 'shiti'}">试题管理</span>
        <span class="splite">&nbsp;</span>
        <span @click="cur = 'kejian'" :class="{'red': cur === 'kejian'}">课件管理</span>
      </p>
    </div>
    <table v-show=" cur === 'shiti'">
      <tr>
        <th></th>
        <th>附件</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>下面哪一项的电子邮件链接是正确的？答案：D</p>
          <p>A.xxx.com.cn B.xxx@.net C.xxx@.com D.xxx@xxx.com</p>
          <p class="red">【解析】:因为电子邮件后缀是.com</p>
        </td>
        <td width="100">
          上传中
        </td>
        <td width="100">
          <p>删除</p>
        </td>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>下面哪一项的电子邮件链接是正确的？答案：D</p>
          <p>A.xxx.com.cn B.xxx@.net C.xxx@.com D.xxx@xxx.com</p>
          <p class="red">【解析】:因为电子邮件后缀是.com</p>
        </td>
        <td width="100">
          上传中
        </td>
        <td width="100">
          <p>删除</p>
        </td>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>下面哪一项的电子邮件链接是正确的？答案：D</p>
          <p>A.xxx.com.cn B.xxx@.net C.xxx@.com D.xxx@xxx.com</p>
          <p class="red">【解析】:因为电子邮件后缀是.com</p>
        </td>
        <td width="100">
          上传中
        </td>
        <td width="100">
          <p>删除</p>
        </td>
      </tr>
    </table>
    <table v-show="cur === 'kejian'">
      <tr>
        <th></th>
        <th>附件</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>模块一:2017智能征管时代下汇算清缴主要风险点处理</p>
          <p>(一)在企业财务上未反映的“视同销售”，而在汇算清缴被忽略不计。</p>
        </td>
        <td width="100">
          上传中
        </td>
        <td width="100">
          <p>编辑信息</p>
          <p>删除</p>
        </td>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>模块一:2017智能征管时代下汇算清缴主要风险点处理</p>
          <p>(一)在企业财务上未反映的“视同销售”，而在汇算清缴被忽略不计。</p>
        </td>
        <td width="100">
          上传中
        </td>
        <td width="100">
          <p>编辑信息</p>
          <p>删除</p>
        </td>
      </tr>
    </table>
    <router-view></router-view>
    <div class="pgs">
      <li class="prev">&lt;上一页</li>
      <li class="current">1</li>
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
import Modal from "../modal/VideoMangerModal";
export default {
  components: { Modal },
  data() {
    return {
      cur: "shiti",
      modal: false,
      series: ""
    };
  },
  methods: {
    closeModal: function() {
      this.modal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.modal-outer {
  width: 100%;
  height: 173%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .modal {
    height: 110%;
  }
  .close {
    position: absolute;
    top: 15%;
    left: 60%;
  }
}
.active {
  border-bottom: 1px solid $red;
}
.left {
  text-align: left;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  overflow: hidden;
}
.red {
  color: $red;
}
.h-100 {
  margin-left: 10px;
  p {
    line-height: 22px;
  }
}
.sm-tags {
  li {
    display: inline-block;
    width: 80px;
    padding: 4px 0;
    text-align: center;
    border: 1px solid $border-dark;
    margin: 10px 10px 10px 0;
    cursor: pointer;
  }
}
.head {
  .title {
    background-color: $bg-nav;
    line-height: 35px;
    overflow: hidden;
    span {
      width: 70px;
      text-align: center;
    }
  }
  .splite {
    line-height: 15px;
    border-right: 1px solid $black;
    width: 1px;
  }
  p {
    margin: 10px 0 20px 0;
    border-bottom: 1px solid $border-dark;
    box-sizing: border-box;
    span {
      display: inline-block;
      line-height: 30px;
      width: 50px;
      text-align: center;
      cursor: pointer;
    }
  }
}
table {
  border: 1px solid $bg-nav;
  th {
    font-weight: bold;
    text-align: center;
    background-color: $bg-nav;
    line-height: 30px;
    .h-100 {
      height: 100px;
      width: 360px;
    }
    .title {
      height: 40px;
      p {
        line-height: 30px;
        font-size: 14px;
        margin-left: 20px;
      }
    }
    .date {
      color: $dark;
      margin: 36px 20px;
    }
  }
  td {
    text-align: center;
    height: 60px;
    // border: 1px solid $border-dark;
    border-bottom: 1px dashed $border-dark;
    p {
      line-height: 30px;
      cursor: pointer;
    }
  }
  img {
    width: 180px;
    height: 100px;
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
