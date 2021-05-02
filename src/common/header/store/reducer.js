import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  temp: false
})
const reducer = (state = defaultState, action) => {
  if (action.type === constants.TEMP1) {
    return state.set('temp', true);
  }
  if (action.type === constants.TEMP2) {
    return state.set('temp', false);
  }
  return state;
}
export default reducer