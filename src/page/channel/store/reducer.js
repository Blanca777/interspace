import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  speechList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETSPEECHLIST:
      return state.merge({
        speechList: action.speechList
      })
    default:
      return state;
  }

}
export default reducer