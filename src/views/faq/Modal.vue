<template>
  <div class="modal">
    <div class="fixed">
      <div class="content">
        <div class="title">我要提问</div>
        <div class="img-btn close" @click="closeModal"></div>
        <div class="ctr">
          <input type="text" class="biaoti">
          <div style="margin:10px 0;font-size:14px;">问题描述（选填）：</div>
          <textarea placeholder="仅回答正常内容，涉及咨询、税务筹划等内容，老师有权不作答"/>
          <div>
            指定老师 <select><option>请选择</option></select>
            <div class="inline-block" v-show="wait == 'wait'">
              <label for="not-wait">24小时后继续等待</label>
              <input v-show="false" id="wait" v-model="wait" value="wait" name="wait" type="radio"/>
              <i class="img-btn img-not-wait" v-show="wait === 'wait'"></i>
            </div>
            <div class="inline-block" v-show="wait == 'not-wait'">
              <label for="wait">24小时后继续等待</label>
              <input v-show="false" id="not-wait" v-model="wait" value="not-wait" name="wait" type="radio"/>
              <i class="img-btn img-wait" v-show="wait === 'not-wait'"></i>
            </div>
          </div>
          <div style="color:grey;">指定老师回答，若老师24小时内未回答，自动转入专家团问答，差额退回，不转入可勾选继续等待</div>
          <div class="sub-btn">
            <input type="button" class="submit" @click="submitCommit" value="确   定">
            <input type="button" class="cancel" @click="submitCommit" value="取   消">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wait:'not-wait'
    }
  },
  computed: {
  },
  methods:{
    //子组件触发父组件事件
    closeModal:function(){
      //将自定义事件通过this.$emit传递给父组件,然后在父组件用v-on监听子组件的事件触发
      this.$emit('closeModal')
    },
    submitCommit:function(){
      //vue-resource....
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.fixed{
  overflow: hidden;
  position: fixed;
  top:20%;
  width: 100%;
}
.inline-block{
  display: inline-block;
  margin: 20px;
  .img-wait{
    background-position: 95px -343px;
  }
  .img-not-wait{
    background-position: 129px -343px;
  }
}
.content {
  width: 700px;
  height: 490px;
  background-color: $white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .title{
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: $btn-default;
    color: $white;
  }
  .img-btn{
    cursor: pointer;
    height: 20px;
    width: 20px;
    background-image: url('../../assets/images/Sprite.png');
    display: inline-block;
    vertical-align: text-bottom;
  }
  .close{
    position: absolute;
    top: 10px;
    right: 10px;
    background-position: 42px -126px;
  }

  .ctr {
    // border: 1px solid $red
    margin:60px 0 0 50px;
    .biaoti{
      height: 30px;
      line-height: 30px;
      width: 550px;
      border:1px solid $border-dark;
      padding: 0 10px;
      border-radius: 3px;
      outline: none;
    }
    .note-title{
      margin-bottom: 30px;
      font-size: 14px;
      height: 35px;
      width: 560px;
      outline: none;
      border-radius: 5px;
      border: 1px solid $border-dark;
      padding-left: 10px;
    }
    textarea {
      resize: none;
      width: 550px;
      height: 120px;
      border-radius: 3px;
      outline: none;
      padding: 10px;
      font-size: 14px;
      border: 1px solid $border-dark;
    }
    .sub-btn{
      .submit,.cancel{
        padding: 7px 40px;
        cursor: pointer;
        outline: none;
        margin-top: 25px;
        border: none;
      }
      .submit{
        background-color: $btn-default;
        color: $white;
      }
      .cancel{
        background-color: $white;
        color: $black;
        border: 1px solid $border-dark;
      }
    }
  }
}
</style>
