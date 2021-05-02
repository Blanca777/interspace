import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  page: 1,
  totalPage: 0,
  curList: []
})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETARTICLELIST:
      return state.merge({
        articleList: action.articleList,
        totalPage: action.totalPage,
        curList: action.curList
      });
    case constants.CHANGEPAGE:
      let curList = fromJS(state.get('articleList').toJS().slice((action.page - 1) * 7, action.page * 7))
      return state.merge({
        page: action.page,
        curList
      });
    case constants.PREVPAGE:
      if (state.get('page') > 1) {
        let page = state.get('page') - 1
        let curList = fromJS(state.get('articleList').toJS().slice((page - 1) * 7, page * 7))
        return state.merge({
          page, curList
        });
      } else {
        return state
      }
    case constants.NEXTPAGE:
      if (state.get('page') < state.get('totalPage')) {
        let page = state.get('page') + 1
        let curList = fromJS(state.get('articleList').toJS().slice((page - 1) * 7, page * 7))
        
        return state.merge({
          page, curList
        });
      } else {
        return state
      }
    default:
      return state;
  }

}
export default reducer