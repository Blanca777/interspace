import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../page/home/store'
import { reducer as detailReducer } from '../page/detail/store'
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  theme: {
    dark: {
      color1: "#fff",
      color2: "#c9c9c9",
      color3: "#8B8B8B",
      titleColor1: "#67cc86",
      titleColor2: "#3eaf7c",
      tabBgColor1: "#ff4400",
      background: "#181818"
    },
    light: {
      color1: "#121212",
      color2: "#242424",
      color3: "#7F7F7F",
      titleColor1: "#67cc86",
      titleColor2: "#3eaf7c",
      tabBgColor1: "#ff4400",
      background: "#ffffff"
    }
  },
  curTheme:{
    color1: "#fff",
    color2: "#c9c9c9",
    color3: "#8B8B8B",
    titleColor1: "#67cc86",
    titleColor2: "#3eaf7c",
    tabBgColor1: "#ff4400",
    background: "#181818"
  }
})
const globalReducer = (state = defaultState, action) => {

  switch (action.type) {
    case constants.CHANETHEMEACTION:
      return state
    default:
      return state
  };

}

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  global: globalReducer
});

export default reducer;