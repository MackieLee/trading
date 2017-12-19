<template>
  <div class="bind-credit">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;积分商城
      </p>
    </div>
    <div class="content">
      <div class="title">积分兑换商城</div>
      <div class="form-container">
        <ul class="ul01">
          <li>可用积分<br/><span>40</span></li>
          <li>即将过期<br/><span>0</span></li>
        </ul>
        <ul class="goods">
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen01.jpg"/>
              <div>
                <h3>美的电饼铛</h3>
                <h4>安全节能 多种功能</h4>
                <h4>积分<span class="rd">12090</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h3>SKG电烤箱</h3>
                <h4>准确定时 渐进式控温</h4>
                <h4>积分<span class="rd">11250</span></h4>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.bind-credit {
  overflow: hidden;
}
i {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}
.cur-posi {
  border-bottom: none;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.content {
  background-color: $white;
  margin: auto;
  .title {
    height: 40px;
    font-size: 16px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: $bg-blue;
    color: $white;
  }
  .form-container {
    .ul01 {
      margin: 30px 0;
      background: #e5e5e5;
      overflow: hidden;
      width: 100%;
      li {
        font-size: 18px;
        line-height: 40px;
        float: left;
        padding: 15px 0;
        width: 44%;
        text-align: center;
        span {
          font-style: normal;
          margin-top: 10px;
          color: #117cee;
        }
      }
    }
    .goods {
      .rd {
        color: red;
      }
      li {
        float: left;
        width: 200px;
        height: 259px;
        border: 1px solid $border-dark;
        position: relative;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        img {
          width: 140px;
          height: 140px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
