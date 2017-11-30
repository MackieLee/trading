const validate = (validation,type, value) => {
  return validation[type](value)
}
const formValidation = {
  //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  // 在规则判断之后加上数据判断
  pwd : (value) => {
    let reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    return reg.test(value)?'success':'danger'
  },
  // 用户名正则，只能包含大小写字母，中文，数字，下划线。长度为4-16
  userName : (value) => {
    let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,8}$/
    if(reg.test(value)){
      // 在此处进行数据验证，返回正确 或者是 用户名 重复
      if('success'){
        return 'success'
      }else{
        return 'repeat'
      }
    }else{
      return 'danger'
    }
  },
  // 邮箱/手机号正则
  user : (value) =>{
    let reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let reg2 = /^1[345789]\d{9}$/
    return (reg1.test(value) || reg2.test(value)) ? 'success':'danger'
    // if(reg.test(value)){
      // 在此处进行数据验证，返回正确 或者是 用户名 重复
    //   if('success'){
    //     return 'success'
    //   }else{
    //     return 'repeat'
    //   }
    // }else{
    //   return 'danger'
    // }
  },

}
// /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 身份证正则表达式
export const validateForm = validate.bind(null,formValidation)
