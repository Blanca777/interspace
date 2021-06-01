import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { APIUrl } from '../../../config'

const getChannelListAction = (channelList) => ({
  type: constants.GETCHANNELLIST,
  channelList: fromJS(channelList)
})

export const getChannelList = () => {
  return (dispatch) => {
    axios.get(`${APIUrl}/channel/getChannelList`).then(res => {
      dispatch(getChannelListAction(res.data))
    }).catch(err => {
      console.log(err)
    })
  } 
}
