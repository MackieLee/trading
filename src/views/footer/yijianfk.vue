<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;意见反馈</p>
    </div>
  <div class="content">
  	 <font>意见反馈（你的建议就是我们的动力）</font>
  	    <div class="flex">
          <label class="tag tag-width">意见反馈：</label>
          <textarea  placeholder="在这里您可以提出遇到的问题，也可以发表自己的建议和想法" ></textarea>
       </div>
        <div class="flex">
           <div class="tag block"><label for="dianhua">联系方式：</label>
           <input name="dianhua" id="dianhua" placeholder="请输入11位手机号码或电话号码"/></div>
       </div>
		 <input type="submit" class="sub" value="提 交"/>
  </div>
  
  </div>
</template>
<script>
export default {
  name: "odetail",
  data() {
    return {
      showShare: false,
      cur:true,
      cur01:false,
    };
  },
  methods: {
    share: function() {
      this.showShare = !this.showShare;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.about {
  width: $width;
  margin: 0 auto;
  ::-webkit-input-placeholder {
  color:    #aeaeae;
}
:-moz-placeholder {
  color:    #aeaeae;
}
::-moz-placeholder {
  color:    #aeaeae;
}
:-ms-input-placeholder {
  color:    #aeaeae;
}
  .bold-title{
     font-size: 16px;
  }  
  .cur-posi {
    border-bottom: none;padding: 0 0 26px 0;
    i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
    margin-top: 26px;
/*意见反馈*/
.content {
    border: 1px solid $border-orange;
    margin: 18px 0 0 0;
    width: 890px;
    overflow: hidden;
    margin: 0 auto;
    font {
      font-size: 18px;
      color: $red;
      display: block;
      text-align: center;
      margin: 20px 0 30px 0;
    }
   .flex {
    display: flex;
    margin:35px;
    textarea{
      padding: 10px 0;
      min-width: 600px;
      min-height: 200px;
      text-indent: 1em;
      border-color: #ddd;
      outline: none;
    }
     input{
            height: 33px;
            width: 384px;font-size: 12px;
          }
  }

    .sub{
         padding:8px 12px;  margin:20px 0 60px 35%;
        background-color: $red;
        outline: none; border-radius: 3px;
        border: none;
        color: $white;
        cursor: pointer;

      }
     }
   /*意见反馈*/
 }
   
</style>
