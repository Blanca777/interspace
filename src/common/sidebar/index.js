import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  SidebarWrapper,
  SidebarBox,
  SidebarTitle,
  SidebarItem

} from './style'
const Sidebar = (props) => {
  let { sidebarTitle, sidebarList, getArticleContent, getArticleMsg } = props
  return (
    <SidebarWrapper>
      <SidebarBox>
        <SidebarTitle>{sidebarTitle}</SidebarTitle>
        {
          sidebarList.map(item => {
            return (
              <Link 
                to={`/article/${item.get('articleId')}`} 
                onClick={() => {
                    getArticleContent(item.get('articleId'))
                    getArticleMsg(item.get('articleId'))
                  }}
                key={item.get('articleId')} 
              >
                <SidebarItem>
                  {item.get('articleTitle')}
                </SidebarItem>
              </Link>
            )
          })
        }

      </SidebarBox>
    </SidebarWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    sidebarTitle: state.getIn(["article", "sidebarTitle"]),
    sidebarList: state.getIn(["article", "sidebarList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)