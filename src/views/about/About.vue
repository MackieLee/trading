<template>
  <div class="vip">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;机构简介
      </p>
    </div>
    <p class="p"><span>机构简介</span></p>
    <div class="container">
      <div class="nav-left">
        <a class="tt">机构简介</a>
        <div v-for="(item,index) in tags" :key="item.name" @click="cur = index">
          <a :class="{ 'active': cur === index }" :href="'#'+index+'rd'">
            {{ item.name }}
            <span v-show="cur === index"></span>
          </a>
        </div>
      </div>
      <div>
        <oz-intro></oz-intro>
        <kechengsm id="0rd"></kechengsm>
        <jigouyoushi id="1rd"></jigouyoushi>
        <div id="2rd" class="copyright">
          <span class="copr">神州九鼎财税咨询（北京）有限公司</span>
          <div class="flex">
            <div>
              <dl>
                <dd><strong>电话:</strong> 010-6231-1360</dd>
                <dd><strong>网站:</strong> www.jdtax.cn</dd>
                <dd><strong>邮编:</strong> 100083</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dd><strong>地　　址：</strong>北京市海淀区志新东路5号鸿基世业商务酒店A座5层</dd>
                <dd>
                  <strong>附近交通：</strong>
                  公交志新北里站,有16路,425路,508路,635路,751路,运通109线;附近地铁15号线北沙滩站和10号线牡丹园站。
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OzIntro from './OzIntro'
import kechengsm from './kechengsm'
import jigouyoushi from './jigouyoushi'

export default {
  name:'about',
  components: { OzIntro, kechengsm, jigouyoushi },
  data(){
    return{
      tags:[
        {
          name:'机构定位',
        },
        {
          name:'机构优势',
        },
        {
          name:'联系我们',
        }
      ],
      cur: 0
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
i{
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url('../../assets/images/Sprite.png');
  vertical-align: text-bottom;
}
.cur-posi{
  margin-top: 30px;
  i{
    background-position: -18px -100px;
    margin-right: 6px;
  }
}
.vip {
  width: $width;
  margin: 0 auto;
  .p{
    text-align: center;
    margin-bottom: 20px;
    span{
      display: inline-block;
      border-bottom: 2px solid red;
      color: red;
      font-size: 18px;
      padding: .3rem 1rem;
      margin: 1rem;
    }
  }
  .container{
    display: flex;
    .nav-left{
      margin-right: 100px;
      height: 210px;
      border-top: 1px solid #dcdcdc;
      border-left: 1px solid #dcdcdc;
      box-shadow:2px 2px 3px #aaaaaa;
      .tt{
        background-color: #e84040;
        color: #fff;
      }
      a{
        display: inline-block;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        width: 164px;
        text-align: center;
        white-space: nowrap;
        font-size: 1rem;
        margin-bottom: 2px;
        background-color: rgba(232,64,64,0.1);
        color: #000;
        span{
          display: inline-block;
          height: 10px;
          width: 10px;
          background: url('../../assets/images/Sprite.png') -602px -358px no-repeat;
        }
      }
      a.active{
        background-color: rgba(232,64,64,0.6);
        color: #fff;
      }
    }
    .copyright{
      margin-top: 150px;
      .copr{
        font-size: 16px;
        line-height: 3rem;
      }
      .flex{
        display: flex;
        justify-content: space-between;
        div{
          width: 50%;
        }
        dd{
          font-size: 14px;
          line-height: 3rem;
        }
      }
    }
  }
}
</style>
