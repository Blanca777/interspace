import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'

const authorInfoAction = (authorInfo) => ({
  type: constants.GETAUTHORINFO,
  authorInfo: fromJS(authorInfo)  
})
const addPersonalDynamicAction = (authorInfo) => ({
  type: constants.ADDPERSONALDYNAMIC,
  authorInfo: fromJS(authorInfo)  
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
export const AddPersonalDynamic = (dynamicText,authorId) => {
  let data = {
    dynamicText,
    authorId
  }
  return (dispatch) => {
    axios.post(`${APIUrl}/dynamic/addPersonalDynamic`,data).then(res => {
      dispatch(addPersonalDynamicAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}
export const changeFileName = (file) => {
  return {
    type: constants.CHANGEFILENAME,
    fileName: file.name
  }
}
export const getAuthorInfo = (authorId) => {
  return (dispatch) => {
    axios.get(`${APIUrl}/dynamic/${authorId}`).then(res => {
      dispatch(authorInfoAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
} 
