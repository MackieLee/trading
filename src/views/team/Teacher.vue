<template>
  <div class="teacher">
    <div class="cur-posi">
      <p><i></i>当前位置 : &nbsp;<router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;专家团队</p>
    </div>
    <router-link tag="div" v-for="item in teacherList" :key="item.id" :to="{path:'/tdetail',query:{id:item.id}}" class="item">
      <div class="hd-pic">
        <img src="../../assets/images/jitax_专家团队_03.png" alt="孙玮">
      </div>
      <div class="short-msg">
        <p class="name">{{item.name}} 教授</p>
        <div class="short-intro">
          {{item.intro}}
        </div>
        <p class="more">更多>></p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  name:'teacher',
  data(){
    return{
      teacherList:[]
    }
  },
  mounted () {
    let _self = this
    let res = loginUserUrl('http://aip.kehu.zaidayou.com/api/execute/getTeacherList',{
      username: "niuhongda",
      password: "123123q"
    }).then((res)=>{
      _self.teacherList = res.data
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/base.scss';
  .teacher{
    width: $width;
    margin: 0 auto;
    padding-top: 20px;
    i{
      display: inline-block;
      width: 22px;
      height: 22px;
      background-image: url('../../assets/images/Sprite.png');
      vertical-align: text-bottom;
    }
    .cur-posi{
      i{
        background-position: -18px -100px;
        margin-right: 6px;
      }
    }
    .item{
      width: $width;
      display: flex;
      background-color:$bg-light-dark;
      margin: 26px 0 20px 0;
      border: 1px solid $border-rice;
      &:hover{
        background-color: #fff;
      }
      .hd-pic{
        margin: 15px 38px 15px 15px; cursor: pointer;
      }
      .short-msg{
        margin-top: 29px;
        width: 750px;
        p[class="name"]{
          font-size: $lg-title;
          margin-bottom:32px;
        }
        .short-intro{
          font-size: $normal;
          line-height: 30px;
          height: 90px;
          overflow: hidden;
        }
        .more{
          float: right;
          color: $blue;
          cursor: pointer;
        }
      }
    }
  }

</style>
