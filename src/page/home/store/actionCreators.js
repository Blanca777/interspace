import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleListAction = (data, totalPage, curList) => ({
  type: constants.GETARTICLELIST,
  articleList: fromJS(data),
  totalPage: fromJS(totalPage),
  curList: fromJS(curList)
})
const UserInfoAction = (userInfo) => ({
  type: constants.GETUSERINFO,
  userInfo: fromJS(userInfo)
})

export const ChangePageAction = (page) => ({
  type: constants.CHANGEPAGE,
  page: fromJS(page)
})
export const PrevPageAction = () => ({
  type: constants.PREVPAGE
})
export const NextPageAction = () => ({
  type: constants.NEXTPAGE
})
export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/home/articleList.json').then(res => {
      let curList = res.data.slice(0, 7)
      let totalPage = Math.ceil(res.data.length / 7)
      dispatch(ArticleListAction(res.data, totalPage, curList))
    }).catch(err => {
      console.log(err)
    })
  }
}
export const getUserInfo = () => {
  return (dispatch) => {
    axios.get('/api/home/userInfo.json').then(res => {
      dispatch(UserInfoAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}