<template>
  <div class="faq-box">
  	<div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/Faq">问答</router-link>
        &nbsp;&gt;&nbsp;税收类别
      </p>
   </div>
    <div class="container">
    <div class="title">
    	<!--切换-->
      <div class="vertical-menu" style="float:left">
        <Menu :theme="theme3" @on-select="toggle($event)" active-name= '0' >
          <MenuGroup title="答疑税收类别">
            <MenuItem v-for="(item,index) in items" :key="item.id" :name="index">
              {{ item.name }}
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
	<!--切换-->
			<div class="box_xiansi">
				<div v-for="(item,index) in items" :key="item.id" class="xiansi" v-if="nameId === parseInt(index)">
					<h3>{{ item.name }}</h3>
					<ul>
						<li><i></i>企业的哪些支出，可以作为长期待摊费以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以以作为长期待摊费作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以作待摊费以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可，可以作为长以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
						</li>
						<li><i></i>企业的哪些支出，可，可以作为长以作为长期待摊费用，在计算应纳税所得额进行扣除？
						    <span class="time">2017-12-22</span>
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
    </div>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from "@/api/api"
export default {
  data() {
    return {
    	theme3: 'light',
      newAnsr:[],
      data:'',
      items:{},
      nameId:0
    }
  },
  methods: {
		toggle(ev){
      console.log(ev)
			this.nameId = parseInt(ev)
		}
  },
  created () {
    let classify = loginUserUrl('getlaws_classify',{
      username: "niuhongda",
      password: "123123q"
    }).then((classify)=>{
      console.log(classify)
      this.items = classify.data
    })
  },
  mounted () {
    let res = loginUserUrl(
      "getQuestions_list",
      {
        username: "niuhongda",
        password: "123123q"
      }
    ).then((res)=>{
      if(res === '暂无数据'){
        this.data = res
      }else{
        this.newAnsr = res.data
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.faq-box {
	width: $width;
  margin: 0 auto;
  padding-top: 20px;
   i {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("../../assets/images/Sprite.png");
    vertical-align: text-bottom;
  }
   .cur-posi {
    padding: 0 0 26px 0;
    i {
      background-position: -18px -100px;
      margin-right: 6px;
    }
  }
  .container {
    width: 1090px;
    margin: 0 auto;
    overflow: hidden;
   .title{
    width: $width;
    overflow: hidden;
    margin: auto;
    padding-bottom: 10px;
    .vertical-menu{
      border-left: 1px solid #657180;
      li{
        display: list-item !important;
      }
      .ivu-menu-vertical{
        width: 150px !important;
      }
    }
    .box_xiansi{
    	width: 900px;
    	float: left;
    	margin-left: 20px;
    .xiansi{
   	 width: 900px;
   	 overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 570px;
   	h3{ line-height: 1.6em;
    color: #3188d8;
    font-size: 1.375em;
    font-weight: 300;
    padding-left: 8px;
    padding-right: 8px;
    float: left;
    position: relative;
    margin:0 0 10px 0;
    border-bottom: solid #3188d8 2px;
    padding:6px;
    bottom: -2px;
    }
    ul{padding-top: 20px;
    border: solid #ddd 1px;
    height: 570px;
	    li{line-height:38px;
	    height: 38px;
	    width: 100%;
	    float: left;
	     font-size: 14px;
	    position: relative;
	    overflow: hidden;
	    padding-left: 24px;
	    margin-bottom: 5px;
	    i{ position: absolute;
		    z-index: 10;
		    top:18px;
		    left:12px;
		     height:3px;
	       width: 3px;
	       background: #222;
		    white-space: nowrap;
	    	}
		    span{ position: absolute;
		    z-index: 10;
		    top: 0px;
		    right:20px;
		    text-align: center;
		    font-size: 13px;
		    padding-left: 10px;
		    white-space: nowrap;
	    	}
	    }
    }
   }
    	.pgs{ height: 50px; margin: 25px auto 0; margin-left: 22%;
		    li {
		      width: 33px;
		      padding: 4px 0;
		      line-height: 30px;height: 36px;
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

    }

  }
    .floor {
      overflow: hidden;
      .item {
        margin-bottom: 20px;
        padding-right: 20px;
        width: 100%; float: left;
        .item-container {
          float: left;
          color: $black;
          font-size: 12px;
          line-height: 35px;
          width: 100%;
          .wen {
          color: $red;
          font-size: 16px;
          float: left;
        }
          .ask {
            margin-bottom: 10px;
            .date_rt{
            	float: right;
            }
            .more {
          text-align: right;
          color: $blue;
          cursor: pointer;
          font-size: 12px;
          margin-left: 10px;
       				 }
          }
        }

      }
    }
  }
}
</style>
