<template>
  <div class="video-list">
    <div class="upload-box">
      <div class="head">
        <div class="title"><span class="lf">视频</span><span class="rt">视频上传</span></div>
      </div>
      <ul>
        <li v-for="item in items" :key="item.src" :class="item.last">
          <div class="abs">
            <img src="../../assets/images/huanyuanzx02.png" alt="" />
            <span class="length">{{ item.length }}</span>
          </div>
          <p class="video-title">{{ item.title }}</p>
          <span class="date">{{ item.date }}</span>
        </li>
      </ul>
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
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: "last"
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: ""
        },
        {
          src: "",
          length: "01:05",
          title: "企业所得税年度纳税申报表中隐藏的稽查陷阱",
          date: "2017-12-5 15:00",
          last: "last"
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
.upload-box {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  .head {
    .lf {
      float: left;
    }
    .rt {
      float: right;
    }
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
  ul {
    padding: 10px 20px; overflow: hidden;
    li {
      width: 180px;float: left;
      border-bottom: 1px dashed $border-dark;
      margin-bottom: 15px;
      padding-right: 15px;
    }
    .last {
      padding: 0;
    }
    .abs {
      position: relative;
      img {
        display: block;
        width: 180px;
        height: 96px;
      }
      .length {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 40px;
        height: 17px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 3px;
        text-align: center;
        color: $white;
      }
    }
    p {
      font-size: 14px;height: 40px; 
      line-height: 30px;
      margin-top: 15px;
    }
    .date {
      color: $dark;
      margin: 15px 0;
      display: inline-block;
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
