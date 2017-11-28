<template>
  <div class="shiti min-650">
    <div class="title">1/3单(多)选  【本节知识点】</div>
    <div>
      <form @submit.prevent="submit">
        <div v-for="question in exam[0].muilti" :key="question.title">
          <p>{{ question.title }}(多选)</p>
          <p v-for="(item,index) in question.content " :key="item.id">
            <label :for="item.id"><span :class="{'checked':muiltiChecks.indexOf(item.id) !== -1}" class="option">{{ item.option }}</span><span>{{item.value}}</span></label>
            <input :id="item.id" v-model="muiltiChecks" type="checkbox" :value="item.id" :name="item.name"/>
          </p>
        </div>
        <div v-for="(question,index) in exam[0].single" :key="question.title">
          <p>{{ question.title }}(单选){{ arr[index] }}</p>
          <p v-for="(item,index) in question.content " :key="item.id">
            <label :for="item.id"><span :class="{'checked':arr.indexOf(item.id) !== -1}" class="option">{{ item.option }}</span><span>{{item.value}}</span></label>
            <input :id="item.id" type="radio" v-model="checked" :value="item.id " :name="item.name"/>
          </p>
        </div>
        <div>
          <input type="button" class="submit" value="交卷" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const EXAM = require("../../assets/exam.json");
export default {
  data() {
    return {
      exam: EXAM,
      muiltiChecks:[],
      arr:[],
      checked:''
    };
  },
  computed: {
  },
  methods:{
    submit:()=>{}
  },
  watch:{
    checked:function(){
      let num = parseInt(this.checked.substr(6,1))
      this.arr[num-1] = this.checked
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.shiti {
  .title {
    background-color: #d9d7d7;
    line-height: 30px;
    padding: 0 13px;
    overflow: hidden;
    cursor: pointer;
  }
  input {
    display: none;
  }
  p{
    line-height: 20px;
    margin: 10px 0;
  }
  label{
    cursor: pointer;
  }
  .option{
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid $border-dark;
    margin: 0 10px;
  }
  .submit{
    display: block;
    width: 80px;
    line-height: 25px;
    outline:none;
    border: none;
    color: $white;
    background-color: $btn-danger;
    cursor: pointer;
  }
  .checked{
    background-color: $btn-default;
    color: $white;
  }
}
</style>
