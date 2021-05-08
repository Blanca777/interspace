import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
  NavWarpper,
  NavItem
} from './style'
import interspace from '../../statics/interspace.png'
import spaceman from '../../statics/iconpng/spaceman.png'
import project from '../../statics/iconpng/project.png'
import tools from '../../statics/iconpng/tools.png'
import capsule from '../../statics/iconpng/capsule.png'
class Header extends PureComponent {
  componentDidMount() {
  }
  render() {
    let { handleChangeTheme, curTheme, userInfo, login } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <HeaderLeft>
            <img src={interspace} alt="interspace" />
            <span>空隙</span>
          </HeaderLeft>
        </Link>
        <HeaderRight>

          <i className="iconfont themeicon" onClick={() => handleChangeTheme(curTheme)}>&#xe887;</i>
          <i className="iconfont searchicon">&#xe9fc;</i>
          <HeaderSearch />
          <NavWarpper>
            {
              login ? (
              <Link to='/dynamic/personalDynamic'>
                <NavItem><img src={spaceman} alt="spaceman" /><span>{userInfo.get('name')}</span></NavItem>
              </Link>) : (
              <Link to='/login'>
                <NavItem><img src={spaceman} alt="spaceman" /><span>登机</span></NavItem>
              </Link>)
            }
            <Link to='/tag/tagAll'>
              <NavItem><img src={project} alt="project" /><span>开荒项目</span></NavItem>
            </Link>
            <Link to='/tools/vscode'>
              <NavItem><img src={tools} alt="tools" /><span>开荒设备</span></NavItem>
            </Link>
            <Link to='/about'>
              <NavItem><img src={capsule} alt="capsule" /><span>太空舱</span></NavItem>
            </Link>
          </NavWarpper>
        </HeaderRight>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    curTheme: state.getIn(["header", "curTheme"]),
    login: state.getIn(["dynamic", "login"]),
    userInfo: state.getIn(["dynamic", "userInfo"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeTheme(curTheme) {
      dispatch(actionCreators.getChangeThemeAction(curTheme))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)