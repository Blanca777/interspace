import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  personalDynamic: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETCHANNELLIST:
      return state.merge({
        personalDynamic: action.personalDynamic
      })
    default:
      return state;
  }

}
export default reducer