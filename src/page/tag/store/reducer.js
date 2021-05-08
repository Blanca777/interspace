import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagList: [],
  articleList: [],
  curList: []
})
const changeCurList = (tagId, state) => {
  if (tagId === "") {
    return state.merge({
      curList: state.get('articleList')
    })
  }
  let curList = state.get('articleList').filter(item => {
    return item.get('tag').indexOf(tagId) !== -1
  })
  return state.merge({
    curList
  })
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETTAGLIST:
      return state.merge({
        tagList: action.tagList
      })
    case constants.GETARTICLELIST:
      return state.merge({
        articleList: action.articleList,
        curList: action.articleList
      })
    case constants.CHANGECURLIST:
      return changeCurList(action.tagId, state)

    default:
      return state;
  }

}
export default reducer