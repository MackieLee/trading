import axios from  'axios'
import router from '../router'

const baseUrl = 'http://aip.kehu.zaidayou.com/api'

axios.interceptors.response.use(function(response){
  console.log(response)
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
    message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
  })
  return Promise.reject(error);
});
/*
* 用户登录
*/
export const loginUserUrl = params => {
  return axios.post(`${baseUrl}/oauth/token`,params)

}
