<template>
  <div class="my_qianb_r">
    <p class="p01">优惠券</p>
    <div class="my_qianb_cotainer">
      <p class="p02" @click="toggle()">
        <span data-ref='1'>已使用</span>|
        <span data-ref='2' class="cur">未使用</span>|
        <span data-ref='3'>即将过期</span>|
        <span data-ref='4'>已过期</span>
      </p>
      <div class="div01" v-if="part=='1'">
        <ul class="l">
          <li>面 值： 1</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
        <ul class="r">
          <li>面 值： 2</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
      </div>
      <div class="div01" v-if="part=='2'">
        <ul class="l">
          <li>面 值： 3</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
        <ul class="r">
          <li>面 值： 4</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
      </div>
      <div class="div01" v-if="part=='3'">
        <ul class="l">
          <li>面 值： 5</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
        <ul class="r">
          <li>面 值： 6</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
      </div>
      <div class="div01" v-if="part=='4'">
        <ul class="l">
          <li>面 值： 7</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
        <ul class="r">
          <li>面 值： 8</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'youhuiquan',
  data(){
    return{
      part:'2'
    }
  },
  methods:{
    toggle(){
      document.getElementsByClassName('cur')[0].className = ''
      event.target.setAttribute('class','cur')
      let ref = event.target.dataset.ref
      this.part = ref
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.my_qianb_r {
  width: 800px;
  margin: 0 auto;
  background-color: $white;
}
.my_qianb_cotainer{
  padding: 0 16px 65px 44px;
}
.my_qianb_r .p01 {
  color: $white;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  width: 100%;
  background: $bg-blue;
  text-align: center;
}

.my_qianb_r .p02 {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}

.my_qianb_r .p02 span {
  height: 50px;
  width: 160px;
  display: inline-block;
  text-align: center;
  line-height: 50px;
}

.my_qianb_r .p02 .cur {
  border-bottom: 1px solid #e7151b;
  color: #e7151b;
}

.my_qianb_r .div01 {
  height: auto;
  width: 100%;
  overflow: hidden;
}

.my_qianb_r .div01 .l,
.my_qianb_r .div01 .r {
  width: 370px;
  font-size: 14px;
  color: #333;
  float: left;
}

.my_qianb_r .div01 .r {
  float: right;
}

.my_qianb_r .div01 .l li,
.my_qianb_r .div01 .r li {
  margin-top: 30px;
}
</style>
