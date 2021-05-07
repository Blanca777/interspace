import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleListAction = (data, totalPage, curList) => ({
  type: constants.GETARTICLELIST,
  articleList: fromJS(data),
  totalPage: fromJS(totalPage),
  curList: fromJS(curList)
})

const RankListAction = (rankList) => ({
  type: constants.GETRANKLIST,
  rankList: fromJS(rankList),
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
export const getRankList = () => {
  return (dispatch) => {
    axios.get('/api/home/rankList.json').then(res => {
      dispatch(RankListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}