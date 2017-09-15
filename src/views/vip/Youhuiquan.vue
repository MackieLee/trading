<template>
  <div class="my_qianb_r">
    <p class="p01">优惠券</p>
    <div class="my_qianb_cotainer">
      <p class="p02">
        <span>已使用</span>|
        <span class="cur">未使用</span>|
        <span>即将过期</span>|
        <span>已过期</span>
      </p>
      <div class="div01">
        <ul class="l">
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
          <li>面 值： 50</li>
          <li>期 限： 2017-9-29——2017-10-29</li>
          <li>限类品： 视频</li>
          <li>券编号：8792456354</li>
        </ul>
        <ul class="r">
          <li>面 值： 50</li>
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
  name: 'qianbao'
}
</script>

<style lang="scss" scoped>
.my_qianb_r {
  width: 800px;
  margin: 0 auto;
  background-color: #fff;
}
.my_qianb_cotainer{
  padding: 0 16px 65px 44px;
}
.my_qianb_r .p01 {
  color: #fff;
  height: 46px;
  line-height: 46px;
  font-size: 20px;
  width: 100%;
  background: #838383;
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
