import * as constants from './constants'
import axios from 'axios'
import { APIUrl } from '../../../config'
import { actionCreators as loadingActionCreators } from '../../../common/loading/store'

const loginAction = (userInfo) => ({
  type: constants.LOGIN,
  userInfo
})
const showLoadingBoxAction = (status) => ({
  type: constants.SHOWLOADINGBOX,
  status
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
    dispatch(loadingActionCreators.changeLoadingTextAction('正在登录'))
    dispatch(showLoadingBoxAction(true))
    axios.post(`${APIUrl}/login/login`, data).then(res => {
      if (res.data.loginStatus === "error") {
        dispatch(loadingActionCreators.changeLoadingTextAction('登录失败'))
        setTimeout(() => {
          dispatch(showLoadingBoxAction(false))
        }, 1500)
      } else if (res.data.loginStatus === "success") {
        dispatch(loadingActionCreators.changeLoadingTextAction('登录成功'))
        setTimeout(() => {
          dispatch(loginAction(res.data.userInfo))
          localStorage.setItem("loginAuthorId", res.data.userInfo.authorId);
          dispatch(showLoadingBoxAction(false))
        }, 1500)
      }
    }).catch(err => {
      dispatch(loadingActionCreators.changeLoadingTextAction('登录失败'))
      setTimeout(() => {
        dispatch(showLoadingBoxAction(false))
      }, 1500)
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
    dispatch(loadingActionCreators.changeLoadingTextAction('正在拼命注册'))
    dispatch(showLoadingBoxAction(true))
    axios.post(`${APIUrl}/login/signup`, { username, password }).then(res => {
      dispatch(loadingActionCreators.changeLoadingTextAction(res.data))
      setTimeout(() => {
        dispatch(showLoadingBoxAction(false))
      }, 1500)
    }).catch(err => {
      dispatch(loadingActionCreators.changeLoadingTextAction("出错，请重新操作！"))
      setTimeout(() => {
        dispatch(showLoadingBoxAction(false))
      }, 1500)
    })
  }
}
