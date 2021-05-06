import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const toolsMsgAction = (toolsMsg) => ({
  type: constants.GETTOOLSCONTENT,
  toolsMsg: fromJS(toolsMsg)
})

const SidebarAction = (sidebarTitle, sidebarList) => ({
  type: constants.GETSIDEBARCONTENT,
  sidebarTitle: fromJS(sidebarTitle),
  sidebarList: fromJS(sidebarList)
})

export const getToolsMsg = (toolsId) => {
  return (dispatch) => {
    axios.get('/api/tools/'+toolsId+'.json').then(res => {
      dispatch(toolsMsgAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}

export const getSidebarContent = () => {
  return (dispatch) => {
    axios.get('/api/tools/sidebar.json').then(res => {
      let { sidebarTitle, sidebarList } = res.data
      dispatch(SidebarAction(sidebarTitle, sidebarList))
    }).catch(err => {
      console.log(err)
    })
  }
}
