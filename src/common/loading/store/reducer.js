import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loadingText: ''
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGELOADINGTEXT:
      return state.merge({
        loadingText: action.loadingText
      })

    default:
      return state
  }
}
export default reducer