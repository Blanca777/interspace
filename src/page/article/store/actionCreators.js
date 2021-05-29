import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'
import { actionCreators as loadingActionCreators } from '../../../common/loading/store'

const articleMsgAction = (articleMsg) => ({
  type: constants.GETARTICLEMSG,
  articleMsg: fromJS(articleMsg),
  commentList: fromJS(articleMsg.commentList)
})

const articleContentAction = (articleContent) => ({
  type: constants.GETARTICLECONTENT,
  articleContent: fromJS(articleContent)
})
const updateCommentListAction = (commentList) => ({
  type: constants.UPDATECOMMENTLIST,
  commentList: fromJS(commentList)
})
const uerInfoAction = (userInfo) => ({
  type: constants.GETUSERINFO,
  userInfo: fromJS(userInfo)
})
export const showLoadingBoxAction = (status) => ({
  type: constants.SHOWLOADINGBOX,
  status
})
export const getArticleMsg = (articleId) => {
  return (dispatch) => {
    axios.get(`${APIUrl}/article/${articleId}`).then(res => {
      if (res.status === 200) {
        dispatch(articleMsgAction(res.data))
      } else {
        alert(res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
export const getArticleContent = (articleId) => {
  return (dispatch) => {
    dispatch(loadingActionCreators.changeLoadingTextAction('正在拼命加载'))
    axios.get(`${APIUrl}/article/md/${articleId}`).then(res => {
      if (res.status === 200) {
        dispatch(articleContentAction(res.data))
        setTimeout(() => {
          dispatch(showLoadingBoxAction(false))
        }, 500)
      } else {
        alert(res.data)
      }

    }).catch(err => {
      console.log(err)
    })
  }
}

export const getUserInfo = (authorId) => {
  return (dispatch) => {
    axios.get(`${APIUrl}/article/author/${authorId}`).then(res => {
      if (res.status === 200) {
        dispatch(uerInfoAction(res.data))
      } else {
        alert(res.data)
      }

    }).catch(err => {
      console.log(err)
    })
  }
}
export const commentTextChange = (commentTextValue) => ({
  type: constants.COMMENTTEXTCHANGE,
  commentTextValue
})
export const commentSend = (commentTextValue, authorId, authorName, articleId) => {
  const data = { commentText: commentTextValue, authorId, authorName, articleId }
  return (dispatch) => {
    axios.post(`${APIUrl}/article/addComment`, data).then(res => {
      if (res.status === 201) {
        dispatch(articleMsgAction(res.data))
        dispatch(commentTextChange(''))
      } else {
        alert('出现未知错误，请重新输入！')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
export const replySend = (replyText, authorId, authorName, articleId, commentId) => {
  const data = { replyText: replyText.value, authorId, authorName, articleId, commentId }
  return (dispatch) => {
    axios.post(`${APIUrl}/article/addReply`, data).then(res => {
      if (res.status === 201) {
        dispatch(updateCommentListAction(res.data.commentList))
        replyText.value = ''
      } else {
        alert('出现未知错误，请重新输入！')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}