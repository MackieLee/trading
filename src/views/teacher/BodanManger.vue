<template>
  <div class="bodan-mager">
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
        <div class="fr">
          <p>编辑播单信息</p>
        </div>
      </div>
      <ul>
        <li></li>
        <li>添加视频</li>
        <li>移除视频</li>
        <li>移动到播单</li>
        <li>删除</li>
      </ul>
    </div>
    <div class="head">
      <div class="title"><span class="fl">视频</span><span class="fr">视频上传</span></div>
    </div>
    <div class="upload-box">
      <table>
        <tr height="120" v-for="item in items" :key="item.src">
          <td width='50'>
            <input type="checkbox" />
          </td>
          <th width='550'>
            <div class="fl">
              <img src="../../assets/images/huanyuanzx02.png" alt="" />
            </div>
            <div class="fl h-100">
              <div class="title">
                <p>{{ item.title }}</p>
              </div>
              <p class="date">2017-12-5 17:09:51</p>
            </div>
          </th>
          <td width='100'>
            {{ item.state }}
          </td>
          <td width='100'>
            <p>添加视频</p>
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
export default {
  data() {
    return {
      items: [
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐企业所得税年度纳税申报表中隐藏的稽查陷阱企业所得税",
          date: "2017-12-5 15:00",
          state:"上传完成",
          link: "videomanger"
        },
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          state:"上传完成",
          link: "videomanger"
        },
        {
          src: "",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          state:"上传完成",
          link: "videomanger"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.active {
  border-bottom: 1px solid $red;
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
.upload-box {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  padding: 10px;

  table {
    th,
    td {
      height: 60px;
      // border: 1px solid $border-dark;
      border-bottom: 1px dashed $border-dark;
    }
    th {
      font-weight: bold;
      text-align: left;
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
      p {
        line-height: 30px;
        cursor: pointer;
      }
    }
    img {
      width: 180px;
      height: 96px;
    }
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
