import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleContentAction = (data) => ({
  type: constants.GETARTICLECONTENT,
  content: fromJS(data)
})

export const getArticleContent = (articleid) => {
  return (dispatch) => {
    axios.get('/api/ArticleContent/'+articleid).then(res => {
      // console.log(res)
      dispatch(ArticleContentAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}