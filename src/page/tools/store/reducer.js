import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  toolsMsg: {},
  sidebarTitle: "",
  sidebarList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETTOOLSCONTENT:
      return state.merge({
        toolsMsg: action.toolsMsg
      }) 
    case constants.GETSIDEBARCONTENT:
      return state.merge({
        sidebarTitle: action.sidebarTitle,
        sidebarList: action.sidebarList
      })

    default:
      return state;
  }

}
export default reducer