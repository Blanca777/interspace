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
  SidebarBox,
  SidebarTitle,
  SidebarItem,
  Userbox,
  UserInfo,
  Username,
  Usernum,
  Numitem,
  Hastitle,
  Categorybox,
  Categoryitem,
  Tagsbox,
  Tagsitem,
  Flinkbox,
  Flinkitem,

} from './style'
import { actionCreators } from './store'

class Dynamic extends PureComponent {

  componentDidMount() {
    let { getDynamicMsg, getSidebarContent, getUserInfo, match, userInfo } = this.props
    getDynamicMsg(match.params.dynamicId)
    getSidebarContent(match.params.dynamicId)
    getUserInfo(userInfo,match.params.userId);
    window.scrollTo(0, 0)
  }
  render() {
    let { dynamicMsg, sidebarList, getDynamicMsg, userInfo } = this.props
    return (
      <>
        <DynamicWrapper>
          <SidebarBox>
            <SidebarTitle>太空飞船</SidebarTitle>
            {
              sidebarList.map(item => {
                return (
                  <Link
                    to={`/dynamic/${userInfo.get('userId')}/${item.get('dynamicId')}`}
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
                {
                  dynamicMsg.get('dynamicList') && dynamicMsg.get('dynamicList').map((item) => {
                    return (
                      <DynamicItem key={item.get("dynamicListId") || item.get("articleListId")}>
                        <DynamicPoint />
                        <DynamicTime>{item.get("dynamicTime")}</DynamicTime>
                        {
                          item.get("articleListId") && <Link to={item.get("articleListId")}><DynamicText>{item.get("dynamicText")}</DynamicText></Link>
                        }
                        {
                          item.get("dynamicListId") && <DynamicText>{item.get("dynamicText")}</DynamicText>
                        }
                      </DynamicItem>
                    )
                  })
                }

              </DynamicList>

            </DynamicContent>
          </DynamicBox>

          <Userbox>
            <UserInfo>
              <Link to={`/dynamic/${userInfo.get('userId')}/articleDynamic`}>
                <img src={userInfo.get('userImg')} alt="" />
                <Username>{userInfo.get('userName')}</Username>
              </Link>

              <Usernum>
                <Numitem className="borderr">
                  <h4>{userInfo.get('articleNum')}</h4>
                  <h6>文章</h6>
                </Numitem>
                <Numitem>
                  <h4>{userInfo.get('tagNum')}</h4>
                  <h6>标签</h6>
                </Numitem>
              </Usernum>
            </UserInfo>
            <Hastitle><i className="iconfont">&#xe624;</i> 分类</Hastitle>
            <Categorybox>
              {
                userInfo.get('category') && userInfo.get('category').map(item => {
                  return <Categoryitem key={item.get("categoryName")}>{item.get("categoryName")}<span>{item.get("articleNum")}</span></Categoryitem>
                })
              }

            </Categorybox>
            <Hastitle><i className="iconfont">&#xe9f7;</i> 标签</Hastitle>
            <Tagsbox>
              {
                userInfo.get('tag') && userInfo.get('tag').map(item => {
                  return <Tagsitem key={item}>{item}</Tagsitem>
                })
              }
            </Tagsbox>
            <Hastitle><i className="iconfont">&#xe625;</i> 友情链接</Hastitle>
            <Flinkbox>
              {
                userInfo.get('fLink') && userInfo.get('fLink').map(item => {
                  return <Flinkitem key={item}>{item}</Flinkitem>
                })
              }
            </Flinkbox>
          </Userbox>

        </DynamicWrapper>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dynamicMsg: state.getIn(['dynamic', 'dynamicMsg']),
    sidebarList: state.getIn(["dynamic", "sidebarList"]),
    userInfo: state.getIn(['dynamic', 'userInfo'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDynamicMsg(dynamicId) {
      dispatch(actionCreators.getDynamicMsg(dynamicId))
    },
    getSidebarContent(dynamicId) {
      dispatch(actionCreators.getSidebarContent(dynamicId))
    },
    getUserInfo(userInfo, userId) {
      if (userInfo.size === 0) {
        dispatch(actionCreators.getUserInfo(userId))
      }
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dynamic)