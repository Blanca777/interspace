import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginStatus: false,
  userInfo: {}
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
    default:
      return state;
  }

}
export default reducer