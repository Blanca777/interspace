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
const CommentListAction = (commentList) => ({
  type: constants.GETCOMMENTLIST, 
  commentList: fromJS(commentList)
})
const CommentSendAction = () => ({
  type: constants.COMMENTSEND
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
export const getCommentList = () => {
  return (dispatch) => {
    axios.get('/api/article/commentList.json').then(res => {
      dispatch(CommentListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
export const commentTextChange = (commentTextValue) => ({
  type: constants.COMMENTTEXTCHANGE,
  commentTextValue
})
export const commentSend = (commentTextValue, authorId) => {
  const data = {commentTextValue,authorId}
  return (dispatch) => {
    axios.post('/api/article/addCommentList.json',data).then(res => {
      if(res.data.status = 'success'){
        dispatch(CommentSendAction(res.data.commentList))
      }else{
        alert('出现未知错误，请重新输入！')
      }
      
    }).catch(err => {
      console.log(err)
    })
  }
}