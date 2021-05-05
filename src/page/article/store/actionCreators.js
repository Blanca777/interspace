import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const articleMsgAction = (articleMsg) => ({
  type: constants.GETARTICLEMSG,
  articleMsg: fromJS(articleMsg)
})

const articleContentAction = (articleContent) => ({
  type: constants.GETARTICLECONTENT,
  articleContent: fromJS(articleContent)
})

const SidebarAction = (sidebarTitle, sidebarList) => ({
  type: constants.GETSIDEBARCONTENT,
  sidebarTitle: fromJS(sidebarTitle),
  sidebarList: fromJS(sidebarList)
})

export const getArticleMsg = (articleid) => {
  return (dispatch) => {
    axios.get('/api/article/'+articleid+'.json').then(res => {
      dispatch(articleMsgAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}
export const getArticleContent = (articleid) => {
  return (dispatch) => {
    axios.get('/api/article/'+articleid+'.md').then(res => {
      dispatch(articleContentAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}

export const getSidebarContent = (articleid) => {
  return (dispatch) => {
    axios.get('/api/article/sidebar.json').then(res => {
      let { sidebarTitle, sidebarList } = res.data
      dispatch(SidebarAction(sidebarTitle, sidebarList))
    }).catch(err => {
      console.log(err)
    })
  }
}
