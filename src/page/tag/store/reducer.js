import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  tagList: [],
  articleList: [],
  curList: []
})
const changeCurList = (state, action) => {
  if (action.tag === "全部") {
    return state.merge({
      curList: state.get('articleList')
    })
  }
  let curList = state.get('articleList').filter(item => {
    return item.get('tag').indexOf(action.tag) !== -1
  })
  return state.merge({
    curList
  })
}
const init = (state, action) => {
  let tagList = new Set(['全部'])
  action.articleList.forEach(item=>{
    item.tag.forEach(tag=>{
      tagList.add(tag)
    })
  })
  return state.merge({
    tagList: fromJS(Array.from(tagList)),
    articleList: fromJS(action.articleList),
    curList: fromJS(action.articleList)
  })
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETTAGLIST:
      return state.merge({
        tagList: action.tagList
      })
    case constants.GETARTICLELIST:
      return init(state, action)
    case constants.CHANGECURLIST:
      return changeCurList(state, action)

    default:
      return state;
  }

}
export default reducer