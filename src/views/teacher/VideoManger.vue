<template>
  <div class="bodan-mager">
    <!-- 添加文档 -->
    <Modal v-model="modal" :width="700" :mask-closable="false" :closable="false">
      <div slot="header" style="color:#478EE1;text-align:center;">
        <Icon type="bookmark" size="22" style="margin-right:10px"></Icon><span style="line-height:22px;font-size:16px;font-weight:bold;">课件</span>
      </div>
      <doc ref="doc"></doc>
      <div slot="footer">
        <Button type="primary" style="margin-right:10px;" @click="submit">确定</Button>
        <Button type="ghost" @click="handleReset">取消</Button>
      </div>
    </Modal>
    <!-- 添加试题 -->
    <Modal v-model="modal1" :width="700" :mask-closable="false" :closable="false">
      <exam ref="exam"></exam>
    </Modal>
    <Modal v-model="modal2" :width="700" :closable="false">
      <!-- 获取当前这一段文档 -->
    </Modal>
    <Modal v-model="modal3" :width="700" :closable="false">
      <!-- 获取当前这一道题目 -->
    </Modal>
    <div>
      <div class="clearfix">
        <div class="fl">
          <img src="../../assets/images/huanyuanzx02.png" alt="" />
        </div>
        <div class="fl h-100">
          <div class="title">
            <p>企业所得税年度纳税申报表中隐藏的稽查陷阱</p>
          </div>
          <p>播单：土地增值税</p>
          <p class="date">SHICHANG</p>
        </div>
      </div>
      <ul class="sm-tags">
        <li style="border:none"><input type="checkbox" id="all"><label for="all" style="margin-left:10px">全部</label></li>
        <li @click="modal = true">添加课件</li>
        <li @click="modal1 = true">添加试题</li>
      </ul>
    </div>
    <div class="head">
      <p>
        <span @click="kejian = false" :class="{'red': !kejian }">试题管理</span>
        <span class="splite">&nbsp;</span>
        <span @click="kejian = true" :class="{'red': kejian }">课件管理</span>
      </p>
    </div>
    <router-view></router-view>
    <div style="display:flex;justify-content:center;margin:80px 0 30px 0;">
      <Page :page-size="20" show-elevator show-total></Page>
    </div>
  </div>
</template>

<script>
import exam from "../modal/Exam"
import doc from "../modal/Doc"
import { loginUserUrl } from "@/api/api"
import { getCookie } from "@/util/cookie"
export default {
  components: { exam,doc },
  data() {
    return {
      kejian:false,
      modal: false,
      modal1:false,
      modal2:false,
      modal3:false
    }
  },
  methods: {
    submit:function(){
      let doc = this.$refs.doc
      let str = JSON.stringify(doc.docs)
      console.log(str.__proto__)
        let res = loginUserUrl(
          "getOnline_Courses_chapterAdd",{
            username: "niuhongda",
            password: "123123q",
            cid:800,//章节id
            info:str
          }).then((res)=>{
            console.log(res)
          // if(res.error_code === 0){
          //   this.handleReset()
          //   this.$Message.success('提交')
          // }else{
          //   this.$Message.error('提交失败')
          // }
        })
    },
    handleReset:function(){
      // this.$refs.faqModal.handleReset()
      this.modal=false
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
</style>
