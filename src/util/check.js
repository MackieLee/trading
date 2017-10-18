const validate = (validation,type, value) => {
  return validation[type](value)
}

const formValidation = {
  pwd : (value) => {
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    let reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    return reg.test(value)?'success':'danger'
  },
  userName : (value) => {
    let reg = /^[a-zA-Z0-9_-]{4,16}$/
    return reg.test(value)?'success':'danger'
  },
  user : (value) =>{
    let reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let reg2 = /^1[34578]\d{9}$/
    return (reg1.test(value) || reg2.test(value)) ? 'success':'danger'
  }
}
// /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 身份证正则表达式
export const validateForm = validate.bind(null,formValidation)
