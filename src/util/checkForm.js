var validate = (validation,type,e) => {
  return validation[type](e.target.value)
}
validate.bind(validation)
const validation = {
  password : (value) => {},
  user : (value) => {}
}
export default{
  validate,
  validation
}
