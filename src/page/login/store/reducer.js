import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginStatus: false,
  userInfo: {}
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      if (action.loginMsg.loginStatus === 'success') {
        return state.merge({
          loginStatus: true,
          userInfo: fromJS(action.loginMsg.userInfo)
        })
      }
      break;
    case constants.LOGOUT:
      return state.merge({
        loginStatus: false,
        userInfo: fromJS({})
      })
    default:
      return state;
  }

}
export default reducer