import * as constants from './constants'
import axios from 'axios'
import { APIUrl } from '../../../config'
const ArticleListAction = (articleList) => ({
  type: constants.GETARTICLELIST,
  articleList
})
export const changeCurListAction = (tag) => ({
  type: constants.CHANGECURLIST,
  tag
})
export const getArticleList = () => {
  return (dispatch) => {
    axios.get(`${APIUrl}/tag/articleList`).then(res=>{
      dispatch(ArticleListAction(res.data))
    }).catch(err=>{
      console.log(err)
    })
  }
}

