import * as constants from './constants'
export const getChangeThemeAction = (curTheme) => ({
  type: constants.CHANGETHEME,
  curTheme
})
