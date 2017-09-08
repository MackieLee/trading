<template>
  <div class="customize">
    <div class="cur-posi">
      <p>
        <i></i>当前位置 : &nbsp;
        <router-link to="/home">九鼎财税</router-link>&nbsp;&gt;&nbsp;图书
      </p>
    </div>
    <div class="content">
      <font>2017专属您的私人定制</font>
      <form>
        <div class="all-in">
          <label>听课人数：</label><input name="sum" type="text" /></div>
        <div>
          <label>地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 址：</label>
          <select v-model="selected">
            <option v-for=" item in province" :key="item" :value=" item ">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
        </div>
        <div>
          <label>时间安排：</label>
          <select v-model="selected">
            <option v-for=" item in province" :key="item" :value=" item ">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
          <select v-if="city">
            <option v-for=" item in city" :key="item">{{ item }}</option>
          </select>
        </div>
        <div>
          <label>课 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 题：</label>
          <select>
            <option></option>
          </select>
        </div>
        <div>
          <label>讲师要求：</label>
          <select>
            <option></option>
          </select>
        </div>
        <div class="all-in">
          <label>声 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 明：</label><input/>
        </div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userState: '',
      pwdState: '',
      confirmState: '',
      adressState: false,
      emailState: '',
      phoneNumState: '',
      selected: null,
      birth: {
        year: 2000,
        mon: 1,
        day: 1
      },
      uNameError: {
        "error_01": "只能包含字母，数字下划线和中文字体，长度不能超过12个字符",
        "error_02": "用户名已经被使用"
      },
      pwdError: {
        "error_01": "两次输入的密码不一致",
        "error_02": "密码长度不能超过12个字符"
      },
      province: ['', '北京', '上海', '南京', '山东', '河北', '河南'],
      cityObj: {
        "北京": ['朝阳', '海淀', '通州', '丰台'],
        "山东": ['青岛', '济南', '临沂']
      }
    }
  },
  computed: {
    city: function() {
      return this.cityObj[this.selected]
    }
  },
  methods: {
    changeBirthday: function(e) {
      let what = e.target.dataset.tar
      if (e.target.dataset.act === 'plus') {
        let [mon, day] = [this.birth.mon, this.birth.day]
        this.birth[what]++
        what === "mon" && mon === 12 ? this.birth.mon = 1 : what === "day" ? ((mon === 2 && day === 29) || (mon === (4 || 6 || 9 || 11) && day === 30) || day === 31 ? this.birth.day = 1 : "") : ""
      } else if (e.target.dataset.act === 'decre' && this.birth[what] > 1) {
        this.birth[what]--
      }
    },
    submit: function() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.customize {
  width: $width;
  margin: 0 auto;
  i {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url('../../assets/images/Sprite.png');
    vertical-align: text-bottom;
  }
  .cur-posi {
    padding: 26px 0;
    i {
      background-position: -106px -204px;
      margin-right: 6px;
    }
  }
  .content {
    background-color: $white;
    margin: 18px 0 0 0;
    padding: 94px 100px 200px 134px;
    font {
      font-size: 36px;
      color: $red;
      display: block;
      text-align: center;
    }

    form {
      margin-top: 106px;
      div {
        display: flex;
        margin: 31px;
      }
      label {
        margin-right: 15px;
        font-weight: bold;
      }
      select{
        width: 180px;
        height: 40px;
        margin-right: 30px;
      }
      .all-in{
        input{
          width: 725px;
          height: 38px;
        }
      }
    }
  }
}
</style>
