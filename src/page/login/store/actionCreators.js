import * as constants from './constants'
import axios from 'axios'


const loginAction = (loginMsg) => ({
  type: constants.LOGIN,
  loginMsg
})
export const handleLogout = () => ({
  type: constants.LOGOUT
})
export const handleLogin = (username, password) => {
  const data = {
    username,
    password
  }
  return (dispatch) => {
    axios.post('http://localhost:1777/login/login', data).then(res=>{
      if(res.data.loginStatus === "error"){
        console.log('login err')
      }else if(res.data.loginStatus === "success"){
        dispatch(loginAction(res.data))
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}

