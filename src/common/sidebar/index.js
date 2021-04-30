import React from 'react'
import { connect } from 'react-redux'
import {
  SidebarWrapper,
  SidebarBox,
  SidebarTitle,
  SidebarItem
  
} from './style'
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarBox>
        <SidebarTitle>about</SidebarTitle>
        <SidebarItem>about1</SidebarItem>
        <SidebarItem>about2</SidebarItem>
      </SidebarBox>
    </SidebarWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)