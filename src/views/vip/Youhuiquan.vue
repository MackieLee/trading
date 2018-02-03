<template>
  <div class="my_qianb_r">
    <p class="p01">优惠券</p>
    <div class="my_qianb_cotainer">
      <p class="p02">
        <span @click="toggle()" data-ref='1' class="cur">未使用</span>
        <span @click="toggle()" data-ref='2'>已使用</span>
        <span @click="toggle()" data-ref='3'>即将过期</span>
        <span @click="toggle()" data-ref='4'>已过期</span>
      </p>
      <div class="div01" v-if="part=='1'">
					<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>50</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
					
      </div>
     <div class="div02" v-if="part=='2'">
					<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
					
      </div>

      <div class="div03" v-if="part=='3'">
					<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>50</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							<div class="div01_gm"><span>立即使用</span></div> 
					</div>   	
					
      </div>
     <div class="div04" v-if="part=='4'">
					<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
							
					</div>   	
						<div class="yhj">
						<div class="div01_type">
							<div class="hover"></div>
							<div class="xshover"></div>
						    <div class="div01_price">
						        <em>¥</em>
						        <strong>30</strong>元券
						    </div>
							<div class="div01_limit">满3000可用</div>
							<div class="div01_p">
								<span>只限视频类</span>编号：8792456354
							</div>
							    <div class="div01_time">2017.12.01-2017.12.20</div>       		    				
						</div>
						
					</div>   	
					
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "youhuiquan",
  data() {
    return {
      part: "1"
    };
  },
  methods: {
    toggle() {
      document.getElementsByClassName("cur")[0].className = "";
      event.target.setAttribute("class", "cur");
      let ref = event.target.dataset.ref;
      this.part = ref;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.my_qianb_r {
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}
.my_qianb_cotainer {
}
.my_qianb_r .p01 {
  color: $white;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  width: 100%;
  background: $bg-blue;
  text-align: center;
}

.my_qianb_r .p02 {
  width: 99%;
  margin: 10px auto;
  height: 40px;
  border-bottom: 1px solid #ddd;
  span {
  width:100px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  line-height: 40px;
  font-size: 14px;
		}
	.cur {
  color: #39f;
  border-bottom: 2px solid #39f;
		}
}
.div01,.div02,.div03,.div04 {
  .yhj {
    float: left;
    height: auto;
    width: 246px;
    margin: 20px 10px;
  }
}

/*特别*/
.div01 {
  .xshover {
    background: url("../../assets/images/Sprite.png") -430px -269px !important;
  }
}
.div02 {
  .xshover {
    background: url("../../assets/images/Sprite.png") -430px -183px !important;
  }
}
.div04 {
  .xshover {
    background: url("../../assets/images/Sprite.png") -430px -15px !important;
  }
}

/*公共*/
.div01,
.div02,
.div03,
.div04 {
  .yhj {
    float: left;
    height: auto;
    width: 246px;
    margin: 15px 10px;
  }
  height: auto;
  width: 100%;
  overflow: hidden;
  .div01_type:hover {
    .hover {
      display: block;
    }
  }
  .div01_type {
    position: relative;
    background-color: #74d2d4;
    float: left;
    width: 246px;
    height: 165px;
    padding: 20px 0 0;
    color: #fff;
    text-align: center;
    .xshover {
      position: absolute;
      width: 65px;
      height: 65px;
      left: 0px;
      top: 0px;
      overflow: hidden;
      background: url("../../assets/images/Sprite.png") -430px -98px;
      cursor: pointer;
    }
    .hover {
      display: none;
      position: absolute;
      width: 35px;
      height: 35px;
      right: -4px;
      top: -3px;
      overflow: hidden;
      background: url("../../assets/images/Sprite.png") -510px -159px;
      cursor: pointer;
    }
    .div01_price {
      margin: 0 0 10px;
      text-align: center;
      font-weight: 700;
      em {
        font-family: verdana;
        font-size: 24px;
        position: relative;
        top: -11px;
      }
      strong {
        line-height: 45px;
        font-size: 40px;
        font-family: Arial;
      }
    }
    .div01_time {
      color: #197f81;
    }
    .div01_p {
      margin: 15px 0;
      span {
        font-size: 14px;
        margin-right: 20px;
      }
    }
  }
  .div01_gm {
    width: 246px;
    text-align: center;
    span {
	  cursor: pointer;
      height: 30px;
      width: 110px;
      margin-top: 20px;
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #74d2d4;
      color: #333;
      display: inline-block;
    }
  }
}
</style>
