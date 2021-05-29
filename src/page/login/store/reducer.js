import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginStatus: false,
  userInfo: {},
  showLoginBox: true,
  showLoadingBox: false
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.merge({
        loginStatus: true,
        userInfo: fromJS(action.userInfo)
      })
    case constants.LOGOUT:
      return state.merge({
        loginStatus: false,
        userInfo: fromJS({})
      })
    case constants.CHANGEBOX:
      return state.merge({
        showLoginBox: !state.get('showLoginBox')
      })
    case constants.SHOWLOADINGBOX:
      return state.merge({
        showLoadingBox: action.status
      })
    default:
      return state;
  }

}
export default reducer