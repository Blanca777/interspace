import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleContent: "",
  articleMsg: {},
  userInfo: {},
  commentList: [],
  commentTextValue: "123"
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
    case constants.GETCOMMENTLIST:
      return state.merge({
        commentList: action.commentList
      });
    case constants.COMMENTTEXTCHANGE:
      return state.merge({
        commentTextValue: action.commentTextValue
      });
    case constants.COMMENTSEND:
      return state.merge({
        commentTextValue: "",
        commentList: action.newCommentList
      });
    default:
      return state;
  }

}
export default reducer