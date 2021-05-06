import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagList: [],
  articleList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETTAGLIST:
      return state.merge({
        tagList: action.tagList
      }) 
    case constants.GETARTICLELIST:
      return state.merge({
        articleList: action.articleList
      }) 
    default:
      return state;
  }

}
export default reducer