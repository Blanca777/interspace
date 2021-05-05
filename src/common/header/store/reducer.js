import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  reptheme: {
    color1: "#121212",
    color2: "#242424",
    color3: "#7F7F7F",
    titleColor1: "#67cc86",
    titleColor2: "#3eaf7c",
    tabBgColor1: "#ff4400",
    background: "#ffffff"
  },
  curTheme: {
    color1: "#fff",
    color2: "#c9c9c9",
    color3: "#8B8B8B",
    titleColor1: "#67cc86",
    titleColor2: "#3eaf7c",
    tabBgColor1: "#ff4400",
    background: "#181818"
  }

})
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGETHEME:
      console.log(action.curTheme)

      return state.merge({
        curTheme: state.get('reptheme'),
        reptheme: action.curTheme
      })

    default:
      return state
  }
}
export default reducer