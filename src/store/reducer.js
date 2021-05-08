import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as articleReducer } from '../page/article/store'
import { reducer as dynamicReducer } from '../page/dynamic/store'
import { reducer as toolsReducer } from '../page/tools/store'
import { reducer as tagReducer } from '../page/tag/store'
import { reducer as loginReducer } from '../page/login/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  article: articleReducer,
  dynamic: dynamicReducer,
  tools: toolsReducer,
  tag: tagReducer,
  login: loginReducer
});

export default reducer;