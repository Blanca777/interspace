import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const ArticleContentAction = (data) => ({
  type: constants.GETARTICLECONTENT,
  content: fromJS(data)
})
const titleAndSidebarAction = (articleMsg, sidebarList) => ({
  type: constants.TITLEANDSIDEBAR,
  articleMsg: fromJS(articleMsg),
  sidebarList: fromJS(sidebarList)
})


export const getArticleContent = (articleid) => {
  return (dispatch) => {
    axios.get('/api/ArticleContent/'+articleid).then(res => {
      dispatch(ArticleContentAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}
export const getTitleAndSidebarList = (articleid) => {
  return (dispatch) => {
    axios.get('/api/articleList.json').then(res => {
      let data = res.data.data
      for(let i = 0;i<data.length;i++){
        if(data[i].articleid === articleid){
          console.log(data[i].category)
          let sidebarList = data.filter(item=>item.category===data[i].category)
          console.log(sidebarList)
          dispatch(titleAndSidebarAction(data[i], sidebarList))
          break;
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
