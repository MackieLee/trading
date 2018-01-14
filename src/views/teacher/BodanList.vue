<template>
  <div class="video-list">
    <Modal
      :width="700"
      v-model="modal"
      :closable="false"
      :mask-closable="false"
    >
      <Form :model="bodan" ref="bodan" label-position="left" :label-width="100">
        <FormItem label="标题" prop="name">
          <Input v-model="bodan.name"></Input>
        </FormItem>
        <FormItem label="简要介绍" prop="intro">
          <Input v-model="bodan.intro"></Input>
        </FormItem>
        <FormItem label="现价" prop="money">
          <Input v-model="bodan.money"></Input>
        </FormItem>
        <FormItem label="原价" prop="moneyMarketing">
          <Input v-model="bodan.moneyMarketing"></Input>
        </FormItem>
        <FormItem label="适合人群" prop="crowd">
          <Input v-model="bodan.crowd"></Input>
        </FormItem>
        <FormItem label="课程介绍" prop="value">
          <Input v-model="bodan.value" type="textarea" :autosize="{minRows: 2,maxRows: 12}" placeholder="课程介绍"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="submit">提交</Button>
        <Button type="ghost" @click="handleReset" style="margin-left: 8px">取消</Button>
      </div>
    </Modal>
    <div class="head">
      <div class="all">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
        <span>创建播单</span><span>删除</span>
      </div>
      <div class="title">
        <span class="fl">播单</span>
        <span class="fr" style="text-align:center">视频数</span>
        <span class="fr">操作</span>
      </div>
      <div style="height:20px;"></div>
    </div>
    <div class="upload-box">
      <table>
        <CheckboxGroup v-model="bodanDel" @on-change="bodanDelChange">
        <tr height="120" v-for="item in classes" :key="item.id">
          <td width='50'>
            <Checkbox :label="item.name"><span></span></Checkbox>
          </td>
          <th width='550'>
            <div class="fl">
              <img src="../../assets/images/huanyuanzx02.png" alt="" />
            </div>
            <div class="fl h-100">
              <div class="title">
                <p>{{ item.name }}</p>
              </div>
              <p class="date">2017-12-5 17:09:51</p>
            </div>
          </th>
          <td width='100'>
            视频:2
          </td>
          <td width='100'>
            <p @click="modal = true,gid = item.id">
              修改播单
            </p>
            <router-link tag="p" :to="{ name:'bodanmanger' }">管理播单</router-link>
            <p>删除</p>
          </td>
        </tr>
        </CheckboxGroup>
      </table>
    </div>
    <div class="pgs">
      <li class="prev">&lt;上一页</li>
      <li class="current">1</li>
      <li class="custom">2</li>
      <li class="custom">3</li>
      <li class="custom">4</li>
      <li class="points">...</li>
      <li class="jump"><input type="tel" maxlength="3"> /40页</li>
      <li class="submit">确定</li>
      <li class="next">下一页&gt;</li>
    </div>
  </div>
</template>

<script>
import { loginUserUrl } from '@/api/api'
export default {
  data() {
    return {
      classes: [],
      bodanDel:[],
      blankChoosen:[],
      indeterminate:false,
      checkAll:false,
      modal:false,
      bodan:{
        name:'',
        intro:'',
        money:'',
        moneyMarketing:'',
        crowd:'',
        value:''
      },
      gid:''
    }
  },
  methods: {
    handleReset:function(){
      this.$refs.bodan.resetFields()
      this.modal=false
    },
    submit:function(){
      let bodan = this.bodan
      let res = loginUserUrl('http://aip.kehu.zaidayou.com/api/execute/getOnline_Courses_update',{
        username: "niuhongda",
        password: "123123q",
        gid:this.gid,
        bodan
      }).then((res)=>{
        console.log(res)
      })
      this.$router.go(0)
    },
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.bodanDel = this.blankChoosen
      } else {
        this.bodanDel = [];
      }
    },
    bodanDelChange (data) {
      if (data.length === this.classes.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  },
  mounted () {
    let res = loginUserUrl('http://aip.kehu.zaidayou.com/api/execute/getOnline_Courses',{
      username: "niuhongda",
      password: "123123q"
    }).then((res)=>{
      // console.log(res)
      this.classes = res.data
      for(let i = 0;i<res.data.length;i++){
        // 将name 换成id！！！
        this.blankChoosen.push(res.data[i].name)
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.modal-outer {
  width: 100%;
  height: 173%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .modal {
    height: 110%;
  }
  .close {
    position: absolute;
    top: 15%;
    left: 60%;
  }
}
.active {
  border-bottom: 1px solid $red;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.head {
  .title {
    background-color: $bg-nav;
    line-height: 35px;
    overflow: hidden;
    span {
      width: 70px;
      text-align: center;
    }
  }
}
.all{
  line-height:35px;
  margin: 15px 0;
  label{
    margin:0 15px 0 10px;
  }
  span{
    padding: 5px 15px;
    margin-left: 10px;
    border: 1px solid $border-dark;
  }
}
.upload-box {
  border: 1px solid $border-dark;
  margin-bottom: 20px;
  padding: 10px;

  table {
    th,
    td {
      height: 60px;
      // border: 1px solid $border-dark;
      border-bottom: 1px dashed $border-dark;
    }
    th {
      font-weight: bold;
      text-align: left;
      .h-100{
        height: 100px;
        width: 360px;
      }
      .title {
        height: 40px;
        p {
          line-height: 30px;
          font-size: 14px;
          margin-left: 20px;
        }
      }
      .date {
        color: $dark;
        margin: 36px 20px;
      }
    }
    td {
      text-align: center;
      p {
        line-height: 30px;
        cursor: pointer;
      }
    }
    img {
      width: 180px;
      height: 100px;
    }
  }
}
.pgs {
  width: 525px;
  margin: 60px auto;
  li {
    width: 33px;
    padding: 4px 0;
    line-height: 20px;
    text-align: center;
    margin-right: 2px;
    cursor: pointer;
    border: 1px solid $border-dark;
    color: $black;
  }
  .prev {
    width: 73px;
    color: $blue;
  }
  .next {
    width: 96px;
    color: $blue;
  }
  .points {
    border: none;
  }
  .submit {
    background-color: $btn-default;
    color: $white;
    width: 44px;
    border: none;
  }
  .jump {
    width: 80px;
    border: 1px solid $border-dark;
    color: #333;
    input {
      width: 30px;
      border: 1px solid $border-dark;
      outline: none;
    }
  }
  .current {
    background-color: $btn-default;
    color: $white;
  }
}
</style>
