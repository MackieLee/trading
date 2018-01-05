<template>
  <div class="offline">
    <div class="items">
      <div class="item" v-for="item in items" :key="item.state">
        <div class="col col-1">
          <router-link to="/odetail">
            <img class="img" src="../../assets/images/jdtax_线下_01.png">
            <span class="tag tag-01">{{item.state}}</span>
          </router-link>
        </div>
        <div class="col col-2">
          <p class="title">
            {{item.title}}
          </p>
          <p>{{item.info}}</p>
          <p>{{item.date}}<i></i>
          	<span class="position" title="点击查看地图" @click="getPosition(item.position)">
          		地点: {{item.position}}</span>
          </p>
          <p class="tag tag-02">{{item.type}}</p>
          <p>讲师：{{item.leader}}</p>
        </div>
        <div class="col col-3">
         <router-link to="/odetail" tag="p" class="tag tag-03">立即报名</router-link>
          <i></i>
          <p>
            资料下载
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {
        "state":"正在报名",
        "title":"税收筹划案例精解-3",
        "info":"金税三期大数据下，税务稽查新模式及企业应对策略（克拉玛依）",
        "date":"2017-09-07 至 09-08",
        "position":"鸿基实业酒店",
        "type":"公开课",
        "leader":"孙 炜 教授 九鼎财税专家委员会专家；注册会计师、注册税务师；"
        },
        {
        "state":"正在报名",
        "title":"税收筹划案例精解-3",
        "info":"金税三期大数据下，税务稽查新模式及企业应对策略（克拉玛依）",
        "date":"2017-09-07 至 09-08",
        "position":"西直门",
        "type":"公开课",
        "leader":"孙 炜 教授 九鼎财税专家委员会专家；注册会计师、注册税务师；"
        },
        {
        "state":"正在报名",
        "title":"税收筹划案例精解-3",
        "info":"金税三期大数据下，税务稽查新模式及企业应对策略（克拉玛依）",
        "date":"2017-09-07 至 09-08",
        "position":"天安门广场",
        "type":"公开课",
        "leader":"孙 炜 教授 九鼎财税专家委员会专家；注册会计师、注册税务师；"
        },
      ]
    }
  },
  methods:{
    getPosition:(position) =>{
      window.open('http://ditu.amap.com/search?query='+ position +'&zoom=15',"_brank") 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.offline {
  width: $width;
  margin: 0 auto;
  .items{
    .item {
      border: 1px solid $red;
      margin-top: 20px;
      padding: 10px 0 10px 10px;
      display: flex;
      i{
        width: 20px;
        height: 20px;
        background-image: url('../../assets/images/Sprite.png');
        vertical-align: text-bottom;
      }
      a {
        display: block;
        position: relative;
        overflow: hidden;
      }
      .tag {
        display: block;
        text-align: center
      }
      .position{
        margin-left: 5px;
        color:$red;
        cursor: pointer;
      }
      .tag-01 {
        width: 80px;
        height: 27px;
        line-height: 27px;
        color: $white;
        text-align: center;
        background-color: $red;
        position: absolute;
        bottom: 5px;
        left: 0;
      }
      .tag-02 {
        width: 70px;
        height: 24px;
        line-height: 24px;
        border: 1px solid $border-blue;
        border-radius: 5px;
      }
      .tag-03 {
        width: 90px;
        height: 30px;
        border: 1px solid $border-blue;
        line-height: 30px;
        border-radius: 5px;
        font-size: 14px;
        color: $black !important;
        // &:hover{
        //   background-color: $btn-danger-hover;
        // }
      }
      .col-2 {
        margin: 0 115px 0 30px;
        .title {
          margin-top: 0;
          color: $blue;
          font-size: 16px;
        }
        p {
          margin-top: 14px;
          font-size: 14px;
        }
        i{
          display: inline-block;
          background-position: -61px -253px;
          margin-left: 15px;
        }
      }
      .col-3 {
        margin: 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          text-align: center;
          color: $blue;
          cursor: pointer;
        }
        i{
          display: block;
          margin:20px auto 5px;
          background-position: -59px -315px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
