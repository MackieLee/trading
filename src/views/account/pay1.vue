<template>
  <div class="pay">
    <div class="container">
    	<ul class="ul01">
    		<li class="li01"><i></i>提交订单</li>
    		<li class="li02"><i></i>确认订单</li>
    		<li class="li03"><i></i>完成订单</li>
    	</ul>

  		<ul class="ul02">
    		<li class="li01">
    			<img src="../../assets/images/huanyuanzx02.png">
	         <p>您好!房地产开发企业销售精装修房所含装饰、设备是否视同销售？</p>
    		</li>
    		<li class="li02">
    			产品类型<span>专题课</span>
    		</li>
    		<li class="li03">
    			总金额(元)<span>￥2,800.00</span>
    		</li>
    	</ul>
		<div class="div01">
    		<strong>常用付款方式</strong>
			<ul>
				<li @click="payType = 'wechat'" class="li01">
					<a :class="{ 'a_cur': payType === 'wechat'}"><img src="../../assets/images/weixin.jpg"></a>
				</li>
				<li @click="payType = 'alipay'" class="li02">
					<a :class="{ 'a_cur': payType === 'alipay'}"><img src="../../assets/images/zhifubao.jpg"></a>
				</li>
				<li @click="payType = 'yue'" class="li03">
					<a :class="{ 'a_cur': payType === 'yue'}">余额</a>
				</li>
				<li @click="payType = 'credit'" class="li04">
					<a :class="{ 'a_cur': payType === 'credit'}"><img src="../../assets/images/zaixianzhifu.jpg"></a>
				</li>
			</ul>
		</div>
		<div class="div02">
    		<strong>购买增加</strong>
			<ul>
				<li class="address"><span>当前地址:北京市海淀区翠微路2号 闫阿姨 1888888888</span></li>
				<li class="li01" @click="address = !address"><img src="../../assets/images/ddzf6.png">新增地址</li>
				<li v-if="address">
					<p><label for="usr"><font class="star">*</font>收货人</label><input id="usr" class="input-sm" type="text" placeholder="收货人" /></p>
					<p><label for="tel"><font class="star">*</font>联系电话</label><input id="tel" type="text" placeholder="联系电话" /></p>
					<p><label for="adress"><font class="star">*</font>收货地址</label><input id="adress" type="text" placeholder="请输入新的收货地址" /></p>
					<p><label for="code"><font class="star">*</font>邮编</label><input id="code" class="input-sm" type="text" placeholder="请输入邮政编码" /></p>
					<input type="button" class="btn btn-danger btn-normal" value="确认新增收货地址" />
					<input type="button" class="btn btn-cancel btn-sm" @click="address = false" value="取消" />
				</li>
				<li class="li02" @click="fapiao = !fapiao"><img src="../../assets/images/ddzf6.png">需要开发票</li>
				<li v-if="fapiao">
					<form @submit.prevent = "submit">
						<table>
						<tr class="btn-group">
							<th width="120"><span class="border" @click="toggle(1)" :class="{'rd-border':current == '1'}">普通发票<i></i></span></th>
							<th width="120"><span class="border" @click="toggle(2)" :class="{'rd-border':current == '2'}">专用发票<i></i></span></th>
							<th width="120"></th>
							<th width="120"></th>
						</tr>
						</table>
						<!-- 模块一 -->
						<table v-show="current == '1'">
						<tr><td colspan="5" class="warning"><p><i></i>发票内容仅是培训费，咨询费，图书费</p></td></tr>
						<tr><th><font class="star">*</font><label for="invoice-title">发票抬头：</label></th><td colspan="4"><input id="invoice-title" name="invoice-title" type="text" /></td></tr>
						<tr><th><font class="star">*</font><label for="identifier">纳税人识别号：</label></th><td colspan="4"><input id="identifier" name="identifier" type="text" /></td></tr>
						<tr>
							<th><font class="star"></font><label>发票内容：</label></th>
							<td>
							<label :class="{'rd-border':mingxi === 'mingxi' }" class="mingxi border" for="mingxi">明细<i></i></label>
							<input id="mingxi" v-model="mingxi" value="mingxi" type="radio"/>
							</td>
							<td>
							<label :class="{'rd-border':mingxi === 'train' }" class="mingxi border" for="train">培训费<i></i></label>
							<input id="train" v-model="mingxi" value="train" type="radio"/>
							</td>
							<td>
							<label :class="{'rd-border':mingxi === 'consult' }" class="mingxi border" for="consult">咨询费<i></i></label>
							<input id="consult" v-model="mingxi" value="consult" type="radio"/>
							</td>
							<td v-show="bookItem">
							<label :class="{'rd-border':mingxi === 'book' }" class="mingxi border" for="book">图书费<i></i></label>
							<input id="book" v-model="mingxi" value="book" type="radio"/>
							</td>
						</tr>
						<tr><th><font class="star">*</font><label for="address">发票邮寄地址：</label></th><td colspan="3"><input id="address" name="address" /></td></tr>
						<tr><th><font class="star">*</font><label for="phone">收票人手机：</label></th><td colspan="3"><input id="phone" name="phone" /></td></tr>
						<tr><th><font class="star"></font><label for="email">收票人邮箱：</label></th><td colspan="3"><input id="email" name="email" /></td></tr>
						<tr><td width="120"></td><td width="120"></td><td width="120"></td><td width="120"></td><td width="120"></td></tr>
						<tr class="btn-group">
							<td><input type="submit" class="btn btn-danger" value="提交"></td>
							<td><input type="button" class="btn btn-cancel" @click="fapiao = false" value="取消"></td>
							<td></td>
						</tr>
						</table>
						<!-- 模块二 -->
						<table v-show="current == '2'">
						<!-- 单位名称 -->
						<tr><td colspan="5" class="warning"><p><i></i>发票内容仅是培训费，咨询费，图书费</p></td></tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-invoice-title">单位名称：</label>
							</th>
							<td colspan="4">
							<input id="pro-invoice-title" name="invoice-title" type="text" />
							</td>
						</tr>
						<!-- 纳税人识别码 -->
						<tr>
							<th>
							<font class="star">*</font><label for="pro-identifier">纳税人识别码：</label>
							</th>
							<td colspan="4">
							<input id="pro-identifier" name="identifier" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-registed-address">注册地址：</label>
							</th>
							<td colspan="4">
							<input id="pro-registed-address" name="registed-address" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-registed-phone">注册电话：</label>
							</th>
							<td colspan="4">
							<input id="pro-registed-phone" name="registed-phone" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-bank">开户银行：</label>
							</th>
							<td colspan="4">
							<input id="pro-bank" name="bank" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-account">银行账户：</label>
							</th>
							<td colspan="4">
							<input id="pro-account" name="account" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-address">发票邮寄地址：</label>
							</th>
							<td colspan="4">
							<input id="pro-address" name="address" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star">*</font><label for="pro-phone">收票人手机：</label>
							</th>
							<td colspan="4">
							<input id="pro-phone" name="phone" type="text" />
							</td>
						</tr>
						<tr>
							<th>
							<font class="star"></font><label for="pro-email">收票人邮箱：</label>
							</th>
							<td colspan="4">
							<input id="pro-email" name="email" type="text" />
							</td>
						</tr>
						<tr>
							<td width="120"></td>
							<td width="120"></td>
							<td width="120"></td>
							<td width="120"></td>
							<td width="120"></td>
						</tr>
						<tr class="btn-group">
							<td><input type="submit" class="btn btn-danger" value="提交"></td>
							<td><input type="button" class="btn-cancel" @click="fapiao = false" value="取消"></td>
							<td></td>
						</tr>
						</table>
					</form>
				</li>
				<li @click="yaoqingma = !yaoqingma" class="li03"><img src="../../assets/images/ddzf6.png">邀请码</li>
				<li v-if="yaoqingma"><input class="btn-sm" placeholder="请输入邀请码"/><input type="button" class="btn-sm btn-cancel" value="提交" /></li>
				<li class="li04" @click="jifen = !jifen"><img src="../../assets/images/ddzf6.png">积分<span class="jifen" v-if="jifen">您当前积分为 0</span></li>
				<li class="li05" @click="youhuiquan = !youhuiquan"><img src="../../assets/images/ddzf6.png">优惠卷</li>
				<li v-if="youhuiquan"><input class="btn-sm" placeholder="请输入优惠券编号"/><input type="button" class="btn-sm btn-cancel" value="提交" /></li>
			</ul>
		</div>
      
      <div class="btn">
      	 <router-link tag="div" :to="{name:'pay2'}" class="a" >立即付款</router-link>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: false,
	  fapiao:false,
      mingxi: "mingxi",
      current: "1",
	  yaoqingma:false,
	  jifen:false,
	  youhuiquan:false,
      bookItem: true,
	  payType:'wechat'
    };
  },
  methods: {
    submit: () => {},
    toggle: function(i) {
      this.current = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.pay {
  width: $width;
  margin: 0 auto;
  padding-top: 40px;
  .container {
    width: 80%;
    margin: 0 auto;
    .ul01 {
      overflow: hidden;
      li {
        float: left;
        height: 34px;
        text-align: center;
        font-family: Microsoft YaHei;
        font-size: 16px;
        line-height: 34px;
        color: #333;
        background: #e5e5e5;
        width: 33.33%;
        i {
          height: 21px;
          width: 21px;
          display: inline-block;
          vertical-align: text-bottom;
          margin-right: 5px;
        }
      }
      .li01 {
        background: url(../../assets/images/ddzf1.png) no-repeat right top
          #e7141a;
        color: #fff;
        i {
          background: url(../../assets/images/ddzf3.png) no-repeat center center;
        }
      }
      .li02 {
        background: url(../../assets/images/ddzf.png) no-repeat right top
          #e7141a;
        color: #fff;
        i {
          background: url(../../assets/images/ddzf3.png) no-repeat center center;
        }
      }
      .li03 {
        i {
          background: url(../../assets/images/ddzf5.png) no-repeat center center;
        }
      }
    }
    .ul02 {
      margin: 30px 0;
      background: #f5f5f5;
      overflow: hidden;
      li {
        float: left;
        width: 15%;
        margin: 20px 0 20px 10px;
        font-size: 14px;
        line-height: 40px;
        span {
          margin-right: 60px;
          display: block;
          color: #000;
        }
        p {
          font-size: 14px;
          float: left;
          width: 60%;
          line-height: 40px;
        }
      }
      .li01 {
        width: 60%;
        img {
          height: 80px;
          width: 110px;
          float: left;
          margin-right: 10px;
        }
      }
    }
    .div01 {
      strong {
        margin: 20px 10px 10px;
        display: block;
      }
      ul {
        border: 1px solid #ddd;
        overflow: hidden;
        li {
          width: 142px;
          height: 65px;
          margin: 10px;
          cursor: pointer;
          padding: 10px;
          float: left;
          .a_cur {
            border: 1px solid #e7141a;
          }
          a {
            border: 1px solid #ddd;
            text-align: center;
            line-height: 42px;
            display: block;
            width: 100%;
            height: 100%;
            margin-bottom: 5px;
            position: relative;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .div02 {
      strong {
        margin: 20px 10px 10px;
        display: block;
      }
      ul {
        border: 1px solid #ddd;
        padding: 20px;
        li {
          cursor: pointer;
          line-height: 42px;
          display: block !important;
          overflow: hidden;
          img {
            width: 14px;
            vertical-align: middle;
            margin-right: 10px;
          }
          p {
            margin: 20px 0;
          }
		  span[class="jifen"]{
		    margin-left: 20px;
		  }
          label {
            display: inline-block;
            width: 90px;
            text-align: right;
            margin-right: 20px;
            .star {
              color: $red;
              margin-right: 10px;
            }
          }
          input {
            line-height: 25px;
            width: 350px;
            outline: none;
          }
          input[class="input-sm"] {
            width: 175px;
          }
          input[type="button"] {
            height: 28px;
            cursor: pointer;
            border-radius: 3px;
          }
          .btn-danger {
            background: #f84141;
            border: none;
            margin: 0 10px 0 100px;
          }
          .btn-cancel {
            border: 1px solid $border-dark;
            background-color: #fff;
            color: $black;
          }
          .btn-normal {
            width: 150px;
          }
          .btn-sm {
            width: 100px;
			margin-left: 10px;
          }
          table {
            border-collapse: collapse;
			tr{
				height: 40px;
			}
            th {
              text-align: right;
            }
            .star {
              color: $red;
              margin-right: 10px;
            }
            .btn-group td {
              text-align: right;
            }
            .btn-group {
              input,
              span {
                cursor: pointer;
              }
            }
            input {
              width: 95%;
              height: 25px;
              outline: none;
            }
            input[type="radio"] {
              display: none;
            }
            .btn {
              display: inline-block;
              width: 100px;
              height: 27px;
              outline: none;
              line-height: 25px;
            }
            .btn-danger {
              border: none;
              color: $white;
              background-color: $red;
            }
            .border {
              display: inline-block;
              border: 1px solid $border-dark;
              height: 30px;
              line-height: 30px;
              text-align: center;
              width: 100px;
              position: relative;
            }
            .mingxi {
              width: 100px;
              cursor: pointer;
            }
            .rd-border {
              border: 1px solid $red;
              i {
                position: absolute;
                height: 20px;
                width: 20px;
                background-image: url("../../assets/images/Sprite.png");
                background-position: 45px -82px;
                bottom: -1px;
                right: 0;
              }
            }
            .warning {
              p {
                background-color: #fffdee;
                line-height: 30px;
                padding-left: 20px;
                i {
                  background-image: url("../../assets/images/Sprite.png");
                  background-position: 44px -12px;
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  vertical-align: text-bottom;
                  margin-right: 8px;
                }
              }
            }
          }
        }
        .address {
          line-height: 30px;
          padding-left: 2em;
        }
      }
    }
    .ul03 {
      li {
        font-size: 14px;
        background: #e5e5e5;
        line-height: 34px;
        height: 34px;
        width: 100%;
        text-align: right;
        span {
          font-size: 18px;
          color: #e7141a;
          margin-right: 20px;
        }
      }
    }
    .btn {
      overflow: hidden;
      color: #fff;
    }
    .a:hover {
      background: #e7141a;
    }
    .a {
      outline: none;
      border: none;
      height: 34px;
      float: right;
      margin: 40px 30px;
      width: 90px;
      padding: 0 10px;
      background: #f84141;
      font-size: 14px;
      display: block;
      border-radius: 3px;
      text-align: center;
      line-height: 34px;
      cursor: pointer;
    }
  }
}
</style>
