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
class Header extends PureComponent {
  componentDidMount() {
  }
  render() {
    let { handleChangeTheme, curTheme } = this.props
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
            <Link to='/dynamic/personalDynamic'><NavItem><i className="iconfont">&#xe619;</i>动态</NavItem></Link>
            <Link to='/tools/vscode'><NavItem><i className="iconfont">&#xe629;</i>工具</NavItem></Link>
            <Link to='/article/article1'><NavItem><i className="iconfont">&#xe9f8;</i>文章笔记</NavItem></Link>
            <Link to='/tag/tagAll'><NavItem><i className="iconfont">&#xe63d;</i>标签</NavItem></Link>
            <Link to='/dynamic/about'><NavItem><i className="iconfont">&#xe60e;</i>关于</NavItem></Link>
          </NavWarpper>
        </HeaderRight>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    curTheme: state.getIn(["header", "curTheme"])
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