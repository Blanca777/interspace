import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  dynamicMsg: {},
  sidebarTitle: "",
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
  userInfo: {},
  login: false,
  showAddDynamic: true,
  fileName: "",
  dynamicTitle: ''

})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETDYNAMICCONTENT:
      return state.merge({
        dynamicMsg: action.dynamicMsg
      })
    case constants.GETSIDEBARCONTENT:
      return state.merge({
        sidebarTitle: action.sidebarTitle,
        sidebarList: action.sidebarList
      })
    case constants.GETUSERINFO:
      return state.merge({
        userInfo: action.userInfo
      });
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