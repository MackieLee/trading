<template>
  <div class="bind-credit">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税&nbsp;&gt;</router-link>&nbsp;积分商城
      </p>
    </div>
    <div class="content">
      <div class="title">
        <p>积分兑换商城</p>
        <input type="text" placeholder="请输入您要搜索的商品"  class="txt"/>
       <input type="button" class="btn" value="搜一下"/>
      </div>
      <div class="form-container">
        <ul class="ul01">
          <li>                   
            <a class="a">积分区间</a>
            <a >0-999积分</a>
            <a >1000-1999积分</a>
            <a >2000-2999积分</a>
            <a >3000-3999积分</a>
            <a >4000-4999积分</a>
            <a >5000积分以上</a>
          </li>
        </ul>
        <ul class="sorts">
            <li class="sorts-items" data-name="sorts" @click="getItem(item)" :class="{ 'active':s === item}" v-for="item in sorts" :key="item">{{ item }}</li>
         </ul>
        <ul class="goods">
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
         <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>         
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
         <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
         <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link> 
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
         <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
          <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>
         <router-link tag="li" :to="{ name :'jfitem'}">
            <a>
              <img src="../../assets/images/jifen02.jpg"/>
              <div>
                <h4>DP久量可折叠LED护眼台灯685</h4>
                <h4><span class="rd">11250</span>积分</h4>
              </div>
            </a>
          </router-link>          
        </ul>
      </div>
      <!-- 触发子组件的数据刷新，传递页码给子组件 -->
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
  </div>
</template>

<script>
import OnlineCourses from './jifenmall'
export default {
  name: 'jifenmall',
  components:{ OnlineCourses },
  data() {
    return {
      sorts: ['综合', '最新', '销量', '我能兑换'],
      current: 1,
      i: '',
      t: '',
      l: '',
      e: '',
      s: '',
      f: ''
    }
  },


}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.bind-credit {
  overflow: hidden;width: 1090px; margin: 0 auto ;
}
i {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}
.cur-posi {
  border-bottom: none;margin: 20px 0 ;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.content {
  background-color: $white;
  margin: auto;
  .title{
    height: 34px;width: 100%; overflow: hidden;   
    p{text-align: center; font-size: 14px;
    line-height: 34px; height: 34px;   width: 200px; 
    background-color: $bg-blue;float: left; margin: 0 30px 0 10px;
    color: $white;
    }
    .txt{ width: 500px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #ff7f00;
    outline: none;
    padding-left: 10px;
    margin-left: 10px;}
    .btn{height: 34px;
    line-height: 34px;
    border: none;
    background-color: #ff7f00;
    width: 100px;
    color: #fff;}
   
  }
  .form-container {
   .sorts{height: 36px;margin-bottom: 10px;
     border-bottom: 1px solid #ff7f00;
     li:hover{color: red;}
    li{ line-height: 36px;
   margin: 0 12px;
    cursor: pointer;
    font-size: 14px;
    color: #005aa0;
    }
    }
    .ul01{ margin-top: 20px; height: 34px;
    border: solid 1px #dbdbdb;
      overflow: hidden;
      width: 1088px;
      li {
        height: 34px;
       .a{color: #000;}
        a{ float:left; padding:0px 15px;cursor: pointer;
        text-align: center;height: 34px; line-height: 34px;
        }
      }
    }
    .goods {overflow: hidden;
      li {
        float: left;
        width: 200px;
        height: 225px; margin:8px 8px;
        border: 1px solid $border-dark;
        position: relative;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        h4{ margin:8px 0;}
        .rd {
        color: red;font-size: 20px;margin-right: 5px;
    font-weight: bold;
      }
        img {
          width: 140px;
          height: 140px;
        }
      }
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
