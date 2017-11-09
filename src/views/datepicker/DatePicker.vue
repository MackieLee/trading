<template>
  <div class="date_picker" @click="endResult()">
    <div class="date_input_box">
      <input type="text" class="date_input" readonly :value="reslt" @click="showPanel" @mouseout="hidePanel">
    </div>
    <datePanel :panelStatus="panelStatus" :clearPanelTimer="clearPanelTimer" :hidePanel="hidePanel" :choosed="choosed"></datePanel>
    <span class="splite">-</span><input class="end-date" :value="result" readonly/>
  </div>
</template>
<script>
import DatePanel from './DatePanel'
export default {
  name: 'datepicker',
  components: { DatePanel },
  data() {
    return {
      //panel是否显示
      panelStatus: false,
      //一个setTimeout的储存器
      panelTimer: '',
      //保存选择的年月日
      choosed: {
        year: '',
        month: '',
        day: ''
      },
      endDate: {
        year: '',
        month: '',
        day: ''
      }
    }
  },
  computed: {
    //根据选择的年月计算最终显示的结果
    reslt: function() {
      const _self = this
      const year = _self.choosed.year
      const month = _self.choosed.month
      const day = _self.choosed.day
      return !year || !month || !day ? '日期' : (year + '.' + month + '.' + day)
    },
    result: function(){
      let day = this.endDate.day
      let month = this.endDate.month
      let year = this.endDate.year
      return !year || !month || !day ? '日期' : (year + '.' + month + '.' + day)
    }
  },
  methods: {
    showPanel: function() {
      this.panelStatus = true;
    },
    hidePanel: function(_t) {
      const _self = this;
      _self.clearPanelTimer();
      const timer = !!_t && !isNaN(parseInt(_t)) ? parseInt(_t) : 1000;
      _self.panelTimer = setTimeout(function() {
        _self.panelStatus = false;
      }, timer);
    },
    clearPanelTimer: function() {
      clearTimeout(this.panelTimer);
    },
    endResult: function() {
      let day = this.choosed.day
      let month = this.choosed.month
      let year = this.choosed.year
      let days = new Date(2016, month, 0).getDate()
      if (day >= (days - 1) && month != '12') {
        this.endDate.day = day - days + 2
        this.endDate.month = month + 1
        this.endDate.year = year
      } else if (day >= (days - 1) && month == '12') {
        this.endDate.day = day - days + 2
        this.endDate.month = '1'
        this.endDate.year = year + 1
      } else {
        this.endDate.year = year
        this.endDate.month = month
        this.endDate.day = day + 2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.date_picker {
  display: flex;
  width: 205px;
  position: relative;
  input{
    text-indent: 1em;
  }
}

.date_input_box {
  width: 180px;
  background: $white;
  span {
    display: inline-block;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border-left: 1px solid #9D94B0;
    cursor: pointer;
  }
}

.flex {
  display: flex;
  .end-date {
    width: 94px;
    height: 33px;
    border: 1px solid #ddd;
  }
  .splite {
    margin: 0 5px;
    line-height: 35px;
  }
}

.date_input {
  width: 94px;
  box-sizing: border-box;
  height: 35px;
  line-height: 35px;
  border: 1px solid #ddd;
  font-size: 14px;
  cursor: pointer;
}
</style>
