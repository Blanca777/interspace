import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as articleReducer } from '../page/article/store'
import { reducer as dynamicReducer } from '../page/dynamic/store'



const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  article: articleReducer,
  dynamic: dynamicReducer
});

export default reducer;