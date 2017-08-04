<template>
  <div class="user-guid">
     <div class="busniss-pub">
        <div class="mod-left">
          <a>
            <span class="main-title">我要出售</span>
            <span class="sub-title">xxxxxxxxxxxxxx</span>
          </a>
        </div>
        <div class="mod-right">
          <a>
            <span class="main-title">我要购买</span>
            <span class="sub-title">xxxxxxxxxxxxxx</span>
          </a>
        </div>
      </div>
      <div class="trade-info">
        <ul>
          <li><a><i class="yxb"></i><p>游戏币</p></a></li>
          <li><a><i class="qb"></i><p>Q币</p></a></li>
          <li><a><i class="dk"></i><p>点卡</p></a></li>
          <li><a><i class="hf"></i><p>话费</p></a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .user-guid{
    height: 265px;
    width: 290px;
    .busniss-pub{
      background-color: #f4f4f4;
      margin-top: 10px;
      .mod-left,.mod-right{
        height: 120px;
        width: 145px;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
          display: block;
          padding: 23px 0;
          margin:0 10px;
          text-align: center;
          background-color: #fff;
          .main-title{
            display: inline-block;
            padding-right: 20px;
            margin-bottom: 5px;
            font-size: 18px;
            font-weight: 700;
            color: #333;
          }
        }
      }
    }
    .trade-info{
      height: 135px;
      ul{
        width: 272px;
        margin: auto;
        i{
          display:inline-block;
          width:64px;
          height:64px;
          background-image: url('../../assets/img/img_index.png');
        }
        .qb{
          background-position: -65px 0 ;
        }
        .dk{
          background-position: -130px 0;
        }
        .hf{
          background-position: -194px 0;
        }
        p{
          text-align: center;
        }
      }
    }
  }
</style>

