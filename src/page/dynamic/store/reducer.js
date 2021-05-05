import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  content: 0,
  articleMsg: {},
  sidebarList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETARTICLECONTENT:
      return state.merge({
        content: action.content
      }) 
    case constants.TITLEANDSIDEBAR:
      return state.merge({
        articleMsg: action.articleMsg,
        sidebarList: action.sidebarList
      })

    default:
      return state;
  }

}
export default reducer