import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  DynamicWrapper,
  DynamicBox,
  DynamicTitle,
  TitleText,
  TitleMsg,
  TitleItem,
  DynamicContent,
  DynamicList,
  DynamicItem,
  DynamicTime,
  DynamicPoint,
  DynamicText,
  SidebarWrapper,
  SidebarBox,
  SidebarTitle,
  SidebarItem

} from './style'
import { actionCreators } from './store'

class Dynamic extends PureComponent {

  componentDidMount() {
    let { getDynamicMsg, getSidebarContent } = this.props
    getDynamicMsg(this.props.match.params.dynamicid)
    getSidebarContent(this.props.match.params.dynamicid)
    window.scrollTo(0, 0)
  }
  render() {
    let { dynamicMsg, sidebarTitle, sidebarList, getDynamicMsg } = this.props
    return (
      <>
        <DynamicWrapper>
          <DynamicBox>
            <DynamicTitle>
              <TitleText>{dynamicMsg.get('dynamicTitle')}</TitleText>
              <TitleMsg>
                <TitleItem><i className="iconfont">&#xe60e;</i>{dynamicMsg.get('author')}</TitleItem>
                <TitleItem><i className="iconfont">&#xe619;</i>{dynamicMsg.get('time')}</TitleItem>
                <TitleItem><i className="iconfont">&#xe650;</i>{dynamicMsg.get('viewNum')}</TitleItem>
              </TitleMsg>
            </DynamicTitle>
            <DynamicContent>
              <DynamicList>
                <DynamicItem>
                  <DynamicPoint />
                  <DynamicTime>20-20-11</DynamicTime>
                  <DynamicText>asd</DynamicText>
                </DynamicItem>
                <DynamicItem>
                  <DynamicPoint />
                  <DynamicTime>20-20-11</DynamicTime>
                  <DynamicText>asd</DynamicText>
                </DynamicItem>
              </DynamicList>

            </DynamicContent>
          </DynamicBox>

        </DynamicWrapper>
        <SidebarWrapper>
          <SidebarBox>
            <SidebarTitle>{sidebarTitle}</SidebarTitle>
            {
              sidebarList.map(item => {
                return (
                  <Link
                    to={`/dynamic/${item.get('dynamicId')}`}
                    onClick={() => {
                      getDynamicMsg(item.get('dynamicId'))
                    }}
                    key={item.get('dynamicId')}
                  >
                    <SidebarItem>
                      {item.get('dynamicTitle')}
                    </SidebarItem>
                  </Link>
                )
              })
            }

          </SidebarBox>
        </SidebarWrapper>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dynamicMsg: state.getIn(['dynamic', 'dynamicMsg']),
    sidebarTitle: state.getIn(["dynamic", "sidebarTitle"]),
    sidebarList: state.getIn(["dynamic", "sidebarList"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDynamicMsg(dynamicId) {
      dispatch(actionCreators.getDynamicMsg(dynamicId))
    },
    getSidebarContent(dynamicId) {
      dispatch(actionCreators.getSidebarContent(dynamicId))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dynamic)