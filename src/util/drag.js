// 参数: 进度条按钮、遮罩层、进度条、当前进度数值
export default function slide(){
  (() => {
    let btn = document.getElementById('slider-btn')
    let bar = document.getElementById('slider-bar')
    let slider = document.getElementById('slider')
    var event = event || window.event
    var leftVal = event.clientX - this.offsetLeft
    var _self = this
    document.onmousemove = function(){
      var event = event.clientX - leftVal
      if(current < 0){
        current = 0
      }else if(current > slider.offsetWidth - btn.offsetWidth){
        currnt = slider.offsetWidth - btn.offsetWidth
        bar.style.width = current + 'px'
        _slef.style.left = current + 'px'
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
      }
    }
  })()
  document.onmouseup = () =>{
    document.onmousemove = null
  }
}
