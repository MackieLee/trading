 <template>
  <div class="about">

  <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2 class="title"><i></i>答疑说明</h2> 
        <div class="bofang">    
          <P>
          	<div> <h3>答疑说明</h3></div>
		            <font>本网站支持每个会员向专家提问。</font>
		            <font><img src="../../assets/images/dayms.png"></font>
		      </P>
		      <P>
		      <div><h3>在线提问</h3></div>
		      <font>1、</font>登录网站首页，点击登录按钮，在登录页面键入您的会员账号、密码及验证码后。<br>
          <font>2、</font>如未注册，先注册，填写个人信息后，同意协议，提交完成注册。<br>
		      <font>3、</font>登录网站，进入问答页面，点击我要提问或进入专家个人详情页面，都可提问。 <br>
		      <font>4、</font>点击“我要提问”，描述你的问题，可选择“指定老师回答”和勾选“超过24h自动转为专家团”回答。 <br>
          <font>5、</font>指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待。<br>
          <font>6、</font>描述完点击提交即可，你的问题会在第一时间得到解答。<br>
          <font>7、</font> 提问成功后，系统会提示您“提交成功”。<br>
          <font>8、</font> 提交成功后，可在会员中心——我的问答,查看提交的问题,也能查看老师给您的回复，点击“查看更多”，
          		即可查看该知识点下的全部答疑内容；如未解决您的问题，您也可以拨打官方电话咨询010-6231-1360。
         </P>

        </div>
     
      </div>
    </div>
  
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.about {
  width:890px;
  margin: 0 auto;
  .bold-title{
     font-size: 16px;
  }
  .cur-posi {
    border-bottom: none;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
/*答疑说明*/
#xxkc_xq02 {
  width: 100%;
  height: auto;
  overflow: hidden;
  // .xq02_r {
  //   width: 45%;
  //   float: right;
  // }
  // .xq02_l {
  //   width: 100%;
  //   float: left;
  // }
  h2 {
  	 width: 686px;
      background-image: url('../../assets/images/about01.png');
      text-align: center;
      background-repeat: no-repeat;
      margin: 26px auto;
      font-size:18px;
      background-position: 0 5px;
        i {
	    display: inline-block;
	    width: 26px;
	    height: 22px;
	    background-image: url('../../assets/images/Sprite.png');
	    vertical-align: text-bottom;
	    background-position: -143px -228px;
	    margin-right: 10px;
 			  }
 	 	}
  .txt {
    padding-top: 20px;
    text-indent: 2em;
  }
  .bofang{
    margin-top: 15px;
		   div{ 
      	margin: 5px 0; 
      	h3{     	 
		  	padding:0px 20px;
		    background: red;
		    text-align: center;
		    color: #fff;
		    display: inline-block;
		    line-height: 32px;
		    font-size: 16px;
		    height: 32px;	   
		    border-radius: 3px;   
		    }
      }		 
		    p {
			 overflow: hidden;
		   width:100%; 
		   line-height: 32px;
		    font-size: 14px;
		    color: #333;
		    font{
		    	margin-left: 10px;
		    	img{width: 90%;}
		    }
		  }
  }
}
   
      }
   
</style>
