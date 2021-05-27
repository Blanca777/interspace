import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  sidebarList: [
    {
      "dynamicId": "personalDynamic",
      "dynamicTitle": "个人动态"
    },
    {
      "dynamicId": "articleDynamic",
      "dynamicTitle": "文章动态"
    }

  ],
  dynamicList: [],
  authorInfo: {},
  login: false,
  fileName: "",
  showAddArticle: false,
  showAddPersonal: false,

})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETAUTHORINFO:
      return getAuthorInfo(state, action)
    case constants.CHANGEDYNAMICLIST:
      return changeDynamicList(state, action)
    case constants.SHOWADDDYNAMIC:
      return changeAddDynamicBox(state, action)
    case constants.ADDPERSONALDYNAMIC:
      return addPersonalDynamic(state, action)
    case constants.ADDARTICLEDYNAMIC:
      return addArticleDynamic(state, action)
    case constants.CHANGEFILENAME:
      return state.merge({
        fileName: action.fileName
      })
    default:
      return state;
  }

}
const getAuthorInfo = (state, action) => {
  return state.merge({
    dynamicList: action.authorInfo.get('articleDynamic'),
    authorInfo: action.authorInfo
  })
}
const changeDynamicList = (state, action) => {
  return state.merge({
    dynamicList: state.getIn(["authorInfo", action.dynamicId])
  })
}
const changeAddDynamicBox = (state, action) => {
  if (action.dynamicId === 'personalDynamic') {
    return state.merge({
      showAddPersonal: !state.get('showAddPersonal'),
      showAddArticle: false
    });
  } else if (action.dynamicId === 'articleDynamic') {
    return state.merge({
      showAddArticle: !state.get('showAddArticle'),
      showAddPersonal: false
    });
  }
}
const addPersonalDynamic = (state, action) => {
  return state.merge({
    authorInfo: action.authorInfo,
    dynamicList: action.authorInfo.get('personalDynamic'),
    showAddPersonal: false
  })
}
const addArticleDynamic = (state, action) => {
  return state.merge({
    authorInfo: action.authorInfo,
    dynamicList: action.authorInfo.get('articleDynamic'),
    showAddArticle: false
  })
}
export default reducer