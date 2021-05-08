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

const UserInfoAction = (userInfo) => ({
  type: constants.GETUSERINFO, 
  userInfo: fromJS(userInfo)
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

export const getUserInfo = () => {
  return (dispatch) => {
    axios.get('/api/article/userInfo.json').then(res => {
      dispatch(UserInfoAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}