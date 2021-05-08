import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ToolsWrapper,
  ToolsBox,
  ToolsTitle,
  TitleText,
  TitleMsg,
  TitleItem,
  ToolsContent,
  ToolsAdvantages,
  ToolsApplication,
  SidebarBox,
  SidebarTitle,
  SidebarItem

} from './style'
import { actionCreators } from './store'

class Tools extends PureComponent {

  componentDidMount() {
    let { getToolsMsg, getSidebarContent } = this.props
    getToolsMsg(this.props.match.params.toolsId)
    getSidebarContent(this.props.match.params.toolsId)
    window.scrollTo(0, 0)
  }
  render() {
    let { toolsMsg, sidebarTitle, sidebarList, getToolsMsg } = this.props
    return (
      <ToolsWrapper>
        <SidebarBox>
          <SidebarTitle>{sidebarTitle}</SidebarTitle>
          {
            sidebarList.map(item => {
              return (
                <Link
                  to={`/tools/${item.get('toolsId')}`}
                  onClick={() => {
                    getToolsMsg(item.get('toolsId'))
                  }}
                  key={item.get('toolsId')}
                >
                  <SidebarItem>
                    {item.get('toolsTitle')}
                  </SidebarItem>
                </Link>
              )
            })
          }

        </SidebarBox>
        
        <ToolsBox>
          <ToolsTitle>
            <TitleText>{toolsMsg.get('toolsTitle')}</TitleText>
            <TitleMsg>
              <TitleItem><i className="iconfont">&#xe60e;</i>{toolsMsg.get('author')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe619;</i>{toolsMsg.get('time')}</TitleItem>
              <TitleItem><i className="iconfont">&#xe650;</i>{toolsMsg.get('viewNum')}</TitleItem>
            </TitleMsg>
          </ToolsTitle>
          <ToolsContent>
            <ToolsAdvantages>
              <h1>优点</h1>
              <div>{toolsMsg.get('advantages')}</div>
            </ToolsAdvantages>
            <ToolsApplication>
              <h1>应用</h1>
              <div>{toolsMsg.get('application')}</div>
            </ToolsApplication>
          </ToolsContent>
        </ToolsBox>

        
      </ToolsWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toolsMsg: state.getIn(['tools', 'toolsMsg']),
    sidebarTitle: state.getIn(["tools", "sidebarTitle"]),
    sidebarList: state.getIn(["tools", "sidebarList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getToolsMsg(toolsId) {
      dispatch(actionCreators.getToolsMsg(toolsId))
    },
    getSidebarContent(toolsId) {
      dispatch(actionCreators.getSidebarContent(toolsId))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tools)