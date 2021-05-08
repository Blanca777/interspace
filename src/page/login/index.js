import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  LoginTitle,
  UsernameInput,
  PasswordInput,
  LoginBtn
} from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  constructor(props) {
    super(props)

    const UsernameInput = React.forwardRef((props, ref) => (
      <UsernameInput ref={ref} />
    ));
    const PasswordInput = React.forwardRef((props, ref) => (
      <PasswordInput ref={ref} />
    ));

    this.accoutRef = React.createRef();
    this.passwordRef = React.createRef();
  }


  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>Welcome</LoginTitle>
            <UsernameInput ref={this.accoutRef} />
            <PasswordInput ref={this.passwordRef} />
            <LoginBtn
              onClick={() => this.props.handleLogin(this.accoutRef.current.value, this.passwordRef.current.value)}
            >
              Login
            </LoginBtn>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }

  }

}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})
const mapDispatchToProps = (dispatch) => ({
  handleLogin(accout, password) {
    dispatch(actionCreators.handleLogin(accout, password))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Login)