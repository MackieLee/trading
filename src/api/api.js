import axios from  'axios'
import router from '../router'
/*
* 用户登录
*/
export const loginUserUrl = (url,params) => {
  return axios({
  	method:'post',
  	url:'http://aip.kehu.zaidayou.com/api/execute/'+ url,
  	data:params,
  	transformRequest: [function (data) {
	    let res = ''
	    for (let it in data) {
	      res += it + '=' + data[it] + '&'
	    }
	    return res = res.slice(0,-1)
	  }]
}).then((response)=>{
  // console.log(response)
  let err_code = response.data.error_code
  if(err_code === 0){
    return response.data
  }else if(err_code === 10006){
    return '暂无数据'
  }else if(err_code === 10004){
    return err_code
  }
}).catch(
  	(error)=>{console.log(error)}
  )
}
