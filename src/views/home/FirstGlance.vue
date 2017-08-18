<template>
  <div class="first-glance">
    <trade-info></trade-info>
     <home-img></home-img> 
    <user-guid></user-guid>
  </div>
</template>

<script>
import UserGuid from './UserGuid'
import HomeImg from './HomeImg'
import TradeInfo from './TradeInfo'

export default {
  components : { UserGuid,TradeInfo,HomeImg }
}
</script>

<style lang="scss">
  .first-glance,.busniss-pub{
    display: flex;
    flex-direction: row;
    z-index: 500;
  }
  .trade-info{
    height: 265px;
    width: 246px;
  }
  .home-img{
    height: 265px;
    width: 640px;
    margin:0 10px;
  }
</style>

