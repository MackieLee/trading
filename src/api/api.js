import axios from  'axios'
import router from '../router'

// const baseUrl = 'http://aip.kehu.zaidayou.com/api'

axios.interceptors.response.use(function(response){
  // router.push({name:'home'})
  return response;
},function(error){
  let message = ''
  switch(error.response.status){
    case 401:
    message:'授权错误'
    router.push({name:'home'})
    break;
  }
  const h = this.$createElement
  this.$notify({
    title: '标题名称',
    message: h('i', { style: 'color: teal'},'这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
  })
  return Promise.reject(error);
});
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
	    return res
	  }]
  }).then((response)=>{
  	console.log(response.data)
  })
}
