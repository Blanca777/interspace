import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as articleReducer } from '../page/article/store'
import { reducer as dynamicReducer } from '../page/dynamic/store'
import { reducer as channelReducer } from '../page/channel/store'
import { reducer as tagReducer } from '../page/tag/store'
import { reducer as loginReducer } from '../page/login/store'
import { reducer as loadingReducer } from '../common/loading/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  article: articleReducer,
  dynamic: dynamicReducer,
  channel: channelReducer,
  tag: tagReducer,
  login: loginReducer,
  loading: loadingReducer
});

export default reducer;