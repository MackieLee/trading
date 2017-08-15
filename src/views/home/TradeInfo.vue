<template>
  <div class="trade-info">
    <div class="trade-info-title">
      <ul>
        <li><a @mouseenter="showList" ref="a1" :class="active">最新售出</a></li>
        <li><a @mouseenter="showList" ref="a2" >最新上架</a></li>
      </ul>
    </div>
    <div class="trade-list">
       <ul v-if="show">
        <li v-for="item in bought" :key="item.title">
          <a>{{item.title}}</a>
          <span>{{item.price}}</span>
        </li>
      </ul> 
       <ul v-if="hide">
        <li v-for="item in sold" :key="item.title">
          <a>{{item.title}}</a>
          <span>{{item.price}}</span>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:'active',
      show:true,
      hide:false,
      bought:[
        {title:'老王卖屁股',price:'￥100.00'},
        {title:'基佬大乱斗内测账号',price:'￥200.00'}
        ],
      sold:[
        {title:'H1Z1',price:'￥50.00'},
        {title:'智商捉鸡  ',price:'￥0.00'}
      ]
    }
  },
  methods:{
    showList : function(event){
      event.target.text == '最新售出' ?
      (this.$refs.a2.className = '',this.$refs.a1.className = 'active',this.show = true,this.hide = false) :
      (this.$refs.a2.className = 'active',this.$refs.a1.className = '',this.show = false,this.hide = true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .trade-info{
    border: 2px solid #DDD;
    display: flex;
    padding: 10px 10px;
    flex-direction: column;
    .trade-info-title{
      padding-bottom: 10px;
      background: #f8f8f8;
      text-align: right;
      a{
        color: #000;
        &:hover{
          color: #FF8400;
        }
      }
    }
    .trade-list{
      li{
        display: flex;
        padding: 2px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #f4f4f4;
        justify-content: space-between;
        span{
          color: #E0753D;
        }
      }
    }
    .active{
      color: #ff8400 !important;
    }
  }
</style>
