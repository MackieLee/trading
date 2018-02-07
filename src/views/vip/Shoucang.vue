<template>
  <div class="study">
    <div class="pt-1">
      <p class="sum_of_class">我的收藏</p>
    <!-- 切换-->
    <Menu mode="horizontal" @on-select="toggle($event)" :theme="theme1" active-name="1">
      <MenuItem name="1">
        线上课
      </MenuItem>
      <MenuItem name="2">
        法规
      </MenuItem>
      <MenuItem name="3">
          图书
      </MenuItem>
      <MenuItem name="4">
          讲师
      </MenuItem>
      <MenuItem name="5">
          线下课
      </MenuItem>
    </Menu>
    </div>
    <div class="pt-2">
		  <div class="container" v-if="nameId==='1'">
        <div class="item">
          <ul>
            <li>
              <img src="../../assets/images/huanyuanzx02.png">
                <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
                <span>讲师：孙炜</span>
                </strong>
                <a>购买</a>
            </li>
            <li>
              <img src="../../assets/images/huanyuanzx02.png">
                <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
                <span>讲师：孙炜</span>
                </strong>
                <a>购买</a>
            </li>
          </ul>
        </div>
		  </div>
 		  <div class="container" v-if="nameId==='2'">
      <div class="item">
        <ul>
          <li v-for="item in faguis" :key="item.id" class="li_lingyu">
            <strong>{{item.name}}
            <span>{{ item.fanicy }}</span>
            </strong>
          </li>
        </ul>
      </div>
  	</div>
  	<div class="container" v-if="nameId==='3'">
      <div class="item">
        <ul>
          <li>
            <img src="../../assets/images/huanyuanzx02.png">
              <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
              <span>简介：</span>
              </strong>
              <a>购买</a>
            </li>
 						<li>
              <img src="../../assets/images/huanyuanzx02.png">
              <strong>企业所得税年度纳税申报表中隐藏的稽查陷阱藏的稽查陷
              <span>简介：</span>
              </strong>
              <a>购买</a>
          </li>
        </ul>
      </div>
  	</div>
  	<div class="container" v-if="nameId==='4'">
      <div class="item">
        <ul>
          <li class="li_lingyu">
            <strong>孙炜
            <span>简介：九鼎财税专家委员会专家</span>
            <span>擅长领域：</span>
            </strong>
            <a class="lingyu">资金管理</a>
            <a class="lingyu">内控与合规</a>
            <a class="lingyu">成本控制</a>
          </li>
          <li class="li_lingyu">
            <strong>孙炜
            <span>简介：九鼎财税专家委员会专家</span>
            <span>擅长领域：</span>
            </strong>
            <a class="lingyu">个人所得税</a>
            <a class="lingyu">房地产</a>
            <a class="lingyu">融资与上市</a>
            <a class="lingyu">兼并重组</a>
          </li>
        </ul>
      </div>
  	</div>

   	<div class="container" v-if="nameId==='5'">
   		<div class="item">
        <ul>
          <li>
          		<img src="../../assets/images/huanyuanzx02.png">
		          	 <strong>税收筹划案例精解-3
		          	 	<span>讲师：孙 炜 教授</span>
		          	 	<span>地点: 鸿基实业酒店</span>
		          	 </strong>
		          	 	<a>购买</a>
		         </li>
 						 <li>
 						 		<img src="../../assets/images/huanyuanzx02.png">
		          	 <strong>企业所得税年度纳税申报表中隐
		          	 	<span>讲师：孙 炜 教授</span>
		          	 	<span>地点: 鸿基实业酒店</span>
		          	 </strong>
		          	 	<a>购买</a>
		         </li>
        </ul>
      </div>
  	</div>
      <div style="display:flex;justify-content:center;margin:80px 0 30px 0;">
        <Page :total="100"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/util/cookie"
import { loginUserUrl } from '@/api/api'
export default {
    data() {
    return {
    	theme1: 'light',
    	nameId: '1',
      faguis:[],
    }
  },
  methods: {
    toggle(ev){
      this.nameId = ev
    },
    onload(){
      let uid = getCookie("u_name")
      if (uid !== "" && uid !== "undefined") {
        let sc = loginUserUrl("getlaws_userCollect", {
          username: "niuhongda",
          password: "123123q",
          uid: uid
        }).then(sc => {
          console.log(sc)
          this.faguis = sc.data
        });
      } else {
        return false;
      }
    }
  },
  created(){
    this.onload()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.study {
  .sum_of_class {
    background-color: $bg-blue;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: $white;
  }
  .pt-1 {
  	margin: 10px auto 15px;
    .container {
      width: 100%;
      margin: 10px auto;
      background-color: #f5f5f5;
      height: 36px;

    }
  }
  .container {
    margin-bottom: 20px;
    .item {
      margin-bottom: 20px;
      ul {
        overflow: hidden;
        .li_lingyu{
          width: 100%;
        }
        li{
          float: left;
          height: auto;
          margin: 5px;
          width: 250px;
          img {
            width: 240px;
            padding: 5px;
            height: 150px;
            border: 1px solid #ddd;
          }
          strong {
            width:100%;
            font-size: 14px;
            display: block;
            font-weight: normal;
            span{
            margin:10px 0;
            font-size: 12px;
             display: block;
            }
          }
          .lingyu{
          	background: none;
            color: #333;
            margin: 5px;
            width: 100px;
            float: left;
            border: 1px solid #ddd;
            display:inline-block;
          }
          a{
            display: block;
            padding: 0 10px;
            height: 30px;
            width: 50px;
            line-height: 30px;
            color: #fff;
            text-align: center;
            border-radius: 3px;
            background-color: #f84141;
            cursor: pointer;
          }
          .zcgm:hover {
            background-color: #e7141a;
          }
        }
      }
    }
  }
}
</style>
