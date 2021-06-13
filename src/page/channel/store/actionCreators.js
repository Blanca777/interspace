import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'

const getSpeechListAction = (speechList) => ({
  type: constants.GETSPEECHLIST,
  speechList: fromJS(speechList)
})

export const getSpeechList = () => {
  return (dispatch) => {
    axios.get(`${APIUrl}/channel/speechList`).then(res => {
      dispatch(getSpeechListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}
