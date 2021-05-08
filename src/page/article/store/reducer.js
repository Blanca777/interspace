import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleContent: "",
  articleMsg: {},
  userInfo: {}
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
      case constants.GETUSERINFO:
        return state.merge({
          userInfo: action.userInfo
        });

    default:
      return state;
  }

}
export default reducer