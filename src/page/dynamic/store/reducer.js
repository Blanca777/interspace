import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  sidebarList: [
    {
      "dynamicId": "personalDynamic",
      "dynamicTitle": "个人动态"
    },
    {
      "dynamicId": "articleDynamic",
      "dynamicTitle": "文章动态"
    }

  ], 
  dynamicList: [],
  authorInfo: {},
  login: false,
  showAddDynamic: true,
  fileName: "",
  dynamicTitle: ''

})
const getAuthorInfo = (state, action) => {
  return state.merge({
    dynamicList: action.authorInfo.get( 'articleDynamic'),
    authorInfo: action.authorInfo
  })
}
const changeDynamicList = (state, action) => {
  return state.merge({
    dynamicList: state.getIn(["authorInfo", action.dynamicId])
  })
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETAUTHORINFO:
      return getAuthorInfo(state, action)
    case constants.CHANGEDYNAMICLIST:
      return changeDynamicList(state, action)
    case constants.SHOWADDDYNAMIC:
      return state.merge({
        showAddDynamic: !state.get('showAddDynamic'),
        dynamicTitle: '',
        fileName: ''
      });
    case constants.CHANGEDYNAMICTITLE:
      return state.merge({
        dynamicTitle: action.dynamicTitle
      })
    case constants.CHANGEFILENAME:
      return state.merge({
        fileName: action.fileName
      })
    default:
      return state;
  }

}
export default reducer