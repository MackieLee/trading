<template>
  <div class="bodan-mager">
    <!-- 添加文档 -->
    <Modal v-model="modal" :width="700" :mask-closable="false" :closable="false">
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
        <span @click="cur = 'shiti'" :class="{'red': cur === 'shiti'}">试题管理</span>
        <span class="splite">&nbsp;</span>
        <span @click="cur = 'kejian'" :class="{'red': cur === 'kejian'}">课件管理</span>
      </p>
    </div>
    <table v-show=" cur === 'shiti'">
      <tr>
        <th></th>
        <th>附件</th>
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
          <p @click="modal3=true">编辑信息</p>
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
          <p>编辑信息</p>
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
          <p>编辑信息</p>
        </td>
      </tr>
    </table>
    <table v-show="cur === 'kejian'">
      <tr>
        <th></th>
        <th>附件</th>
        <th>操作</th>
      </tr>
      <tr>
        <td width="50"><input type="checkbox" value="all" /></td>
        <td class="left" width="550">
          <p>模块一:2017智能征管时代下汇算清缴主要风险点处理</p>
          <p>(一)在企业财务上未反映的“视同销售”，而在汇算清缴被忽略不计。</p>
        </td>
        <td width="100">
          <p @click="modal2 = true">编辑信息</p>
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
          <p>编辑信息</p>
        </td>
      </tr>
    </table>
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
      cur: "shiti",
      modal: false,
      modal1:false,
      modal2:false,
      modal3:false
    }
  },
  methods: {
    submit:function(){
      let doc = this.$refs.doc
      let value = doc.value
      let title = doc.title
      let min = doc.min
      let sec = doc.sec
      if(name!==''&& intro!==''){
        let res = loginUserUrl(
          "getOnline_Courses_chapterAdd",{
            username: "niuhongda",
            password: "123123q",
            cid:'',//章节id
            name:title,
            min:min,
            sec:sec,
            value:value
          }).then((res)=>{
          if(res.error_code === 0){
            // console.log(res.data)
            this.handleReset()
            this.$Message.success('提交')
          }else{
            this.$Message.error('提交失败')
          }
        })
      }else{
        this.$message.error('提交失败')
      }
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
