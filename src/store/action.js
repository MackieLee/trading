import { USER_ADD } from './mutations'

// 分发增加用户信息的Action
export default addUser = ({ dispatch })=>{
  store.dispatch([ USER_ADD ])
}
