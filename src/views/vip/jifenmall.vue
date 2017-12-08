<template>
  <div class="bind-credit">
    <div class="content">
      <div class="title">积分兑换商城</div>
      <div class="form-container">
 		<ul class="ul01">
 			<li>可用积分<br/><i>40</i></li>
 			<li>即将过期<br/><i>0</i></li>		
 		</ul>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.bind-credit {
  overflow: hidden;
}
.content {
  background-color: $white;
  margin: auto;
  .title {
    height: 40px;font-size: 16px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: $bg-blue;
    color: $white;
  }
  .form-container{
  	.ul01{ margin: 30px 0; background: #e5e5e5;overflow: hidden;
  width: 100%;
  li{font-size:18px;line-height:40px; float: left; padding:15px 0;
  width: 44%; text-align: center;
  i{font-style: normal;margin-top: 10px; color: #117cee;}
    }
  	
  }
  }
  
    }

</style>
