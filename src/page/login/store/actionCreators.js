import * as constants from './constants'
import axios from 'axios'
import { APIUrl } from '../../../config'


const loginAction = (userInfo) => ({
  type: constants.LOGIN,
  userInfo
})
export const changeBoxAction = () => ({
  type: constants.CHANGEBOX
})
export const handleLogout = () => {
  localStorage.removeItem('loginAuthorId')
  return {
    type: constants.LOGOUT
  }

}

export const handleLogin = (username, password) => {
  const data = {
    username,
    password
  }
  return (dispatch) => {
    axios.post(`${APIUrl}/login/login`, data).then(res => {
      if (res.data.loginStatus === "error") {
        console.log('login err')
      } else if (res.data.loginStatus === "success") {
        dispatch(loginAction(res.data.userInfo))
        localStorage.setItem("loginAuthorId", res.data.userInfo.authorId);
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
export const longLogin = (authorId) => {
  return (dispatch) => {
    axios.post(`${APIUrl}/login/longLogin`, { authorId }).then(res => {
      dispatch(loginAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
export const handleSignup = (username, password) => {
  return (dispatch) => {
    axios.post(`${APIUrl}/login/signup`, { username, password }).then(res => {
      alert(res.data)
    }).catch(err => {
      console.log(err)
      alert('出错，请重新操作！')
    })
  }
}
