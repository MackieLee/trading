<template>
  <div class="pingjia">
  	<div class="cur-posi lf">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;线上课程</p>
    </div>
    <!-- 修改为star -->
    <h2>课程评分</h2>
    <div class="div-head">
      <div class="div1">
        <p class="p">课程评分</p>
        <h3>5.0</h3>
      </div>
      <div class="div2">
        <ul>
          <li>
            <p class="p">课程设置是否合理</p>
            <Rate allow-half v-model="zhunque"></Rate>
          </li>
          <li>
            <p class="p">政策更新是否及时</p>
            <Rate allow-half v-model="wanzheng"></Rate>
          </li>
          <li>
            <p class="p">课程是否实用</p>
            <Rate allow-half v-model="shiyong"></Rate>
          </li>
          <li>
            <p class="p">老师的授课水平</p>
            <Rate allow-half v-model="zhengce"></Rate>
          </li>
          <li>
            <p class="p">老师的专业程度</p>
            <Rate allow-half v-model="youyong"></Rate>
          </li>
        </ul>
      </div>
    </div>
    <div class="div3">
      <h3>综合满意度 :</h3>
      <Rate allow-half v-model="zonghe"></Rate>
    </div>
    <Input v-model="textarea" type="textarea" :rows="6" placeholder="这么善良的您，夸夸我吧..."></Input>
		<div class="footer">
	    <Button type="ghost"  class="qux">取消</Button>
	    <Button type="primary" class="tij" @click="sub">提交</Button>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhunque:0,
      wanzheng:0,
      shiyong:0,
      zhengce: 0,
      youyong:0,
      zonghe:0,
      textarea: ''
    }
  },
  methods: {
    sub(){
      let res = loginUserUrl("getOnline_Courses_Grade", {
          username: "niuhongda",
          password: "123123q",
          reasonable:this.zhunque,
          renewal:this.wanzheng,
          practical:this.shiyong,
          standard:this.zhengce,
          specialty:youyong,
          uid:this.getCookie('u_name'),
          cid:this.$route.query.id
        })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.pingjia {
	width: 1090px;
	 margin: 10px auto;
	 .footer{
	width:310px;
	.tij,.qux{
   width:120px;
   margin:30px 15px;
		}
	}
	i {
  display: inline-block;
  width: 20px;
  height: 22px;
  background-image: url("../../assets/images/Sprite.png");
  vertical-align: text-bottom;
}
.cur-posi {
  padding: 0 0 26px 0;
  width: 100%;
  i {
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
  h2 {
    background-color: #468ee3;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .div-head{
    overflow: hidden;
    margin:20px 0;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    .div1,.div2{
      float: left;
      overflow: hidden;
    }
    .div1{
      border-right:1px solid #eee;
      padding-right: 10px;
      margin-right: 10px;
      h3{
        font-size: 30px;
        font-weight: 700;
        color:$blue;
      }
    }
    .div2 li{
      float:left;
      margin-right: 20px;
      p{
        border: 1px solid #eee;
        padding: 5px;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
  .div3{
    overflow: hidden;
    h3,.ivu-rate{
      float: left;
    }
    h3{
      line-height: 30px;
      margin-right: 10px;
    }
    margin-bottom: 20px;
  }
}
</style>
