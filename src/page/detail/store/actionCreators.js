import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleContentAction = () => ({
  type: constants.GETARTICLECONTENT
})

export const getArticleContent = (articleid) => {
  return (dispatch) => {
    axios.get('/api/ArticleContent/'+articleid).then(res => {
      console.log(res)
      // dispatch(ArticleContentAction())
    }).catch(err => {
      console.log(err)
    })
  }
}