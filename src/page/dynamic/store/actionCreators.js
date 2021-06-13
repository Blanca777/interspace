import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'
import { actionCreators as loadingActionCreators } from '../../../common/loading/store'
const authorInfoAction = (authorInfo, dynamicList) => ({
  type: constants.GETAUTHORINFO,
  authorInfo: fromJS(authorInfo),
  dynamicList
})

const addPersonalDynamicAction = (authorInfo) => ({
  type: constants.ADDPERSONALDYNAMIC,
  authorInfo: fromJS(authorInfo)
})
const deleteDynamicItemAction = (authorInfo) => ({
  type: constants.DELETEDYNAMICITEM,
  authorInfo: fromJS(authorInfo)
})
export const showLoadingBoxAction = (status) => ({
  type: constants.SHOWLOADINGBOX,
  status
})
export const addArticleDynamicAction = (authorInfo) => ({
  type: constants.ADDARTICLEDYNAMIC,
  authorInfo: fromJS(authorInfo)
})
export const changeDynamicList = (dynamicId) => ({
  type: constants.CHANGEDYNAMICLIST,
  dynamicId
})
export const showAddDynamicBox = (dynamicId) => ({
  type: constants.SHOWADDDYNAMIC,
  dynamicId
})
export const AddPersonalDynamic = (dynamicText, authorId) => {
  let data = {
    dynamicText,
    authorId
  }
  return (dispatch) => {
    axios.post(`${APIUrl}/dynamic/addPersonalDynamic`, data).then(res => {
      dispatch(addPersonalDynamicAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
export const changeFileName = (fileName) => {
  return {
    type: constants.CHANGEFILENAME,
    fileName
  }
}
export const getAuthorInfo = (authorId, dynamicList) => {
  return (dispatch) => {
    dispatch(loadingActionCreators.changeLoadingTextAction('正在拼命加载'))
    axios.get(`${APIUrl}/dynamic/${authorId}`).then(res => {
      if (res.status === 200) {
        dispatch(authorInfoAction(res.data, dynamicList))
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
export const deleteDynamicItem = (authorId, dynamicId) => {
  return (dispatch) => {
    dispatch(showLoadingBoxAction(true));
    
    dispatch(loadingActionCreators.changeLoadingTextAction("删除中"));
    axios.post(`${APIUrl}/dynamic/deleteDynamicItem`,{authorId, dynamicId}).then(res=>{
      if(res.status ===200) {
        dispatch(deleteDynamicItemAction(res.data));
      }
    }).catch(err => {
      console.log(err);
    }).finally(()=>{
      setTimeout(()=>{
        dispatch(showLoadingBoxAction(false));

      },500)
      
    })
    
    
  }
}