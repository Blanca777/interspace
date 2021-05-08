import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  dynamicMsg: {},
  sidebarTitle: "",
  sidebarList: [],
  userInfo: {},
  login: false
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
    default:
      return state;
  }

}
export default reducer