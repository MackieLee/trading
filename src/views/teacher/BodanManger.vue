<template>
  <div class="bodan-manger">
    <div class="modal-outer" v-show="modal">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <modal @closeModal="closeModal('modal')"></modal>
    </div>
    <div class="modal-outer" v-show="modal2">
      <!-- <div class="close">X</div> -->
      <!-- v-bind传输数据到子组件(contentSeries) -->
      <video-upload :contentSeries = "contentSeries" @closeModal="closeModal('modal2')"></video-upload>
    </div>
    <div>
      <div class="clearfix">
        <div class="fl">
          <img src="../../assets/images/huanyuanzx02.png" alt="" />
        </div>
        <div class="fl h-100 top">
          <div class="title">
            <p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p>
          </div>
          <p>简介</p>
          <p class="date">2017-12-5 17:09:51</p>
        </div>
        <div class="fr">
          <p style="color:#4683ee;cursor:pointer" @click="modal2 = true;contentSeries = false">编辑播单信息</p>
        </div>
      </div>
      <ul class="sm-tags">
        <li style="border:none"><input type="checkbox" id="all"><label for="all" style="margin-left:10px">全部</label></li>
        <li @click="modal2 = true;contentSeries = true">添加视频</li>
        <li>移除视频</li>
        <li @click="modal = true">移动到播单</li>
      </ul>
    </div>
    <div class="upload-box">
      <table>
        <tr>
          <th></th>
          <th>附件</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr height="120" v-for="item in items" :key="item.src">
          <td class="ctr" width='50'>
            <input type="checkbox" />
          </td>
          <td width='550'>
            <div class="fl">
              <img src="../../assets/images/video-cover.png" alt="" />
            </div>
            <div class="fl h-100">
              <div class="title">
                <p>{{ item.title }}</p>
              </div>
              <p class="date">2017-12-5 17:09:51</p>
            </div>
          </td>
          <td class="ctr" width='100'>
            {{ item.state }}
          </td>
          <td class="ctr" width='100'>
            <p @click="modal2 = true;contentSeries = false">编辑信息</p>
            <router-link tag="p" :to="{ name:item.link }">管理视频</router-link>
            <p>删除</p>
          </td>
        </tr>
      </table>
    </div>
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
import Modal from '../modal/BodanTransform'
import VideoUpload from '../modal/VideoUpload'
export default {
  components:{ Modal,VideoUpload },
  data() {
    return {
      items: [
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐企业所得税年度纳税申报表中隐藏的稽查陷阱企业所得税",
          date: "2017-12-5 15:00",
          state: "上传完成",
          link: "videomanger"
        },
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          state: "上传完成",
          link: "videomanger"
        },
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          state: "上传完成",
          link: "videomanger"
        }
      ],
      modal: false,
      modal2:false,
      contentSeries:true
    };
  },
  methods: {
    closeModal: function(modal) {
      this[modal] = false;
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
.fl {
  float: left;
}
.fr {
  float: right;
}
.ctr {
  text-align: center;
}
.clearfix {
  overflow: hidden;
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
}
.top {
  margin-left: 10px;
  p {
    line-height: 22px;
  }
}
.sm-tags {
  margin: 15px 0;
  li {
    display: inline-block;
    width: 80px;
    padding: 4px 0;
    text-align: center;
    border: 1px solid $border-dark;
    cursor: pointer;
    margin-right: 5px;
  }
}
table {
  border: 1px solid $bg-nav;
  th {
    font-weight: bold;
    text-align: center;
    background-color: $bg-nav;
    line-height: 30px;
  }
  td {
    text-align: left;
    height: 60px;
    // border: 1px solid $border-dark;
    border-bottom: 1px dashed $border-dark;
    p {
      line-height: 30px;
      cursor: pointer;
    }
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
