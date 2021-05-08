import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const dynamicMsgAction = (dynamicMsg) => ({
  type: constants.GETDYNAMICCONTENT,
  dynamicMsg: fromJS(dynamicMsg)
})

const SidebarAction = (sidebarTitle, sidebarList) => ({
  type: constants.GETSIDEBARCONTENT,
  sidebarTitle: fromJS(sidebarTitle),
  sidebarList: fromJS(sidebarList)
})
const UserInfoAction = (userInfo) => ({
  type: constants.GETUSERINFO,
  userInfo: fromJS(userInfo)
})

export const getDynamicMsg = (dynamicId) => {
  return (dispatch) => {
    axios.get('/api/dynamic/'+dynamicId+'.json').then(res => {
      dispatch(dynamicMsgAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}

export const getSidebarContent = () => {
  return (dispatch) => {
    axios.get('/api/dynamic/sidebar.json').then(res => {
      let { sidebarTitle, sidebarList } = res.data
      dispatch(SidebarAction(sidebarTitle, sidebarList))
    }).catch(err => {
      console.log(err)
    })
  }
}
export const getUserInfo = (userId) => {
  return (dispatch) => {
    axios.get(`/api/dynamic/${userId}/userInfo.json`).then(res => {
      dispatch(UserInfoAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}