<template>
    <!-- stars -->
    <div class="fixed">
      <div class="content">   

        <div class="ctr">
          <!-- 修改为star -->
          <h2>订单评价</h2>
       <div class="da_box"> 
       		<div class="da_box_c">
          		<h3>综合满意度 :</h3>
          		<stars @check = "check" sequence = '5'></stars>
          	</div>
	          <textarea v-model="msg" placeholder="是否给力？快分享你的购买心得吧~"/>
	          <div class="sub-btn">
	            <input type="button" class="submit" @click="submitCommit" value="提 交">
	          </div>
          </div>
        
        </div>
      </div>
    </div>
</template>

<script>
import Stars from "../stars/Stars";
export default {
  data() {
    return {
      score: [],
      msg: "",
      tip: false,
      tipMsg: "请完善你的评论"
    };
  },
  components: {
    Stars
  },
  computed: {},
  props: {},
  methods: {
    //子组件触发父组件事件
    closeModal: function() {
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit("closeModal");
    },
    submitCommit: function() {
      if (this.score.length !== 0 || this.msg !== "") {
        //vue-resource....
        this.$emit("showTip");
      } else {
        this.tip = true;
        setTimeout(() => {
          this.tip = false;
        }, 1500);
      }
    },
    check: function(sequence, score) {
      this.score[sequence] = score;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.tip {
  width:100px;
  height: 60px;
  line-height: 60px;
  background-color: rgba(0, 0, 0, 0.9);
  color: $white;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 36%;
}
.fixed {
  overflow: hidden;
  width: 100%;
}
.content {
  width: 100%;
  height: 380px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .close {
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    background-image: url("../../assets/images/Sprite.png");
    background-position: -522px -126px;
  }
  .ctr {
    h2 {
      background-color: #468ee3;
      border: none;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      color: #fff;
    }
    .da_box {
  
      .da_box_c {
      	 overflow: hidden;
        h3,.stars {float: left; 
        margin: 14px 0;}
        h3 {font-size: 16px;
        margin:10px 20px 10px 0; }
      }   
      padding: 20px;   
      .div_l {
        float: left;
        border-right: 1px solid #eee;
        width: 10%;
        p {
          font-size: 14px;
          line-height: 28px;
          vertical-align: top;
        }
        h3 {
          font-size: 30px;
          font-family: "Microsoft YaHei";
          font-weight: 700;
          color: #468ee3;
        }
      }
    }
    .star {
      margin-bottom: 15px;
      font-size: 14px;
      input {
        margin-left: 15px;
        outline: none;
      }
    }
    textarea {
      resize: none;
      width: 550px;
      height: 120px;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      font-size: 14px;
      border: 1px solid silver;
    }
    .sub-btn {
      .submit {
        text-align: center;
        border-radius: 3px;
        height: 36px;
        cursor: pointer;
        width: 80px;
        line-height: 36px;
        outline: none;
        color: $white;
        background-color: #e7141a;
        margin: 30px 0;
        border: none;
      }
    }
  }
}
</style>
