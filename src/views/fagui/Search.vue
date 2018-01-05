<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;法规查询</p>
    </div>
    <div class="container">
      <!-- 模块一 -->
      <div class="global-overview-left lf">
        <div class="titcon">
          <h2 class="ctr">最新文件</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <dl>
            <dd>
              <router-link :to="{ name : 'fdetail'}" class="newtitle">
                上海市国家税务局、上海市地方税务局内设机构（部门）主要职能
              </router-link>
              <span class="date">2017-07-03</span>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市国家税务局、上海市地方税务局领导专栏
                </span>
                <span class="date">2017-06-28</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市税务系统机构一览
                </span>
                <span class="date">2016-09-02</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市税务系统执法主体
                </span>
                <span class="date">2016-03-31</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                上海市地方税务局主要职责内设机构和人员编制规定
                </span>
                <span class="date">2015-08-14</span>
              </a>
            </dd>
            <dd>
              <span class="newtitle">
                上海市国家税务局、上海市地方税务局内设机构（部门）主要职能
              </span>
              <span class="date">2017-07-03</span>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市国家税务局、上海市地方税务局领导专栏
                </span>
                <span class="date">2017-06-28</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市税务系统机构一览
                </span>
                <span class="date">2016-09-02</span>
              </a>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 模块二 -->
      <div class="global-overview-left rt">
        <div class="titcon">
          <span @click="center = true" :class="{ 'tab-cur': center }">中央法规</span>
          <span @click="center = false" :class="{ 'tab-cur': !center }">地方法规</span>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <dl v-if="center" class="search">
            <dd>
              <label>标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题</label><input/>
            </dd>
            <dd>
              <label>字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label><input/>
            </dd>
            <dd>
              <label>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度</label><input/>
            </dd>
            <dd>
              <label>发文单位</label><input/>
            </dd>
            <dd>
              <label>发文日期</label><input class="input-sm" type="text" />
              <label class="lb-md">至</label><input class="input-sm" type="text" />
            </dd>
            <dd>
              <div class="btn-items top-30">
                <router-link :to="{ name : 'fagui'}" tag='input' type="button" class="search-btn" value="检      索" />
                </router-link>
                <input type="button" class="reset" value="重     置" />
        
              
              </div>
            </dd>
          </dl>
          <dl v-else class="search">
            <dd class="clearfix">
              <label class="lf">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区</label>
              <select class="lf">
                <option></option>
              </select>
            </dd>
            <dd>
              <label>标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题</label><input/>
            </dd>
            <dd>
              <label>字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label><input/>
            </dd>
            <dd>
              <label>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度</label><input/>
            </dd>
            <dd>
              <label>发文单位</label><input/>
            </dd>
            <dd>
              <label>发文日期</label><input class="input-sm" type="text" />
              <label class="lb-md">至</label><input class="input-sm" type="text" />
            </dd>
            <dd>
              <div class="btn-items">
              	<router-link :to="{ name : 'fagui'}" tag='input' type="button" class="search-btn" value="检      索" />
               </router-link>
                <input type="button" class="reset" value="重     置" />
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 模块三 -->
      <div class="global-overview-left second-line lf">
        <div class="titcon">
          <h2 class="ctr">政策解读</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <dl>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市国家税务局、上海市地方税务局内设机构（部门）主要职能
                </span>
                <span class="date">2017-07-03</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市国家税务局、上海市地方税务局领导专栏
                </span>
                <span class="date">2017-06-28</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市税务系统机构一览
                </span>
                <span class="date">2016-09-02</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市税务系统执法主体
                </span>
                <span class="date">2016-03-31</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市地方税务局主要职责内设机构和人员编制规定
                </span>
                <span class="date">2015-08-14</span>
              </a>
            </dd>
            <dd>
              <a target="_blank">
                <span class="newtitle">
                  上海市地方税务局主要职责内设机构和人员编制规定
                </span>
                <span class="date">2015-08-14</span>
              </a>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 模块四 -->
      <div class="global-overview-left second-line rt">
        <div class="titcon">
          <h2 class="ctr">税收类别</h2>
        </div>
        <div class="clearfix"></div>
        <div class="content">
          <ul class="policy">
            <li>
              <span class="num"></span>
              <a target="_BLANK">税收征收管理</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">纳税服务</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">增值税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">消费税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">营业税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">企业所得税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">个人所得税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">进出口税收</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">车船税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">资源税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">城镇土地使用税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">耕地占用税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">土地增值税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">房产税</a>
            </li>
            <li>
              <span class="num"></span>
              <a>印花税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">契税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">车辆购置税</a>
            </li>
            <li>
              <span class="num"></span>
              <a target="_BLANK">综合税收政策</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fsearch",
  data() {
    return {
      center: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.about {
  width: $width;
  margin: 0 auto;
  padding-top: 20px;
  // border-top: 1px solid $border-rice;
  .green {
    color: green;
  }
  .red {
    color: $red;
  }
  .clearfix {
    overflow: hidden;
  }
  .ctr {
    text-align: center;
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
    background-position: 0px 30px;
    margin-right: 11px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .container {
    overflow: hidden;
    font-size: 14px;
    line-height: 30px;
    margin-top: 35px;
    position: relative;
    .global-overview-left {
      width: 528px;
      margin-bottom: 35px;
      .titcon {
        background-color: $bg-blue;
        position: relative;
        height: 44px;
        h2 {
          font-size: 16px;
          padding: 10px 0;
          margin-left: 40px;
          color: $white;
        }
        span {
          line-height: 44px;
          padding: 10px 10px 15px 10px;
          color: $white;
          margin-left: 3px;
          cursor: pointer;
        }
        .tab-cur {
          background-color: $white;
          color: $black;
        }
      }
      .content {
        border: 1px solid $border-dark;
        border-top: none;
        height: 342px;
        dd {
          position: relative;
          padding: 10px 5px 4px 15px;
          .newtitle {
            display: inline-block;
            color: #333;
            font-size: 14px;
            width: 100%;
            height: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .date {
            position: absolute;
            right: 12px;
            top: 10px;
            color: $dark;
            font-size: 14px;
          }
        }
        select {
          width: 98px;
          height: 28px;
          margin-right: 14px;
          outline: none;
          border: 1px solid $border-blue;
          display: inline-block;
        }
        .policy {
          height: 240px;
          padding: 4px 15px;
          li {
            float: left;
            font-size: 14px;
            text-align: left;
            width: 33%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 38px;
            .num {
              display: inline-block;
              width: 6px;
              margin-right: 5px;
              height: 6px;
              // background: linear-gradient(#fdb483, #ff84f3)
              background-color: $bg-blue;
            }
          }
        }
        .search {
          width: 400px;
          margin: 0 auto;
          padding-top: 20px;
          label {
            margin-right: 20px;
            font-size: 14px;
          }
          input {
            width: 296px;
            height: 26px;
            line-height: 26px;
            outline: none;
            border: 1px solid $border-blue;
          }
          input[class="input-sm"] {
            width: 121px;
          }
          label[class="lb-md"] {
            margin: 0 17px;
          }
          .top-30{
            margin-top: 30px;
          }
          .btn-items {
            width: 373px;
            display: flex;
            justify-content: space-between;
            input {
              width: 176px;
              height: 40px;
              text-align: center;
              background-color: $btn-default;
              color: $white;
              font-size: 14px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .second-line {
      .content {
        height: 235px;
      }
    }
  }
}
</style>
