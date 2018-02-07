<template>
  <div class="about">
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
  <div class="bdsharebuttonbox">
		<a href="#" class="bds_more" data-cmd="more"></a>
		<a href="#" class="bds_weixin"
		 data-cmd="weixin" title="分享到微信"></a>
		 <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
		 	<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
		 	<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
		 	<a href="#" class="bds_bdxc" data-cmd="bdxc" title="分享到百度相册"></a>
  </div>
  </div>
</template>
<script>
window._bd_share_config={"common":{"bdSnsKey":{},
"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},
"share":{},"image":{"viewList":["weixin","sqq","tsina","qzone","bdxc"],"viewText":"分享到：",
"viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["weixin","sqq",
"tsina","qzone","bdxc"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(
	createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=
	89860593.js?cdnversion='+~(-new Date()/36e5)];
</script>
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
  width:890px;
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
    /*分享*/
    .bdsharebuttonbox{
    	width: 200px;height: 50px;
    	a{height: 30px;width: 30px; float: left;}
    }
    
     /*分享*/
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
