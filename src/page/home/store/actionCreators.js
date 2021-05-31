import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'
import { actionCreators as loadingActionCreators } from '../../../common/loading/store'

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
    dispatch(loadingActionCreators.changeLoadingTextAction('正在拼命加载,如果等待时间过长请刷新页面！'))
    axios.get(`${APIUrl}/home/articleList`).then(res => {
      if (res.status === 200) {
        let curList = res.data.slice(0, 7);
        let totalPage = Math.ceil(res.data.length / 7);
        dispatch(ArticleListAction(res.data, totalPage, curList));
        setTimeout(() => {
          dispatch(showLoadingBoxAction(false));
        }, 500)
      }else{
        alert(res.data);
      }
    }).catch(err => {
      alert("请刷新页面！");
      console.log(err);
    })
  }
}
export const getRankList = () => {
  return (dispatch) => {
    axios.get(`${APIUrl}/home/rankList`).then(res => {
      if(res.status === 200){
        dispatch(RankListAction(res.data))
      }else{
        alert(res.data);
      }
      
    }).catch(err => {
      alert("请刷新页面！");
      console.log(err)
    })
  }
}
export const showLoadingBoxAction = (status) => ({
  type: constants.SHOWLOADINGBOX,
  status
})