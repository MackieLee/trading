<<template>
  <div class="pingjia">
    <!-- 修改为star -->
    <h2>答疑评分</h2>
    <div class="div-head">
      <div class="div1">
        <p class="p">答疑评分</p>
        <h3>5.0</h3>
      </div>
      <div class="div2">
        <ul>
          <li>
            <p class="p">回答是否准确</p>
            <Rate allow-half v-model="zhunque"></Rate>
          </li>
          <li>
            <p class="p">回答是否完整</p>
            <Rate allow-half v-model="wanzheng"></Rate>
          </li>
          <li>
            <p class="p">答案是否实用</p>
            <Rate allow-half v-model="shiyong"></Rate>
          </li>
          <li>
            <p class="p">政策是否过时</p>
            <Rate allow-half v-model="zhengce"></Rate>
          </li>
          <li>
            <p class="p">对您是否有用</p>
            <Rate allow-half v-model="youyong"></Rate>
          </li>
        </ul>
      </div>
    </div>
    <div class="div3">
      <h3>综合满意度 :</h3>
      <Rate allow-half v-model="zhengce"></Rate>
    </div>
    <Input v-model="textarea" type="textarea" :rows="6" placeholder="这么善良的您，夸夸我吧..."></Input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhunque:0,
      wanzheng:0,
      shiyong:0,
      zhengce: 0,
      youyong:0,
      textarea: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.pingjia {
  h2 {
    background-color: #468ee3;
    border: none;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .div-head{
    overflow: hidden;
    margin:20px 0;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    .div1,.div2{
      float: left;
      overflow: hidden;
    }
    .div1{
      border-right:1px solid #eee;
      padding-right: 10px;
      margin-right: 10px;
      h3{
        font-size: 30px;
        font-weight: 700;
        color:$blue;
      }
    }
    .div2 li{
      float:left;
      margin-right: 20px;
      p{
        border: 1px solid #eee;
        padding: 5px;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
  .div3{
    overflow: hidden;
    h3,.ivu-rate{
      float: left;
    }
    h3{
      line-height: 30px;
      margin-right: 10px;
    }
    margin-bottom: 20px;
  }
}
</style>
