import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleContent: "",
  articleMsg: {},
  sidebarTitle: "",
  sidebarList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETARTICLEMSG:
      return state.merge({
        articleMsg: action.articleMsg
      }) 
    case constants.GETARTICLECONTENT:
      return state.merge({
        articleContent: action.articleContent
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