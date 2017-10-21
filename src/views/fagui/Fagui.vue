<template>
  <div class="fagui">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>
        &nbsp;&gt;&nbsp;新法规
      </p>
    </div>
    <div class="main-title">
      税收政策
    </div>
    <div class="th">
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="xuhao ctr">序号</td>
            <td class="biaoti">标题</td>
            <td class="fahao ctr">文号发文</td>
            <td class="riqi ctr">日期</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="td">
      <table cellspacing="0" cellpadding="0">
        <tbody>
          <router-link tag="tr" :to="{ name:'fdetail'}">
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr red">1</td>
            <td class="biaoti pointer red">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr red">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr red">2017-09-07</td>
          </router-link>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr red">1</td>
            <td class="biaoti pointer red">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr red">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr red">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr red">1</td>
            <td class="biaoti pointer red">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr red">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr red">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知
              <i class="jingxuan"></i>
            </td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
          <tr>
            <!-- ！！！重要 不同类不同逻辑动态添加 -->
            <td class="xuhao pointer ctr">1</td>
            <td class="biaoti pointer">关于建立税务机关、涉税专业服务社会组织及其行业协会和纳税人三方沟通机制的通知</td>
            <td class="fahao pointer ctr">税总发〔2017〕102号</td>
            <td class="riqi pointer ctr">2017-09-07</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div data-v-56d5da29="" class="pgs">
      <li data-v-56d5da29="" class="prev">&lt;上一页</li>
      <li data-v-56d5da29="" class="current ">1</li>
      <li data-v-56d5da29="" class="custom">2</li>
      <li data-v-56d5da29="" class="custom">3</li>
      <li data-v-56d5da29="" class="custom">4</li>
      <li data-v-56d5da29="" class="custom">...</li>
      <li data-v-56d5da29="" class="jump"><input /> /40页</li>
      <li data-v-56d5da29="" class="next">下一页&gt;</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "fagui"
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.fagui {
  width: $width;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
  border-top: 1px solid #fdddbc;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
    background-position: 0px 30px;
    margin-right: 11px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -56px -82px;
      margin-right: 6px;
    }
  }
  .main-title {
    line-height: 70px;
    font-size: 18px;
    color: $red;
    text-align: center;
  }
  .ctr {
    text-align: center;
  }
  .xuhao {
    width: 80px;
  }
  .fahao {
    width: 170px;
  }
  .riqi {
    width: 150px;
  }
  .red {
    color: $red;
  }
  .pointer {
    cursor: pointer;
  }
  .th {
    height: 42px;
    font-weight: bold;
    background-color: #4d9999;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    table {
      table-layout: fixed;
      border-collapse: separate;
      width: 100%;
      td {
        display: table-cell;
        line-height: 42px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .td {
    font-weight: bold;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom: none;
    table {
      table-layout: fixed;
      border-collapse: separate;
      width: 100%;
      td {
        border-bottom: 1px dashed #ccc;
        display: table-cell;
        line-height: 42px;
        font-size: 14px;
      }
    }
  }
  .pgs {
  width: 528px;
  margin: 70px auto 70px auto;
  li {
    width: 33px;
    padding: 4px 0;
    line-height: 20px;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    border: 1px solid transparent;
    color:#fff;
  }
  .custom{
    background-color: #4d9999;
  }
  .prev {
    width: 73px;
    border: 1px solid #4d9999;
    color: #333;
  }
  .next {
    width: 96px;
    border: 1px solid #4d9999;
    color: #333;
  }
  .jump {
    width: 70px;
    border: 1px solid #4d9999;
    color: #333;
    input{
      width:30px;
      border: 1px solid #4d9999;
      outline: none;
    }
  }
  .current {
    background-color: $red;
    color: $white;
  }
}
}
</style>
