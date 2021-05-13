import * as constants from './constants'
import axios from 'axios'


const loginAction = (loginMsg) => ({
  type: constants.LOGIN,
  loginMsg
})
export const handleLogout = () => ({
  type: constants.LOGOUT
})
export const handleLogin = (accout, password) => {
  const data = {
    accout,
    password
  }
  return (dispatch) => {
    axios.post('https://faf202d3-04aa-4a2b-af03-3ba3bf105ee7.mock.pstmn.io', data).then(res=>{
      console.log(res)
      dispatch(loginAction(res.data))
    }).catch(err=>{
      console.log(err)
    })
  }
}

