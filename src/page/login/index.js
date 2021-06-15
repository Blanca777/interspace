import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import {
  LoginWrapper, ChangePanel,
  LoginBox, LoginTitle, UsernameInput, PasswordInput, LoginBtn,
  SignupBox, SignupBoxTitle, SUsernameInput, SPasswordInput, SAPasswordInput, SignupBtn
} from './style'
import Loading from '../../common/loading'
import { actionCreators } from './store'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    if (localStorage.getItem('loginAuthorId') !== null) {
      this.props.longLogin(localStorage.getItem('loginAuthorId'))
    }
    const UsernameInput = React.forwardRef((props, ref) => (
      <UsernameInput ref={ref} />
    ));
    const PasswordInput = React.forwardRef((props, ref) => (
      <PasswordInput ref={ref} />
    ));
    const SUsernameInput = React.forwardRef((props, ref) => (
      <SUsernameInput ref={ref} />
    ));
    const SPasswordInput = React.forwardRef((props, ref) => (
      <SPasswordInput ref={ref} />
    ));
    const SAPasswordInput = React.forwardRef((props, ref) => (
      <SAPasswordInput ref={ref} />
    ));
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.susernameRef = React.createRef();
    this.spasswordRef = React.createRef();
    this.sapasswordRef = React.createRef();
  }

  render() {
    const { loginStatus, showLoginBox, showLoadingBox, handleLogin, handleSignup, changeBox } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          {showLoadingBox ? <Loading /> : <></>}
          <ChangePanel onClick={changeBox}>{showLoginBox ? "To注册" : "To登录"}</ChangePanel>
          {
            showLoginBox ? <LoginBox>
              <LoginTitle>Welcome</LoginTitle>
              <UsernameInput ref={this.usernameRef} />
              <PasswordInput ref={this.passwordRef} />
              <LoginBtn
                onClick={() => handleLogin(this.usernameRef.current.value, this.passwordRef.current.value)}
              >
                Login
            </LoginBtn>
            </LoginBox> : <SignupBox>
              <SignupBoxTitle>Sign Up</SignupBoxTitle>
              <SUsernameInput ref={this.susernameRef} />
              <SPasswordInput ref={this.spasswordRef} />
              <SAPasswordInput ref={this.sapasswordRef} />
              <SignupBtn
                onClick={
                  () => handleSignup(this.susernameRef, this.spasswordRef, this.sapasswordRef)
                }
              >
                Sign Up
              </SignupBtn>
            </SignupBox>
          }


        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }

  }

}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus']),
  showLoginBox: state.getIn(['login', 'showLoginBox']),
  showLoadingBox: state.getIn(['login', 'showLoadingBox'])
})
const mapDispatchToProps = (dispatch) => ({
  handleLogin(accout, password) {
    if (accout.length >= 4 && accout.length <= 12 && password.length >= 6 && password.length <= 16) {
      dispatch(actionCreators.handleLogin(accout, password))
    } else {
      alert('请输入正确用户名（4-12）密码（6-16）长度')
    }
  },
  longLogin(authorId) {
    dispatch(actionCreators.longLogin(authorId))
  },
  changeBox() {
    dispatch(actionCreators.changeBoxAction())
  },
  handleSignup(susernameRef, spasswordRef, sapasswordRef) {
    let username = susernameRef.current.value
    let password = spasswordRef.current.value
    let apassword = sapasswordRef.current.value
    if (username.length >= 4 && username.length <= 12 && password.length >= 6 && password.length <= 16) {
      spasswordRef.current.value = '';
      sapasswordRef.current.value = '';
      if (password === apassword) {
        dispatch(actionCreators.handleSignup(username, password))
      } else {
        alert('请确认密码一致')
      }
    } else {
      alert('请输入正确用户名（4-12）密码（6-16）长度')
    }
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))