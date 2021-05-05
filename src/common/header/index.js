import React from 'react'
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
import blanca from '../../statics/blanca.jpg'
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <HeaderLeft>
          <img src={blanca} alt="blanca" />
          <span>blanca个人中心</span>
        </HeaderLeft>
      </Link>
      <HeaderRight>

        <i className="iconfont themeicon" onClick={()=>props.handleChangeTheme(props.curTheme)}>&#xe887;</i>
        <i className="iconfont searchicon">&#xe9fc;</i>
        <HeaderSearch /> 
        <NavWarpper>
        <Link to='/'><NavItem className="active"><i className="iconfont">&#xe60f;</i>主页</NavItem></Link>
        <Link to='/dynamic/personalDynamic'><NavItem><i className="iconfont">&#xe619;</i>动态</NavItem></Link>
        <Link to='/tools/recommended'><NavItem><i className="iconfont">&#xe629;</i>工具</NavItem></Link>
        <Link to='/article/article1'><NavItem><i className="iconfont">&#xe9f8;</i>文章笔记</NavItem></Link>
        <Link to='/tag'><NavItem><i className="iconfont">&#xe63d;</i>标签</NavItem></Link>
        <Link to='/dynamic/about'><NavItem><i className="iconfont">&#xe60e;</i>关于</NavItem></Link>
        </NavWarpper>
      </HeaderRight>
    </HeaderWrapper>
  )
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