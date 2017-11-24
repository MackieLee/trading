<template>
  <div class="shiti min-650">
    <div class="title">1/3单(多)选  【本节知识点】</div>
    <div>
      <form>
        <div v-for="question in exam[0].muilti" :key="question.title">
          <p>{{ question.title }}(多选)</p>
          <p v-for="(item,index) in question.content " :key="item.id">
            <label :for="item.id"><span class="option">{{ item.option }}</span><span>{{item.value}}</span></label>
            <input :id="item.id" type="checkbox" :value="item.option" :name="item.name"/>
          </p>
        </div>
        <div v-for="question in exam[0].single" :key="question.title">
          <p>{{ question.title }}(单选)</p>
          <p v-for="(item,index) in question.content " :key="item.id">
            <label :for="item.id"><span class="option">{{ item.option }}</span><span>{{item.value}}</span></label>
            <input :id="item.id" type="radio" :value="item.option" :name="item.name"/>
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
      exam: EXAM
    };
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
  }
  .option{
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid $border-dark;
    cursor: pointer;
  }
  .submit{
    display: block;
  }
}
</style>
