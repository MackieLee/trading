import axios from  'axios'
import router from '../router'
/*
* 用户登录
*/
export const loginUserUrl = (url,params) => {
  return axios({
  	method:'post',
  	url:url,
  	data:params,
  	transformRequest: [function (data) {
	    let res = ''
	    for (let it in data) {
	      res += it + '=' + data[it] + '&'
	    }
	    return res = res.slice(0,-1)
	  }]
  }).then((response)=>{
  	let res = response.data
  	if(res.intro){
//		alert(res.intro)
  	}else{
  		console.log(res.data)
  		return true
  	}
  }).catch(
  	(error)=>{console.log(error)}
  )
}
