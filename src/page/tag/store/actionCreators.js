import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const tagListAction = (tagList) => ({
  type: constants.GETTAGLIST,
  tagList: fromJS(tagList)
})
const ArticleListAction = (articleList) => ({
  type: constants.GETARTICLELIST,
  articleList: fromJS(articleList)
})
export const getTagList = () => {
  return (dispatch) => {
    axios.get('/api/tag/tagList.json').then(res=>{
      dispatch(tagListAction(res.data))
    }).catch(err=>{
      console.log(err)
    })
  }
}
export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/tag/ArticleList.json').then(res=>{
      dispatch(ArticleListAction(res.data))
    }).catch(err=>{
      console.log(err)
    })
  }
}

export const changeCurListAction = (tagId) => ({
  type: constants.CHANGECURLIST,
  tagId
})