import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleListAction = (data, totalPage, curList) => ({
  type: constants.GETARTICLELIST,
  articleList: fromJS(data),
  totalPage: fromJS(totalPage),
  curList: fromJS(curList)
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
    axios.get('/api/ArticleList.json').then(res => {
      let data = res.data
      let curList = data.data.slice(0,7)
      let totalPage = Math.ceil(data.data.length / 7)
      dispatch(ArticleListAction(data.data, totalPage, curList))
    }).catch(err => {
      console.log(err)
    })
  }
}