const validate = (validation,type, value) => {
  return validation[type](value)
}

const formValidation = {
  pwd : (value) => {

  },
  user : (value) => {
    let reg = /^[a-zA-Z0-9_-]{4,16}$/
    return reg.test(value)?'success':'danger'
  }
}

export const validateForm = validate.bind(null,formValidation)
