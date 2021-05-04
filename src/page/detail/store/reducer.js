import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleid: 0
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETARTICLECONTENT:
      return state
    default:
      return state;
  }

}
export default reducer