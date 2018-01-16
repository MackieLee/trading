<template>
  <div class="about">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;法律协议</p>
    </div>
  <div id="xxkc_xq02">
      <div class="xq02_l">
        <h2>
          <!-- .............................. -->
          <span @click="cur = true" :class="{'cur-active' : cur}">版权声明</span>
          <span @click="cur = false" :class="{'cur-active' : !cur}">服务条款</span>
        </h2>
        <div v-if="cur">
          <P>
1.转载或引用本网中的署名文章用于商业行为的，请按规定向作者支付稿酬。<br>

2.对不遵守本声明或其他违法、恶意使用本网内容者，本网将依法追究其法律责任的权利。本网授权版权律师负责处理本网的一切版权事务。<br>

3.本版权声明的解释权归九鼎财税。<br>
<a href="###" class="a">查看更多>></a>
          </P>

        </div>
        <div v-else class="xq02_r">
			    <P>衷心感谢您关注和支持九鼎财税，如果您需要转载视频、资料、新 
			      	闻与资讯等内容信息,请仔细阅读本版权声明：<br>
			1.九鼎财税对所提供的教学视频、教学成果、服务及本服务所使用的软件、资料、源代码等均受知识产权法或其他
			法律保护的资料享有相应的权利，包括但不限于受到著作权法及其实施细则、商标法及其实施细则、专利法及其实施
			细则或其他法律的保护。<br>
			
			2.本网（www.jdtax.cn）提供的内容，九鼎财税拥有版权或有权使用，包括但不限于全部的视频文件、文字、图像、声音文件
			、源代码、网站设计等。未经九鼎财税授权许可，用户不得进行传播（包括转载、转贴等）、修改、
			出租、散布或演绎衍生其他作品，任何组织或个人不得复制或在非九鼎财税所属的服务器上做镜像。<br>
			
			3.九鼎财税VI标识、设计以及产品及服务名称等，均为九鼎财税所享有，只用于九鼎财税及经许可的授权合作机构
			。非经授权，任何人不得使用、复制或作其他用途。<br>
			
			4.与为用户提供评论和提问等服务时，对于本版内用户所发布的内容所引发的有关版权、
			著作权等知识产权的异议、纠纷及诉讼不承担任何责任。提交者发言纯属个人行为，与立场无关。<br>
			
			<a href="###" class="a">查看更多>></a>
			      </P>

        </div>
      </div>
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
    margin-top: 26px;
/*课程目录有简介*/
#xxkc_xq02 {
  width: 100%;
  height: auto;
  margin-top: 20px;
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
    width: 100%;
    height: 32px;
    margin-bottom: 15px;
    border-bottom: 1px solid $red;
    span {
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      font-weight: normal;
      font-size: 14px;
      cursor: pointer;
    }
    .cur-active{
      background-color: $red;
      color: $white;
    }
  }
  .txt {
    padding-top: 20px;
    text-indent: 2em;
  }
  p {
    line-height: 36px;
 overflow: hidden;
   width:100%; line-height: 32px;
    font-size: 14px;
    padding: 15px 18px 20px;
    border: 1px solid #fbc081;
    margin:15px 0;
    color: #656565;
    .a{color: #117cee;float: right;}


  }
}
   
      }
   
</style>
