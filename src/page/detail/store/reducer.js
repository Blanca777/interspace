import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  content: 0
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETARTICLECONTENT:
      return state.set('content',action.content)
    default:
      return state;
  }

}
export default reducer