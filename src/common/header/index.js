import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
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
    <HeaderWrapper curTheme={props.curTheme}>
      <HeaderLeft>
        <img src={blanca} alt="blanca"/>
        <span>blanca个人中心</span>
      </HeaderLeft>
      <HeaderRight>
        <i className="iconfont themeicon" onClick={props.handleChangeTheme}>&#xe887;</i>
        <i className="iconfont searchicon">&#xe9fc;</i>
        <HeaderSearch />
        <NavWarpper>
          <NavItem className="active"><i className="iconfont">&#xe60f;</i>主页</NavItem>
          <NavItem><i className="iconfont">&#xe619;</i>动态</NavItem>
          <NavItem><i className="iconfont">&#xe629;</i>推荐</NavItem>
          <NavItem><i className="iconfont">&#xe9f8;</i>分类</NavItem>
          <NavItem><i className="iconfont">&#xe63d;</i>标签</NavItem>
          <NavItem><i className="iconfont">&#xe9f6;</i>系列教程</NavItem>
          <NavItem><i className="iconfont">&#xe60e;</i>关于</NavItem>
        </NavWarpper>
      </HeaderRight>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    curTheme: state.getIn(["global","curTheme"]).toJS()
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeTheme(){
      console.log(22)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)