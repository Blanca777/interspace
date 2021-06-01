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
    let { handleChangeTheme, curTheme, userInfo, loginStatus } = this.props
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
              loginStatus ? (
              <Link to={`/dynamic/${userInfo.get('authorId')}/personalDynamic`}>
                <NavItem><img src={spaceman} alt="spaceman" /><span>{userInfo.get('authorName')}</span></NavItem>
              </Link>) : (
              <Link to='/login'>
                <NavItem><img src={spaceman} alt="spaceman" /><span>登机</span></NavItem>
              </Link>)
            }
            <Link to='/tag/tagAll'>
              <NavItem><img src={project} alt="project" /><span>开荒笔记</span></NavItem>
            </Link>
            <Link to='/channel'>
              <NavItem><img src={tools} alt="开荒频道" /><span>开荒频道</span></NavItem>
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
    loginStatus: state.getIn(["login", "loginStatus"]),
    userInfo: state.getIn(["login", "userInfo"])
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